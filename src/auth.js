import { _checkParam, debug } from "./util";

module.exports = {
  /**
   *  Auth: Build initial AOuth2 login link
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
   *  Auth: After user has Authorized extension with Gopher, fetch access token (Node Only)
   *  Promises only.
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
