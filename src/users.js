import urljoin from "url-join";
import { debug, _makeRequest } from "./util";

export default {
	/**
	 * Create a new user
	 * (Gopher Admin Only)
	 */

	createUser(data, cb) {
		if (typeof data != "object") throw new Error("data must be an object");
		let basicAuthToken = new Buffer(
			process.env.ADMIN_CLIENT_ID + ":" + process.env.ADMIN_CLIENT_SECRET
		).toString("base64");

		const requestOptions = {
			method: "POST",
			url: urljoin(this.config.apiHost, "/api/v1/auth/register"),
			headers: {
				Authorization: `Basic ${basicAuthToken}`,
				"Content-Type": "application/json"
			},
			data
		};

		return _makeRequest(requestOptions, cb);
	},

	/**
	 * Login
	 * (Gopher Admin Only)
	 */
	login(data, cb) {
		if (typeof data != "object") throw new Error("data must be an object");
		let basicAuthToken = new Buffer(
			process.env.ADMIN_CLIENT_ID + ":" + process.env.ADMIN_CLIENT_SECRET
		).toString("base64");

		const requestOptions = {
			method: "POST",
			url: urljoin(this.config.apiHost, "/api/v1/auth/login"),
			headers: {
				Authorization: `Basic ${basicAuthToken}`,
				"Content-Type": "application/json"
			},
			data
		};

		return _makeRequest(requestOptions, cb);
	},

	/**
	 * Reset Password
	 * (Gopher Admin Only)
	 */
	resetPassword(data, cb) {
		if (typeof data != "object") throw new Error("data must be an object");
		let basicAuthToken = new Buffer(
			process.env.ADMIN_CLIENT_ID + ":" + process.env.ADMIN_CLIENT_SECRET
		).toString("base64");

		const requestOptions = {
			method: "POST",
			url: urljoin(this.config.apiHost, "/api/v1/auth/forgot_password"),
			headers: {
				Authorization: `Basic ${basicAuthToken}`,
				"Content-Type": "application/json"
			},
			data
		};

		return _makeRequest(requestOptions, cb);
	},

	/*
   * Save Gopher Extension Data which is then sent with every webhook related to that extension.
   */

	saveUserData(data, cb) {
		if (typeof data != "object") throw new Error("data must be an object");

		const requestOptions = {
			method: "POST",
			url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
			headers: {
				Authorization: `Bearer ${this._accessToken}`,
				"Content-Type": "application/json"
			},
			data
		};
		return _makeRequest(requestOptions, cb);
	},

	/*
   * Get Gopher Extension-Wide Data
   */
	getUserData(cb) {
		const requestOptions = {
			url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
			headers: {
				Authorization: `Bearer ${this._accessToken}`,
				"Content-Type": "application/json"
			},
			json: true
		};
		return _makeRequest(requestOptions, cb);
	},

	/*
   * Invite users to this extension. If an Auth token is included, the invitation email
   * includes the name of the inviting person.
   */
	invite(emails, cb) {
		const requestBody = {
			// extension: this.config.extensionName,
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
