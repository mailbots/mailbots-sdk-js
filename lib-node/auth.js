"use strict";

var _util = require("./util");

module.exports = {
  /*
   *  Get OAuth2 login link from config credentials
   *  @returns {object} Auth URI and state Ex: `{ uri: authorizationUri, state: state }`
   */
  getAuthorizationUri: function getAuthorizationUri() {
    (0, _util._checkParam)(this.config.clientId, "clientId");
    (0, _util._checkParam)(this.config.redirectUri, "redirectUri");
    (0, _util._checkParam)(this.config.scope, "scope");

    var oauth2 = this._getSecureOAuthClient();
    var state = Math.floor(Math.random() * 1000000000).toString(16);

    var authorizationUri = oauth2.authorizationCode.authorizeURL({
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope,
      state: state
    });
    (0, _util.debug)("auth uri: ", authorizationUri, "state", state);
    return { uri: authorizationUri, state: state };
  },


  /*
   *  After user has authorized extension with MailBots, fetch access token (server only)
   *  @param {string} code Access code after user approval from auth URL
   */

  getAccessToken: function getAccessToken(code) {
    var oauth2 = this._getSecureOAuthClient();

    var options = {
      code: code,
      redirect_uri: this.config.redirectUri,
      client_id: this.config.clientId
    };
    return oauth2.authorizationCode.getToken(options).then(function (result) {
      var token = oauth2.accessToken.create(result);
      return token;
    }).catch(function (err) {
      return new Error("Error getting access token" + JSON.stringify(err));
    });
  }
};