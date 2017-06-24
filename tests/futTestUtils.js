var nock = require('nock')

module.exports.getFutClient = function () {
  var Fut = require('../fut');
  var futClient = new Fut(
    {
      clientId: 'ext_03112dd8e958113b7be1b406916feb6c',
      clientSecret: '56d277ebce1ec1e834a1bc8a2acf5d53bda591bf00d4cec4faa2bfd45e8a6a98',
      redirectUri:'http://localhost:3003/callback',
      scope: 'get_user_info extension_manage_self manage_reminders read_reminders',
      apiHost: 'https://www.followupthen.com',
      tokenHost: 'https://www.followupthen.com',
      tokenPath: 'https://www.followupthen.com/api/v1/oauth2/access_token',
      authorizePath: 'https://www.followupthen.com/settings/oauth2_authorize'
  });
  futClient.setAccessToken('7297f3ee08fb6f6b8c509844f90de7f0820de7fa');
  return futClient;
}
