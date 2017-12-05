const request = require('request');
const requestPromise = require('request-promise');
// require('request-debug')(request);
const OAuth2 = require('simple-oauth2');
const debug  = require('debug')('gopher-node:tests');
const querystring = require('querystring');
const timestamp = require('unix-timestamp');
timestamp.round = true;
const crypto = require('crypto');
const urljoin = require('url-join');

function _checkParam(param, paramName) {
  if(!param || (typeof param !== 'string')) {
    throw new Error('\''+ paramName + '\' is required to connect to Gopher');
  }
}

function _makeRequest(requestOptions, cb) {
  debug('Request', requestOptions);
  return requestPromise(requestOptions).then((res) => {
      debug('Response Ok:', res);
      if(cb) cb(null, res);
      return Promise.resolve(res);
    }).catch((err) => {
      debug('Response Error:', err, err);
      if(cb) cb(err);
      return Promise.reject(err);
    });
}

function _serialize (obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function Gopher(config) {
  if (!(this instanceof Gopher)) return new Gopher(config);
  _checkParam(config.clientId, 'clientId');
  _checkParam(config.clientSecret, 'clientSecret');
  _checkParam(config.redirectUri, 'redirectUri');
  _checkParam(config.scope, 'scope');

  this.config = config;
  this.configDefaults = {
    clientId: '',
    clientSecret: '',
    redirectUri:'',
    scope: '',
    state: '',
    apiHost: 'https://www.gopher.email',
    tokenHost: 'https://www.gopher.email',
    tokenPath: 'https://www.gopher.email/api/v1/oauth2/access_token',
    authorizePath: 'https://www.gopher.email/settings/oauth2_authorize'
  };

  this.config = Object.assign(this.configDefaults, this.config);
  this.config.state = Math.random().toString(36).substring(7);
  debug('settings: ', this.config);

  // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
  this._accessToken = '';
}


/*
 *  Validates webhook signature. Set verifyAge to false when testing / mocking HTTP requests
*/
Gopher.prototype.validateWebhook = function(webhookSignature, webhookTimestamp, rawBody, verifyAge = true) {
  let generatedSig = crypto.createHmac('sha256', webhookTimestamp + this.config.clientSecret).update(rawBody).digest('hex');
  debug('validateWebhook: rawBody', rawBody);
  debug('validateWebhook: clientSecret', this.config.clientSecret);
  debug('validateWebhook: generatedSig', generatedSig);
  debug('validateWebhook: webhookSig', webhookSignature);
  if (generatedSig !== webhookSignature)
    return false;

  let hookAge = timestamp.now() - webhookTimestamp;
  if (hookAge > 900 && verifyAge) {
    debug('validateWebhook: failed age check: ', hookAge);

    return false;
  }
  debug('validateWebhook: webhook validated!');
  return true;
}


 /*
  * Resolve Natural Time Format (ex: {naturaltime}@ext.gopher.email)
  */
  Gopher.prototype.naturalTime = function(params, cb) {
    var requestOptions = {
      method: 'GET',
      url: urljoin(this.config.apiHost, '/api/v3/natural_time', '?' + querystring.stringify(params)),
      headers: {
        "Authorization": "Bearer " + this._accessToken,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      json: true
    }
    return _makeRequest(requestOptions, cb);
  }

 /*
  * Invite users to this extension. If an Auth token is included, the invitation email
  * includes the name of the inviting person.
  */
  Gopher.prototype.invite = function(emails, cb) {
    var extensionName = this.config.extensionUrl.split('.')[0].replace(/^.*\/\//, ''); //TODO: Make extension name (ie, subdomain) explicit
    var requestBody = {
      extension: extensionName,
      email_address: emails
    }
    var requestOptions = {
      method: 'POST',
      url: urljoin(this.config.apiHost, '/api/v3/invites/'),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      form: requestBody,
      json: true
    }

    if (this._accessToken) {
      Object.assign(requestOptions.headers, {"Authorization": "Bearer " + this._accessToken});
    }

    return _makeRequest(requestOptions, cb);
  }


/*
 * Get List of Gopher Tasks
 */
Gopher.prototype.getTasks = function(params, cb) {
  var requestOptions = {
    url: urljoin(this.config.apiHost, '/api/v3/tasks/?', querystring.stringify(params)),
    headers: {
      "Authorization": "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    json: true
  }
  debug('Request options for getting followups:', requestOptions);
  return _makeRequest(requestOptions, cb);
}


/*
 * Fetch A Single Gopher Task
 */
Gopher.prototype.getTask = function(taskId, cb) {
  if(typeof taskId != 'number') throw new Error ('taskId must be an integer. This was given instead:', taskId)
  var requestOptions = {
    url: this.config.apiHost + '/api/v3/tasks/' + taskId + '/',
    headers: {
      "Authorization": "Bearer " + this._accessToken,
      "Content-Type": "application/json"
    },
    json: true
  }
  return _makeRequest(requestOptions, cb)
}

/*
 * Create A Gopher Task
 */
Gopher.prototype.createTask =  function(params, cb) {
  let urlParams = {}
  if(params.verbose) {
    urlParams.verbose = 1;
  }

  var requestOptions = {
      method: 'POST',
      url: urljoin(this.config.apiHost, '/api/v3/tasks/', querystring.stringify(urlParams)),
      headers: {
        "Authorization": "Bearer " + this._accessToken,
        // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        "Content-Type": "application/json"
      },
      form: params,
      json: true
    }

  return _makeRequest(requestOptions, cb)
 }


 /*
  * Update A Gopher Task
  * Used to save data against the task, update content, followup time and more
  */
  Gopher.prototype.updateTask = function(taskId, params, cb) {
    var requestOptions = {
          method: 'PUT',
          url: urljoin(this.config.apiHost, '/api/v3/tasks/', taskId, '/'),
          headers: {
            "Authorization": "Bearer " + this._accessToken,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          form: params,
          json: true
        }
    return _makeRequest(requestOptions, cb);
  }

  /**
   * Trigger a Gopher Task
   */
  Gopher.prototype.triggerTask = function(params, cb) {
    if(!params.trigger_url) {
      return new Error("trigger_url is required");
    }

    var requestOptions = {
          method: 'POST',
          url: params.trigger_url,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          json: true
    }

    if(params.payload) {
      Object.assign(requestOptions, { form: params.payload});
    }

    if (this._accessToken) {
        Object.assign(requestOptions, {"Authorization": "Bearer " + this._accessToken});
    }


    return _makeRequest(requestOptions);
  
  }

  /*
  * Save Gopher Extension Data which is then sent with every webhook related to that extension.
  */ 
  Gopher.prototype.saveExtData = function(settings, cb) {
    if(typeof settings != 'object') throw new Error ('settings must be an object');

    var requestOptions = {
      method: 'POST',
      url: urljoin(this.config.apiHost, '/api/v3/extensions/self/data/'),
      headers: {
        "Authorization": "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      body: settings,
      json: true
    }
    return _makeRequest(requestOptions, cb)
  }

  /*
  * Get Gopher Extension-Wide Data
  */ 
  Gopher.prototype.getExtData = function(cb) {
    var requestOptions = {
        url: urljoin(this.config.apiHost, '/api/v3/extensions/self/data/'),
        headers: {
          "Authorization": "Bearer " + this._accessToken,
          "Content-Type": "application/json"
        },
        json: true
      }
    return _makeRequest(requestOptions, cb)
  }

/*
 *  Auth: Build initial AOuth2 login link
 */
Gopher.prototype.getAuthorizationUri = function() {
  const oauth2 = OAuth2.create({
    client: {
      id: this.config.clientId,
      secret: this.config.clientSecret
    },
    auth: {
      tokenHost: this.config.tokenHost,
      tokenPath: this.config.tokenPath,
      authorizePath: this.config.authorizePath,
    },
  });

  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: this.config.redirectUri,
    scope: this.config.scope,
    state: this.config.state,
  });
  debug('auth uri: ', authorizationUri);
  return {state: this.config.state, uri: authorizationUri};
}

/*
 *  Auth: After user has Authorized extension with Gopher, fetch access token
 */
Gopher.prototype.getAccessToken = function(authCode, cb) {
  return new Promise((resolve, reject) => {
    debug('Auth code from auth uri used to retrive auth token: ', authCode);

    const oauth2 = OAuth2.create({
      client: {
        id: this.config.clientId,
        secret: this.config.clientSecret
      },
      auth: {
        tokenHost: this.config.tokenHost,
        tokenPath: this.config.tokenPath,
        authorizePath: this.config.authorizePath,
      },
    });

    const options = {
      code: authCode,
      redirect_uri: this.config.redirectUri,
      client_id: this.config.clientId,
    };

    oauth2.authorizationCode.getToken(options, (error, result) => {
      if (error) {
        debug('Access token error', error.message)
        if(cb) cb(new Error('Authentication failed'))
        return reject('Authentication failed')
      }

      const tokenDetails = oauth2.accessToken.create(result);
      debug('success! auth token: ', tokenDetails.token);
      this._accessToken = tokenDetails.token.access_token;
      if(cb) cb(null, tokenDetails.token.access_token);
      return resolve(tokenDetails.token.access_token);
    });
  })

}

/*
 *  Auth: Manually set access token if we have it (ie, in a cookie, webhook, etc)
 */
Gopher.prototype.setAccessToken = function(accessToken) {
  this._accessToken = accessToken;
}

module.exports = Gopher;
