import { getGopherClient, signWebhook } from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq-node";
import timestamp from "unix-timestamp";

timestamp.round = true;
const debug = require("debug")("gopherhq-node");

let gopherClient = getGopherClient();

describe("Webhooks", () => {
  it("should validate a proper webhook", () => {
    let webhookTimestamp = timestamp.now();
    let rawBody = JSON.stringify({ foo: "bar" });
    let verifyAge = true;
    let webhookSignature = signWebhook({ rawBody, webhookTimestamp });

    let webhookVaild = gopherClient.validateWebhook(
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

    let webhookVaild = gopherClient.validateWebhook(
      webhookSignature,
      webhookTimestamp,
      rawBody
    );

    expect(webhookVaild).to.be.false;
  });
});
