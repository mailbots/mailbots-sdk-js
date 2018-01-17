let OAuth2;
if (!global.document) {
  OAuth2 = require("simple-oauth2");
}

import querystring from "querystring";

import timestamp from "unix-timestamp";
timestamp.round = true;

import crypto from "crypto";
import urljoin from "url-join";

import GopherTasks from "./tasks"; // let's test
import { debug, _makeRequest, _checkParam, _extend } from "./util"

/**
 * Traditional constructor (es5)
 */
class Gopher {
  // The constructor should remain here, obviously
  constructor(config) {
    if (!(this instanceof Gopher)) return new Gopher(config);
    _checkParam(config.clientId, "clientId");

    this.config = config;
    this.configDefaults = {
      clientId: "",
      clientSecret: "",
      redirectUri: "",
      scope: "",
      state: "",
      apiHost: "https://www.gopher.email",
      tokenHost: "https://www.gopher.email",
      tokenPath: "https://www.gopher.email/api/v1/oauth2/access_token",
      authorizePath: "https://www.gopher.email/settings/oauth2_authorize"
    };

    this.config = Object.assign(this.configDefaults, this.config);
    this.config.state = Math.random()
      .toString(36)
      .substring(7);
    debug("settings: ", this.config);

    // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
    this._accessToken = "";
  }
// then, whatever you want to split, you can move in separate files, the way we moved Tasks

// If you have an inheritation case (e.g. Person --> Student)
// class Person { sayHello () {}}
// class Student extends { doHomework () {}}
// yes, I'm familiar...and we don't have that situation
// so what you propose here is perfect
// reviewing a few other methods to see if I have other questions

  /*
   *  Validates webhook signature. Set verifyAge to false when testing / mocking HTTP requests
   *  (Node only) - The core API posts webhooks to extensions as one of the main functions. This is obviously server-side only.
   */
  validateWebhook(webhookSignature, webhookTimestamp, rawBody, verifyAge = true) {
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

  /**
   * These are all just REST calls from here down to....
   */


  /*
   * Resolve Natural Time Format (ex: {naturaltime}@ext.gopher.email)
   */
  naturalTime(params, cb) {
    const requestOptions = {
      method: "GET",
      url: urljoin(
        this.config.apiHost,
        "/api/v1/natural_time",
        `?${querystring.stringify(params)}`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
   * Invite users to this extension. If an Auth token is included, the invitation email
   * includes the name of the inviting person.
   */
  invite(emails, cb) {
    const requestBody = {
      // extension: this.config.extensionName,
      client_id: this.config.clientId,
      email_address: emails
    };
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/invites/"),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: requestBody
    };

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: `Bearer ${this._accessToken}`
      });
    }

    return _makeRequest(requestOptions, cb);
  }


  /*
   * Save Gopher Extension Data which is then sent with every webhook related to that extension.
   */

  saveExtData(data, cb) {
    if (typeof data != "object") throw new Error("data must be an object");

    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data
    };
    return _makeRequest(requestOptions, cb);
  }

  /*
   * Get Gopher Extension-Wide Data
   */
  getExtData(cb) {
    const requestOptions = {
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }

  /**
   * These are auth helpers..also rest calls, but specialized for the OAuth2 dance
   */

  /*
   *  Auth: Build initial AOuth2 login link (Node Only)
   */
  getAuthorizationUri() {
    _checkParam(this.config.clientSecret, "clientSecret");
    _checkParam(this.config.redirectUri, "redirectUri");
    _checkParam(this.config.scope, "scope");

    const oauth2 = OAuth2.create({
      client: {
        id: this.config.clientId,
        secret: this.config.clientSecret
      },
      auth: {
        tokenHost: this.config.tokenHost,
        tokenPath: this.config.tokenPath,
        authorizePath: this.config.authorizePath
      }
    });

    const authorizationUri = oauth2.authorizationCode.authorizeURL({
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope,
      state: this.config.state
    });
    debug("auth uri: ", authorizationUri);
    return { state: this.config.state, uri: authorizationUri };
  }

  /*
   *  Auth: After user has Authorized extension with Gopher, fetch access token (Node Only)
   */
  getAccessToken(authCode, cb) {
    return new Promise((resolve, reject) => {
      debug("Auth code from auth uri used to retrive auth token: ", authCode);

      const oauth2 = OAuth2.create({
        client: {
          id: this.config.clientId,
          secret: this.config.clientSecret
        },
        auth: {
          tokenHost: this.config.tokenHost,
          tokenPath: this.config.tokenPath,
          authorizePath: this.config.authorizePath
        }
      });

      const options = {
        code: authCode,
        redirect_uri: this.config.redirectUri,
        client_id: this.config.clientId
      };

      oauth2.authorizationCode.getToken(options, (error, result) => {
        if (error) {
          debug("Access token error", error.message);
          if (cb) cb(new Error("Authentication failed"));
          return reject("Authentication failed");
        }

        const tokenDetails = oauth2.accessToken.create(result);
        debug("success! auth token: ", tokenDetails.token);
        this._accessToken = tokenDetails.token.access_token;
        if (cb) cb(null, tokenDetails.token.access_token);
        return resolve(tokenDetails.token.access_token);
      });
    });
  }

  /*
   *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
   *  When a new instance is instantiated, we can inject the access token (ie, stored in a cookie..I)
   */
  setAccessToken(accessToken) {
    this._accessToken = accessToken;
  }
}

_extend(Gopher, GopherTasks)

// Not in the ES6 way, but works with both: require('...') and import foo from "..."
module.exports = Gopher;
