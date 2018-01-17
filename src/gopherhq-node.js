//const request = require("request");
//const requestPromise = require("request-promise");
// require('request-debug')(request);
let OAuth2;
if (!global.document) {
  OAuth2 = require("simple-oauth2");
}

import Debug from "debug";
const debug = Debug("gopherhq-node");

import querystring from "querystring";

import timestamp from "unix-timestamp";
timestamp.round = true;

import crypto from "crypto";
import urljoin from "url-join";
import axios from "axios";
// import GopherTasks from "./tasks"

/**
 * Requests abstracted to this method..not sure how to make this ES6-cool just yet ; )
 */
const _makeRequest = (requestOptions, cb) => {
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

const _checkParam = (param, paramName) => {
  if (!param || typeof param !== "string") {
    throw new Error(`'${paramName}' is required to connect to Gopher`);
  }
}

/**
 * Traditional constructor (es5)
 */
class Gopher {
  constructor(config) {
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

  /*
   *  Validates webhook signature. Set verifyAge to false when testing / mocking HTTP requests
   *  (Node only) - The core API posts webhooks to extensions as one of the main functions. This is obviously server-side only.
   */
  validateWebhook(webhookSignature, webhookTimestamp, rawBody, verifyAge = true) {
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
  }

  /**
   * These are all just REST calls from here down to....
   */


  /*
   * Resolve Natural Time Format (ex: {naturaltime}@ext.gopher.email)
   */
  naturalTime(params, cb) {
    const requestOptions = {
      method: "GET",
      url: urljoin(
        this.config.apiHost,
        "/api/v1/natural_time",
        `?${querystring.stringify(params)}`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
   * Invite users to this extension. If an Auth token is included, the invitation email
   * includes the name of the inviting person.
   */
  invite(emails, cb) {
    const requestBody = {
      // extension: this.config.extensionName,
      client_id: this.config.clientId,
      email_address: emails
    };
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/invites/"),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: requestBody
    };

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: `Bearer ${this._accessToken}`
      });
    }

    return _makeRequest(requestOptions, cb);
  }

  /*
   * Get List of Gopher Tasks
   */
  getTasks(params, cb) {
    const requestOptions = {
      url: urljoin(
        this.config.apiHost,
        "/api/v1/tasks/?",
        querystring.stringify(params)
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    debug("Request options for getting followups:", requestOptions);
    return _makeRequest(requestOptions, cb);
  }

  /*
   * Fetch A Single Gopher Task
   */
  getTask(taskId, cb) {
    if (typeof taskId != "number")
      throw new Error(
        "taskId must be an integer. This was given instead:",
        taskId
      );
    const requestOptions = {
      url: `${this.config.apiHost}/api/v1/tasks/${taskId}/`,
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
   * Create A Gopher Task
   */
  createTask(params, cb) {
    let urlParams = {};
    if (params.verbose) {
      urlParams.verbose = 1;
    }
    let serializedParams = querystring.stringify(urlParams);
    let qs = serializedParams ? `?${serializedParams}` : "";
    const requestOptions = {
      method: "POST",
      url: `${this.config.apiHost}/api/v1/tasks/${qs}`,
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        // "Content-Type": "application/json; charset=UTF-8"
        "Content-Type": "application/json"
      },
      data: params,
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
    * Update A Gopher Task
    * Used to save data against the task, update content, followup time and more
    */
  updateTask(taskId, params, cb) {
    const requestOptions = {
      method: "PUT",
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: params,
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
    * Delete / Archive A Gopher Task
    */
  archiveTask(taskId, cb) {
    const requestOptions = {
      method: "DELETE",
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: { task: { permanent } },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }

  /**
   * Trigger a Gopher Task
   */
  triggerTask(params, cb) {
    if (!params.trigger_url) {
      return new Error("trigger_url is required");
    }

    const requestOptions = {
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
        Authorization: `Bearer ${this._accessToken}`
      });
    }
    return _makeRequest(requestOptions);
  }

  /*
   * Save Gopher Extension Data which is then sent with every webhook related to that extension.
   */

  saveExtData(data, cb) {
    if (typeof data != "object") throw new Error("data must be an object");

    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
   * Get Gopher Extension-Wide Data
   */
  getExtData(cb) {
    const requestOptions = {
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }

  /**
   * These are auth helpers..also rest calls, but specialized for the OAuth2 dance
   */

  /*
   *  Auth: Build initial AOuth2 login link (Node Only)
   */
  getAuthorizationUri() {
    _checkParam(this.config.clientSecret, "clientSecret");
    _checkParam(this.config.redirectUri, "redirectUri");
    _checkParam(this.config.scope, "scope");

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
  }

  /*
   *  Auth: After user has Authorized extension with Gopher, fetch access token (Node Only)
   */
  getAccessToken(authCode, cb) {
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
  }

  /*
   *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
   *  When a new instance is instantiated, we can inject the access token (ie, stored in a cookie..I)
   */
  setAccessToken(accessToken) {
    this._accessToken = accessToken;
  }
}

// if we module.exports = Gopher, it won't be in the ES6 way, but it will work with both: require('...') and import foo from "..." :)
//export default Gopher; /// cool, so, when you do export default, either you do in the other file: require(...).default or import foo from "..."
module.exports = Gopher; //messy, but I'd rather have it work both i guess this is enough, but then remove default from the other file. Can we leave both statements and have them both work? I think in the babelified file only one will remain or it will be duplicated, i recommend only one of them...
// So, this one should be enough I guess. but do check it.
// I think this works with both:
// Gopher = require("...")
//import Gopher from "..."
// you don't need default in this case. cool
// perfect..
// next question:
// I have a number of additions to this class, I want to break it down...what is the best way?
// For example, a file for "tasks", another for "auth", another for "extensions".
// Different classes?
// I think we can extend it
