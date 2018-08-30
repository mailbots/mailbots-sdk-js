import Debug from "debug";
import axios from "axios";

export const debug = Debug("gopherhq:request");

export const _makeRequest = (requestOptions, cb) => {
  debug("Request", requestOptions);
  return axios(requestOptions)
    .then(res => {
      // Add http statusCode to response object
      if (res.data === "") {
        res.data = { statusCode: res.status };
      } else {
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
          err.response.data.status ||
          null;
      }
      let errorResponse =
        friendlyMessage || err.statusText || err.message || err.statusCode;
      if (cb) cb(new Error(errorResponse));
      console.error(errorResponse);
      return Promise.reject(new Error(errorResponse));
    });
};

export const _checkParam = (param, paramName) => {
  if (!param || typeof param !== "string") {
    throw new Error(`'${paramName}' is required to connect to Gopher`);
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
