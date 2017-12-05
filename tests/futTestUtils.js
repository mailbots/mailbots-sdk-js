var nock = require('nock')
let fs = require('fs');

module.exports.getFutClient = function () {
  var Fut = require('../gopher-node');
  var futClient = new Gopher(
    {
      clientId: 'ext_03112dd8e958113b7be1b406916feb6c',
      clientSecret: '56d277ebce1ec1e834a1bc8a2acf5d53bda591bf00d4cec4faa2bfd45e8a6a98',
      extensionUrl:'http://subdomain.gopher.email/callback',
      redirectUri:'http://subdomain.gopher.email/auth/callback',
      scope: 'get_user_info extension_manage_self manage_reminders read_reminders',
      apiHost: 'https://www.followupthen.com',
      tokenHost: 'https://www.followupthen.com',
      tokenPath: 'https://www.followupthen.com/api/v1/oauth2/access_token',
      authorizePath: 'https://www.followupthen.com/settings/oauth2_authorize'
  });
  futClient.setAccessToken('4f2988981ad2bca644f9fe336357492574a320a2');
  return futClient;
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