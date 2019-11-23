"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  /**
   * Get information about the currently logged in user
   * @param {function} [cb] - Optional callback
   */
  getLoggedInUser: function getLoggedInUser(cb) {
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin["default"])(this.config.apiHost, "/api/v1/users/self/"),
      headers: {
        Authorization: "Bearer ".concat(this._accessToken),
        "Content-Type": "application/json"
      }
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};
exports["default"] = _default;