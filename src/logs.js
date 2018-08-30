import urljoin from "url-join";
import { debug, _makeRequest } from "./util";
import queryString from "query-string";

module.exports = {
  /**
   * Retrieve logged in user's extension logs
   * For params and details, see [extension saving data API docs](https://postman.gopheremail.com/#7f9bfa6c-a673-4104-9be9-1ada487c300e)
   * @param  {object} filter - Filter. Ex: `{type: ['api', 'submit_failed'], extension: ['subdomain'], since: 1517948366, num: 10}`)
   * @return {Promise} Promise resolving to log results in the form of: `{status: "success", logs[...]}`
   */
  getLogs: function(filter, cb) {
    filter = filter || { type: ["webhook", "submit_failed"] };
    const qs = queryString.stringify(filter, { arrayFormat: "bracket" });

    const requestOptions = {
      method: "GET",
      url: urljoin(this.config.apiHost, "/api/v1/logs?" + qs),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      }
    };

    return _makeRequest(requestOptions, cb);
  }
};
