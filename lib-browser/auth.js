"use strict";

var _util = require("./util");

module.exports = {
	/**
  *  Auth: Build initial AOuth2 login link (Node Only)
  */
	getAuthorizationUri: function getAuthorizationUri() {
		(0, _util._checkParam)(this.config.clientSecret, "clientSecret");
		(0, _util._checkParam)(this.config.redirectUri, "redirectUri");
		(0, _util._checkParam)(this.config.scope, "scope");

		var oauth2 = this._getSecureOAuthClient();

		var authorizationUri = oauth2.authorizationCode.authorizeURL({
			redirect_uri: this.config.redirectUri,
			scope: this.config.scope,
			state: this.config.state
		});
		(0, _util.debug)("auth uri: ", authorizationUri);
		return { state: this.config.state, uri: authorizationUri };
	},


	/*
   *  Auth: After user has Authorized extension with Gopher, fetch access token (Node Only)
   *  Promises only.
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