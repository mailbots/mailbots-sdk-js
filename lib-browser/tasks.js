"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a filtered list of Gopher tasks
 * @param {object} params  Arguments for API call
 * @param {function} [cb]  Optional callback function
 * @param {boolean} params.suppress_webhook  Prevent Gopher from firing the task.viewed webhook
 * @param {boolean} params.status Retrieve completed or open tasks
 *
 * @example
 * // Get all open tasks, sorted by due date
 * const res = await gopherClient.getTasks();
 * console.log(res.tasks);
 *
 * @example
 * // With a callback
 * gopherClient.getTasks({ limit: 1 }, (err, res) => {
 *     if (err) done(err);
 *     console.log(res.tasks);
 *   });
 */
function getTasks(params, cb) {
  var qs = params ? "?" + _queryString2.default.stringify(params, { arrayFormat: "bracket" }) : "";
  var requestOptions = {
    url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks", qs),
    headers: {
      Authorization: "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    json: true
  };
  (0, _util.debug)("Request options for getting followups:", requestOptions);
  return (0, _util._makeRequest)(requestOptions, cb);
}

exports.default = {
  getTasks: getTasks,

  /*
   * Fetch A Single Gopher Task
   */
  getTask: function getTask(params, cb) {
    if (typeof params.id != "number") throw "id must be an integer. This was given instead: " + params.id;
    var qs = params.verbose ? "?verbose=1" : "";
    var requestOptions = {
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", params.id, qs),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /**
   * Create A Gopher Task
   * Create a new Gopher Task.
   * @param {object}
   * @param {boolean} params.suppress_webhook  Prevent Gopher from firing the task.created webhook
   * @param {object} params.verbose Return rendered output of HTML email
   * @param {Task} params.task  Gopher Task object
   *
   * @example
   * const res = await gopherClient.createTask(
   *     {
   *       suppress_webhook: true,
   *       verbose: 1,
   *       task: {
   *         command: process.env.EXAMPLE_COMMAND
   *       },
   *       send_messages: [
   *         {
   *           type: "email",
   *           subject: "A test email message",
   *           to: "test@example.com",
   *           body: [
   *             {
   *               type: "html",
   *               text: "<h1>This is a test</h1>"
   *             }
   *           ]
   *         }
   *       ]
   *     });
   *
   */
  createTask: function createTask(params, cb) {
    var urlParams = {};
    if (params.verbose) {
      urlParams.verbose = 1;
    }
    var serializedParams = _queryString2.default.stringify(urlParams);
    var qs = serializedParams ? "?" + serializedParams : "";
    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", qs),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
        // "Content-Type": "application/json"
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
    * Archive A Gopher Task
    */
  completeTask: function completeTask(params, cb) {
    if (!params.task.id) throw "taskid is required to archive a task";
    var requestOptions = {
      method: "PUT",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", params.task.id),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: { task: { completed: true } },
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
    * Permanently Delete A Gopher Task
    */
  deleteTask: function deleteTask(params, cb) {
    if (!params.task.id) throw "taskid is required to delete a task";
    var requestOptions = {
      method: "DELETE",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/tasks/", params.task.id, "?permanent=1"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      },
      json: true
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /**
   * Trigger a Gopher Task
   */
  triggerTask: function triggerTask(params) {
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


  /*
   * Resolve Natural Time Format (ex: {naturaltime}@ext.gopher.email)
   */
  naturalTime: function naturalTime(params, cb) {
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/natural_time", "?" + _queryString2.default.stringify(params)),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
   * Dispatch a task action. Equivalent to sending an action email.
   */
  sendAction: function sendAction(params, cb) {
    var qs = params.verbose ? "?verbose=1" : "";
    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost, "/api/v1/actions", qs),
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