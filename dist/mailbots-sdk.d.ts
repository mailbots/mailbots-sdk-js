import {AxiosRequestConfig} from "axios";

export interface Task {
  command: string,
  trigger_timeformat: string | null,
  completed: boolean,
  reference_email: {
    to: string,
    cc: string,
    bcc: string,
    subject: string,
    html: string
  }
}

export default class MailBotsClient {

  /**
   * Class constructor.
   * @param config
   */
  constructor (config: {
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    scope: string,
    state: string,
    apiHost?: string,
    tokenHost?: string,
    tokenPath?: string,
    authorizePath?: string
  });

  /**
   * Factory method to return a new, fully authenticated MailBots client based on the webhook
   * @param {object} bot - MailBots `bot` object
   * @example
   *   mailbot.onCommand('foo', bot => {
   *     const mbClient = MailBotsClient.fromBot(bot);
   *   })
   *
   */
  static fromBot(bot: any): MailBotsClient;

  /**
   *  Auth: Manually set access token if we already have it (ie, in a cookie, webhook, etc)
   */
  setAccessToken(accessToken: string): void;

  /**
   * Low-level function to make authenticated request to MailBots API
   * @param {object} requestOptions - Axiox-compatible request ooptions
   * @param {function} [cb] - Optional callback.
   * @return {Promise}
   */
  makeRequest(requestOptions: AxiosRequestConfig, cb: Function): Promise<any>;

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
  getTask(params: {
    id: number,
    verbose: boolean
  }, cb: Function): Promise<any>;

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
   *               text: "<h1>This is a test</h1>"
   *             }
   *           ]
   *         }
   *       ]
   *     });
   *
   */
   createTask(params: {
    webhook: boolean,
    verbose: number,
    suppress_email: boolean,
    task: Task,
    send_messages: Array<{
      type: string,
      subject: string,
      to: string,
      body: Array<{type: string, text: string}>
    }>
   }, cb: Function): Promise<any>;

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
  sendEmail(email: {
    command: string,
    to: string,
    cc: string[],
    bcc: string[],
    from: string,
    subject: string,
    body: string | Array<{type: string, text: string}>,
    trigger_timeformat?: string
  }, cb: Function): Promise<any>;

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
  sendMessages(params: {
    task: {
      id: number
    },
    send_messages: Array<{
      to: string,
      cc: string[],
      bcc: string[],
      from: string,
      subject: string,
      body: string | Array<{type: string, text: string}>
    }>
  }, cb: Function): Promise<any>;

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
   updateTask(params: {
     task: {
       id: number,
       reference_email: {
         to: string
       }
     }
   }, cb: Function): Promise<any>;

   /**
   * Archive A MailBots Task
   * @param {number} params - Arguments
   * @param {number} params.task - Task object
   * @param {number} params.task.id - Task id to complete
   * @return {Promise}
   *
   * @example
   */
  completeTask(params: {
    task: {
      id: number
    }
  }, cb: Function): Promise<any>;

  /**
   * Permanently Delete A MailBots Task
   * @param {object} params - Task to delete
   * @param {object} params.task - Task object
   * @param {number} params.task.id - Task id to delete
   * @return {Promise}
   */
  deleteTask(params: {
    task: {
      id: number
    }
  }, cb: Function): Promise<void>;

  /**
   * Trigger a MailBots Task
   * @param {object} params
   * @param {boolean} params.trigger_url Trigger URL of the task to trigger (get from task object)
   * @param {boolean} [params.verbose] Fire webhook and render HTML email response
   * @return {Promise}
   */
  triggerTask(params: {
    trigger_url: string,
    payload: any,
    verbose: boolean
  }, cb: Function): Promise<any>;

  /**
   * Resolve Natural Time Format (ex: {naturaltime}@ext.eml.bot)
   * @param {object} params - params object
   * @param {string} params.format - Time format to check (ex: 3days)
   * @param {string} params.timezone - IANA timezone designation (https://www.wikiwand.com/en/List_of_tz_database_time_zones) ex: "America/Los_Angeles"
   * @return {Promise}
   */
  naturalTime(params: {
    format: string,
    timezone: string
  }, cb: Function): Promise<any>;

  /**
   * Dispatch an email-based action for a task. (Equivalent to sending an action email.)
   * @param {object} params
   * @param {string} params.action - The action string
   * @param {object} params.reference_email - The email that would be sent as the action email
   * @param {boolean} [params.verbose] - Include rendered HTML email contents in API response
   * @return {Promise}
   */
  sendAction(params: {
    action: string,
    reference_email: string,
    verbose: boolean
  }, cb: Function): Promise<any>;
}
