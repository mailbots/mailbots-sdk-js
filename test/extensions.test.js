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

  it("should send an extension event", done => {
    gopherClient
      .sendEvent({
        // TODO: Pull event url from installed extension. This test will fail
        event_url:
          "http://local-gopher.ngrok.io/api/v1/extension_event/226/dde79d075661874a/",
        type: "test.event",
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
