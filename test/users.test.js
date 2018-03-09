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

const debug = require("debug")("gopherhq");
timestamp.round = true;

let gopherClient = getGopherClient();

describe("Users", function() {
  testConfig.call(this);
  beforeEach(beforeEachTest);

  let userEmail;
  if (process.env.REBUILD_MOCKS) {
    userEmail = Math.floor(Math.random() * 10000) + "@example.com";
  } else {
    userEmail = "4068@example.com"; //: Math.floor(Math.random() * 10000) + "@example.com";
  }

  let password = "fdsafdsa";

  it("should create a new user", async () => {
    let createRes = await gopherClient.createUser({
      email: userEmail,
      password: password,
      name: "",
      timezone: ""
    });
    expect(createRes.statusCode).to.equal(200);
  });

  it("should get the logged in user", async () => {
    let createRes = await gopherClient.getLoggedInUser();
    expect(createRes.statusCode).to.equal(200);
  });

  it("should login a new user", async () => {
    let loginRes = await gopherClient.login({
      email: userEmail,
      password: password
    });
    expect(loginRes.statusCode).to.equal(200);
    expect(loginRes.user.token).to.have.property("access_token");
  });

  it("should let new user reset their password ", async () => {
    let res = await gopherClient.resetPassword({
      email: userEmail
    });
    expect(res.statusCode).to.equal(200);
  });

  it("should get user logs", async () => {
    let res = await gopherClient.getLogs();
    expect(res.logs).to.be.an("array");
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
