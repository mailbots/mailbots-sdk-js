import Debug from "debug";
import axios from "axios";

export const debug = Debug("mailbots-sdk:request");

export function _makeRequest(requestOptions, cb) {
  debug("Request", requestOptions);
  const axiosClient = this.config.axiosClient || axios; // customized client can be passed into constructor
  return axiosClient(requestOptions)
    .then(res => {
      // Add http statusCode to response object
      if (res.data === "") {
        res.data = { statusCode: res.status };
      } else if (typeof res.data === "object") {
        res.data.statusCode = res.status;
      }
      if (cb) cb(null, res.data);
      return res.data;
    })
    .catch(err => {
      let friendlyMessage;
      if (
        typeof err.response !== "undefined" &&
        typeof err.response.data !== "undefined"
      ) {
        friendlyMessage =
          err.response.data.message ||
          err.response.data.type ||
          err.response.data.error_description || // legacy
          err.response.data.error || // legacy
          err.response.data.status ||
          null;
      }
      let errorResponse =
        friendlyMessage || err.statusText || err.message || err.statusCode;
      if (axios.isCancel(err)) errorResponse = "request cancelled";
      let error = new Error(errorResponse);
      error.statusCode = err && err.response && err.response.status;
      if (cb) cb(error);
      debug(errorResponse);
      return Promise.reject(error);
    });
};

export const _checkParam = (param, paramName) => {
  if (!param || typeof param !== "string") {
    throw new Error(`'${paramName}' is required to connect to MailBots`);
  }
};

/*
 * Used to extend one class prototype  with the keys/values of another objects
 */
export const _extend = (base, newObj) => {
  Object.keys(newObj).forEach(c => {
    base.prototype[c] = newObj[c];
  });
  return base;
};
