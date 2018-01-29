import {
	getGopherClient,
	getExampleTask,
	beforeEachTest,
	testConfig
} from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import timestamp from "unix-timestamp";

const debug = require("debug")("gopherhq");
timestamp.round = true;

let gopherClient = getGopherClient();

describe("Logs", function() {
	testConfig.call(this);
	beforeEach(beforeEachTest);

	it("should get user logs", async () => {
		let res = await gopherClient.getLogs();
		expect(res.logs).to.be.an("array");
	});

	it("should get user logs of various types", async () => {
		let res = await gopherClient.getLogs({
			api: true,
			webhook: true,
			submit_failed: true
		});
		expect(res.logs).to.be.an("array");
	});
});
