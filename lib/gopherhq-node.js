"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _unixTimestamp = require("unix-timestamp");

var _unixTimestamp2 = _interopRequireDefault(_unixTimestamp);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const request = require("request");
//const requestPromise = require("request-promise");
// require('request-debug')(request);
var OAuth2 = void 0;
if (!global.document) {
  OAuth2 = require("simple-oauth2");
}

var debug = (0, _debug2.default)("gopherhq-node");

_unixTimestamp2.default.round = true;

/**
 * Requests abstracted to this method..not sure how to make this ES6-cool just yet ; )
 */
var _makeRequest = function _makeRequest(requestOptions, cb) {
  debug("Request", requestOptions);
  return (0, _axios2.default)(requestOptions).then(function (res) {
    debug("Response Ok:", res);
    if (cb) cb(null, res.data);
    return Promise.resolve(res.data);
  }).catch(function (err) {
    debug("Response Error:", err);
    if (cb) cb(err);
    return Promise.reject(err);
  });
};

var _checkParam = function _checkParam(param, paramName) {
  if (!param || typeof param !== "string") {
    throw new Error("'" + paramName + "' is required to connect to Gopher");
  }
};

/**
 * Traditional constructor (es5)
 */

var Gopher = function () {
  function Gopher(config) {
    _classCallCheck(this, Gopher);

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
    this.config.state = Math.random().toString(36).substring(7);
    debug("settings: ", this.config);

    // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
    this._accessToken = "";
  }

  /*
   *  Validates webhook signature. Set verifyAge to false when testing / mocking HTTP requests
   *  (Node only) - The core API posts webhooks to extensions as one of the main functions. This is obviously server-side only.
  */


  _createClass(Gopher, [{
    key: "validateWebhook",
    value: function validateWebhook(webhookSignature, webhookTimestamp, rawBody) {
      var verifyAge = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var generatedSig = _crypto2.default.createHmac("sha256", webhookTimestamp + this.config.clientSecret).update(rawBody).digest("hex");
      debug("validateWebhook: rawBody", rawBody);
      debug("validateWebhook: clientSecret", this.config.clientSecret);
      debug("validateWebhook: generatedSig", generatedSig);
      debug("validateWebhook: webhookSig", webhookSignature);
      if (generatedSig !== webhookSignature) return false;

      var hookAge = _unixTimestamp2.default.now() - webhookTimestamp;
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

  }, {
    key: "naturalTime",
    value: function naturalTime(params, cb) {
      var requestOptions = {
        method: "GET",
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/natural_time", "?" + _querystring2.default.stringify(params)),
        headers: {
          Authorization: "Bearer " + this._accessToken,
          "Content-Type": "application/json; charset=UTF-8"
        }
      };
      return _makeRequest(requestOptions, cb);
    }

    /*
     * Invite users to this extension. If an Auth token is included, the invitation email
     * includes the name of the inviting person.
     */

  }, {
    key: "invite",
    value: function invite(emails, cb) {
      var requestBody = {
        // extension: this.config.extensionName,
        client_id: this.config.clientId,
        email_address: emails
      };
      var requestOptions = {
        method: "POST",
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/invites/"),
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
    }

    /*
     * Get List of Gopher Tasks
     */

  }, {
    key: "getTasks",
    value: function getTasks(params, cb) {
      var requestOptions = {
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/?", _querystring2.default.stringify(params)),
        headers: {
          Authorization: "Bearer " + this._accessToken,
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

  }, {
    key: "getTask",
    value: function getTask(taskId, cb) {
      if (typeof taskId != "number") throw new Error("taskId must be an integer. This was given instead:", taskId);
      var requestOptions = {
        url: this.config.apiHost + "/api/v1/tasks/" + taskId + "/",
        headers: {
          Authorization: "Bearer " + this._accessToken,
          "Content-Type": "application/json"
        },
        json: true
      };
      return _makeRequest(requestOptions, cb);
    }

    /*
     * Create A Gopher Task
     */

  }, {
    key: "createTask",
    value: function createTask(params, cb) {
      var urlParams = {};
      if (params.verbose) {
        urlParams.verbose = 1;
      }
      var serializedParams = _querystring2.default.stringify(urlParams);
      var qs = serializedParams ? "?" + serializedParams : "";
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
    }

    /*
      * Update A Gopher Task
      * Used to save data against the task, update content, followup time and more
      */

  }, {
    key: "updateTask",
    value: function updateTask(taskId, params, cb) {
      var requestOptions = {
        method: "PUT",
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
        headers: {
          Authorization: "Bearer " + this._accessToken,
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

  }, {
    key: "archiveTask",
    value: function archiveTask(taskId, cb) {
      var requestOptions = {
        method: "DELETE",
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
        headers: {
          Authorization: "Bearer " + this._accessToken,
          "Content-Type": "application/json; charset=UTF-8"
        },
        data: { task: { permanent: permanent } },
        json: true
      };
      return _makeRequest(requestOptions, cb);
    }

    /**
     * Trigger a Gopher Task
     */

  }, {
    key: "triggerTask",
    value: function triggerTask(params, cb) {
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
    }

    /*
     * Save Gopher Extension Data which is then sent with every webhook related to that extension.
     */

  }, {
    key: "saveExtData",
    value: function saveExtData(data, cb) {
      if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") throw new Error("data must be an object");

      var requestOptions = {
        method: "POST",
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/self/data/"),
        headers: {
          Authorization: "Bearer " + this._accessToken,
          "Content-Type": "application/json"
        },
        data: data
      };
      return _makeRequest(requestOptions, cb);
    }

    /*
     * Get Gopher Extension-Wide Data
     */

  }, {
    key: "getExtData",
    value: function getExtData(cb) {
      var requestOptions = {
        url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/self/data/"),
        headers: {
          Authorization: "Bearer " + this._accessToken,
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

  }, {
    key: "getAuthorizationUri",
    value: function getAuthorizationUri() {
      _checkParam(this.config.clientSecret, "clientSecret");
      _checkParam(this.config.redirectUri, "redirectUri");
      _checkParam(this.config.scope, "scope");

      var oauth2 = OAuth2.create({
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

      var authorizationUri = oauth2.authorizationCode.authorizeURL({
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

  }, {
    key: "getAccessToken",
    value: function getAccessToken(authCode, cb) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        debug("Auth code from auth uri used to retrive auth token: ", authCode);

        var oauth2 = OAuth2.create({
          client: {
            id: _this.config.clientId,
            secret: _this.config.clientSecret
          },
          auth: {
            tokenHost: _this.config.tokenHost,
            tokenPath: _this.config.tokenPath,
            authorizePath: _this.config.authorizePath
          }
        });

        var options = {
          code: authCode,
          redirect_uri: _this.config.redirectUri,
          client_id: _this.config.clientId
        };

        oauth2.authorizationCode.getToken(options, function (error, result) {
          if (error) {
            debug("Access token error", error.message);
            if (cb) cb(new Error("Authentication failed"));
            return reject("Authentication failed");
          }

          var tokenDetails = oauth2.accessToken.create(result);
          debug("success! auth token: ", tokenDetails.token);
          _this._accessToken = tokenDetails.token.access_token;
          if (cb) cb(null, tokenDetails.token.access_token);
          return resolve(tokenDetails.token.access_token);
        });
      });
    }

    /*
     *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
     *  When a new instance is instantiated, we can inject the access token (ie, stored in a cookie..I)
     */

  }, {
    key: "setAccessToken",
    value: function setAccessToken(accessToken) {
      this._accessToken = accessToken;
    }
  }]);

  return Gopher;
}();

exports.default = Gopher;