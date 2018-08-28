"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Trigger an extension. For example, when an extension is listening for
   * a specific event.
   */
  triggerExtension: function triggerExtension(params) {
    if (!params.trigger_url) {
      throw new Error("trigger_url is required");
    }

    var requestOptions = {
      method: "POST",
      url: params.trigger_url,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };

    if (params.payload) {
      Object.assign(requestOptions, { data: params.payload });
    }

    if (params.verbose) {
      requestOptions.url += "?verbose=1";
    }

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: "Bearer " + this._accessToken
      });
    }
    return (0, _util._makeRequest)(requestOptions);
  },


  /**
   * Broadcast event.
   * @param data.type {string} arbitrary event type: Ex: "email.received"
   * @param data.task_hash {string} If included, req / res is specific to that task
   * @param data.payload {object} json object data passsed to extension
   * TODO: Allow broadcast with clientid + secret instead of access token
   */
  broadcastEvent: function broadcastEvent(data) {
    var extensionid = data.extensionid || "self";
    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/" + extensionid + "/broadcast_event/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: data
    };

    if (data.verbose) {
      requestOptions.url += "?verbose=1";
    }

    return (0, _util._makeRequest)(requestOptions);
  },


  /*
   * Save Gopher Extension Data which is then sent with every webhook related to that extension.
   * This is also how an extension persist's user settings specific to that extension.
   */

  saveExtensionData: function saveExtensionData(data, cb) {
    if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != "object") throw new Error("data must be an object");

    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: data
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
   * Get Gopher Extension Data
   */
  getExtensionData: function getExtensionData(cb) {
    var requestOptions = {
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};