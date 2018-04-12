require("dotenv").config({ path: "./test/.env" });
import nock from "nock";
import fs from "fs";
import Gopher from "../../src/gopherhq.js"; //TODO test browser + node versions separately
import { join } from "path";
require("./nockMocks");
import crypto from "crypto";

const apiHost = process.env.API_HOST;
const accessToken = process.env.ACCESS_TOKEN;
let exampleTask = {};
let gopherClient = {};

/**
 * Simulate API Requests
 * We use Nock to mock network requests to make our tests speedy.
 * By default this is on, so testing the API never actually hits Gopher.
 * To run tests against an instance of Gopher and rebuild the mocks:
 *   1. Modify your .env to point to an install of Gopher. (Copy access token from cookie.)
 *   2. `npm test:build` This will delete and rebuild nockMocks.js
 */

function recordNockMocks() {
  let mockRequestsFile = join(__dirname, "./nockMocks.js");
  function customNockLogger(output) {
    fs.appendFileSync(mockRequestsFile, output, (err, success) => {
      if (err) console.log("Error writing to network mock file:", err);
    });
    console.log("request added to nock mocks...");
  }

  if (fs.existsSync(mockRequestsFile)) {
    fs.unlinkSync(mockRequestsFile);
  }
  fs.appendFileSync(
    mockRequestsFile,
    `//auto-generated file
    \nvar nock = require('nock');
    \n//pass through unhandled requests
    \nnock("http://local.gopher.email:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');` // allow unmocked requests to pass through
  );
  nock.recorder.rec({ use_separator: false, logging: customNockLogger });
}

if (process.env.REBUILD_MOCKS) {
  recordNockMocks(); // regenerate tests/nockMocks.js. TODO: Better switch to regenerate test. Note that user email address must also be new.
  process.env.NOCK_OFF = true; //uncomment to hit a live API
}

/**
 * Get an instance of gopherClient
 */
module.exports.getGopherClient = function() {
  let gopherClient = new Gopher({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    extensionName: process.env.EXTENSION_NAME,
    scope: process.env.SCOPE,
    apiHost: apiHost,
    tokenHost: apiHost,
    tokenPath: apiHost + "/api/v1/oauth2/access_token",
    authorizePath: apiHost + "/settings/oauth2_authorize"
  });
  gopherClient.setAccessToken(accessToken);
  return gopherClient;
};

module.exports.getExampleTask = async function() {
  if (exampleTask && exampleTask.id) {
    return exampleTask;
  }

  gopherClient = module.exports.getGopherClient();

  let { task } = await gopherClient.createTask({
    suppress_webhook: true,
    task: {
      command: process.env.EXAMPLE_COMMAND,
      reference_email: {
        server_recipient: process.env.EXAMPLE_COMMAND
      }
    },
    send_messages: [
      {
        type: "email",
        subject: "A test email message",
        to: "test@example.com",
        body: [
          {
            type: "html",
            text: "<h1>This is a test</h1>"
          }
        ]
      }
    ]
  });
  exampleTask = task;
  return exampleTask;
};

module.exports.signWebhook = function(webhook) {
  return crypto
    .createHmac("sha256", webhook.webhookTimestamp + process.env.CLIENT_SECRET)
    .update(webhook.rawBody)
    .digest("hex");
};

module.exports.sleep = function sleep(time) {
  console.log("...sleeping");
  return new Promise(resolve => setTimeout(resolve, time));
};

module.exports.beforeEachTest = async function() {
  if (process.env.THROTTLE) await module.exports.sleep(500);
};

// make sure to bind 'this'. ex: testConfig.call(this)
module.exports.testConfig = function() {
  this.timeout(40000);
};

module.exports.getRandomString = function() {
  return Math.floor(Math.random() * 100000000).toString(16);
};
