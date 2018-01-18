let OAuth2;
let context = "browser";
if (!global.document) {
	context = "server";
	OAuth2 = require("simple-oauth2");
}

import { _checkParam, debug } from "./util";

module.exports = {
	/*
   *  Auth: Build initial AOuth2 login link (Node Only)
   */
	getAuthorizationUri() {
		_checkParam(this.config.clientSecret, "clientSecret");
		_checkParam(this.config.redirectUri, "redirectUri");
		_checkParam(this.config.scope, "scope");

		const oauth2 = OAuth2.create({
			client: {
				id: this.config.clientId,
				secret: this.config.clientSecret
			},
			auth: {
				tokenHost: this.config.tokenHost,
				tokenPath: this.config.tokenPath,
				authorizePath: this.config.authorizePath
			}
		});

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
   */
	getAccessToken(authCode, cb) {
		return new Promise((resolve, reject) => {
			debug(
				"Auth code from auth uri used to retrive auth token: ",
				authCode
			);

			const oauth2 = OAuth2.create({
				client: {
					id: this.config.clientId,
					secret: this.config.clientSecret
				},
				auth: {
					tokenHost: this.config.tokenHost,
					tokenPath: this.config.tokenPath,
					authorizePath: this.config.authorizePath
				}
			});

			const options = {
				code: authCode,
				redirect_uri: this.config.redirectUri,
				client_id: this.config.clientId
			};

			oauth2.authorizationCode.getToken(options, (error, result) => {
				if (error) {
					debug("Access token error", error.message);
					if (cb) cb(new Error("Authentication failed"));
					return reject("Authentication failed");
				}

				const tokenDetails = oauth2.accessToken.create(result);
				debug("success! auth token: ", tokenDetails.token);
				this._accessToken = tokenDetails.token.access_token;
				if (cb) cb(null, tokenDetails.token.access_token);
				return resolve(tokenDetails.token.access_token);
			});
		});
	}
};
