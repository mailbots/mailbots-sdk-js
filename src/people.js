import querystring from "query-string";
import urljoin from "url-join";
import { _makeRequest, _checkParam, debug } from "./util";

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
  const requestOptions = {
    method: "POST",
    url: urljoin(this.config.apiHost, "/api/v1/people"),
    headers: {
      Authorization: `Bearer ${this._accessToken}`,
      "Content-Type": "application/json"
    },
    data: params,
    json: true

  };
  debug("Request options for getting people:", requestOptions);
  return _makeRequest(requestOptions, cb);
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
function getPerson(params, cb) {
  if (typeof params.id != "number")
    throw "id must be an integer. This was given instead: " + params.id;
  const requestOptions = {
    method: "GET",
    url: urljoin(this.config.apiHost, "/api/v1/people", String(params.id)),
    headers: {
      Authorization: `Bearer ${this._accessToken}`
    }
  };
  return _makeRequest(requestOptions, cb);
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
  const requestOptions = {
    method: "PUT",
    url: urljoin(this.config.apiHost, "/api/v1/people", id.toString()),
    headers: {
      Authorization: `Bearer ${this._accessToken}`,
      "Content-Type": "application/json"
    },
    data: params,
    json: true

  };
  debug("Request options for getting people:", requestOptions);
  return _makeRequest(requestOptions, cb);
}

export default {
  searchPeople,
  getPerson,
  updatePerson
};
