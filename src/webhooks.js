import { debug } from "./util";
import timestamp from "unix-timestamp";
import crypto from "crypto";

module.exports = {
  /**
   * Validate webhook signature.
   * Set verifyAge to false when testing / mocking HTTP requests. (Server side only)
   * @param {string} webhookSignature
   * @param {number} webhookTimestamp - Unix Timestamp of webhook.  Used to prevent reply attack
   * @param {string} rawBody - Unprocessed http post body
   * @param {boolean} [verifyAge] - Use for automated testing
   * @return {boolean} - Pass / fail webhook validation
   *
   */
  validateWebhook(
    webhookSignature,
    webhookTimestamp,
    rawBody,
    verifyAge = true
  ) {
    let generatedSig = crypto
      .createHmac("sha256", webhookTimestamp + this.config.clientSecret)
      .update(rawBody)
      .digest("hex");
    debug("validateWebhook: rawBody", rawBody);
    debug("validateWebhook: clientSecret", this.config.clientSecret);
    debug("validateWebhook: generatedSig", generatedSig);
    debug("validateWebhook: webhookSig", webhookSignature);
    if (generatedSig !== webhookSignature) return false;

    let hookAge = timestamp.now() - webhookTimestamp;
    if (hookAge > 900 && verifyAge) {
      debug("validateWebhook: failed age check: ", hookAge);

      return false;
    }
    debug("validateWebhook: webhook validated!");
    return true;
  }
};
