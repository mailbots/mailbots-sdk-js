import urljoin from "url-join";
import { debug, _makeRequest } from "./util";
import queryString from "query-string";

module.exports = {
  /**
   * Retrieve logged-in user's bot logs
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
