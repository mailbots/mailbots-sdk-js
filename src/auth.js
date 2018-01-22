import { _checkParam, debug } from "./util";

module.exports = {
	/**
	 *  Auth: Build initial AOuth2 login link (Node Only)
	 */
	getAuthorizationUri() {
		_checkParam(this.config.clientSecret, "clientSecret");
		_checkParam(this.config.redirectUri, "redirectUri");
		_checkParam(this.config.scope, "scope");

		let oauth2 = this._getSecureOAuthClient();

		const authorizationUri = oauth2.authorizationCode.authorizeURL({
			redirect_uri: this.config.redirectUri,
			scope: this.config.scope,
			state: this.config.state
		});
		debug("auth uri: ", authorizationUri);
		return { state: this.config.state, uri: authorizationUri };
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
				return new Error(
					"Error getting access token" + JSON.stringify(err)
				);
			});
	}
};
