import { getGopherClient, getExampleTask } from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import timestamp from "unix-timestamp";

const debug = require("debug")("gopherhq");
timestamp.round = true;

let gopherClient = getGopherClient();

describe("Users", () => {
	let userEmail;
	if (process.env.BUILD_MOCKS) {
		userEmail = Math.floor(Math.random() * 10000) + "@example.com";
	} else {
		userEmail = "4068@example.com"; //: Math.floor(Math.random() * 10000) + "@example.com";
	}

	let password = "fdsafdsa";

	it("should create a new user", async () => {
		let createRes = await gopherClient.createUser({
			email: userEmail,
			password: password,
			name: "",
			timezone: ""
		});
		expect(createRes.status).to.equal("success");
	});

	it("should login a new user", async () => {
		let loginRes = await gopherClient.login({
			email: userEmail,
			password: password
		});
		expect(loginRes.status).to.equal("success");
		expect(loginRes.user.token).to.have.property("access_token");
	});

	it("should let new user reset their password ", async () => {
		let res = await gopherClient.resetPassword({
			email: userEmail
		});
		expect(res.success).to.be.true;
	});
});
