require("dotenv").config({ path: "./test/.env" });
import nock from "nock";
import fs from "fs";
import Gopher from "../../src/gopherhq-node.js";
import { join } from "path";
require("./nockMocks");
import crypto from "crypto";

const apiHost = process.env.API_HOST;
const accessToken = process.env.ACCESS_TOKEN;
let exampleTask = {};
let gopherClient = {};

/**
 * Mock API Requests
 * We use Nock to mock network requests to ensure speedy tests.
 * To run tests against an instance of Gopher and rebuild the mocks:
 *   1. Modify your .env to point to an install of Gopher. Copy access token from cookie
 *   2. `npm test:build` This will delete nockMocks.js and repopulate
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
    `//auto-generated file \nvar nock = require('nock');`
  );
  nock.recorder.rec({ use_separator: false, logging: customNockLogger });
}

if (process.env.BUILD_MOCKS) {
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
    extensionUrl: process.env.REDIRECT_URI,
    scope: process.env.SCOPE,
    apiHost: apiHost,
    tokenHost: apiHost,
    tokenPath: apiHost + "/api/v1/oauth2/access_token",
    authorizePath: apiHost + "/settings/oauth2_authorize"
  });
  gopherClient.setAccessToken(accessToken);
  return gopherClient;
};

module.exports.getExampleTask = function() {
  if (exampleTask.hasOwnProperty("id")) {
    return Promise.resolve(exampleTask);
  }

  gopherClient = module.exports.getGopherClient();

  return gopherClient
    .createTask({
      task: {
        command: process.env.EXAMPLE_COMMAND,
        reminder_timeformat: "1sec",
        reference_email: {
          server_recipient: process.env.EXAMPLE_COMMAND,
          to: [process.env.EXAMPLE_COMMAND],
          cc: [],
          bcc: [],
          from: "bar@bar.email",
          subject: "Test1",
          html: "Test1",
          text: "Test1",
          attachments: []
        },
        private_data: {
          privatedata1: "Value1"
        }
      }
    })
    .then(res => {
      exampleTask = res.task;
      return res;
    })
    .catch(err => {
      return new Error("error creating example task");
    });
};

module.exports.signWebhook = function(webhook) {
  return crypto
    .createHmac("sha256", webhook.webhookTimestamp + process.env.CLIENT_SECRET)
    .update(webhook.rawBody)
    .digest("hex");
};

module.exports.sleep = function sleep(time) {
  console.log("sleeping for", time);
  return new Promise(resolve => setTimeout(resolve, time));
};
