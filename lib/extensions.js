"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _util = require("./util");

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /*
  * Create a Gopher Extension (Admin Only)
  */
  createExtension: function createExtension(params, cb) {
    var requestOptions = {
      method: "POST",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: params
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
  * Update a Gopher Extension (Admin Only)
  */
  updateExtension: function updateExtension(params, cb) {
    (0, _assert2.default)(params.extension.extensionid, "`extensionid` is required to update an extension");

    var requestOptions = {
      method: "PUT",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions/" + params.extension.extensionid),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: params
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
  * Get a list of extensions (Admin only)
  */
  getExtensions: function getExtensions(params, cb) {
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: params
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
  * Get a list of extensions (Admin only)
  */
  getExtension: function getExtension(params, cb) {
    (0, _assert2.default)(params.extensionid, "`extensionid` is required to fetch an extension");
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions/" + params.extensionid),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: params
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
  * Get a list of extensions (Admin only)
  */
  uninstallExtension: function uninstallExtension(params, cb) {
    (0, _assert2.default)(params.extensionid, "`extensionid` is required to uninstall");

    var requestOptions = {
      method: "DELETE",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions/" + params.extensionid + "/uninstall/"),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: params
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  },


  /*
  * Delete an extension
  */
  deleteExtension: function deleteExtension(params, cb) {
    (0, _assert2.default)(params.extensionid, "`extensionid` is required to delete an extension");

    var requestOptions = {
      method: "DELETE",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions/" + params.extensionid),
      headers: {
        Authorization: "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      data: params
    };
    return (0, _util._makeRequest)(requestOptions, cb);
  }
};