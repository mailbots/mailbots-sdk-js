"use strict";

var _util = require("./util");

var OAuth2 = void 0;
var context = "browser";
if (!global.document) {
	context = "server";
	OAuth2 = require("simple-oauth2");
}

module.exports = {
	/*
   *  Auth: Build initial AOuth2 login link (Node Only)
   */
	getAuthorizationUri: function getAuthorizationUri() {
		(0, _util._checkParam)(this.config.clientSecret, "clientSecret");
		(0, _util._checkParam)(this.config.redirectUri, "redirectUri");
		(0, _util._checkParam)(this.config.scope, "scope");

		var oauth2 = OAuth2.create({
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
   */
	getAccessToken: function getAccessToken(authCode, cb) {
		var _this = this;

		return new Promise(function (resolve, reject) {
			(0, _util.debug)("Auth code from auth uri used to retrive auth token: ", authCode);

			var oauth2 = OAuth2.create({
				client: {
					id: _this.config.clientId,
					secret: _this.config.clientSecret
				},
				auth: {
					tokenHost: _this.config.tokenHost,
					tokenPath: _this.config.tokenPath,
					authorizePath: _this.config.authorizePath
				}
			});

			var options = {
				code: authCode,
				redirect_uri: _this.config.redirectUri,
				client_id: _this.config.clientId
			};

			oauth2.authorizationCode.getToken(options, function (error, result) {
				if (error) {
					(0, _util.debug)("Access token error", error.message);
					if (cb) cb(new Error("Authentication failed"));
					return reject("Authentication failed");
				}

				var tokenDetails = oauth2.accessToken.create(result);
				(0, _util.debug)("success! auth token: ", tokenDetails.token);
				_this._accessToken = tokenDetails.token.access_token;
				if (cb) cb(null, tokenDetails.token.access_token);
				return resolve(tokenDetails.token.access_token);
			});
		});
	}
};