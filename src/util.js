import Debug from "debug";
import axios from "axios";
//
export const debug = Debug("gopherhq-node");

export const _makeRequest = (requestOptions, cb) => { // ??
  debug("Request", requestOptions);
  return axios(requestOptions)
    .then(res => {
      debug("Response Ok:", res);
      if (cb) cb(null, res.data);
      return Promise.resolve(res.data);
    })
    .catch(err => {
      debug("Response Error:", err);
      if (cb) cb(err);
      return Promise.reject(err);
    });
}

export const _checkParam = (param, paramName) => {
  if (!param || typeof param !== "string") {
    throw new Error(`'${paramName}' is required to connect to Gopher`);
  }
}

/**
 * Used to extend one class prototype  with the keys/values of another objects
 */
export const _extend = (base, newObj) =>{
  Object.keys(newObj).forEach(c => {
    base.prototype[c] = newObj[c];
  });
  return base;
}
