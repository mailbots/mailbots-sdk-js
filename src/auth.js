import { _checkParam, debug } from "./util";

module.exports = {
  /*
   *  Get OAuth2 login link from config credentials
   *  @returns {object} Auth URI and state Ex: `{ uri: authorizationUri, state: state }`
   */
  getAuthorizationUri() {
    _checkParam(this.config.clientId, "clientId");
    _checkParam(this.config.redirectUri, "redirectUri");
    _checkParam(this.config.scope, "scope");

    const oauth2 = this._getSecureOAuthClient();
    const state = Math.floor(Math.random() * 1000000000).toString(16);

    const authorizationUri = oauth2.authorizationCode.authorizeURL({
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope,
      state: state
    });
    debug("auth uri: ", authorizationUri, "state", state);
    return { uri: authorizationUri, state: state };
  },

  /*
   *  After user has authorized extension with Gopher, fetch access token (server only)
   *  @param {string} code Access code after user approval from auth URL
   */

  getAccessToken(code) {
    let oauth2 = this._getSecureOAuthClient();

    const options = {
      code: code,
      redirect_uri: this.config.redirectUri,
      client_id: this.config.clientId
    };
    return oauth2.authorizationCode
      .getToken(options)
      .then(result => {
        let token = oauth2.accessToken.create(result);
        return token;
      })
      .catch(err => {
        return new Error("Error getting access token" + JSON.stringify(err));
      });
  }
};
