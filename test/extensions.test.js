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

  it.skip("should broadcast an extension event", done => {
    gopherClient
      .broadcastEvent({
        type: "test.event"
      })
      .then(res => {
        expect(res.status).to.equal("success");
      });
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
