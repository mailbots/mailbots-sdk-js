import {AxiosRequestConfig} from "axios";

export interface Task {
  command: string
}

export interface Email {
  command: string,
  to: string,
  cc: string[],
  bcc: string[],
  from: string,
  subject: string,
  body: string | Array<{type: string, text: string}>
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
    task: Task
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
  sendEmail(email: Email, cb: Function): Promise<any>;
}
