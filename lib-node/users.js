"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Get information about the currently logged in user
   * @param {function} [cb] - Optional callback
   */
  getLoggedInUser: function getLoggedInUser(cb) {
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/users/self/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      }
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /**
   * Invite users to this bot. If an Auth token is included, the invitation email
   * includes the name of the logged in user who is sending the invitation.
   * "emails" param can be either an array of email addresses, or a string with a single
   * email address.
   * @param {array|string} emails A single email address, or an array of emails to invite
   * @param {function} [cb] Optional callback (also can be used with promises)
   */
  invite: function invite(emails, cb) {
    var requestBody = {
      client_id: this.config.clientId,
      email_address: emails
    };
    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/invites/"),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: requestBody
    };

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: "Bearer " + this._accessToken
      });
    }
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};