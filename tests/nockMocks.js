//auto-generated file 
var nock = require('nock');
nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/tasks/', "task%5Bcommand%5D=%7B%7Bexample_email_cmd%7D%7D&task%5Breminder_timeformat%5D=1sec&task%5Breference_email%5D%5Bserver_recipient%5D=%7B%7Bexample_email_cmd%7D%7D&task%5Breference_email%5D%5Bto%5D%5B0%5D=%7B%7Bexample_email_cmd%7D%7D&task%5Breference_email%5D%5Bfrom%5D=bar%40bar.email&task%5Breference_email%5D%5Bsubject%5D=Test1&task%5Breference_email%5D%5Bhtml%5D=Test1&task%5Breference_email%5D%5Btext%5D=Test1&task%5Bprivate_data%5D%5Bprivatedata1%5D=Value1")
  .reply(201, {"status":"success","task":{"id":2343,"trigger_url":"http://local.gopher.email/api/v3/trigger/10dc1e725a5bdff09ac9e2cdaab266f7/","created":1512432993,"reminder_time":null,"reminder_timeformat":"{{example_email_cmd}}","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"{{example_email_cmd}}@gopher.email","to":[],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"}}},"messages":[]}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '743',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/tasks/', "task%5Bcommand%5D=%7B%7Bexample_email_cmd%7D%7D&task%5Breminder_timeformat%5D=1sec&task%5Breference_email%5D%5Bserver_recipient%5D=%7B%7Bexample_email_cmd%7D%7D&task%5Breference_email%5D%5Bto%5D%5B0%5D=%7B%7Bexample_email_cmd%7D%7D&task%5Breference_email%5D%5Bfrom%5D=bar%40bar.email&task%5Breference_email%5D%5Bsubject%5D=Test1&task%5Breference_email%5D%5Bhtml%5D=Test1&task%5Breference_email%5D%5Btext%5D=Test1&task%5Bprivate_data%5D%5Bprivatedata1%5D=Value1")
  .reply(201, {"status":"success","task":{"id":2344,"trigger_url":"http://local.gopher.email/api/v3/trigger/c1e5065dc6e42bead77d52d062ae7287/","created":1512432995,"reminder_time":null,"reminder_timeformat":"{{example_email_cmd}}","completed":false,"completed_on":null,"reference_email":{"method":"to","server_recipient":"{{example_email_cmd}}@gopher.email","to":[],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"}}},"messages":[]}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '743',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/tasks/', "task%5Bcommand%5D=foo32rfadf&task%5Breminder_timeformat%5D=1sec&task%5Breference_email%5D%5Bserver_recipient%5D=foo32rfadf%40foo32rfadf.gopher.email&task%5Breference_email%5D%5Bto%5D%5B0%5D=foo%40ffoo32rfadfoo.gopher.email&task%5Breference_email%5D%5Bfrom%5D=bar%40bar.email&task%5Breference_email%5D%5Bsubject%5D=Test1&task%5Breference_email%5D%5Bhtml%5D=Test1&task%5Breference_email%5D%5Btext%5D=Test1&task%5Bprivate_data%5D%5Bprivatedata1%5D=Value1")
  .reply(400, {"status":"error","type":"gopher_command_not_found","format":"foo32rfadf@foo32rfadf.gopher.email"}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '98',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks')
  .query({"%2Flimit":"1"})
  .reply(301, "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"refresh\" content=\"1;url=/api/v3/tasks/?/limit=1\" />\n\n        <title>Redirecting to /api/v3/tasks/?/limit=1</title>\n    </head>\n    <body>\n        Redirecting to <a href=\"/api/v3/tasks/?/limit=1\">/api/v3/tasks/?/limit=1</a>.\n    </body>\n</html>", [ 'Date',
  'Tue, 05 Dec 2017 00:16:39 GMT',
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
  .reply(200, {"status":"success","tasks":[{"id":2049,"trigger_url":"http://local.gopher.email/api/v3/trigger/b7d7851fc1ed6d37b452a4a757803f46/","created":1511076931,"reminder_time":1512891331,"reminder_timeformat":"3weeks","completed":false,"completed_on":-62169984000,"reference_email":{"method":"to","server_recipient":"3weeks@mentor.gopher.email","to":["3weeks@mentor.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"React Mentor App","flag":"mentor","private_data":[]}}}]}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '812',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks')
  .query({"%2Flimit":"1"})
  .reply(301, "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"refresh\" content=\"1;url=/api/v3/tasks/?/limit=1\" />\n\n        <title>Redirecting to /api/v3/tasks/?/limit=1</title>\n    </head>\n    <body>\n        Redirecting to <a href=\"/api/v3/tasks/?/limit=1\">/api/v3/tasks/?/limit=1</a>.\n    </body>\n</html>", [ 'Date',
  'Tue, 05 Dec 2017 00:16:41 GMT',
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
  .reply(200, {"status":"success","tasks":[{"id":2049,"trigger_url":"http://local.gopher.email/api/v3/trigger/b7d7851fc1ed6d37b452a4a757803f46/","created":1511076931,"reminder_time":1512891331,"reminder_timeformat":"3weeks","completed":false,"completed_on":-62169984000,"reference_email":{"method":"to","server_recipient":"3weeks@mentor.gopher.email","to":["3weeks@mentor.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":null,"html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"React Mentor App","flag":"mentor","private_data":[]}}}]}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '812',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .get('/api/v3/tasks/2049/')
  .reply(200, {"status":"success","task":{"id":2049,"trigger_url":"http://local.gopher.email/api/v3/trigger/b7d7851fc1ed6d37b452a4a757803f46/","created":1511076931,"reminder_time":1512891331,"reminder_timeformat":"3weeks","completed":false,"completed_on":-62169984000,"reference_email":{"method":"to","server_recipient":"3weeks@mentor.gopher.email","to":["3weeks@mentor.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"React Mentor App","flag":"mentor","private_data":[]}}}}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '807',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .put('/api/v3/tasks/2049/', "task%5Breference_email%5D%5Bbody%5D=something%20else%20new")
  .reply(200, {"status":"success","task":{"id":2049,"trigger_url":"http://local.gopher.email/api/v3/trigger/b7d7851fc1ed6d37b452a4a757803f46/","created":1511076931,"reminder_time":1512891331,"reminder_timeformat":"3weeks","completed":false,"completed_on":-62169984000,"reference_email":{"method":"to","server_recipient":"3weeks@mentor.gopher.email","to":["3weeks@mentor.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"private_data":[],"relationships":{"user":{"primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland@gmail.com"],"name":"Reilly Sweetland","timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T"},"extension":{"name":"React Mentor App","flag":"mentor","private_data":[]}}},"messages":[]}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Cache-Control',
  'no-cache',
  'Content-Length',
  '821',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.gopher.email:80', {"encodedQueryParams":true})
  .post('/api/v3/extensions/self/data/', {"three":"more"})
  .reply(200, {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:46 GMT',
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
  'Tue, 05 Dec 2017 00:16:47 GMT',
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
  'Tue, 05 Dec 2017 00:16:48 GMT',
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
  .reply(200, {"valid":true,"due":"2017-12-05 16:16:49","due_gmt":"2017-12-06 00:16:49","recurring":false}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:49 GMT',
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
  .post('/api/v3/invites/', "extension=gopher-express&email_address=test%40example.com")
  .reply(200, {"status":"success"}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:50 GMT',
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
  .post('/api/v3/invites/', "extension=gopher-express&email_address=test%40example.com")
  .reply(200, {"status":"success"}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=g4tsop93i5rblij6rj07jmpg34; path=/',
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
  .post('/api/v3/invites/', "extension=gopher-express&email_address%5B0%5D=blackhole%40example.com&email_address%5B1%5D=blackhole%40example.com")
  .reply(200, {"status":"success"}, [ 'Date',
  'Tue, 05 Dec 2017 00:16:53 GMT',
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
