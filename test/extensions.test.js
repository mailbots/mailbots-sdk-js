import {
	getGopherClient,
	getExampleTask,
	getRandomString,
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
let extensionId;
let extensionName = getRandomString(); // TODO: Cache the generated extensoin name

describe("Extensions", function() {
	testConfig.call(this);
	beforeEach(beforeEachTest);

	it("should create a new extension", async () => {
		let createRes = await gopherClient.createExtension({
			extension: {
				name: extensionName,
				subdomain: extensionName,
				description: "extension1 description",
				icon: "/favicon.ico",
				autocomplete_examples:
					"invite, autocomplete, 3days, 3weeks, 3months",
				tags: "productivity",
				enabled: true,
				install_url: "https://www.gopher.email",
				settings_url: "https://www.gopher.email",
				help_url: "https://www.gopher.email",
				developer_name: "Hacking Hank",
				learn_more_url: "learn_more_url",
				privacy_policy_url: "privacy_policy_url",
				base_url: "https://www.gopher.email",
				oauth2_scope: "manage_extensions",
				oauth2_redirect_uri: "https://www.gopher.email",
				webhook_url: "",
				webhook_version: 1
			}
		});
		debugger;
		expect(createRes.status).to.equal("success");
		extensionId = createRes.extension.id;
	});

	it("should update an extension", async () => {
		debugger;
		let createRes = await gopherClient.updateExtension({
			extension: {
				extensionid: extensionId,
				description: "updated",
				name: getRandomString()
			}
		});
		expect(createRes.status).to.equal("success");
	});

	it("should get a list of extensions", async () => {
		let res = await gopherClient.getExtensions();
		expect(res.status).to.equal("success");
		expect(res.extensions).to.be.an("array");
		expect(res.extensions[0]).to.have.property("name");
	});

	it("should get a single extension", async () => {
		let res = await gopherClient.getExtension({
			extensionid: extensionId
		});
		expect(res.status).to.equal("success");
		expect(res.extension).to.have.property("name");
	});

	it("should uninstall", async () => {
		let res = await gopherClient.uninstallExtension({
			extensionid: extensionId
		});
	});

	it("should delete an extension", async () => {
		let res = await gopherClient.deleteExtension({
			extensionid: extensionId
		});
	});

	//TODO
	it("should throw an exception when given bad params", async () => {
		try {
			let res = await gopherClient.getExtension(2);
		} catch (e) {
			expect(e).to.be.a("string");
			expect(e).to.contain("extensionid is required");
		}
	});
});
