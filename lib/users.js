"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	/**
  * Create a new user
  * (Gopher Admin Only)
  */

	createUser: function createUser(data, cb) {
		if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") throw new Error("data must be an object");
		var basicAuthToken = new Buffer(process.env.ADMIN_CLIENT_ID + ":" + process.env.ADMIN_CLIENT_SECRET).toString("base64");

		var requestOptions = {
			method: "POST",
			url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/auth/register"),
			headers: {
				Authorization: "Basic " + basicAuthToken,
				"Content-Type": "application/json"
			},
			data: data
		};

		return (0, _util._makeRequest)(requestOptions, cb);
	},


	/**
  * Login
  * (Gopher Admin Only)
  */
	login: function login(data, cb) {
		if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") throw new Error("data must be an object");
		var basicAuthToken = new Buffer(process.env.ADMIN_CLIENT_ID + ":" + process.env.ADMIN_CLIENT_SECRET).toString("base64");

		var requestOptions = {
			method: "POST",
			url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/auth/login"),
			headers: {
				Authorization: "Basic " + basicAuthToken,
				"Content-Type": "application/json"
			},
			data: data
		};

		return (0, _util._makeRequest)(requestOptions, cb);
	},


	/**
  * Reset Password
  * (Gopher Admin Only)
  */
	resetPassword: function resetPassword(data, cb) {
		if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") throw new Error("data must be an object");
		var basicAuthToken = new Buffer(process.env.ADMIN_CLIENT_ID + ":" + process.env.ADMIN_CLIENT_SECRET).toString("base64");

		var requestOptions = {
			method: "POST",
			url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/auth/forgot_password"),
			headers: {
				Authorization: "Basic " + basicAuthToken,
				"Content-Type": "application/json"
			},
			data: data
		};

		return (0, _util._makeRequest)(requestOptions, cb);
	},


	/*
   * Save Gopher Extension Data which is then sent with every webhook related to that extension.
   */

	saveUserData: function saveUserData(data, cb) {
		if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") throw new Error("data must be an object");

		var requestOptions = {
			method: "POST",
			url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/self/data/"),
			headers: {
				Authorization: "Bearer " + this._accessToken,
				"Content-Type": "application/json"
			},
			data: data
		};
		return (0, _util._makeRequest)(requestOptions, cb);
	},


	/*
   * Get Gopher Extension-Wide Data
   */
	getUserData: function getUserData(cb) {
		var requestOptions = {
			url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/self/data/"),
			headers: {
				Authorization: "Bearer " + this._accessToken,
				"Content-Type": "application/json"
			},
			json: true
		};
		return (0, _util._makeRequest)(requestOptions, cb);
	},


	/*
   * Invite users to this extension. If an Auth token is included, the invitation email
   * includes the name of the inviting person.
   */
	invite: function invite(emails, cb) {
		var requestBody = {
			// extension: this.config.extensionName,
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