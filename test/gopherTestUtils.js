require('dotenv').config({path: './test/.env'});
var nock = require('nock')
var fs = require('fs');
var Gopher = require('../gopherhq-node');

var apiHost = process.env.API_HOST;
var accessToken = process.env.ACCESS_TOKEN;

module.exports.getGopherClient = function () {
  let gopherClient = new Gopher(
    {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI,
      extensionUrl: process.env.REDIRECT_URI,
      scope: process.env.SCOPE,
      apiHost: apiHost,
      tokenHost: apiHost,
      tokenPath: apiHost + '/api/v1/oauth2/access_token',
      authorizePath: apiHost + '/settings/oauth2_authorize'
  });
  gopherClient.setAccessToken(accessToken);
  return gopherClient;
}

module.exports.recordNockMocks = function () {
  function customNockLogger(output) {
    fs.appendFileSync('./tests/nockMocks.js', output, (err, success) => {if(err) console.log('Error writing to network mock file:', err)});
    console.log('request added to nock mocks...');
  }

  if(fs.existsSync('./tests/nockMocks.js')) {
    fs.unlinkSync('./tests/nockMocks.js');
  }
  fs.appendFileSync('./tests/nockMocks.js', `//auto-generated file \nvar nock = require('nock');`);
  nock.recorder.rec({use_separator: false, logging: customNockLogger });
}

module.exports.sleep = function sleep (time) {
  console.log('sleeping for', time);
  return new Promise((resolve) => setTimeout(resolve, time));
}