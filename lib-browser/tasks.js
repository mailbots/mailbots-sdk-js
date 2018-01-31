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
  getTask: function getTask(params, cb) {
    if (typeof params.id != "number") throw "id must be an integer. This was given instead: " + params.id;
    var requestOptions = {
      url: this.config.apiHost + "/api/v1/tasks/" + params.id + "/",
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
  updateTask: function updateTask(params, cb) {
    if (!params.task.id) throw "taskid is required to update a task";
    var requestOptions = {
      method: "PUT",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", params.task.id, "/"),
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
  triggerTask: function triggerTask(params) {
    if (!params.trigger_url) {
      return new Error("trigger_url is required");
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
  },


  /*
   * Developer can simulate an action email with this method 
   * (For use only by Gopher Admin app in developer sandbox)
   * TODO
   */
  devSendAction: function devSendAction(params, cb) {
    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/actions/?verbose=1"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: JSON.stringify({
        action: params.action,
        reference_email: params.reference_email
      })
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};