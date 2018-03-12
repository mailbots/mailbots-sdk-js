import querystring from "querystring";
import urljoin from "url-join";
import queryString from "query-string";
import { _makeRequest, _checkParam, debug } from "./util";

export default {
  /**
   * Trigger a Gopher Task
   */
  triggerExtension(params, cb) {
    if (!params.trigger_url) {
      throw new Error("trigger_url is required");
    }

    const requestOptions = {
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
        Authorization: `Bearer ${this._accessToken}`
      });
    }
    return _makeRequest(requestOptions);
  },

  /*
  * Create a Gopher Extension (Admin Only)
  */
  createExtension(params, cb) {
    const requestOptions = {
      method: "POST",
      url: urljoin(this.config.apiHost + "/api/v1/extensions"),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
  * Update a Gopher Extension (Admin Only)
  */
  updateExtension(params, cb) {
    if (!params.extension.extensionid) {
      throw "extensionid` is required to update an extension";
    }

    const requestOptions = {
      method: "PUT",
      url: urljoin(
        `${this.config.apiHost}/api/v1/extensions/${
          params.extension.extensionid
        }`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
  * Get a list of extensions (Admin only)
  */
  getExtensions(params, cb) {
    const qs = params ? queryString.stringify(params) : "";
    const requestOptions = {
      method: "GET",
      url: urljoin(`${this.config.apiHost}/api/v1/extensions?${qs}`),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
  * Get a list of extensions (Admin only)
  */
  getExtension(params, cb) {
    //TODO: Better error handling
    if (!params.extensionid) {
      throw "extensionid is required to fetch an extension";
    }
    const requestOptions = {
      method: "GET",
      url: urljoin(
        `${this.config.apiHost}/api/v1/extensions/${params.extensionid}`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
  * Uninstall an extension (Admin only)
  */
  uninstallExtension(params, cb) {
    if (!params.extensionid) {
      throw "extensionid is required to uninstall";
    }

    const requestOptions = {
      method: "DELETE",
      url: urljoin(
        `${this.config.apiHost}/api/v1/extensions/${
          params.extensionid
        }/uninstall/`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
  * Install an extension (Admin only)
  */
  installExtension(params, cb) {
    if (!params.extensionid) {
      throw "extensionid is required to install";
    }

    const requestOptions = {
      method: "PUT",
      url: urljoin(
        `${this.config.apiHost}/api/v1/extensions/${
          params.extensionid
        }/install/`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  },

  /*
  * Delete an extension
  */
  deleteExtension(params, cb) {
    // throw "`extensionid` is required to delete an extension";

    const requestOptions = {
      method: "DELETE",
      url: urljoin(
        `${this.config.apiHost}/api/v1/extensions/${params.extensionid}`
      ),
      headers: {
        Authorization: `Bearer ${this._accessToken}`,
        "Content-Type": "application/json"
      },
      data: params
    };
    return _makeRequest(requestOptions, cb);
  }
};
