import querystring from "querystring";
import urljoin from "url-join";
import { _makeRequest, _checkParam, debug } from "./util";

export default {
  /**
   * Get information about the bot that corresponds with user's Bearer token
   * (ie, most likely your bot).
   * @param {function} [cb] Optional callback
   * @return {Promise}
   *
   * @example const res = await mbClient.botGetSelf();
   */
  botGetSelf(cb) {
    const requestOptions = {
      method: "GET",
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      }
    };
    return this.makeRequest(requestOptions, cb);
  },

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
  sendEvent(params, cb) {
    if (!params.event_url) {
      throw new Error("event_url is required");
    }
    if (!params.type) {
      throw new Error("event type is required");
    }

    const requestOptions = {
      method: "POST",
      url: params.event_url + `?type=${params.type}`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };

    if (params.payload) {
      Object.assign(requestOptions, { data: params.payload });
    }

    return _makeRequest(requestOptions, cb);
  },

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

  saveBotData(data, cb) {
    if (typeof data != "object") throw new Error("data must be an object");

    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data
    };
    return _makeRequest(requestOptions, cb);
  },

  /**
   * Get saved MailBot data
   * For params and details, see [extension get data API docs](https://mailbots.postman.co/collections/113668-74bb4ea1-f0cc-bf5a-ab93-1978fcbcce45?workspace=4d742517-576d-424d-8918-b54b31164c30#f98b6862-9059-4d4f-931b-78d554e8a4e7)
   * @example
   * const res = await mbClient.getBotData();
   */
  getBotData(cb) {
    const requestOptions = {
      url: urljoin(this.config.apiHost, "/api/v1/extensions/self/data/"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      json: true
    };
    return _makeRequest(requestOptions, cb);
  }
};
