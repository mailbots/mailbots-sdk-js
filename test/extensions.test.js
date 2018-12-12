import {
   getMailBotsClient,
  getRandomString
} from "./testUtils/mbTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
const debug = require("debug")("mailbots-sdk");

let mbClient =  getMailBotsClient();
let extensionId;
let extensionName = getRandomString(); // TODO: Cache the generated extensoin name

describe("Extensions", function() {
  it("should save user-level data extension save data", done => {
    mbClient.saveExtensionData({ three: "more" }, (err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });

  it("should get data about itself", done => {
    mbClient.extensionGetSelf((err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.extension.event_url).to.be.a("String");
      done();
    });
  });

  it("should send an extension event", done => {
    mbClient
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
    mbClient.getExtensionData((err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });
});
