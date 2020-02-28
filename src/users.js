import urljoin from "url-join";

export default {
  /**
   * Get information about the currently logged in user
   * @param {function} [cb] - Optional callback
   */
  getLoggedInUser(cb) {
    const requestOptions = {
      method: "GET",
      url: urljoin(this.config.apiHost, "/api/v1/users/self/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      }
    };
    return this.makeRequest(requestOptions, cb);
  }

};
