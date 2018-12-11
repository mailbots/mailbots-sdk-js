import {
  getGopherClient,
  getExampleTask,
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

describe("Users", function() {
  this.timeout(5000);
  let userEmail;
  if (process.env.REBUILD_MOCKS) {
    userEmail = Math.floor(Math.random() * 10000) + "@example.com";
  } else {
    userEmail = "4068@example.com"; //: Math.floor(Math.random() * 10000) + "@example.com";
  }

  let password = "fdsafdsa";

  it("should get the logged in user", async () => {
    let createRes = await gopherClient.getLoggedInUser();
    expect(createRes.statusCode).to.equal(200);
  });

  it("should get user data", async () => {
    let res = await gopherClient.getExtensionData();
    expect(res.statusCode).to.equal(200);
  });

  it("should save user data", async () => {
    let res = await gopherClient.saveExtensionData({ foo: "bar" });
    expect(res.statusCode).to.equal(200);
  });

  it("should send an invite from an authorized user", async () => {
    let res = await gopherClient.invite("test@example.com");
    expect(res.statusCode).to.equal(200);
  });

  it("should send an invite from an anonymous user", async () => {
    gopherClient._accessToken = null;
    let res = await gopherClient.invite("test@example.com");
    expect(res.statusCode).to.equal(200);
  });

  it("should send invites to an array of users", async () => {
    let res = await gopherClient.invite([
      "blackhole@example.com",
      "blackhole2@example.com"
    ]);
    expect(res.statusCode).to.equal(200);
  });
});
