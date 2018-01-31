import Debug from "debug";
import axios from "axios";

export const debug = Debug("gopherhq");

export const _makeRequest = (requestOptions, cb) => {
  debug("Request", requestOptions);
  return axios(requestOptions)
    .then(res => {
      debug("Response Ok");
      // Add http statusCode to response object
      if (res.data === "") {
        res.data = { statusCode: res.status };
      } else {
        res.data.statusCode = res.status;
      }
      if (cb) cb(null, res.data);
      return Promise.resolve(res.data);
    })
    .catch(err => {
      if (err.response.data) {
        err.response.data.statusCode = err.response.status;
      }
      debug("Response Error:", err.response.data);
      if (cb) cb(err.response.data);
      return Promise.reject(err.response.data);
    });
};

export const _checkParam = (param, paramName) => {
  if (!param || typeof param !== "string") {
    throw new Error(`'${paramName}' is required to connect to Gopher`);
  }
};

/**
 * Used to extend one class prototype  with the keys/values of another objects
 */
export const _extend = (base, newObj) => {
  Object.keys(newObj).forEach(c => {
    base.prototype[c] = newObj[c];
  });
  return base;
};
