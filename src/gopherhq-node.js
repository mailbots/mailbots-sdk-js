//const request = require("request");
//const requestPromise = require("request-promise");
// require('request-debug')(request);
if (process.env.CONTEXT !== "browser") {
  // const OAuth2 = require("simple-oauth2");
}
const debug = require("debug")("gopherhq-node");
import querystring from "querystring";
const timestamp = require("unix-timestamp");
timestamp.round = true;
const crypto = require("crypto");
const urljoin = require("url-join");
const axios = require("axios");

function Gopher(config) {
  if (!(this instanceof Gopher)) return new Gopher(config);
  _checkParam(config.clientId, "clientId");

  this.config = config;
  this.configDefaults = {
    clientId: "",
    clientSecret: "",
    redirectUri: "",
    scope: "",
    state: "",
    apiHost: "https://www.gopher.email",
    tokenHost: "https://www.gopher.email",
    tokenPath: "https://www.gopher.email/api/v1/oauth2/access_token",
    authorizePath: "https://www.gopher.email/settings/oauth2_authorize"
  };

  this.config = Object.assign(this.configDefaults, this.config);
  this.config.state = Math.random()
    .toString(36)
    .substring(7);
  debug("settings: ", this.config);

  // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
  this._accessToken = "";
}

function _makeRequest(requestOptions, cb) {
  debug("Request", requestOptions);
  return axios(requestOptions)
    .then(res => {
      debug("Response Ok:", res);
      if (cb) cb(null, res.data);
      return Promise.resolve(res.data);
    })
    .catch(err => {
      debug("Response Error:", err);
      if (cb) cb(err);
      return Promise.reject(err);
    });
}

function _checkParam(param, paramName) {
  if (!param || typeof param !== "string") {
    throw new Error("'" + paramName + "' is required to connect to Gopher");
  }
}

/*
 *  Validates webhook signature. Set verifyAge to false when testing / mocking HTTP requests
 *  (Node only)
*/
Gopher.prototype.validateWebhook = function(
  webhookSignature,
  webhookTimestamp,
  rawBody,
  verifyAge = true
) {
  let generatedSig = crypto
    .createHmac("sha256", webhookTimestamp + this.config.clientSecret)
    .update(rawBody)
    .digest("hex");
  debug("validateWebhook: rawBody", rawBody);
  debug("validateWebhook: clientSecret", this.config.clientSecret);
  debug("validateWebhook: generatedSig", generatedSig);
  debug("validateWebhook: webhookSig", webhookSignature);
  if (generatedSig !== webhookSignature) return false;

  let hookAge = timestamp.now() - webhookTimestamp;
  if (hookAge > 900 && verifyAge) {
    debug("validateWebhook: failed age check: ", hookAge);

    return false;
  }
  debug("validateWebhook: webhook validated!");
  return true;
};

/*
  * Resolve Natural Time Format (ex: {naturaltime}@ext.gopher.email)
  */
Gopher.prototype.naturalTime = function(params, cb) {
  var requestOptions = {
    method: "GET",
    url: urljoin(
      this.config.apiHost,
      "/api/v1/natural_time",
      "?" + querystring.stringify(params)
    ),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json; charset=UTF-8"
    }
  };
  return _makeRequest(requestOptions, cb);
};

/*
  * Invite users to this extension. If an Auth token is included, the invitation email
  * includes the name of the inviting person.
  */
Gopher.prototype.invite = function(emails, cb) {
  var requestBody = {
    // extension: this.config.extensionName,
    client_id: this.config.clientId,
    email_address: emails
  };
  var requestOptions = {
    method: "POST",
    url: urljoin(this.config.apiHost, "/api/v1/invites/"),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    data: requestBody
  };

  if (this._accessToken) {
    Object.assign(requestOptions.headers, {
      Authorization: "Bearer " + this._accessToken
    });
  }

  return _makeRequest(requestOptions, cb);
};

/*
 * Get List of Gopher Tasks
 */
Gopher.prototype.getTasks = function(params, cb) {
  var requestOptions = {
    url: urljoin(
      this.config.apiHost,
      "/api/v1/tasks/?",
      querystring.stringify(params)
    ),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    json: true
  };
  debug("Request options for getting followups:", requestOptions);
  return _makeRequest(requestOptions, cb);
};

/*
 * Fetch A Single Gopher Task
 */
Gopher.prototype.getTask = function(taskId, cb) {
  if (typeof taskId != "number")
    throw new Error(
      "taskId must be an integer. This was given instead:",
      taskId
    );
  var requestOptions = {
    url: this.config.apiHost + "/api/v1/tasks/" + taskId + "/",
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    json: true
  };
  return _makeRequest(requestOptions, cb);
};

