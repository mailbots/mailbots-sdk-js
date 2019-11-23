"use strict";

var _util = require("./util");

var _unixTimestamp = _interopRequireDefault(require("unix-timestamp"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  validateWebhook: function validateWebhook(webhookSignature, webhookTimestamp, rawBody) {
    var verifyAge = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var generatedSig = _crypto["default"].createHmac("sha256", webhookTimestamp + this.config.clientSecret).update(rawBody).digest("hex");

    (0, _util.debug)("validateWebhook: rawBody", rawBody);
    (0, _util.debug)("validateWebhook: clientSecret", this.config.clientSecret);
    (0, _util.debug)("validateWebhook: generatedSig", generatedSig);
    (0, _util.debug)("validateWebhook: webhookSig", webhookSignature);
    if (generatedSig !== webhookSignature) return false;
    var hookAge = _unixTimestamp["default"].now() - webhookTimestamp;

    if (hookAge > 900 && verifyAge) {
      (0, _util.debug)("validateWebhook: failed age check: ", hookAge);
      return false;
    }

    (0, _util.debug)("validateWebhook: webhook validated!");
    return true;
  }
};