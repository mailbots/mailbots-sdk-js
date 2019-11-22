"use strict";

var _querystring = _interopRequireDefault(require("querystring"));

var _crypto = _interopRequireDefault(require("crypto"));

var _urlJoin = _interopRequireDefault(require("url-join"));

var _tasks = _interopRequireDefault(require("./tasks"));

var _users = _interopRequireDefault(require("./users"));

var _webhooks = _interopRequireDefault(require("./webhooks"));

var _auth = _interopRequireDefault(require("./auth"));

var _mailbots = _interopRequireDefault(require("./mailbots"));

var _logs = _interopRequireDefault(require("./logs"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OAuth2;
var context = "browser";
var server = false; // This block is removed by babel when it compiles the client lib (see package.json)

context = "server";
OAuth2 = require("simple-oauth2");

var MailBotsClient =
/*#__PURE__*/
function () {
  function MailBotsClient(config) {
    _classCallCheck(this, MailBotsClient);

    if (!(this instanceof MailBotsClient)) return new MailBotsClient(config);

    if (context === "browser" && this.clientSecret) {
      throw "SECURITY ERROR: clientSecret should only be stored the server.";
    }

    this.config = config;
    this.configDefaults = {
      clientId: "",
      clientSecret: "",
      redirectUri: "",
      scope: "",
      state: "",
      apiHost: "https://api.mailbots.com",
      tokenHost: "https://api.mailbots.com",
      tokenPath: "https://api.mailbots.com/api/v1/oauth2/access_token",
      authorizePath: "https://api.mailbots.com/settings/oauth2_authorize"
    };
    this.config = Object.assign(this.configDefaults, this.config);
    this.config.state = Math.random().toString(36).substring(7);
    (0, _util.debug)("settings: ", this.config); // Bearer token used in Auth header. Ex: curl url -h "Authorization: Bearer accessToken"

    this._accessToken = "";
  }
  /**
  * Factory method to return a new, fully authenticated MailBots client based on the webhook
  * @param {object} bot - MailBots `bot` object
  * @example
  *   mailbot.onCommand('foo', bot => {
  *     const mbClient = MailBotsClient.fromBot(bot);
  *   })
  *
  */


  _createClass(MailBotsClient, [{
    key: "setAccessToken",

    /*
     *  Auth: Manually set access token if we already have it (ie, in a cookie, webhook, etc)
     */
    value: function setAccessToken(accessToken) {
      this._accessToken = accessToken;
    }
    /*
     * Populates an OAuth2 client that should ONLY BE USED ON THE SERVER.
     * @return oauth2 client (simple-oauth2)
     */

  }, {
    key: "_getSecureOAuthClient",
    value: function _getSecureOAuthClient() {
      (0, _util._checkParam)(this.config.clientSecret, "clientSecret");
      (0, _util._checkParam)(this.config.clientId, "clientId");
      (0, _util._checkParam)(this.config.redirectUri, "redirectUri");
      (0, _util._checkParam)(this.config.scope, "scope");
      return OAuth2.create({
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
    }
    /**
     * Low-level function to make authenticated request to MailBots API
     * @param {object} requestOptions - Axiox-compatible request ooptions
     * @param {function} [cb] - Optional callback.
     * @return {Promise}
     */

  }, {
    key: "makeRequest",
    value: function makeRequest(requestOptions, cb) {
      return (0, _util._makeRequest)(requestOptions, cb);
    }
  }], [{
    key: "fromBot",
    value: function fromBot(bot) {
      var mbClient = new this({
        clientId: bot.config.clientId,
        clientSecret: bot.config.clientSecret,
        redirectUri: bot.config.redirectUri,
        scope: bot.config.scope,
        apiHost: bot.config.apiHost || "https://api.mailbots.com",
        tokenHost: bot.config.tokenHost || "https://api.mailbots.com",
        tokenPath: bot.config.tokenPath || "https://api.mailbots.com/api/v1/oauth2/access_token",
        authorizePath: bot.config.authorizePath || "https://api.mailbots.com/settings/oauth2_authorize"
      });
      var accessToken = bot.get("mailbot.stored_data.access_token");
      mbClient.setAccessToken(accessToken);
      return mbClient;
    }
  }]);

  return MailBotsClient;
}();

(0, _util._extend)(MailBotsClient, _tasks["default"]);
(0, _util._extend)(MailBotsClient, _users["default"]);
(0, _util._extend)(MailBotsClient, _webhooks["default"]);
(0, _util._extend)(MailBotsClient, _auth["default"]);
(0, _util._extend)(MailBotsClient, _mailbots["default"]);
(0, _util._extend)(MailBotsClient, _logs["default"]);
module.exports = {
  MailBotsClient: MailBotsClient
};