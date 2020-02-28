import {AxiosRequestConfig, AxiosInstance} from "axios";

interface Email {
  to: string,
  cc?: string,
  bcc?: string,
  subject: string,
  html: string
}

interface Task {
  id: number,
  command: string,
  trigger_timeformat?: string | null,
  trigger_time?: number | null,
  completed?: boolean,
  reference_email?: Email,
  stored_data: {
    [key: string]: any
  },
  search_keys?: string[]
}

interface Message {
  to: string,
  cc?: string[],
  bcc?: string[],
  from?: string,
  subject: string,
  body: string | Array<{type: string, text: string}>
}

export interface IPersonAttribute {
  attribute: string,
  title: string,
  type: string,
  value: string | number | Array<string | number> | null,
  hidden: boolean,
  readonly: boolean,
  display_order: number,
  created?: string,
}

export interface IPerson {
  id: number,
  email: string,
  created: string,
  modified: string,
  attributes: IPersonAttribute[]
}

export class MailBotsClient {

  /**
   * Class constructor.
   * @param config
   */
  constructor (config?: {
    clientId?: string,
    clientSecret?: string,
    redirectUri?: string,
    scope?: string,
    state?: string,
    apiHost?: string,
    tokenHost?: string,
    tokenPath?: string,
    authorizePath?: string,
    axiosClient?: AxiosInstance // optionally pass a customized axios client for caching, etc
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
  makeRequest(requestOptions: AxiosRequestConfig, cb?: Function): Promise<any>;

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
  getTasks(params: {
    extension?: string,
    order_by?: "due" | "created",
    order_dir?: "asc" | "desc",
    status?: "completed" | "open" | boolean, // @todo remove boolean
    due_before?: number; // timestamp
    due_after?: number; // timestamp
    search?: string; // wildcard search of subject and recipients
    search_key?: string // searches only one
    search_keys?: string[] // "OR" search to pull multiple search keys
    per_page?: number;
    page?: number;
    invisible?: boolean; // background tasks
    person?: number,
    suppress_webhook?: boolean,
  }, cb?: Function): Promise<{tasks: Task[]}>;

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
    verbose?: boolean
  }, cb?: Function): Promise<Task>;

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
   *       webhook?: false,
   *       suppress_email?: true,
   *       verbose?: 1,
   *       task: {
   *         command: process.env.EXAMPLE_COMMAND
   *       },
   *       send_messages?: [
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
    webhook?: boolean,
    verbose?: number,
    suppress_email?: boolean,
    task: Pick<Task, Exclude<keyof Task, "id">>,
    send_messages?: Array<Message>
  }, cb?: Function): Promise<any>;

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
    cc?: string[],
    bcc?: string[],
    from: string,
    subject: string,
    body: string | Array<{type: string, text: string}>,
  }, cb?: Function): Promise<any>;

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
    send_messages: Array<Message>
  }, cb?: Function): Promise<any>;

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
    webhook?: boolean,
    verbose?: number,
    task: Task
  }, cb?: Function): Promise<any>;

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
  }, cb?: Function): Promise<any>;

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
  }, cb?: Function): Promise<void>;

  /**
   * Trigger a MailBots Task
   * @param {object} params
   * @param {boolean} params.trigger_url Trigger URL of the task to trigger (get from task object)
   * @param {boolean} [params.verbose] Fire webhook and render HTML email response
   * @return {Promise}
   */
  triggerTask(params: {
    trigger_url: string,
    payload?: object,
    verbose?: boolean
  }, cb?: Function): Promise<any>;

  /**
   * Resolve Natural Time Format (ex: {naturaltime}@ext.eml.bot)
   * @param {object} params - params object
   * @param {string} params.format - Time format to check (ex: 3days)
   * @param {string} params.timezone - IANA timezone designation (https://www.wikiwand.com/en/List_of_tz_database_time_zones) ex: "America/Los_Angeles"
   * @return {Promise}
   */
  naturalTime(params: {
    format: string,
    timezone?: string
  }, cb?: Function): Promise<any>;

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
    reference_email: Email,
    verbose: boolean
  }, cb?: Function): Promise<any>;

  /**
   * Create a new task event.
   *
   * @param {object} params
   * @param {number} params.task.id - Id of the task
   * @param {string} params.type - The type of this event
   * @param {object} params.data - Data associated with this event.
   * @return {Promise}
   */
  createEvent(params: {
    task: {
      id: number
    },
    type: string,
    data: any
  }, cb?: Function): Promise<any>;

  /**
   * Users typings
   */

  /**
   * Get information about the currently logged in user
   * @param {function} [cb] - Optional callback
   */
  getLoggedInUser(cb?: Function): Promise<any>;

  /**
   * Invite users to this bot. If an Auth token is included, the invitation email
   * includes the name of the logged in user who is sending the invitation.
   * "emails" param can be either an array of email addresses, or a string with a single
   * email address.
   * @param {array|string} emails A single email address, or an array of emails to invite
   * @param {function} [cb] Optional callback (also can be used with promises)
   */
  invite(emails: string | string[], cb?: Function): Promise<any>;

  /**
   * Webhook typings.
   */

  /**
   * Validate webhook signature.
   * Set verifyAge to false when testing / mocking HTTP requests. (Server side only)
   * @param {string} webhookSignature
   * @param {number} webhookTimestamp - Unix Timestamp of webhook.  Used to prevent reply attack
   * @param {string} rawBody - Unprocessed http post body
   * @param {boolean} [verifyAge] - Use for automated testing
   * @return {boolean} - Pass / fail webhook validation
   *
   */
  validateWebhook(
    webhookSignature: string,
    webhookTimestamp: number,
    rawBody: any,
    verifyAge?: boolean
  ): boolean;

  /**
   * Auth typings.
   */

  /**
   *  Get OAuth2 login link from config credentials
   *  @returns {object} Auth URI and state Ex: `{ uri: authorizationUri, state: state }`
   */
  getAuthorizationUri(): {
    uri: string, state: string
  };

  /**
   *  After user has authorized bot with MailBots, fetch access token (server only)
   *  @param {any} code Access code after user approval from auth URL
   */
  getAccessToken(code: string): Promise<any>;

  /**
   * Mailbots typings.
   */

  /**
   * Get information about the bot that corresponds with user's Bearer token
   * (ie, most likely your bot).
   * @param {function} [cb] Optional callback
   * @return {Promise}
   *
   * @example const res = await mbClient.mailbotGetSelf();
   */
  mailbotGetSelf(cb?: Function): Promise<any>;

  /**
   * Send an Event to the bot. This does not require
   * and auth token because the endpoint is meant for 3rd
   * party services. Ex: issue created in Github, or an
   * email response or support ticket received. The MailBots
   * bot can listen for events, act on tasks or
   * create or delete tasks based on events.
   * @param {object}  params params
   * @returns {Promise}
   *
   * @example
   * const res = await mbClient.sendEvent({type: 'event.type', payload: {"foo", "bar"}, event_url: "[unique_event_url]"});
   */
  sendEvent(params: {
    event_url: string,
    type: string,
    payload?: object
  }, cb?: Function): Promise<any>;

  /**
   * An "Interbot Event" allows bots to send messages to each other.
   * This allows a MailBot to expose actions that can be utilized by
   * other MailBots (for example, creating an Evernote note)
   * In this way, MailBots can become composable.
   * Requires elevated oauth scope.
   * @param {object}  params params
   * @returns {Promise}
   *
   * @example
   * const res = await mbClient.sendInterbotEvent({subdomain: 'git', payload: {"foo", "bar"}});
   */
  sendInterbotEvent(params: {
    subdomain: string,
    payload: object
  }, cb?: Function): Promise<any>;

  /**
   * Save MailBot data which is sent with every webhook related to that bot.
   * This is how a bot persist's user settings specific to that bot.
   * For params and details, see [bot saving data API docs](https://mailbots.postman.co/collections/113668-74bb4ea1-f0cc-bf5a-ab93-1978fcbcce45?workspace=4d742517-576d-424d-8918-b54b31164c30#7f9bfa6c-a673-4104-9be9-1ada487c300e)
   * @param {object} data Nestable key value value pairs
   * @returns {Promise}
   *
   * @example
   * const res = await mbClient.saveBotData({ foo: "bar" });
   */
  saveBotData(data: object, cb?: Function): Promise<void>;

  /**
   * Get saved MailBot data
   * For params and details, see [mailbots get data API docs](https://mailbots.postman.co/collections/113668-74bb4ea1-f0cc-bf5a-ab93-1978fcbcce45?workspace=4d742517-576d-424d-8918-b54b31164c30#f98b6862-9059-4d4f-931b-78d554e8a4e7)
   * @example
   * const res = await mbClient.getBotData();
   */
  getBotData(cb?: Function): Promise<object>;

  /**
   * Logs typings.
   */

  /**
   * Retrieve logged-in user's bot logs
   * @param  {object} filter - Filter. Ex: `{type: ['api', 'submit_failed'], mailbot: ['subdomain'], since: 1517948366, num: 10}`)
   * @return {Promise} Promise resolving to log results in the form of: `{status: "success", logs[...]}`
   */
  getLogs(filter: {
    type?: string[],
    mailbot?: string[],
    since?: number,
    num?: number
  }, cb?: Function): Promise<{
    status: string,
    logs: Array<any>
  }>;

  /**
   * People typings.
   */


  /**
   * Get a filtered list of People
   * @param {object} params  Arguments for API call
   * @param {function} [cb]  Optional callback function
   * @return {Promise}
   *
   * @example
   * // Get all people
   * const res = await mbClient.searchPeople();
   * console.log(res.people);
   *
   * @example
   * // With a callback
   * mbClient.searchPeople({ limit: 1 }, (err, res) => {
   *     if (err) done(err);
   *     console.log(res.people);
   *   });
   */
  searchPeople(
    params: Array<{
      attribute: string,
      operator: string,
      value:string
    }>,
    cb?: Function
  ): Promise<{status: string, people: IPerson[]}>;

  /**
   * Get a person .
   *
   * @param {object} params - request params
   * @param {number} params.id - person id
   * @param {function} [cb]  Optional callback function
   * @return {Promise}
   *
   * @example
   * // Get person with id 3
   * const res = await mbClient.getPerson({ person: {id: 3} });
   * console.log(res.person);
   */
  getPerson(params: {id: number}, cb?: Function): Promise<{status: string, person: IPerson}>;

  /**
   * Update a person by id.
   * @param {object} params  Arguments for API call
   * @param {function} [cb]  Optional callback function
   * @return {Promise}
   *
   * @example
   */
  updatePerson(
    params: {
      person: {
        id: number,
        email?: string,
        attributes?: IPersonAttribute[]
      }
    },
    cb?: Function
  ): Promise<void>
}
