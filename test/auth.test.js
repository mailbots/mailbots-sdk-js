import {
  getGopherClient,
} from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import timestamp from "unix-timestamp";

const debug = require("debug")("gopherhq");
timestamp.round = true;

const gopherClient = getGopherClient();

describe("Auth", function() {
  it("should build a login URL", () => {
    expect(gopherClient.getAuthorizationUri().uri).to.be.a("string");
  });
});
