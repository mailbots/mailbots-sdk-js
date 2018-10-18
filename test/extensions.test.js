import {
  getGopherClient,
  getExampleTask,
  getRandomString,
  beforeEachTest,
  testConfig
} from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
const debug = require("debug")("gopherhq");

let gopherClient = getGopherClient();
let extensionId;
let extensionName = getRandomString(); // TODO: Cache the generated extensoin name

describe("Extensions", function() {
  it("should save user-level data extension save data", done => {
    gopherClient.saveExtensionData({ three: "more" }, (err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });

  it("should get data about itself", done => {
    gopherClient.extensionGetSelf((err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.extension.event_url).to.be.a("String");
      done();
    });
  });

  it.only("should send an extension event", done => {
    gopherClient
      .sendEvent({
        event_url: process.env.EXAMPLE_EXTENSION_EVENT_URL,
        type: "github.issue.opened",
        payload: { foo: "bar" }
      })
      .then(res => {
        expect(res.statusCode).to.equal(200);
        done();
      })
      .catch(done);
  });

  it("should let an extension get data", done => {
    gopherClient.getExtensionData((err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });
});
