"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._extend = exports._checkParam = exports._makeRequest = exports.debug = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var debug = (0, _debug["default"])("mailbots-sdk:request");
exports.debug = debug;

var _makeRequest = function (requestOptions, cb) {
  debug("Request", requestOptions);
  return (0, _axios["default"])(requestOptions).then(function (res) {
    // Add http statusCode to response object
    if (res.data === "") {
      res.data = {
        statusCode: res.status
      };
    } else {
      res.data.statusCode = res.status;
    }

    if (cb) cb(null, res.data);
    return res.data;
  })["catch"](function (err) {
    var friendlyMessage;

    if (typeof err.response !== "undefined" && typeof err.response.data !== "undefined") {
      friendlyMessage = err.response.data.message || err.response.data.type || err.response.data.error_description || // legacy
      err.response.data.error || // legacy
      err.response.data.status || null;
    }

    var errorResponse = friendlyMessage || err.statusText || err.message || err.statusCode;
    if (cb) cb(new Error(errorResponse));
    debug(errorResponse);
    return Promise.reject(new Error(errorResponse));
  });
};

exports._makeRequest = _makeRequest;

var _checkParam = function (param, paramName) {
  if (!param || typeof param !== "string") {
    throw new Error("'".concat(paramName, "' is required to connect to MailBots"));
  }
};
/*
 * Used to extend one class prototype  with the keys/values of another objects
 */


exports._checkParam = _checkParam;

var _extend = function (base, newObj) {
  Object.keys(newObj).forEach(function (c) {
    base.prototype[c] = newObj[c];
  });
  return base;
};

exports._extend = _extend;