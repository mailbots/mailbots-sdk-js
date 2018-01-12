//auto-generated file 
var nock = require('nock');
nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":1313,"trigger_url":"http://local.gopher.email/api/v1/trigger/4444e8ad1d1f36b7dfecad3413823166/","created":1515730173,"reminder_time":1515731976,"reminder_timeformat":"30min","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1","contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},"messages":[]}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '941',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":1314,"trigger_url":"http://local.gopher.email/api/v1/trigger/a4748af9dfeef78a90fd9bb462ecf246/","created":1515730176,"reminder_time":1515731979,"reminder_timeformat":"30min","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1","contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},"messages":[]}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '941',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"%2Flimit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1067,"trigger_url":"http://local.gopher.email/api/v1/trigger/99b043410efcbab1556fb3dc6e9fd00a/","created":1515474008,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1071,"trigger_url":"http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/","created":1515474322,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1072,"trigger_url":"http://local.gopher.email/api/v1/trigger/cae7abccdf4a108371a538eb4b5b9417/","created":1515474340,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1073,"trigger_url":"http://local.gopher.email/api/v1/trigger/3907ab4874f261a852c7ba651e3a641c/","created":1515474366,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1074,"trigger_url":"http://local.gopher.email/api/v1/trigger/d09692ba6455d4bedd8d80dc567da222/","created":1515474490,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1075,"trigger_url":"http://local.gopher.email/api/v1/trigger/d86214a2ba7397458eb2ba5f09e959c8/","created":1515476238,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1076,"trigger_url":"http://local.gopher.email/api/v1/trigger/aa40bcaac903a72f058d74d9c78e562a/","created":1515476737,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1077,"trigger_url":"http://local.gopher.email/api/v1/trigger/4354833870614281785e64a96e98cf89/","created":1515476976,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}}]}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '6766',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"%2Flimit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1067,"trigger_url":"http://local.gopher.email/api/v1/trigger/99b043410efcbab1556fb3dc6e9fd00a/","created":1515474008,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1071,"trigger_url":"http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/","created":1515474322,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1072,"trigger_url":"http://local.gopher.email/api/v1/trigger/cae7abccdf4a108371a538eb4b5b9417/","created":1515474340,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1073,"trigger_url":"http://local.gopher.email/api/v1/trigger/3907ab4874f261a852c7ba651e3a641c/","created":1515474366,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1074,"trigger_url":"http://local.gopher.email/api/v1/trigger/d09692ba6455d4bedd8d80dc567da222/","created":1515474490,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1075,"trigger_url":"http://local.gopher.email/api/v1/trigger/d86214a2ba7397458eb2ba5f09e959c8/","created":1515476238,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1076,"trigger_url":"http://local.gopher.email/api/v1/trigger/aa40bcaac903a72f058d74d9c78e562a/","created":1515476737,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1077,"trigger_url":"http://local.gopher.email/api/v1/trigger/4354833870614281785e64a96e98cf89/","created":1515476976,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}}]}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '6766',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"%2Flimit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1067,"trigger_url":"http://local.gopher.email/api/v1/trigger/99b043410efcbab1556fb3dc6e9fd00a/","created":1515474008,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1071,"trigger_url":"http://local.gopher.email/api/v1/trigger/40ab883c48e2b4ef8b981ff71954b2e4/","created":1515474322,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1072,"trigger_url":"http://local.gopher.email/api/v1/trigger/cae7abccdf4a108371a538eb4b5b9417/","created":1515474340,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1073,"trigger_url":"http://local.gopher.email/api/v1/trigger/3907ab4874f261a852c7ba651e3a641c/","created":1515474366,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1074,"trigger_url":"http://local.gopher.email/api/v1/trigger/d09692ba6455d4bedd8d80dc567da222/","created":1515474490,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1075,"trigger_url":"http://local.gopher.email/api/v1/trigger/d86214a2ba7397458eb2ba5f09e959c8/","created":1515476238,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1076,"trigger_url":"http://local.gopher.email/api/v1/trigger/aa40bcaac903a72f058d74d9c78e562a/","created":1515476737,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},{"id":1077,"trigger_url":"http://local.gopher.email/api/v1/trigger/4354833870614281785e64a96e98cf89/","created":1515476976,"reminder_time":null,"reminder_timeformat":"","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}}]}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '6766',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/1067/')
  .reply(200, {"status":"success","task":{"id":1067,"trigger_url":"http://local.gopher.email/api/v1/trigger/99b043410efcbab1556fb3dc6e9fd00a/","created":1515474008,"reminder_time":1515731993,"reminder_timeformat":"30min","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}}}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '888',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/1067/', {"task":{"reference_email":{"body":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":1067,"trigger_url":"http://local.gopher.email/api/v1/trigger/99b043410efcbab1556fb3dc6e9fd00a/","created":1515474008,"reminder_time":1515731995,"reminder_timeformat":"30min","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"private_data":{"contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},"messages":[]}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '902',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/extensions/self/data/', {"three":"more"})
  .reply(200, {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '125',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v1/extensions/self/data/')
  .reply(200, {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '125',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v1/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"valid":true,"due":"2018-01-12 20:09:56","due_gmt":"2018-01-13 04:09:56","recurring":false}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '92',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_be659a394e913e1cd0019053bb6b0e86","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_be659a394e913e1cd0019053bb6b0e86","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Fri, 12 Jan 2018 04:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=k22m9a8qpbenl0arg6cknj6p44; path=/',
  'Expires',
  'Thu, 19 Nov 1981 08:52:00 GMT',
  'Cache-Control',
  'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
  'Pragma',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_be659a394e913e1cd0019053bb6b0e86","email_address":["blackhole@example.com","blackhole2@example.com"]})
  .reply(200, {"status":"success"}, [ 'Date',
  'Fri, 12 Jan 2018 04:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":1315,"trigger_url":"http://local.gopher.email/api/v1/trigger/4db5618509f2c1f4b423428579f193de/","created":1515730203,"reminder_time":1515732006,"reminder_timeformat":"30min","completed":false,"completed_on":null,"reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1","contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"66639e6604f924992177aadf1fcca725cd2bfbe5"}}}},"messages":[]}, [ 'Date',
  'Fri, 12 Jan 2018 04:10:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '941',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);
