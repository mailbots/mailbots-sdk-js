"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._extend = exports._checkParam = exports._makeRequest = exports.debug = undefined;

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = exports.debug = (0, _debug2.default)("mailbots-sdk:request");

var _makeRequest = exports._makeRequest = function (requestOptions, cb) {
  debug("Request", requestOptions);
  return (0, _axios2.default)(requestOptions).then(function (res) {
    // Add http statusCode to response object
    if (res.data === "") {
      res.data = { statusCode: res.status };
    } else {
      res.data.statusCode = res.status;
    }
    if (cb) cb(null, res.data);
    return res.data;
  }).catch(function (err) {
    var friendlyMessage = void 0;
    if (typeof err.response !== "undefined" && typeof err.response.data !== "undefined") {
      friendlyMessage = err.response.data.message || err.response.data.type || err.response.data.status || null;
    }
    var errorResponse = friendlyMessage || err.statusText || err.message || err.statusCode;
    if (cb) cb(new Error(errorResponse));
    debug(errorResponse);
    return Promise.reject(new Error(errorResponse));
  });
};

var _checkParam = exports._checkParam = function (param, paramName) {
  if (!param || typeof param !== "string") {
    throw new Error("'" + paramName + "' is required to connect to MailBots");
  }
};

/*
 * Used to extend one class prototype  with the keys/values of another objects
 */
var _extend = exports._extend = function (base, newObj) {
  Object.keys(newObj).forEach(function (c) {
    base.prototype[c] = newObj[c];
  });
  return base;
};