import querystring from "query-string";
import urljoin from "url-join";
import { _checkParam, debug } from "./util";

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
  return this.makeRequest(requestOptions, cb);
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
  return this.makeRequest(requestOptions, cb);
}

/**
 * Update a person by id.
 * @param {object} params  Arguments for API call
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 *
 * @example
 */
function updatePerson(params, cb) {
  if (!params.person.id) throw "person.id is required to update a person";
  const requestOptions = {
    method: "PUT",
    url: urljoin(this.config.apiHost, "/api/v1/people", String(params.person.id)),
    headers: {
      Authorization: `Bearer ${this._accessToken}`,
      "Content-Type": "application/json"
    },
    data: params,
    json: true

  };
  debug("Request options for getting people:", requestOptions);
  return this.makeRequest(requestOptions, cb);
}

export default {
  searchPeople,
  getPerson,
  updatePerson
};
