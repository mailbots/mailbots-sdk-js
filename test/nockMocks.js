//auto-generated file 
var nock = require('nock');
nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/tasks/', {"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":2449,"trigger_url":"http://local.gopher.email/api/v3/trigger/f36cacf1cab011650dfbc95f28e1026a/","created":1512689293,"reminder_time":1512689294,"reminder_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1","contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"78b97194db7b512c1773b734592c882976524c49"}}}},"messages":[]}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '954',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/tasks/', {"task":{"command":"test@gopher-express-ngrok.gopher.email","reminder_timeformat":"1sec","reference_email":{"server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":2450,"trigger_url":"http://local.gopher.email/api/v3/trigger/c6ccaf70cd4e9f3b1f5fd7e633d2b400/","created":1512689295,"reminder_time":1512689296,"reminder_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-ngrok.gopher.email","to":["test@gopher-express-ngrok.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":{"privatedata1":"Value1","contact_id":"12345"},"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"New Gopher Express (Ngrok)","flag":"gopher-express-ngrok","private_data":{"gopher_token":"78b97194db7b512c1773b734592c882976524c49"}}}},"messages":[]}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '954',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks')
  .query({"%2Flimit":"1"})
  .reply(301, "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"refresh\" content=\"1;url=/api/v3/tasks/?/limit=1\" />\n\n        <title>Redirecting to /api/v3/tasks/?/limit=1</title>\n    </head>\n    <body>\n        Redirecting to <a href=\"/api/v3/tasks/?/limit=1\">/api/v3/tasks/?/limit=1</a>.\n    </body>\n</html>", [ 'Date',
  'Thu, 07 Dec 2017 23:28:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Location',
  '/api/v3/tasks/?/limit=1',
  'Content-Length',
  '336',
  'Connection',
  'close',
  'Content-Type',
  'text/html; charset=UTF-8' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks/')
  .query({"%2Flimit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1925,"trigger_url":"http://local.gopher.email/api/v3/trigger/3bb81a268f24325c4bb4698cf8b7b6b5/","created":1510264643,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1926,"trigger_url":"http://local.gopher.email/api/v3/trigger/fc2c1fcabb5101536c932e50afdb81ef/","created":1510264983,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1927,"trigger_url":"http://local.gopher.email/api/v3/trigger/f7747d1b722e03aa37bfc12db9bc820e/","created":1510265000,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1928,"trigger_url":"http://local.gopher.email/api/v3/trigger/095761b04d6e1bc1e1934708e8630023/","created":1510265099,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1929,"trigger_url":"http://local.gopher.email/api/v3/trigger/f70e8665f87cfd849a189e416e42686f/","created":1510265393,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1930,"trigger_url":"http://local.gopher.email/api/v3/trigger/58ed9ceabfa3f24a455c86c1f7cb1679/","created":1510265413,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1931,"trigger_url":"http://local.gopher.email/api/v3/trigger/6f7d043e21f555dc2f45f6f74ead908b/","created":1510265500,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1932,"trigger_url":"http://local.gopher.email/api/v3/trigger/f13ddff0fbf5fa4a69a6a706cbc81407/","created":1510265927,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}}]}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '7934',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks')
  .query({"%2Flimit":"1"})
  .reply(301, "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"refresh\" content=\"1;url=/api/v3/tasks/?/limit=1\" />\n\n        <title>Redirecting to /api/v3/tasks/?/limit=1</title>\n    </head>\n    <body>\n        Redirecting to <a href=\"/api/v3/tasks/?/limit=1\">/api/v3/tasks/?/limit=1</a>.\n    </body>\n</html>", [ 'Date',
  'Thu, 07 Dec 2017 23:28:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Location',
  '/api/v3/tasks/?/limit=1',
  'Content-Length',
  '336',
  'Connection',
  'close',
  'Content-Type',
  'text/html; charset=UTF-8' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks/')
  .query({"%2Flimit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1925,"trigger_url":"http://local.gopher.email/api/v3/trigger/3bb81a268f24325c4bb4698cf8b7b6b5/","created":1510264643,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1926,"trigger_url":"http://local.gopher.email/api/v3/trigger/fc2c1fcabb5101536c932e50afdb81ef/","created":1510264983,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1927,"trigger_url":"http://local.gopher.email/api/v3/trigger/f7747d1b722e03aa37bfc12db9bc820e/","created":1510265000,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1928,"trigger_url":"http://local.gopher.email/api/v3/trigger/095761b04d6e1bc1e1934708e8630023/","created":1510265099,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1929,"trigger_url":"http://local.gopher.email/api/v3/trigger/f70e8665f87cfd849a189e416e42686f/","created":1510265393,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1930,"trigger_url":"http://local.gopher.email/api/v3/trigger/58ed9ceabfa3f24a455c86c1f7cb1679/","created":1510265413,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1931,"trigger_url":"http://local.gopher.email/api/v3/trigger/6f7d043e21f555dc2f45f6f74ead908b/","created":1510265500,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1932,"trigger_url":"http://local.gopher.email/api/v3/trigger/f13ddff0fbf5fa4a69a6a706cbc81407/","created":1510265927,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}}]}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '7934',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks')
  .query({"%2Flimit":"1"})
  .reply(301, "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"refresh\" content=\"1;url=/api/v3/tasks/?/limit=1\" />\n\n        <title>Redirecting to /api/v3/tasks/?/limit=1</title>\n    </head>\n    <body>\n        Redirecting to <a href=\"/api/v3/tasks/?/limit=1\">/api/v3/tasks/?/limit=1</a>.\n    </body>\n</html>", [ 'Date',
  'Thu, 07 Dec 2017 23:28:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Location',
  '/api/v3/tasks/?/limit=1',
  'Content-Length',
  '336',
  'Connection',
  'close',
  'Content-Type',
  'text/html; charset=UTF-8' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks/')
  .query({"%2Flimit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1925,"trigger_url":"http://local.gopher.email/api/v3/trigger/3bb81a268f24325c4bb4698cf8b7b6b5/","created":1510264643,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1926,"trigger_url":"http://local.gopher.email/api/v3/trigger/fc2c1fcabb5101536c932e50afdb81ef/","created":1510264983,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1927,"trigger_url":"http://local.gopher.email/api/v3/trigger/f7747d1b722e03aa37bfc12db9bc820e/","created":1510265000,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1928,"trigger_url":"http://local.gopher.email/api/v3/trigger/095761b04d6e1bc1e1934708e8630023/","created":1510265099,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1929,"trigger_url":"http://local.gopher.email/api/v3/trigger/f70e8665f87cfd849a189e416e42686f/","created":1510265393,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1930,"trigger_url":"http://local.gopher.email/api/v3/trigger/58ed9ceabfa3f24a455c86c1f7cb1679/","created":1510265413,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1931,"trigger_url":"http://local.gopher.email/api/v3/trigger/6f7d043e21f555dc2f45f6f74ead908b/","created":1510265500,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},{"id":1932,"trigger_url":"http://local.gopher.email/api/v3/trigger/f13ddff0fbf5fa4a69a6a706cbc81407/","created":1510265927,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}}]}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '7934',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks/1925/')
  .reply(200, {"status":"success","task":{"id":1925,"trigger_url":"http://local.gopher.email/api/v3/trigger/3bb81a268f24325c4bb4698cf8b7b6b5/","created":1510264643,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}}}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '1013',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .put('/api/v3/tasks/1925/', "task%5Breference_email%5D%5Bbody%5D=something%20else%20new")
  .reply(200, {"status":"success","task":{"id":1925,"trigger_url":"http://local.gopher.email/api/v3/trigger/3bb81a268f24325c4bb4698cf8b7b6b5/","created":1510264643,"reminder_time":null,"reminder_timeformat":"test","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"test@gopher-express-local.gopher.email","to":["test@gopher-express-local.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"ARCHIVED Gopher Express (Local Ngrok)","flag":"ARCHIVED-gopher-express-local","private_data":{"gopher_token":"07f972426ffbb8a844a9a4ac83135f81ac5717a4","inputName":"Reilly Sweetland","inputEmail":"","default_reply":"","setting_1":1,"setting_2":0,"secret":"","select":""}}}},"messages":[]}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '1027',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/extensions/self/data/', {"three":"more"})
  .reply(200, {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '125',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/extensions/self/data/')
  .reply(200, {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '125',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(301, "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"refresh\" content=\"1;url=/api/v3/natural_time/?format=1day&amp;method=bcc&amp;timezone=America%2FLos_Angeles\" />\n\n        <title>Redirecting to /api/v3/natural_time/?format=1day&amp;method=bcc&amp;timezone=America%2FLos_Angeles</title>\n    </head>\n    <body>\n        Redirecting to <a href=\"/api/v3/natural_time/?format=1day&amp;method=bcc&amp;timezone=America%2FLos_Angeles\">/api/v3/natural_time/?format=1day&amp;method=bcc&amp;timezone=America%2FLos_Angeles</a>.\n    </body>\n</html>", [ 'Date',
  'Thu, 07 Dec 2017 23:28:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Location',
  '/api/v3/natural_time/?format=1day&method=bcc&timezone=America%2FLos_Angeles',
  'Content-Length',
  '576',
  'Connection',
  'close',
  'Content-Type',
  'text/html; charset=UTF-8' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/natural_time/')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"valid":true,"due":"2017-12-08 15:28:38","due_gmt":"2017-12-08 23:28:38","recurring":false}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '92',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/invites/', "client_id=ext_be659a394e913e1cd0019053bb6b0e86&email_address=test%40example.com")
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/invites/', "client_id=ext_be659a394e913e1cd0019053bb6b0e86&email_address=test%40example.com")
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=qctfpl1pnsa4dqd5d86o4q8d70; path=/',
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
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/invites/', "client_id=ext_be659a394e913e1cd0019053bb6b0e86&email_address%5B0%5D=blackhole%40example.com&email_address%5B1%5D=blackhole%40example.com")
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/trigger/3bb81a268f24325c4bb4698cf8b7b6b5/')
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 07 Dec 2017 23:28:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=5ii5e6ape60f8tmn25pti10bo6; path=/',
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
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);
