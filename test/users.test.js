import {
   getMailBotsClient
} from "./testUtils/mbTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
import timestamp from "unix-timestamp";

const debug = require("debug")("mailbots-sdk");
timestamp.round = true;

let mbClient =  getMailBotsClient();

describe("Users", function() {
  this.timeout(5000);
  let userEmail;
  if (process.env.REBUILD_MOCKS) {
    userEmail = Math.floor(Math.random() * 10000) + "@example.com";
  } else {
    userEmail = "4068@example.com"; //: Math.floor(Math.random() * 10000) + "@example.com";
  }

  it("should get the logged in user", async () => {
    let createRes = await mbClient.getLoggedInUser();
    expect(createRes.statusCode).to.equal(200);
  });

  it("should get user data", async () => {
    let res = await mbClient.getExtensionData();
    expect(res.statusCode).to.equal(200);
  });

  it("should save user data", async () => {
    let res = await mbClient.saveExtensionData({ foo: "bar" });
    expect(res.statusCode).to.equal(200);
  });

  it("should send an invite from an authorized user", async () => {
    let res = await mbClient.invite("test@example.com");
    expect(res.statusCode).to.equal(200);
  });

  it("should send an invite from an anonymous user", async () => {
    mbClient._accessToken = null;
    let res = await mbClient.invite("test@example.com");
    expect(res.statusCode).to.equal(200);
  });

  it("should send invites to an array of users", async () => {
    let res = await mbClient.invite([
      "blackhole@example.com",
      "blackhole2@example.com"
    ]);
    expect(res.statusCode).to.equal(200);
  });
});
