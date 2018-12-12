import querystring from "querystring";
import crypto from "crypto";
import urljoin from "url-join";

import Tasks from "./tasks";
import Users from "./users";
import Webhooks from "./webhooks";
import Auth from "./auth";
import Extensions from "./extensions";
import Logs from "./logs";

import { debug, _makeRequest, _checkParam, _extend } from "./util";

let OAuth2;
let context = "browser";
let server = false;

// This block is removed by babel when it compiles the client lib (see package.json)
if (process.env.SERVER) {
  context = "server";
  OAuth2 = require("simple-oauth2");
}

class MailBotsClient {
  constructor(config) {
    if (!(this instanceof MailBotsClient)) return new MailBotsClient(config);

    if (context === "browser" && this.clientSecret) {
      throw "SECURITY ERROR: clientSecret should only be stored the server.";
    }

    this.config = config;
    this.configDefaults = {
      clientId: "",
      clientSecret: "",
      redirectUri: "",
      scope: "",
      state: "",
      apiHost: "https://api.mailbots.com",
      tokenHost: "https://api.mailbots.com",
      tokenPath: "https://api.mailbots.com/api/v1/oauth2/access_token",
      authorizePath: "https://api.mailbots.com/settings/oauth2_authorize"
    };

    this.config = Object.assign(this.configDefaults, this.config);
    this.config.state = Math.random()
      .toString(36)
      .substring(7);
    debug("settings: ", this.config);

    // Bearer token used in Auth header. Ex: curl url -h "Authorization: Bearer accessToken"
    this._accessToken = "";
  }

  /*
   *  Auth: Manually set access token if we already have it (ie, in a cookie, webhook, etc)
   */
  setAccessToken(accessToken) {
    this._accessToken = accessToken;
  }

  /*
   * Populates an OAuth2 client that should ONLY BE USED ON THE SERVER.
   * @return oauth2 client (simple-oauth2)
   */
  _getSecureOAuthClient() {
    _checkParam(this.config.clientSecret, "clientSecret");
    _checkParam(this.config.clientId, "clientId");
    _checkParam(this.config.redirectUri, "redirectUri");
    _checkParam(this.config.scope, "scope");

    return OAuth2.create({
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
  }

  /**
   * Low-level function to make authenticated request to MailBots API
   * @param {object} requestOptions - Axiox-compatible request ooptions
   * @param {function} [cb] - Optional callback.
   * @return {Promise}
   */
  makeRequest(requestOptions, cb) {
    return _makeRequest(requestOptions, cb);
  }
}

_extend(MailBotsClient, Tasks);
_extend(MailBotsClient, Users);
_extend(MailBotsClient, Webhooks);
_extend(MailBotsClient, Auth);
_extend(MailBotsClient, Extensions);
_extend(MailBotsClient, Logs);

module.exports = MailBotsClient;

if (process.env.SERVER) {
  global.window = {};
}
window.MailBotsClient = MailBotsClient;
