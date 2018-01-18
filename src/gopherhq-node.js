import querystring from "querystring";
import crypto from "crypto";
import urljoin from "url-join";
import timestamp from "unix-timestamp";
timestamp.round = true;

import Tasks from "./tasks";
import Users from "./users";
import Webhooks from "./webhooks";
import Auth from "./Auth";

import { debug, _makeRequest, _checkParam, _extend } from "./util";

class Gopher {
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

  /*
   *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
   *  When a new instance is instantiated, we can inject the access token (ie, stored in a cookie..I)
   */
  setAccessToken(accessToken) {
    this._accessToken = accessToken;
  }
}

_extend(Gopher, Tasks);
_extend(Gopher, Users);
_extend(Gopher, Webhooks);
_extend(Gopher, Auth);

// Not in the ES6 way, but works with both: require('...') and import foo from "..."
module.exports = Gopher;
