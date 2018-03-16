import urljoin from "url-join";
import { debug, _makeRequest } from "./util";

export default {
  /**
   * Login
   * Get information about the currently logged in user
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
    return _makeRequest(requestOptions, cb);
  },

  /*
   * Invite users to this extension. If an Auth token is included, the invitation email
   * includes the name of the logged in person who is sending the invitation. 
   * "emails" param can be either an array of email addresses, or a string with a single 
   * email address.
   */
  invite(emails, cb) {
    const requestBody = {
      client_id: this.config.clientId,
      email_address: emails
    };
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/invites/"),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: requestBody
    };

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: `Bearer ${this._accessToken}`
      });
    }
    return _makeRequest(requestOptions, cb);
  }
};
