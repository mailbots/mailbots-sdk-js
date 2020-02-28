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
 * Get a filtered list of People
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
  return (0, _util._makeRequest)(requestOptions, cb);
}
/**
 * Get a person by it's ID.
 *
 * @param {number} id The person ID
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 *
 * @example
 * // Get person with id 3
 * const res = await mbClient.getPersonById(3);
 * console.log(res.person);
 */


function getPersonById(id, cb) {
  var requestOptions = {
    method: "GET",
    url: (0, _urlJoin["default"])(this.config.apiHost, "/api/v1/people", id.toString()),
    headers: {
      Authorization: "Bearer ".concat(this._accessToken)
    }
  };
  return (0, _util._makeRequest)(requestOptions, cb);
}
/**
 * Update a person by id.
 * @param {number} id The person ID
 * @param {object} params  Arguments for API call
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 *
 * @example
 */


function updatePerson(id, params, cb) {
  var requestOptions = {
    method: "PUT",
    url: (0, _urlJoin["default"])(this.config.apiHost, "/api/v1/people", id.toString()),
    headers: {
      Authorization: "Bearer ".concat(this._accessToken),
      "Content-Type": "application/json"
    },
    data: params,
    json: true
  };
  (0, _util.debug)("Request options for getting people:", requestOptions);
  return (0, _util._makeRequest)(requestOptions, cb);
}

var _default = {
  searchPeople: searchPeople,
  getPersonById: getPersonById,
  updatePerson: updatePerson
};
exports["default"] = _default;
