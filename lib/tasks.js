"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /*
   * Get List of Gopher Tasks
   */
  getTasks: function getTasks(params, cb) {
    var requestOptions = {
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/?", _querystring2.default.stringify(params)),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      json: true
    };
    (0, _util.debug)("Request options for getting followups:", requestOptions);
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
   * Fetch A Single Gopher Task
   */
  getTask: function getTask(taskId, cb) {
    if (typeof taskId != "number") throw new Error("taskId must be an integer. This was given instead:", taskId);
    var requestOptions = {
      url: this.config.apiHost + "/api/v1/tasks/" + taskId + "/",
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
   * Create A Gopher Task
   */
  createTask: function createTask(params, cb) {
    var urlParams = {};
    if (params.verbose) {
      urlParams.verbose = 1;
    }
    var serializedParams = _querystring2.default.stringify(urlParams);
    var qs = serializedParams ? "?" + serializedParams : "";
    var requestOptions = {
      method: "POST",
      url: this.config.apiHost + "/api/v1/tasks/" + qs,
      headers: {
        Authorization: "Bearer " + this._accessToken,
        // "Content-Type": "application/json; charset=UTF-8"
        "Content-Type": "application/json"
      },
      data: params,
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
    * Update A Gopher Task
    * Used to save data against the task, update content, followup time and more
    */
  updateTask: function updateTask(taskId, params, cb) {
    var requestOptions = {
      method: "PUT",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: params,
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
    * Delete / Archive A Gopher Task
    */
  archiveTask: function archiveTask(taskId, cb) {
    var requestOptions = {
      method: "DELETE",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", taskId, "/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: { task: { permanent: permanent } },
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /**
   * Trigger a Gopher Task
   */
  triggerTask: function triggerTask(params, cb) {
    if (!params.trigger_url) {
      return new Error("trigger_url is required");
    }

    var requestOptions = {
      method: "POST",
      url: params.trigger_url,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      json: true
    };

    if (params.payload) {
      Object.assign(requestOptions, { form: params.payload });
    }

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: "Bearer " + this._accessToken
      });
    }
    console.log(requestOptions);
    return (0, _util._makeRequest)(requestOptions);
  },


  /*
   * Resolve Natural Time Format (ex: {naturaltime}@ext.gopher.email)
   */
  naturalTime: function naturalTime(params, cb) {
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/natural_time", "?" + _querystring2.default.stringify(params)),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};