/*
 * Create A Gopher Task
 */
Gopher.prototype.createTask = function(params, cb) {
  let urlParams = {};
  if (params.verbose) {
    urlParams.verbose = 1;
  }
  let serializedParams = querystring.stringify(urlParams);
  let qs = serializedParams ? "?" + serializedParams : "";
  var requestOptions = {
    method: "POST",
    url: this.config.apiHost + "/api/v1/tasks/" + qs,
    headers: {
      Authorization: "Bearer " + this._accessToken,
      // "Content-Type": "application/json; charset=UTF-8"
      "Content-Type": "application/json"
    },
    data: params,
    json: true
  };
  return _makeRequest(requestOptions, cb);
};

/*
  * Update A Gopher Task
  * Used to save data against the task, update content, followup time and more
  */
Gopher.prototype.updateTask = function(taskId, params, cb) {
  var requestOptions = {
    method: "PUT",
    url: urljoin(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json; charset=UTF-8"
    },
    data: params,
    json: true
  };
  return _makeRequest(requestOptions, cb);
};

/*
  * Delete / Archive A Gopher Task
  */
Gopher.prototype.archiveTask = function(taskId, cb) {
  var requestOptions = {
    method: "DELETE",
    url: urljoin(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json; charset=UTF-8"
    },
    data: { task: { permanent } },
    json: true
  };
  return _makeRequest(requestOptions, cb);
};

/**
 * Trigger a Gopher Task
 */
Gopher.prototype.triggerTask = function(params, cb) {
  if (!params.trigger_url) {
    return new Error("trigger_url is required");
  }

  var requestOptions = {
    method: "POST",
    url: params.trigger_url,
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    json: true
  };

  if (params.payload) {
    Object.assign(requestOptions, { form: params.payload });
  }

  if (this._accessToken) {
    Object.assign(requestOptions.headers, {
      Authorization: "Bearer " + this._accessToken
    });
  }
  return _makeRequest(requestOptions);
};

/*
  * Save Gopher Extension Data which is then sent with every webhook related to that extension.
  */

Gopher.prototype.saveExtData = function(data, cb) {
  if (typeof data != "object") throw new Error("data must be an object");

  var requestOptions = {
    method: "POST",
    url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    data: data
  };
  return _makeRequest(requestOptions, cb);
};

/*
  * Get Gopher Extension-Wide Data
  */

Gopher.prototype.getExtData = function(cb) {
  var requestOptions = {
    url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    json: true
  };
  return _makeRequest(requestOptions, cb);
};

/*
 *  Auth: Build initial AOuth2 login link (Node Only)
 */
Gopher.prototype.getAuthorizationUri = function() {
  _checkParam(config.clientSecret, "clientSecret");
  _checkParam(config.redirectUri, "redirectUri");
  _checkParam(config.scope, "scope");

  const oauth2 = OAuth2.create({
    client: {
      id: this.config.clientId,
      secret: this.config.clientSecret
    },
    auth: {
      tokenHost: this.config.tokenHost,
      tokenPath: this.config.tokenPath,
      authorizePath: this.config.authorizePath
    }
  });

  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: this.config.redirectUri,
    scope: this.config.scope,
    state: this.config.state
  });
  debug("auth uri: ", authorizationUri);
  return { state: this.config.state, uri: authorizationUri };
};

/*
 *  Auth: After user has Authorized extension with Gopher, fetch access token (Node Only)
 */
Gopher.prototype.getAccessToken = function(authCode, cb) {
  return new Promise((resolve, reject) => {
    debug("Auth code from auth uri used to retrive auth token: ", authCode);

    const oauth2 = OAuth2.create({
      client: {
        id: this.config.clientId,
        secret: this.config.clientSecret
      },
      auth: {
        tokenHost: this.config.tokenHost,
        tokenPath: this.config.tokenPath,
        authorizePath: this.config.authorizePath
      }
    });

    const options = {
      code: authCode,
      redirect_uri: this.config.redirectUri,
      client_id: this.config.clientId
    };

    oauth2.authorizationCode.getToken(options, (error, result) => {
      if (error) {
        debug("Access token error", error.message);
        if (cb) cb(new Error("Authentication failed"));
        return reject("Authentication failed");
      }

      const tokenDetails = oauth2.accessToken.create(result);
      debug("success! auth token: ", tokenDetails.token);
      this._accessToken = tokenDetails.token.access_token;
      if (cb) cb(null, tokenDetails.token.access_token);
      return resolve(tokenDetails.token.access_token);
    });
  });
};

/*
 *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
 */
Gopher.prototype.setAccessToken = function(accessToken) {
  this._accessToken = accessToken;
};

global.Gopher = Gopher;
module.exports = Gopher;
