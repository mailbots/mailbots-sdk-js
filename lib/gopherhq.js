"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _unixTimestamp = require("unix-timestamp");

var _unixTimestamp2 = _interopRequireDefault(_unixTimestamp);

var _tasks = require("./tasks");

var _tasks2 = _interopRequireDefault(_tasks);

var _users = require("./users");

var _users2 = _interopRequireDefault(_users);

var _webhooks = require("./webhooks");

var _webhooks2 = _interopRequireDefault(_webhooks);

var _Auth = require("./Auth");

var _Auth2 = _interopRequireDefault(_Auth);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_unixTimestamp2.default.round = true;

var Gopher = function () {
  function Gopher(config) {
    _classCallCheck(this, Gopher);

    if (!(this instanceof Gopher)) return new Gopher(config);
    (0, _util._checkParam)(config.clientId, "clientId");

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
    (0, _util.debug)("settings: ", this.config);

    // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
    this._accessToken = "";
  }

  /*
   *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
   *  When a new instance is instantiated, we can inject the access token (ie, stored in a cookie..I)
   */


  _createClass(Gopher, [{
    key: "setAccessToken",
    value: function setAccessToken(accessToken) {
      this._accessToken = accessToken;
    }
  }]);

  return Gopher;
}();

(0, _util._extend)(Gopher, _tasks2.default);
(0, _util._extend)(Gopher, _users2.default);
(0, _util._extend)(Gopher, _webhooks2.default);
(0, _util._extend)(Gopher, _Auth2.default);

// Not in the ES6 way, but works with both: require('...') and import foo from "..."
module.exports = Gopher;