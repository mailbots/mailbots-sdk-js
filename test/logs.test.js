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
import { read } from "fs";

const debug = require("debug")("gopherhq");
timestamp.round = true;

let gopherClient = getGopherClient();

describe("Logs", function () {
  testConfig.call(this);
  beforeEach(beforeEachTest);

  it("returns default logs with no options", async () => {
    let res = await gopherClient.getLogs();
    expect(res.logs).to.be.an("array");
  });

  it('filters for submit_failed user logs', async () => {
    let res = await gopherClient.getLogs({ type: ["submit_failed"] });
    expect(res.logs).to.be.an("array");
    expect(res.logs[0].type).to.equal('submit_failed');
    let checkAllResults = res.logs.every((log) => (log.type == "submit_failed"));
    expect(checkAllResults).to.be.true;
  });

  it('filters for api and submit_failed user logs', async () => {
    let res = await gopherClient.getLogs({ type: ["submit_failed", "api"] });
    expect(res.logs).to.be.an("array");
    let checkAllResults = res.logs.every((log) => (log.type == "submit_failed" || log.type == "api"));
    expect(checkAllResults).to.be.true;
  });

  it('limits numbers logs ', async () => {
    let res = await gopherClient.getLogs({ num: 10 });
    expect(res.logs).to.be.an("array");
    expect(res.logs.length).to.equal(10);
  });

  it('only gets recent logs', async function () {
    // Dynamic date breaks mocked network requests
    if (!process.env.NOCK_OFF) {
      this.skip();
    }
    let since = Math.round(Date.now() / 1000 - (60 * 60 * 24 * 60));
    let res = await gopherClient.getLogs({ since });
    expect(res.logs).to.be.an("array");
    let allDates = res.logs.map(log => new Date(log.date).getTime());
    let checkResults = allDates.every((date) => date > since * 1000)
    expect(checkResults).to.be.true;
  }); 

  it("should get user logs of various types", async () => {
    let res = await gopherClient.getLogs({
      type: ["api", "webhook", "submit_failed"]
    });
    expect(res.logs).to.be.an("array");
  });

  it("should get only api type logs", async () => {
    let res = await gopherClient.getLogs;
  });
});
