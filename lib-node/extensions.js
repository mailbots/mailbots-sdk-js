"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _urlJoin = require("url-join");

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Trigger a Gopher Task
   */
  triggerExtension: function triggerExtension(params) {
    if (!params.trigger_url) {
      throw new Error("trigger_url is required");
    }

    var requestOptions = {
      method: "POST",
      url: params.trigger_url,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };

    if (params.payload) {
      Object.assign(requestOptions, { data: params.payload });
    }

    if (params.verbose) {
      requestOptions.url += "?verbose=1";
    }

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {
        Authorization: "Bearer " + this._accessToken
      });
    }
    return (0, _util._makeRequest)(requestOptions);
  },


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
    if (!params.extension.extensionid) {
      throw "extensionid` is required to update an extension";
    }

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
    var qs = params ? _queryString2.default.stringify(params) : "";
    var requestOptions = {
      method: "GET",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions?" + qs),
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
    //TODO: Better error handling
    if (!params.extensionid) {
      throw "extensionid is required to fetch an extension";
    }
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
  * Uninstall an extension (Admin only)
  */
  uninstallExtension: function uninstallExtension(params, cb) {
    if (!params.extensionid) {
      throw "extensionid is required to uninstall";
    }

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
  * Install an extension (Admin only)
  */
  installExtension: function installExtension(params, cb) {
    if (!params.extensionid) {
      throw "extensionid is required to install";
    }

    var requestOptions = {
      method: "PUT",
      url: (0, _urlJoin2.default)(this.config.apiHost + "/api/v1/extensions/" + params.extensionid + "/install/"),
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
    // throw "`extensionid` is required to delete an extension";

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