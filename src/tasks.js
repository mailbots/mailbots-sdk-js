import querystring from "query-string";
import urljoin from "url-join";
import { _checkParam, debug } from "./util";

/**
 * Get a filtered list of MailBots tasks
 * @param {object} params  Arguments for API call
 * @param {function} [cb]  Optional callback function
 * @param {boolean} params.suppress_webhook  Prevent MailBots from firing the task.viewed webhook
 * @param {boolean} params.status Retrieve completed or open tasks
 * @return {Promise}
 *
 * @example
 * // Get all open tasks, sorted by due date
 * const res = await mbClient.getTasks();
 * console.log(res.tasks);
 *
 * @example
 * // With a callback
 * mbClient.getTasks({ limit: 1 }, (err, res) => {
 *     if (err) done(err);
 *     console.log(res.tasks);
 *   });
 */
function getTasks(params, cb) {
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
  return this.makeRequest(requestOptions, cb);
}

export default {
  getTasks,

  /**
   * Get a MailBots task
   * Passing ?verbose=1 fires a webhook to the extnesion and fetches a rendered
   * HTML email preview of the task
   * @param {object} params - request params
   * @param {number} params.id - taskid
   * @param {boolean} params.verbose - Fires webhook to bot, returns rendered HTML emails
   * in a "messages" array if the bot makes these available in the task.viewed webhook resopnse.
   * @return {Promise}
   *
   * @example const res = await getTask({id: 123});
   */
  getTask(params, cb) {
    if (typeof params.id != "number")
      throw "id must be an integer. This was given instead: " + params.id;
    let qs = params.verbose ? "?verbose=1" : "";
    const requestOptions = {
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", String(params.id), qs),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Create a new MailBots Task.
   * @param {object}
   * @param {boolean} params.webhook  Force MailBots to fire the task.created webhook and use its response
   * @param {object} params.verbose Return rendered output of HTML email
   * @param {object} params.suppress_email Prevent the API call from sending an email even if it has "send_messages"
   * @param {Task} params.task  MailBots Task object
   * @return {Promise}
   *
   * @example
   * const res = await mbClient.createTask(
   *     {
   *       webhook: false,
   *       suppress_email: true,
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
   *               html: "<h1>This is a test</h1>"
   *             }
   *           ]
   *         }
   *       ]
   *     });
   *
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
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", qs),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
        // "Content-Type": "application/json"
      },
      data: params,
      json: true
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Send email and automatically create a Task
   * This creates a MailBots task and sends an email. It's a wrapper
   * for createTask with opinionated settings for just sending email.
   *
   * @param {object} email - Email object. `command` and one recipient is required.
   * @return {Promise}
   * @example
   *  const res = await mbClient.sendEmail({
   *     command: "command@my-ext.eml.bot", // must be your bot's domain
   *     to: "test@exampletask.com",
   *     cc: [],
   *     bcc: [],
   *     from: "test@example.com",
   *     subject: "Test1",
   *     body: [
   *       {
   *         type: "html",
   *         text: "<h1>This is a test</h1>"
   *       }
   *     ]
   *   });
   */
  sendEmail(email, cb) {
    let emailBody;
    let referenceEmailBody;
    if (typeof email.body === "string") {
      referenceEmailBody = email.body;
      emailBody = [
        {
          type: "html",
          html: email.body
        }
      ];
    } else if (email.body instanceof Array) {
      referenceEmailBody = "";
      emailBody = email.body;
    } else {
      console.error(
        `Email body should be only a string or array, not  ${typeof email.body}`
      );
    }
    const taskParams = {
      verbose: !!email.verbose,
      webhook: false,
      task: {
        command: email.command,
        trigger_timeformat: email.trigger_timeformat || null,
        completed: !email.trigger_timeformat, // automatically complete
        reference_email: {
          to: email.to,
          cc: email.cc,
          bcc: email.bcc,
          subject: email.subject,
          html: referenceEmailBody
        }
      },
      send_messages: [
        {
          type: "email",
          to: email.to,
          cc: email.cc,
          bcc: email.bcc,
          subject: email.subject,
          body: emailBody
        }
      ]
    };

    return this.createTask(taskParams, cb);
  },

    /**
     * Send emails relating to an existing Task. Does not mutate task.
     * NOTE: This may be deprecated in favor of sending messages via the update task endpoint.
     * @param {object} params
     * @param {number} params.task.id
     * @param {Array} params.messages
     *
     * @example
     *  const res = await mbClient.sendMessages({
      *   task: {
      *     id: 123
      *   },
      *   send_messages: [{
      *     to: "test@exampletask.com",
      *     cc: [],
      *     bcc: [],
      *     from: "test@example.com",
      *     subject: "Test1",
      *     body: [
      *       {
      *         type: "html",
      *         text: "<h1>This is a test</h1>"
      *       }
      *     ]
      *   }]
      *  });
     */
    sendMessages(params, cb) {
      if(!params.task.id) throw new Error("task.id is required to send messages");
      if(!params.send_messages.length) throw new Error("send_messages requires at least one message");
      var requestOptions = {
        method: 'POST',
        url: urljoin(this.config.apiHost, `/api/v1/tasks/${params.task.id}/send-messages`),
        headers: {
          Authorization: 'Bearer ' + this._accessToken,
          "Content-Type": "application/json"
        },
        json: true,
        data: { send_messages: params.send_messages }
      };

      return this.makeRequest(requestOptions, cb);
    },

  /**
   * Update A MailBots Task
   * Used to save data against the task, update content, followup time and more
   * @param {object}
   * @param {object} params.task - Task object (see Create Task)
   * @param {number} params.task.id - Task id being updated
   * @param {string} [params.webhook] - Setting to true fires `task.updated` webhook
   * @return {Promise}
   *
   * @example
   *  const res = await mbClient.updateTask({
   *    task: {
   *     id: 1234,
   *     reference_email: {
   *       to: "newRecipient@exampletask.com"
   *     }
   *   }});
   */
  updateTask(params, cb) {
    if (!params.task.id) throw "task.id is required to update a task";
    const requestOptions = {
      method: "PUT",
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", String(params.task.id), "/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: params,
      json: true
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Archive A MailBots Task
   * @param {number} params - Arguments
   * @param {number} params.task - Task object
   * @param {number} params.task.id - Task id to complete
   * @return {Promise}
   *
   * @example
   */
  completeTask(params, cb) {
    if (!params.task.id) throw "task.id is required to archive a task";
    const requestOptions = {
      method: "PUT",
      url: urljoin(this.config.apiHost, "/api/v1/tasks/", String(params.task.id)),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: { task: { completed: true } },
      json: true
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Permanently Delete A MailBots Task
   * @param {object} params - Task to delete
   * @param {object} params.task - Task object
   * @param {number} params.task.id - Task id to delete
   * @return {Promise}
   */
  deleteTask(params, cb) {
    if (!params.task.id) throw "task.id is required to delete a task";
    const requestOptions = {
      method: "DELETE",
      url: urljoin(
        this.config.apiHost,
        "/api/v1/tasks/",
        String(params.task.id),
        "?permanent=1&webhook=1"
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      json: true
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Trigger a MailBots Task
   * @param {object} params
   * @param {boolean} params.trigger_url Trigger URL of the task to trigger (get from task object)
   * @param {boolean} [params.verbose] Fire webhook and render HTML email response
   * @return {Promise}
   */
  triggerTask(params, cb) {
    if (!params.trigger_url) {
      throw new Error("trigger_url is required");
    }

    // build query string + url
    let [url, qs] = params.trigger_url.split("?");
    if(!qs) qs = {};
    else qs = querystring.parse(qs)
    if (params.verbose) qs.verbose = 1;
    if (params.webhook) qs.webhook = params.webhook; // webhook = sync | async
    if (Object.keys(qs).length > 0) url = url + "?" + querystring.stringify(qs);

    const requestOptions = {
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };

    if (params.payload) {
      Object.assign(requestOptions, { data: params.payload });
    }

    // access token optional - tasks can be triggered from external sources
    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: `Bearer ${this._accessToken}`
      });
    }
    return this.makeRequest(requestOptions);
  },

  /**
   * Resolve Natural Time Format (ex: {naturaltime}@ext.eml.bot)
   * @param {object} params - params object
   * @param {string} params.format - Time format to check (ex: 3days)
   * @param {string} params.timezone - IANA timezone designation (https://www.wikiwand.com/en/List_of_tz_database_time_zones) ex: "America/Los_Angeles"
   * @return {Promise}
   */
  naturalTime(params, cb) {
    if (!params.format) {
      return { valid: false }
    }

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
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Dispatch an email-based action for a task. (Equivalent to sending an action email.)
   * @param {object} params
   * @param {string} params.action - The action string
   * @param {object} params.reference_email - The email that would be sent as the action email
   * @param {boolean} [params.verbose] - Include rendered HTML email contents in API response
   * @param {boolean} [params.open] - Call an open actions (when action starts with "ao+")
   * @return {Promise}
   */
  sendAction(params, cb) {
    let qs = params.verbose ? "?verbose=1" : "";
    let headers = {};
    headers["Content-Type"] = "application/json; charset=UTF-8";
    if (!params.open) headers.Authorization = `Bearer ${this._accessToken}`;
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/actions", qs),
      headers,
      data: JSON.stringify({
        action: params.action,
        reference_email: params.reference_email,
        gfr: params.gfr,
        gfrs: params.gfrs
      })
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Create a new task event.
   *
   * @param {object} params
   * @param {number} params.task.id - Id of the task
   * @param {string} params.type - The type of this event
   * @param {object} params.data - Data associated with this event.
   * @return {Promise}
   */
  createEvent(params, cb) {
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, `/api/v1/tasks/${params.task.id}/events`),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      data: JSON.stringify({
        type: params.type,
        data: params.data
      })
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Upload an attachment to a task.
   *
   * @param {object} params
   * @param {number} params.task.id - formdata object containing the file to be uploaded
   * @param {FormData} params.formData - formdata object containing the file to be uploaded
   * @return {Promise}
   */
  uploadTaskAttachment(params, cb) {
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, `/api/v1/tasks/${params.task.id}/attachments`),
      data: params.formData,
      headers: {
        Authorization: `Bearer ${this._accessToken}`
      }
    };
    return this.makeRequest(requestOptions, cb);
  },

  /**
   * Render email templates for a task.
   * 
   * @param {object} params
   * @param {Array} params.send_messages[].body - messages array containing IUiBlocks
   * @return {Promise}
   */
  renderTemplate(params, cb) {
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, `/api/v1/render-template`),
      data: {
        task: {
          id: params.task.id
        },
        send_messages: params.send_messages
      },
      headers: {
        Authorization: `Bearer ${this._accessToken}`
      },
      json: true
    };
    return this.makeRequest(requestOptions, cb);
  }
};
