import {
   getMailBotsClient,
  signWebhook,
  beforeEachTest,
  testConfig
} from "./testUtils/mbTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
import timestamp from "unix-timestamp";

timestamp.round = true;
const debug = require("debug")("mailbots-sdk");

let mbClient =  getMailBotsClient();

describe("Webhooks", function() {
  testConfig.call(this);
  beforeEach(beforeEachTest);

  it("should validate a proper webhook", () => {
    let webhookTimestamp = timestamp.now();
    let rawBody = JSON.stringify({ foo: "bar" });
    let verifyAge = true;
    let webhookSignature = signWebhook({ rawBody, webhookTimestamp });

    let webhookVaild = mbClient.validateWebhook(
      webhookSignature,
      webhookTimestamp,
      rawBody
    );

    expect(webhookVaild).to.be.true;
  });

  it("should fail an old webhook", () => {
    let webhookTimestamp = timestamp.now() - 100000;
    let rawBody = JSON.stringify({ foo: "bar" });
    let verifyAge = true;
    let webhookSignature = signWebhook({ rawBody, webhookTimestamp });

    let webhookVaild = mbClient.validateWebhook(
      webhookSignature,
      webhookTimestamp,
      rawBody
    );

    expect(webhookVaild).to.be.false;
  });
});
