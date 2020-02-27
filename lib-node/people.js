"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queryString = _interopRequireDefault(require("query-string"));

var _urlJoin = _interopRequireDefault(require("url-join"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Get a filteredx list of People
 * @param {object} params  Arguments for API call
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 *
 * @example
 * // Get all people
 * const res = await mbClient.searchPeople();
 * console.log(res.people);
 *
 * @example
 * // With a callback
 * mbClient.searchPeople({ limit: 1 }, (err, res) => {
 *     if (err) done(err);
 *     console.log(res.people);
 *   });
 */
function searchPeople(params, cb) {
  var requestOptions = {
    method: "POST",
    url: (0, _urlJoin["default"])(this.config.apiHost, "/api/v1/people"),
    headers: {
      Authorization: "Bearer ".concat(this._accessToken),
      "Content-Type": "application/json"
    },
    data: params,
    json: true
  };
  (0, _util.debug)("Request options for getting people:", requestOptions);
  return this.makeRequest(requestOptions, cb);
}

var _default = {
  searchPeople: searchPeople
};
exports["default"] = _default;