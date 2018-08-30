"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Send an Event to the extension. This does not require
   * and auth token because the endpoint is meant for 3rd
   * party services. Ex: issue created in Github, or an
   * email response or support ticket received. The Gopher
   * Extension can listen for events, act on tasks or
   * create or delete tasks based on events.
   * @param {object}  params params
   * @returns {Promise}
   *
   * @example
   * const res = await gopherClient.sendEvent({type: 'event.type', payload: {"foo", "bar"}, event_url: "[unique_event_url]"});
   */
  sendEvent: function sendEvent(params, cb) {
    if (!params.event_url) {
      throw new Error("event_url is required");
    }
    if (!params.type) {
      throw new Error("event type is required");
    }

    var requestOptions = {
      method: "POST",
      url: params.event_url + ("?type=" + params.type),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };

    if (params.payload) {
      Object.assign(requestOptions, { data: params.payload });
    }

    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /**
   * Save Gopher extension data which is sent with every webhook related to that extension.
   * This is how an extension persist's user settings specific to that extension.
   * For params and details, see [extension saving data API docs](https://postman.gopheremail.com/#7f9bfa6c-a673-4104-9be9-1ada487c300e)
   * @param {object} data Nestable key value value pairs
   * @returns {Promise}
   *
   * @example
   * const res = await gopherClient.saveExtensionData({ foo: "bar" });
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


  /**
   * Get saved Gopher extension data
   * For params and details, see [extension get data API docs](https://postman.gopheremail.com/#f98b6862-9059-4d4f-931b-78d554e8a4e7)
   * @example
   * const res = await gopherClient.getExtensionData();
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