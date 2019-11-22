"use strict";

var _urlJoin = _interopRequireDefault(require("url-join"));

var _util = require("./util");

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  /**
   * Retrieve logged-in user's bot logs
   * @param  {object} filter - Filter. Ex: `{type: ['api', 'submit_failed'], mailbot: ['subdomain'], since: 1517948366, num: 10}`)
   * @return {Promise} Promise resolving to log results in the form of: `{status: "success", logs[...]}`
   */
  getLogs: function getLogs(filter, cb) {
    filter = filter || {
      type: ["webhook", "submit_failed"]
    };

    var qs = _queryString["default"].stringify(filter, {
      arrayFormat: "bracket"
    });

    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin["default"])(this.config.apiHost, "/api/v1/logs?" + qs),
      headers: {
        Authorization: "Bearer ".concat(this._accessToken),
        "Content-Type": "application/json"
      }
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};