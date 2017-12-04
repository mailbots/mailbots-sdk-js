const request = require('request');
const requestPromise = require('request-promise');
// require('request-debug')(request);
const OAuth2 = require('simple-oauth2');
const debug  = require('debug')('gopher-node:tests');
const querystring = require('querystring');
const timestamp = require('unix-timestamp');
timestamp.round = true;
const crypto = require('crypto');
const urljoin = require('url-join'); // TODO: Implement on all URLs

function _checkParam(param, paramName) {
  if(!param || (typeof param !== 'string')) {
    throw new Error('\''+ paramName + '\' is required to connect to FollowUpThen');
  }
}

function _makeRequest(requestOptions, cb) {
  debug('Request', requestOptions);
  return requestPromise(requestOptions).then((res) => {
      debug('Response Ok:', res);
      if(cb) cb(null, res);
      return Promise.resolve(res);
    }).catch((err) => {
      debug('Response Error:', err.statusCode, err.response.body);
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


function _isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
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
  // debug('settings: ', this.config);

  // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
  // Set this with setAccessToken method below after fetching from proper Uri
  this._accessToken = '';

}


/*
 *  Validates signature on webhook from FUT the webhook from FUT is valid.
 *  Set verifyAge to false when testing / mocking HTTP requests
 *  Copious debugging provided because of possible variations in environments
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
  * Resolve Natural Time Format
  * https://rsweetland.github.io/fut-api-docs/#resolve-format
    args
     params (obj)
      format - (string) – The format, whatever before @followupthen.com, example: 3days, 3weeks, etc.
      (depricated) phrasing - `generic` - Choose what phrasing to use when explaining to the user what will happen. Allowed values: generic, if_email, will.
      method - `to` – Email method: to, cc, bcc
      timezone -  - [Supported Timezones](http://php.net/manual/en/timezones.php). Example: America/Los_Angeles.
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
 * Fetch Followups
 * https://github.com/rsweetland/followupthen/wiki/FUT-APIs#get-a-list-of-reminders
 *
    order_by - (created) – Sorted by created. Allowed value: created.
    order_dir - (asc|desc) - Order direction : ascending or descending.
    include_recently_completed - (0|1) - The response will include recently completed reminders.
    limit - (number) - maximum reminders returned.
    page - (number) - page number.
    search - (string) - Search a specific keyword.
    filters[time] - (today|tomorrow|this_week|completed)
    filters[attributes] - (recurring|t|sms|external)
    filters[list] - (string) - search a specific tag
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
 * https://github.com/rsweetland/followupthen/wiki/FUT-APIs#get-a-single-reminder
 *
 * (int) taskId
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
 * Create A Followup
 * https://github.com/rsweetland/followupthen/wiki/FUT-APIs#v2-reminder-simulation
 *
 *  simulation : (1|0) : if simulating, no reminders are created, full API response is provided
 *  source[recipient_server] : (string, required) - Intended recipient of this particular message. e.g 1day@localhost See below.
 *  source[recipients_to] : (string) - Emails listed in the to field of the email. e.g 1day@localhost, 2day@localhost
 *  source[recipients_cc] : (string) - Who is in the cc field
 *  source[recipients_bcc] : (string) - Who is in the bcc field
 *  source[from] : (string) - This can be passed but is always simulation@example.com right now (ok for now).
 *  source[body] : (string) - Email message body
 *  source[type]: (email | api) - API interactions suppress certain emails - and provide different information.
 *  subscription_plan: (string) - The simulated user's subscription plan
 *  subject: (string) - Email subject
 *  timezone: (string) - One of the php supported timezones: http://php.net/manual/en/timezones.php
 * (Note: Can accept either json or form-encoded)
 */
Gopher.prototype.createFut =  function(params, cb) {
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
  * Update A Followup
  * https://github.com/rsweetland/followupthen/wiki/FUT-APIs#update-a-single-reminder
    args
     futId (int)
     params (obj)
      reschedule - (1|0) – Flag to reschedule reminder
      deliver_now - 1 | null - Flag to deliver the reminder now
      fut_format - (string) – New format
      method - (to|cc) - Email method
      subject - (string) - New subject
      content - (string) - New content
      prepend - (string) - Prepended content   curl -X PUT -v --header "Authorization: Bearer ce18290427ff6537d019f58c2c593db4e69199c9" "http://local.followupthen.com/api/v1/reminders/1231/" --data "subject=test_updated_subject&method=to"
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
 *
 *  Auth
 *
 *
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

// If we already have an accessToken stored in a cookie or something, load it here
Gopher.prototype.setAccessToken = function(accessToken) {
  this._accessToken = accessToken;
}

Gopher.prototype.showAccessToken = function(accessToken) {
  return this._accessToken;
}

module.exports = Gopher;
