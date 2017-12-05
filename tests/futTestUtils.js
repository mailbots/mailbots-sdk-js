var nock = require('nock')
var fs = require('fs');
var Gopher = require('../gopher-node');

var apiHost = 'http://local.gopher.email';
var accessToken = '4f2988981ad2bca644f9fe336357492574a320a2';

module.exports.getGopherClient = function (accessToken) {
  let gopherClient = new Gopher(
    {
      clientId: 'ext_03112dd8e958113b7be1b406916feb6c',
      clientSecret: '56d277ebce1ec1e834a1bc8a2acf5d53bda591bf00d4cec4faa2bfd45e8a6a98',
      redirectUri:'http://localhost:3002/callback',
      extensionUrl:'http://gopher-express.glitch.com/',
      scope: 'get_user_info extension_manage_self manage_reminders read_reminders',
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