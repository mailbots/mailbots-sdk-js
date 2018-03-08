import querystring from "query-string";
import urljoin from "url-join";
import { _makeRequest, _checkParam, debug } from "./util";

export default {
  /*
   * Get List of Gopher Tasks
   */
  getTasks(params, cb) {
    let availableFilters = [
      "extensions",
      "filters",
      "search",
      "order_by",
      "order_dir"
    ];
    for (let key in params) {
      if (availableFilters.indexOf(key) === -1) {
        throw new Error(
          "Tasks can only be filtered by these attributes: " +
            JSON.stringify(availableFilters)
        );
      }
    }
    let qs = params
      ? `?${querystring.stringify(params, { arrayFormat: "bracket" })}`
      : "";
    const requestOptions = {
      url: urljoin(this.config.apiHost, "/api/v1/tasks", qs),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    debug("Request options for getting followups:", requestOptions);
    return _makeRequest(requestOptions, cb);
  },

  /*
   * Fetch A Single Gopher Task
   */
  getTask(params, cb) {
    if (typeof params.id != "number")
      throw "id must be an integer. This was given instead: " + params.id;
    const requestOptions = {
      url: `${this.config.apiHost}/api/v1/tasks/${params.id}/`,
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
   * Create A Gopher Task
   */
  createTask(params, cb) {
    let urlParams = {};
    if (params.verbose) {
      urlParams.verbose = 1;
    }
    let serializedParams = querystring.stringify(urlParams);
    let qs = serializedParams ? `?${serializedParams}` : "";
    const requestOptions = {
      method: "POST",
      url: `${this.config.apiHost}/api/v1/tasks/${qs}`,
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        // "Content-Type": "application/json; charset=UTF-8"
        "Content-Type": "application/json"
      },
      data: params,
      json: true
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
    * Update A Gopher Task
    * Used to save data against the task, update content, followup time and more
    */
  updateTask(params, cb) {
    if (!params.task.id) throw "taskid is required to update a task";
    const requestOptions = {
      method: "PUT",
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", params.task.id, "/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: params,
      json: true
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
    * Archive A Gopher Task
    */
  archiveTask(params, cb) {
    if (!params.task.id) throw "taskid is required to archive a task";
    const requestOptions = {
      method: "DELETE",
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", params.task.id),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
    * Permanently Delete A Gopher Task
    */
  deleteTask(params, cb) {
    if (!params.task.id) throw "taskid is required to delete a task";
    const requestOptions = {
      method: "DELETE",
      url: urljoin(
        this.config.apiHost,
        "/api/v1/tasks/",
        params.task.id,
        "?permanent=1"
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  },

  /**
   * Trigger a Gopher Task
   */
  triggerTask(params, cb) {
    if (!params.trigger_url) {
      return new Error("trigger_url is required");
    }

    const requestOptions = {
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
        Authorization: `Bearer ${this._accessToken}`
      });
    }
    return _makeRequest(requestOptions);
  },

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
  },

  /*
   * Developer can simulate an action email with this method 
   * (For use only by Gopher Admin app in developer sandbox)
   * TODO
   */
  devSendAction(params, cb) {
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/actions/?verbose=1"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: JSON.stringify({
        action: params.action,
        reference_email: params.reference_email
      })
    };
    return _makeRequest(requestOptions, cb);
  }
};
