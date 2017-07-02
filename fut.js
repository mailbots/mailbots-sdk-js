const request = require('request');
const requestPromise = require('request-promise');
// require('request-debug')(request);
const OAuth2 = require('simple-oauth2');
const debug  = require('debug')('fut');
const querystring = require('querystring');
const timestamp = require('unix-timestamp');
timestamp.round = true;
const crypto = require('crypto');

function _checkParam(param, paramName) {
  if(!param || (typeof param !== 'string')) {
    throw new Error('\''+ paramName + '\' is required to connect to FollowUpThen');
  }
}

function _makeRequest(requestOptions, cb) {
  return requestPromise(requestOptions).then((res) => {
      if(cb) cb(null, res);
      return Promise.resolve(res);
    }).catch((err) => {
      if(cb) cb(err);
      return Promise.reject(err);
    });
}


function Fut(config) {
  if (!(this instanceof Fut)) return new Fut(config);
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
    apiHost: 'https://www.followupthen.com',
    tokenHost: 'https://www.followupthen.com',
    tokenPath: 'https://www.followupthen.com/api/v1/oauth2/access_token',
    authorizePath: 'https://www.followupthen.com/settings/oauth2_authorize'
  };

  this.config = Object.assign(this.configDefaults, this.config);
  this.config.state = Math.random().toString(36).substring(7);
  debug('Fut OAuth Settings: ', this.config);

  // Bearer token used in Auth header: curl url -h "Authorization: Bearer accessToken"
  // Set this with setAccessToken method below after fetching from proper Uri
  this._accessToken = '';

}


/*
 *  Validates signature on webhook from FUT
*/
Fut.prototype.validateWebhook = function(webhookSignature, webhookTimestamp, rawBody) {
  let generatedSig = crypto.createHmac('sha256', webhookTimestamp + this.config.clientSecret).update(rawBody).digest('hex');
  let hookAge = timestamp.now() - webhookTimestamp;
  if (generatedSig !== webhookSignature || hookAge > 900) {
    return false
  }
  return true;
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
Fut.prototype.getFuts = function(params, cb) {
  var requestOptions = {
    url: this.config.apiHost + '/api/v1/reminders/?' + querystring.stringify(params),
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
 * Fetch A Single Followup
 * https://github.com/rsweetland/followupthen/wiki/FUT-APIs#get-a-single-reminder
 *
 * (int) futId
 */
Fut.prototype.getFut = function(futId, cb) {
  if(typeof futId != 'number') throw new Error ('futId must be an integer')
  var requestOptions = {
    url: this.config.apiHost + '/api/v1/reminders/' + futId,
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
 *  source[recipient_to] : (string) - Emails listed in the to field of the email. e.g 1day@localhost, 2day@localhost
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
Fut.prototype.createFut =  function(params, cb) {
  var requestOptions = {
      method: 'POST',
      url: this.config.apiHost + '/api/v2/reminders/',
      headers: {
        "Authorization": "Bearer " + this._accessToken,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        // "Content-Type": "application/json"
      },
      form: params,
      json: true
    }
  return _makeRequest(requestOptions, cb)
 }


 /*
 *
 * Simulate A Followup
 * A more expressive wrapper for createFut({simulate: 1});
 * https://github.com/rsweetland/followupthen/wiki/FUT-APIs#v2-reminder-simulation
 *
 */
 Fut.prototype.simulateFut = function(params, cb) {
   if(!params.simulate) params.simulate = 1;
   return this.createFut(params, cb);
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
  Fut.prototype.updateFut = function(futId, params, cb) {
    var requestOptions = {
          method: 'PUT',
          url: this.config.apiHost + '/api/v1/reminders/' + futId + '/',
          headers: {
            "Authorization": "Bearer " + this._accessToken,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          form: params,
          json: true
        }
    return _makeRequest(requestOptions, cb);
  }

/*
 * Permenantly deletes a FUT
 * params
 *   complete: 1 - If "this is passed, it marks as "completed" instead of deletes
 *                 see "completeFut".
 */
  Fut.prototype.deleteFut = function(params, cb) {
    if (typeof params.futId !== 'number') eb(new Error("futId must be an integer"));
    params = Object.assign({complete: false}, params); //delete by default.
    request.delete({
        url: this.config.apiHost + '/api/v1/reminders/' + params.futId + '/',
        headers: {
          "Authorization": "Bearer " + this._accessToken,
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        form: {
            complete: params.complete
        },
        json: true
        }, (error, result, body) => {
          if(error || result.statusCode != 204) {
           cb(new Error("There was an error completing / deleting your reminder", result + ' ' + body));
          } else {
           cb(null, body);
          }
        });
  }

  /*
   * Completes A Given Followup
   * "Completing" has different behavior depending on the fut - recurring, task, etc.
   */
  Fut.prototype.completeFut = function(futId, cb) {
    return this.deleteFut({futId: futId, complete: 1}, cb);
  }

  Fut.prototype.saveExtData = function(settings, cb) {
    if(typeof settings != 'object') throw new Error ('settings must be an object');
    var requestOptions = {
      method: 'POST',
      url: this.config.apiHost + '/api/v1/extensions/self/users/self/data/',
      headers: {
        "Authorization": "Bearer " + this._accessToken,
        "Content-Type": "application/json"
      },
      body: settings,
      json: true
    }
    return _makeRequest(requestOptions, cb)
  }

  Fut.prototype.getExtData = function(cb) {
    var requestOptions = {
        url: this.config.apiHost + '/api/v1/extensions/self/users/self/data/',
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
Fut.prototype.getAuthorizationUri = function() {
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


Fut.prototype.getAccessToken = function(authCode, cb) {
  return new Promise((resolve, reject) => {
    debug('auth code from auth uri used to retrive auth token: ', authCode);

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
        debug('Access Token Error', error.message)
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
Fut.prototype.setAccessToken = function(accessToken) {
  this._accessToken = accessToken;
}

Fut.prototype.showAccessToken = function(accessToken) {
  return this._accessToken;
}

module.exports = Fut;
