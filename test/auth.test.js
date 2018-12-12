import {
   getMailBotsClient,
} from "./testUtils/mbTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
import timestamp from "unix-timestamp";

const debug = require("debug")("mailbots-sdk");
timestamp.round = true;

const mbClient =  getMailBotsClient();

describe("Auth", function() {
  it("should build a login URL", () => {
    expect (mbClient.getAuthorizationUri().uri).to.be.a("string");
  });
});
