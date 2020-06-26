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
    url: urljoin(this.config.apiHost, "/api/v1/people/search"),
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
 * Create a new person.
 *
 * @param {string} params.email The person email
 * @param {IPersonAttribute[]} params.attributes Person attributes
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 */
function createPerson(params, cb) {
  const requestOptions = {
    method: "POST",
    url: urljoin(this.config.apiHost, "/api/v1/people", String(params.id)),
    headers: {
      Authorization: `Bearer ${this._accessToken}`
    }
  };
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

/**
 * Update multiple people with a single batch operation.
 * @param {object} params  Arguments for API call
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 */
function batchUpdatePeople(params, cb) {
  const requestOptions = {
    method: "PUT",
    url: urljoin(this.config.apiHost, "/api/v1/people/batch_update"),
    headers: {
      Authorization: `Bearer ${this._accessToken}`,
      "Content-Type": "application/json"
    },
    data: params,
    json: true

  };
  debug("Request options for batch update people:", requestOptions);
  return this.makeRequest(requestOptions, cb);
}

/**
 * Create a new person event.
 *
 * @param {object} params
 * @param {number} params.person.id - Id of the person
 * @param {string} params.type - The type of this event
 * @param {string} params.title - Title of the event
 * @param {string} params.body - Event content
 * @param {array} params.links - Event content
 * @return {Promise}
 */
function createPersonEvent(params, cb) {
  const requestOptions = {
    method: "POST",
    url: urljoin(this.config.apiHost, `/api/v1/people/${params.person.id}/events`),
    headers: {
      Authorization: `Bearer ${this._accessToken}`,
      "Content-Type": "application/json; charset=UTF-8"
    },
    data: JSON.stringify({
      event: {
        type: params.type,
        title: params.title,
        body: params.body,
        links: params.links
      }
    })
  };
  return this.makeRequest(requestOptions, cb);
}

/**
 * Update a person's tags attribute by id.
 *
 * @param {object} params  Arguments for API call
 * @param {number} params.person.id
 * @param {IPersonAttribute[]} params.person.attributes
 * @param {string[]} params.newTags
 * @param {boolean} params.replace - keep exising tags or replace them
 * @param {function} [cb]  Optional callback function
 * @return {Promise}
 *
 * @example
 */
function updatePersonTags(params, cb) {
  if (!params.person.id) throw "person.id is required to update a person";
  if (
    !params.person.attributes ||
    !Array.isArray(params.person.attributes)
  ) throw "person.attributes is required to update a person";

  let tagsAttr = params.person.attributes.find(
    (attr) => attr.attribute === "tags"
  );
  if (tagsAttr) {
    tagsAttr.value = params.newTags;
  } else {
    tagsAttr = {
      attribute: "tags",
      created: "",
      type: "global_multiselect",
      title: "Tags",
      value: params.newTags,
      display_order: 4,
      hidden: false,
      readonly: false,
    };
  }

  return this.updatePerson({ person: { id: params.person.id, attributes: [tagsAttr] } });
}

export default {
  searchPeople,
  createPerson,
  getPerson,
  updatePerson,
  batchUpdatePeople,
  createPersonEvent,
  updatePersonTags
};
