//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.mailbots.com:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');
nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/mailbots/self/data/', {"three":"more"})
  .reply(200, {"status":"success","data":{"gmail_credentials":{"watch_id":"8913420","access_token":"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g","refresh_token":"1/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE","watch_data":{"historyId":"8913420"},"watch_expiry_date":"2019-05-19T16:33:16.935Z"},"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/New_York"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:34 GMT',
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
  '486',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/mailbots/self')
  .reply(200, {"status":"success","mailbot":{"name":"Gopher Admin UI (Reilly Localhost)","subdomain":"local-gopher-admin-ui","stored_data":[],"installed":true,"event_url":"http://localhost/api/v1/mailbot_event/177/735c18e988ff64b6/","id":39,"owner":{"email":"esweetland@gmail.com"},"description":"Description","icon":"","autocomplete_examples":"","tags":"","published":false,"devmode":true,"enabled":true,"install_url":"http://127.0.0.1:3000/","settings_url":"http://127.0.0.1:3000/","base_url":"http://127.0.0.1:3000/","developer_name":"","help_url":"","learn_more_url":"","privacy_policy_url":"","oauth2_client_id":"ext_0107e8160247f26a57d89ab5162829b2_","oauth2_scope":"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self","oauth2_redirect_uri":"http://localhost:3000/auth/callback","oauth2_client_secret":"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63","webhook_url":"http://local.mailbots.com/webhooks","webhook_version":1,"metrics":{"unique_users":{"2019-07-16":1}}}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:35 GMT',
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
  '1095',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://localhost:80', {"encodedQueryParams":true})
  .post('/api/v1/mailbot_event/240/df17f33fd2e9a659/', {"foo":"bar"})
  .query({"type":"github.issue.opened"})
  .reply(200, {"mailbot":{"subdomain":"test-mailbot-1"},"webhook":{"status":"failed","message":null},"status":"success"}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=ocrgtdmvtg686baud46kbjuc22; path=/',
  'Expires',
  'Thu, 19 Nov 1981 08:52:00 GMT',
  'Cache-Control',
  'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
  'Pragma',
  'no-cache',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '106',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/interbot_event', {"subdomain":"test-mailbot-2","payload":{"foo":"bar"}})
  .reply(200, {"webhook":{"status":"success","message":null},"response":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}"}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:36 GMT',
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
  '303',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/mailbots/self/data/')
  .reply(200, {"status":"success","data":{"gmail_credentials":{"watch_id":"8913420","access_token":"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g","refresh_token":"1/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE","watch_data":{"historyId":"8913420"},"watch_expiry_date":"2019-05-19T16:33:16.935Z"},"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/New_York"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:37 GMT',
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
  '486',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Successful task"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"330","email_outbound_last_at":"2019-07-16 06:03:50","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:37 GMT',
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
  '1606',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Unsuccessful webhook"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":2,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful webhook","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"331","email_outbound_last_at":"2019-07-16 06:03:50","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"failed","message":"MailBot webhook url not set."}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:38 GMT',
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
  '1606',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@$wrong.eml.bot","reference_email":{"subject":"Unsuccessful submission"},"trigger_timeformat":"1hour"}})
  .reply(400, {"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:38 GMT',
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
  '262',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":3047,"date":"2019-07-16 06:05:38","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:39 GMT',
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
  '1971',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":3047,"date":"2019-07-16 06:05:38","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2842,"date":"2019-07-16 06:03:30","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:03:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2594,"date":"2019-07-16 02:17:10","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 02:17:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2392,"date":"2019-07-16 02:14:06","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 02:14:06 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2190,"date":"2019-07-16 01:30:49","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:30:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2169,"date":"2019-07-16 01:28:54","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:28:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2164,"date":"2019-07-16 01:28:25","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:28:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2152,"date":"2019-07-16 01:27:27","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:27:27 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2140,"date":"2019-07-16 01:26:58","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:26:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2122,"date":"2019-07-16 01:26:32","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:26:32 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2104,"date":"2019-07-16 01:26:14","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:26:14 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2069,"date":"2019-07-16 01:22:10","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@undefined.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@undefined.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@undefined.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@undefined.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"125","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@undefined.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:22:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@undefined.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@undefined.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2063,"date":"2019-07-16 01:21:34","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@undefined.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@undefined.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@undefined.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@undefined.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"125","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@undefined.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:21:34 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@undefined.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@undefined.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":1779,"date":"2019-07-13 22:17:52","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (test@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"test@test-extension-1.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (test@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"test@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/?verbose=1","http_request_method":"POST","http_request_headers":{"content-type":"application/json","user-agent":"PostmanRuntime/7.15.2","accept":"*/*","cache-control":"no-cache","postman-token":"8a564bc4-ab0a-4eaf-ae23-06e9a7dc9edf","host":"local.mailbots.com","cookie":"PHPSESSID=qumpva2963dmm1e98f6nsfcg60","accept-encoding":"gzip, deflate","content-length":"814","connection":"keep-alive","x-php-ob-level":"1"},"http_request_body":"{\n\"webhook\": true,\n\"suppress_email\": true,\n\"task\": {\n    \"command\": \"test@test-extension-1.eml.bot\",\n    \"reference_email\": {\n      \"server_recipient\": \"test@test-extension-1.eml.bot\",\n      \"to\": [\"test@test-extension-1.eml.bot\"],\n      \"cc\": [],\n      \"bcc\": [],\n      \"from\": \"esweetland@gmail.com\",\n      \"subject\": \"Test1\",\n      \"html\": \"Test1\",\n      \"text\": \"Test1\",\n      \"attachments\": []\n    },\n    \"stored_data\": {\n        \"privatedata1\": \"Value1\"\n    },\n    \"search_keys\": [\"searchkey1\", \"searchkey1\"],\n  \"trigger_time\": 1520319928,\n  \"trigger_timeformat\": \"1hour\",\n   \"completed\": 0\n  },\n  \"send_messages\": [\n{\n\"type\": \"email\",  \n \"subject\": \"Direct email from API call\",\n \"to\": \"esweetland@gmail.com\",\n \"body\": [\n   {\n     \"type\": \"html\",\n     \"text\": \"<h1>This is a test</h1>\"\n   }\n   ]\n   }\n   ]\n}","http_response_headers":{"cache-control":"no-cache","date":"Sat, 13 Jul 2019 22:17:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (test@test-extension-1.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"test@test-extension-1.eml.bot\"}","http_response_statuscode":400,"messages_sent":null}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:39 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed","api"]})
  .reply(200, {"status":"success","logs":[{"id":3047,"date":"2019-07-16 06:05:38","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":3046,"date":"2019-07-16 06:05:38","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":3044,"date":"2019-07-16 06:05:38","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"bd8729f1f980983a0e933bc95c444640\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/bd8729f1f980983a0e933bc95c444640\\/\",\"created\":1563257138,\"trigger_time\":1563260738,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"331\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"failed\",\"message\":\"MailBot webhook url not set.\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3043,"date":"2019-07-16 06:05:38","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"bd8729f1f980983a0e933bc95c444640\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/bd8729f1f980983a0e933bc95c444640\\/\",\"created\":1563257138,\"trigger_time\":1563260738,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"330\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3042,"date":"2019-07-16 06:05:37","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3040,"date":"2019-07-16 06:05:36","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/interbot_event","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/interbot_event","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"54","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"subdomain\":\"test-mailbot-2\",\"payload\":{\"foo\":\"bar\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:37 GMT","content-type":"application/json"},"http_response_body":"{\"webhook\":{\"status\":\"success\",\"message\":null},\"response\":\"{\\u0022version\\u0022:\\u00221\\u0022,\\u0022send_messages\\u0022:[{\\u0022subject\\u0022:\\u0022Hello world!\\u0022,\\u0022body\\u0022:[{\\u0022type\\u0022:\\u0022html\\u0022,\\u0022text\\u0022:\\u0022Hello world!\\u0022}],\\u0022type\\u0022:\\u0022email\\u0022}]}\"}","http_response_statuscode":200,"messages_sent":null},{"id":3038,"date":"2019-07-16 06:05:35","type":"api","level":"info","mailbot":"local-gopher-admin-ui","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:35 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/177\\/735c18e988ff64b6\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":true,\"install_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"settings_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/local.mailbots.com\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-07-16\":1}}}}","http_response_statuscode":200,"messages_sent":null},{"id":3037,"date":"2019-07-16 06:05:34","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:34 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3036,"date":"2019-07-16 06:05:05","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"119","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_66624d3f37e21b82ec781e909042b2e4\",\"email_address\":[\"blackhole@example.com\",\"blackhole2@example.com\"]}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:05 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200,"messages_sent":null},{"id":3035,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_66624d3f37e21b82ec781e909042b2e4\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200,"messages_sent":null},{"id":3034,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"13","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"foo\":\"bar\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3033,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3032,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/users/self/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/users/self/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"],\"email\":\"esweetland@gmail.com\",\"gopher_dev\":true,\"user_hash\":\"b18d08c0edce4c685e6350dbc9047470ff331da5428499ab5a5c0f9a2d81134e\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3031,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/188?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/188?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3030,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/190?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/190?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3029,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/187?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/187?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3028,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/189?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/189?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3027,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":91,\"hash\":\"925fae7f6d950f5894413e031d9da371\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/925fae7f6d950f5894413e031d9da371\\/\",\"created\":1563256025,\"trigger_time\":1563259625,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"github@unbranded-bandwidth.eml.bot\",\"search_keys\":[\"searchkey1\",\"searchkey1\"],\"delivery_status\":\"\",\"stored_data\":{\"privatedata1\":\"Value1\"},\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"12\",\"email_outbound_last_at\":\"2019-07-16 05:59:45\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Github Issue Bot\",\"subdomain\":\"unbranded-bandwidth\",\"stored_data\":{\"access_token\":\"b6304a159036ca91f4587371748b1d4e011986f2\",\"github\":{\"token\":{\"access_token\":\"bccce1e3969f71584165ee13ed8791b4d477812e\",\"scope\":\"admin:org_hook,repo\",\"token_type\":\"bearer\"},\"installed_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"github_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"id\":85,\"icon\":\"https:\\/\\/fut-cdn.s3.amazonaws.com\\/mailbots\\/random-mailbot-icons\\/2.png\",\"description\":\"Hello World! See https:\\/\\/docs.mailbots.com\\/ to get started\"}}}]}","http_response_statuscode":200,"messages_sent":null},{"id":3026,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":190,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"129","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":190,\"hash\":\"9b30b3d5453af9837b25213b25cab845\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/9b30b3d5453af9837b25213b25cab845\\/\",\"created\":1563257052,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"329\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3025,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":189,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"157","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":189,\"hash\":\"b01ea7393d800fcdf9e32b5c65d9dd2b\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/b01ea7393d800fcdf9e32b5c65d9dd2b\\/\",\"created\":1563257052,\"trigger_time\":1563357600,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-2.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"60\",\"email_outbound_last_at\":null,\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"id\":90,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3024,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":188,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"178","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":188,\"hash\":\"9d067e30e7abc77d26c99849d7cdb83c\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/9d067e30e7abc77d26c99849d7cdb83c\\/\",\"created\":1563257052,\"trigger_time\":2194412652,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"328\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"9\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3023,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":187,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"148","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":187,\"hash\":\"1f7c8b65f0716b3d6fea3e6211c35082\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/1f7c8b65f0716b3d6fea3e6211c35082\\/\",\"created\":1563257051,\"trigger_time\":1563260652,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"327\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"8\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3022,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/186?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/186?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3021,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/183?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/183?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3020,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/184?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/184?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3019,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/185?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/185?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3018,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?mailbot=test-mailbot-1&page=1&per_page=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?mailbot=test-mailbot-1&page=1&per_page=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":183,\"hash\":\"beb60b4ffb692e05e7526f2cc887c898\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/beb60b4ffb692e05e7526f2cc887c898\\/\",\"created\":1563257050,\"trigger_time\":1563260650,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"326\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200,"messages_sent":null},{"id":3017,"date":"2019-07-16 06:04:10","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":186,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"129","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":186,\"hash\":\"beb60b4ffb692e05e7526f2cc887c898\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/beb60b4ffb692e05e7526f2cc887c898\\/\",\"created\":1563257050,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"326\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3016,"date":"2019-07-16 06:04:10","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":185,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"157","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":185,\"hash\":\"95a805125419b14f7d3d3f023b26b005\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/95a805125419b14f7d3d3f023b26b005\\/\",\"created\":1563257050,\"trigger_time\":1563357600,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-2.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"59\",\"email_outbound_last_at\":null,\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"id\":90,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3015,"date":"2019-07-16 06:04:10","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":184,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"178","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":184,\"hash\":\"7d7f5cf207bc378aba3a11e719173aed\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/7d7f5cf207bc378aba3a11e719173aed\\/\",\"created\":1563257050,\"trigger_time\":2194412650,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"325\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"9\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:40 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":3047,"date":"2019-07-16 06:05:38","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:41 GMT',
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
  '1971',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"since":"1558073142"})
  .reply(200, {"status":"success","logs":[{"id":3047,"date":"2019-07-16 06:05:38","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":3045,"date":"2019-07-16 06:05:38","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":3041,"date":"2019-07-16 06:05:36","type":"webhook","level":"warning","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: mailbot.interbot_event","details":"{\"schema_error\":\"Webhook is read only, but the response tried to send messages.\"}","data":{"schema_error":"Webhook is read only, but the response tried to send messages."},"http_request_url":"https://legendary-lightyear.glitch.me//webhooks","http_request_method":"POST","http_request_headers":{"Host":["legendary-lightyear.glitch.me"],"X-MailBots-Timestamp":[1563257136],"X-MailBots-Signature":["03d652d2e9f8d6cdc82f209c7088e6a594ffbbb84228bb83bf5159ac9fc2b102"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1550]},"http_request_body":"{\"source\":{\"mailbot\":\"local-gopher-admin-ui\"},\"payload\":{\"foo\":\"bar\"},\"event\":\"mailbot.interbot_event\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/241\\/e05d2d1d10bf7969\\/\",\"id\":90,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d301c25132723e1850b91fe0b5ad0021\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/legendary-lightyear.glitch.me\\/auth\\/callback\"}}","http_response_headers":{"Date":["Tue, 16 Jul 2019 06:05:37 GMT"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["122"],"Connection":["keep-alive"],"x-powered-by":["Express"],"etag":["W/\"7a-9eB/txkieGYqVKW2gSu7DHyVPaQ\""]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}","http_response_statuscode":200,"messages_sent":null},{"id":3039,"date":"2019-07-16 06:05:36","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":null},{"id":2895,"date":"2019-07-16 06:03:50","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":131,"userId":2,"event":"webhook failed: webhook url not set: task.triggered","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2842,"date":"2019-07-16 06:03:30","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:03:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2840,"date":"2019-07-16 06:03:30","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":109,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2836,"date":"2019-07-16 06:03:29","type":"webhook","level":"warning","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: mailbot.interbot_event","details":"{\"schema_error\":\"Webhook is read only, but the response tried to send messages.\"}","data":{"schema_error":"Webhook is read only, but the response tried to send messages."},"http_request_url":"https://legendary-lightyear.glitch.me//webhooks","http_request_method":"POST","http_request_headers":{"Host":["legendary-lightyear.glitch.me"],"X-MailBots-Timestamp":[1563257009],"X-MailBots-Signature":["f5b29731531dc75012a1ae3274c1b066b2e590e5916cd6a4ff1eaabc1eeb9822"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1550]},"http_request_body":"{\"source\":{\"mailbot\":\"local-gopher-admin-ui\"},\"payload\":{\"foo\":\"bar\"},\"event\":\"mailbot.interbot_event\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/241\\/e05d2d1d10bf7969\\/\",\"id\":90,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d301c25132723e1850b91fe0b5ad0021\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/legendary-lightyear.glitch.me\\/auth\\/callback\"}}","http_response_headers":{"Date":["Tue, 16 Jul 2019 06:03:29 GMT"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["122"],"Connection":["keep-alive"],"x-powered-by":["Express"],"etag":["W/\"7a-9eB/txkieGYqVKW2gSu7DHyVPaQ\""]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}","http_response_statuscode":200,"messages_sent":null},{"id":2834,"date":"2019-07-16 06:03:28","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":null},{"id":2813,"date":"2019-07-16 05:59:41","type":"webhook","level":"error","mailbot":"unbranded-bandwidth","mailbot_ownerid":2,"taskId":97,"userId":2,"event":"webhook failed: task.created","details":"","data":[],"http_request_url":"https://mb-gh-issues.mailbotsdev.com.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["mb-gh-issues.mailbotsdev.com.io"],"X-MailBots-Timestamp":[1563256781],"X-MailBots-Signature":["19998af3b6eaaf9a029e5c2bf453c078a9ef79b78680bfaba198949d3fb0ed1e"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2713]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"github@unbranded-bandwidth.eml.bot\",\"from\":\"esweetland@gmail.com\",\"method\":\"bcc\",\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"headers\":{\"to\":\"github@unbranded-bandwidth.eml.bot\",\"cc\":\"\",\"bcc\":\"\",\"subject\":\"Create to GitHub MailBot\",\"from\":\"esweetland@gmail.com\"}},\"command\":{\"format\":\"github\",\"full_address\":\"github@unbranded-bandwidth.eml.bot\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Github Issue Bot\",\"subdomain\":\"unbranded-bandwidth\",\"stored_data\":{\"access_token\":\"b6304a159036ca91f4587371748b1d4e011986f2\",\"github\":{\"token\":{\"access_token\":\"bccce1e3969f71584165ee13ed8791b4d477812e\",\"scope\":\"admin:org_hook,repo\",\"token_type\":\"bearer\"},\"installed_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"github_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/235\\/421bce54bafd60c1\\/\",\"id\":85,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Hello World! See https:\\/\\/docs.mailbots.com\\/ to get started\",\"icon\":\"https:\\/\\/fut-cdn.s3.amazonaws.com\\/mailbots\\/random-mailbot-icons\\/2.png\",\"autocomplete_examples\":\"create@unbranded-bandwidth.eml.bot, hello\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":false,\"install_url\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_f75fa01fe28bf27c72d4af877e5b2d24\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\\/auth\\/callback\"},\"task\":{\"created\":1563256781,\"completed\":false,\"completed_on\":\"\",\"hash\":\"8ee0ccef742d1d43fcce877858ef76c7\",\"id\":97,\"trigger_time\":1563260381,\"trigger_timeformat\":\"1hour\",\"reference_email\":{\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"github@unbranded-bandwidth.eml.bot\",\"stored_data\":{\"privatedata1\":\"Value1\"}}}","http_response_headers":{"Content-Length":["38"],"Content-Type":["text/plain"]},"http_response_body":"Tunnel mb-gh-issues.mailbotsdev.com.io not found","http_response_statuscode":404,"messages_sent":[{"type":"email","to":["esweetland@gmail.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Direct email from API call","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Direct email from API call</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<h1>This is a test</h1>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=esweetland@gmail.com\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24661&hash=074876621a553a4c154fa2e0c2919bca&gfr=esweetland@gmail.com\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}]},{"id":2807,"date":"2019-07-16 05:54:34","type":"webhook","level":"error","mailbot":"unbranded-bandwidth","mailbot_ownerid":2,"taskId":94,"userId":2,"event":"webhook failed: task.created","details":"","data":[],"http_request_url":"https://mb-gh-issues.mailbotsdev.com.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["mb-gh-issues.mailbotsdev.com.io"],"X-MailBots-Timestamp":[1563256474],"X-MailBots-Signature":["dd7a32736a17d46c67a3561cf24b70143fa49860ce254c642a4be8c717c616b1"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2713]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"github@unbranded-bandwidth.eml.bot\",\"from\":\"esweetland@gmail.com\",\"method\":\"bcc\",\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"headers\":{\"to\":\"github@unbranded-bandwidth.eml.bot\",\"cc\":\"\",\"bcc\":\"\",\"subject\":\"Create to GitHub MailBot\",\"from\":\"esweetland@gmail.com\"}},\"command\":{\"format\":\"github\",\"full_address\":\"github@unbranded-bandwidth.eml.bot\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Github Issue Bot\",\"subdomain\":\"unbranded-bandwidth\",\"stored_data\":{\"access_token\":\"b6304a159036ca91f4587371748b1d4e011986f2\",\"github\":{\"token\":{\"access_token\":\"bccce1e3969f71584165ee13ed8791b4d477812e\",\"scope\":\"admin:org_hook,repo\",\"token_type\":\"bearer\"},\"installed_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"github_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/235\\/421bce54bafd60c1\\/\",\"id\":85,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Hello World! See https:\\/\\/docs.mailbots.com\\/ to get started\",\"icon\":\"https:\\/\\/fut-cdn.s3.amazonaws.com\\/mailbots\\/random-mailbot-icons\\/2.png\",\"autocomplete_examples\":\"create@unbranded-bandwidth.eml.bot, hello\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":false,\"install_url\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_f75fa01fe28bf27c72d4af877e5b2d24\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\\/auth\\/callback\"},\"task\":{\"created\":1563256474,\"completed\":false,\"completed_on\":\"\",\"hash\":\"2b35c43a475864337fb9026da5447ea2\",\"id\":94,\"trigger_time\":1563260074,\"trigger_timeformat\":\"1hour\",\"reference_email\":{\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"github@unbranded-bandwidth.eml.bot\",\"stored_data\":{\"privatedata1\":\"Value1\"}}}","http_response_headers":{"Content-Length":["38"],"Content-Type":["text/plain"]},"http_response_body":"Tunnel mb-gh-issues.mailbotsdev.com.io not found","http_response_statuscode":404,"messages_sent":[{"type":"email","to":["esweetland@gmail.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Direct email from API call","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Direct email from API call</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<h1>This is a test</h1>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=esweetland@gmail.com\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24658&hash=1188a4f5944ec8c0f787949d2816cfc2&gfr=esweetland@gmail.com\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}]},{"id":2803,"date":"2019-07-16 05:47:05","type":"webhook","level":"error","mailbot":"unbranded-bandwidth","mailbot_ownerid":2,"taskId":91,"userId":2,"event":"webhook failed: task.created","details":"","data":[],"http_request_url":"https://mb-gh-issues.mailbotsdev.com.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["mb-gh-issues.mailbotsdev.com.io"],"X-MailBots-Timestamp":[1563256025],"X-MailBots-Signature":["0b7ec42d01eb5b728ade7debb8bdde6c58383518e8a45173e289a623e6bbf9c8"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2713]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"github@unbranded-bandwidth.eml.bot\",\"from\":\"esweetland@gmail.com\",\"method\":\"bcc\",\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"headers\":{\"to\":\"github@unbranded-bandwidth.eml.bot\",\"cc\":\"\",\"bcc\":\"\",\"subject\":\"Create to GitHub MailBot\",\"from\":\"esweetland@gmail.com\"}},\"command\":{\"format\":\"github\",\"full_address\":\"github@unbranded-bandwidth.eml.bot\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Github Issue Bot\",\"subdomain\":\"unbranded-bandwidth\",\"stored_data\":{\"access_token\":\"b6304a159036ca91f4587371748b1d4e011986f2\",\"github\":{\"token\":{\"access_token\":\"bccce1e3969f71584165ee13ed8791b4d477812e\",\"scope\":\"admin:org_hook,repo\",\"token_type\":\"bearer\"},\"installed_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"github_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/235\\/421bce54bafd60c1\\/\",\"id\":85,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Hello World! See https:\\/\\/docs.mailbots.com\\/ to get started\",\"icon\":\"https:\\/\\/fut-cdn.s3.amazonaws.com\\/mailbots\\/random-mailbot-icons\\/2.png\",\"autocomplete_examples\":\"create@unbranded-bandwidth.eml.bot, hello\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":false,\"install_url\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_f75fa01fe28bf27c72d4af877e5b2d24\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/mb-gh-issues.mailbotsdev.com.io\\/auth\\/callback\"},\"task\":{\"created\":1563256025,\"completed\":false,\"completed_on\":\"\",\"hash\":\"925fae7f6d950f5894413e031d9da371\",\"id\":91,\"trigger_time\":1563259625,\"trigger_timeformat\":\"1hour\",\"reference_email\":{\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"github@unbranded-bandwidth.eml.bot\",\"stored_data\":{\"privatedata1\":\"Value1\"}}}","http_response_headers":{"Content-Length":["38"],"Content-Type":["text/plain"]},"http_response_body":"Tunnel mb-gh-issues.mailbotsdev.com.io not found","http_response_statuscode":404,"messages_sent":[{"type":"email","to":["esweetland@gmail.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Direct email from API call","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Direct email from API call</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=esweetland@gmail.com\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24655&hash=a009863f4897c557c29536073e20b2a5&gfr=esweetland@gmail.com\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}]},{"id":2789,"date":"2019-07-16 03:17:12","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"webhook failed: webhook url not set: task.triggered","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2645,"date":"2019-07-16 02:17:25","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":24,"userId":2,"event":"webhook failed: webhook url not set: task.triggered","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2594,"date":"2019-07-16 02:17:10","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 02:17:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2592,"date":"2019-07-16 02:17:09","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2588,"date":"2019-07-16 02:17:08","type":"webhook","level":"warning","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: mailbot.interbot_event","details":"{\"schema_error\":\"Webhook is read only, but the response tried to send messages.\"}","data":{"schema_error":"Webhook is read only, but the response tried to send messages."},"http_request_url":"https://legendary-lightyear.glitch.me//webhooks","http_request_method":"POST","http_request_headers":{"Host":["legendary-lightyear.glitch.me"],"X-MailBots-Timestamp":[1563243428],"X-MailBots-Signature":["478dde29c9565a85c8d31443382d092df932a53816288679e853d64171121e4d"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1550]},"http_request_body":"{\"source\":{\"mailbot\":\"local-gopher-admin-ui\"},\"payload\":{\"foo\":\"bar\"},\"event\":\"mailbot.interbot_event\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/241\\/e05d2d1d10bf7969\\/\",\"id\":90,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d301c25132723e1850b91fe0b5ad0021\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/legendary-lightyear.glitch.me\\/auth\\/callback\"}}","http_response_headers":{"Date":["Tue, 16 Jul 2019 02:17:08 GMT"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["122"],"Connection":["keep-alive"],"x-powered-by":["Express"],"etag":["W/\"7a-9eB/txkieGYqVKW2gSu7DHyVPaQ\""]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}","http_response_statuscode":200,"messages_sent":null},{"id":2586,"date":"2019-07-16 02:17:07","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":null},{"id":2443,"date":"2019-07-16 02:14:17","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3763,"userId":2,"event":"webhook failed: webhook url not set: task.triggered","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2392,"date":"2019-07-16 02:14:06","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 02:14:06 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2390,"date":"2019-07-16 02:14:06","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3741,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2386,"date":"2019-07-16 02:14:03","type":"webhook","level":"warning","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: mailbot.interbot_event","details":"{\"schema_error\":\"Webhook is read only, but the response tried to send messages.\"}","data":{"schema_error":"Webhook is read only, but the response tried to send messages."},"http_request_url":"https://legendary-lightyear.glitch.me//webhooks","http_request_method":"POST","http_request_headers":{"Host":["legendary-lightyear.glitch.me"],"X-MailBots-Timestamp":[1563243243],"X-MailBots-Signature":["f1c100bfe70a9d1904b3e54f0845e13af4301c3f253461b39a2218617eea7c7f"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1550]},"http_request_body":"{\"source\":{\"mailbot\":\"local-gopher-admin-ui\"},\"payload\":{\"foo\":\"bar\"},\"event\":\"mailbot.interbot_event\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/241\\/e05d2d1d10bf7969\\/\",\"id\":90,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d301c25132723e1850b91fe0b5ad0021\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/legendary-lightyear.glitch.me\\/auth\\/callback\"}}","http_response_headers":{"Date":["Tue, 16 Jul 2019 02:14:05 GMT"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["122"],"Connection":["keep-alive"],"x-powered-by":["Express"],"etag":["W/\"7a-9eB/txkieGYqVKW2gSu7DHyVPaQ\""]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}","http_response_statuscode":200,"messages_sent":null},{"id":2384,"date":"2019-07-16 02:14:03","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":null},{"id":2241,"date":"2019-07-16 01:31:05","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3680,"userId":2,"event":"webhook failed: webhook url not set: task.triggered","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2190,"date":"2019-07-16 01:30:49","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:30:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":2188,"date":"2019-07-16 01:30:49","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3658,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2184,"date":"2019-07-16 01:30:47","type":"webhook","level":"warning","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: mailbot.interbot_event","details":"{\"schema_error\":\"Webhook is read only, but the response tried to send messages.\"}","data":{"schema_error":"Webhook is read only, but the response tried to send messages."},"http_request_url":"https://legendary-lightyear.glitch.me//webhooks","http_request_method":"POST","http_request_headers":{"Host":["legendary-lightyear.glitch.me"],"X-MailBots-Timestamp":[1563240647],"X-MailBots-Signature":["f14f67bd57f40aabbf6e1b6e208a8befadecc1d3ee8ae0b43885c3ab28130dc6"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1550]},"http_request_body":"{\"source\":{\"mailbot\":\"local-gopher-admin-ui\"},\"payload\":{\"foo\":\"bar\"},\"event\":\"mailbot.interbot_event\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/241\\/e05d2d1d10bf7969\\/\",\"id\":90,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d301c25132723e1850b91fe0b5ad0021\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/legendary-lightyear.glitch.me\\/auth\\/callback\"}}","http_response_headers":{"Date":["Tue, 16 Jul 2019 01:30:48 GMT"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["122"],"Connection":["keep-alive"],"x-powered-by":["Express"],"etag":["W/\"7a-9eB/txkieGYqVKW2gSu7DHyVPaQ\""]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}","http_response_statuscode":200,"messages_sent":null},{"id":2182,"date":"2019-07-16 01:30:47","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":null},{"id":2179,"date":"2019-07-16 01:30:29","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3656,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":2169,"date":"2019-07-16 01:28:54","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 01:28:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:41 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["api","webhook","submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":3047,"date":"2019-07-16 06:05:38","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":3046,"date":"2019-07-16 06:05:38","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400,"messages_sent":null},{"id":3045,"date":"2019-07-16 06:05:38","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":[]},{"id":3044,"date":"2019-07-16 06:05:38","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"bd8729f1f980983a0e933bc95c444640\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/bd8729f1f980983a0e933bc95c444640\\/\",\"created\":1563257138,\"trigger_time\":1563260738,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"331\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"failed\",\"message\":\"MailBot webhook url not set.\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3043,"date":"2019-07-16 06:05:38","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:38 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"bd8729f1f980983a0e933bc95c444640\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/bd8729f1f980983a0e933bc95c444640\\/\",\"created\":1563257138,\"trigger_time\":1563260738,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"330\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3042,"date":"2019-07-16 06:05:37","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3041,"date":"2019-07-16 06:05:36","type":"webhook","level":"warning","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: mailbot.interbot_event","details":"{\"schema_error\":\"Webhook is read only, but the response tried to send messages.\"}","data":{"schema_error":"Webhook is read only, but the response tried to send messages."},"http_request_url":"https://legendary-lightyear.glitch.me//webhooks","http_request_method":"POST","http_request_headers":{"Host":["legendary-lightyear.glitch.me"],"X-MailBots-Timestamp":[1563257136],"X-MailBots-Signature":["03d652d2e9f8d6cdc82f209c7088e6a594ffbbb84228bb83bf5159ac9fc2b102"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1550]},"http_request_body":"{\"source\":{\"mailbot\":\"local-gopher-admin-ui\"},\"payload\":{\"foo\":\"bar\"},\"event\":\"mailbot.interbot_event\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/241\\/e05d2d1d10bf7969\\/\",\"id\":90,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/legendary-lightyear.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d301c25132723e1850b91fe0b5ad0021\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/legendary-lightyear.glitch.me\\/auth\\/callback\"}}","http_response_headers":{"Date":["Tue, 16 Jul 2019 06:05:37 GMT"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["122"],"Connection":["keep-alive"],"x-powered-by":["Express"],"etag":["W/\"7a-9eB/txkieGYqVKW2gSu7DHyVPaQ\""]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"subject\":\"Hello world!\",\"body\":[{\"type\":\"html\",\"text\":\"Hello world!\"}],\"type\":\"email\"}]}","http_response_statuscode":200,"messages_sent":null},{"id":3040,"date":"2019-07-16 06:05:36","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/interbot_event","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/interbot_event","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"54","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"subdomain\":\"test-mailbot-2\",\"payload\":{\"foo\":\"bar\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:37 GMT","content-type":"application/json"},"http_response_body":"{\"webhook\":{\"status\":\"success\",\"message\":null},\"response\":\"{\\u0022version\\u0022:\\u00221\\u0022,\\u0022send_messages\\u0022:[{\\u0022subject\\u0022:\\u0022Hello world!\\u0022,\\u0022body\\u0022:[{\\u0022type\\u0022:\\u0022html\\u0022,\\u0022text\\u0022:\\u0022Hello world!\\u0022}],\\u0022type\\u0022:\\u0022email\\u0022}]}\"}","http_response_statuscode":200,"messages_sent":null},{"id":3039,"date":"2019-07-16 06:05:36","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0,"messages_sent":null},{"id":3038,"date":"2019-07-16 06:05:35","type":"api","level":"info","mailbot":"local-gopher-admin-ui","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:35 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/localhost\\/api\\/v1\\/mailbot_event\\/177\\/735c18e988ff64b6\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":true,\"install_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"settings_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/local.mailbots.com\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-07-16\":1}}}}","http_response_statuscode":200,"messages_sent":null},{"id":3037,"date":"2019-07-16 06:05:34","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:34 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3036,"date":"2019-07-16 06:05:05","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"119","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_66624d3f37e21b82ec781e909042b2e4\",\"email_address\":[\"blackhole@example.com\",\"blackhole2@example.com\"]}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:05:05 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200,"messages_sent":null},{"id":3035,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_66624d3f37e21b82ec781e909042b2e4\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200,"messages_sent":null},{"id":3034,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"13","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"foo\":\"bar\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3033,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"gmail_credentials\":{\"watch_id\":\"8913420\",\"access_token\":\"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g\",\"refresh_token\":\"1\\/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE\",\"watch_data\":{\"historyId\":\"8913420\"},\"watch_expiry_date\":\"2019-05-19T16:33:16.935Z\"},\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/New_York\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3032,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/users/self/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/users/self/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"],\"email\":\"esweetland@gmail.com\",\"gopher_dev\":true,\"user_hash\":\"b18d08c0edce4c685e6350dbc9047470ff331da5428499ab5a5c0f9a2d81134e\"}}","http_response_statuscode":200,"messages_sent":null},{"id":3031,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/188?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/188?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3030,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/190?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/190?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3029,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/187?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/187?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3028,"date":"2019-07-16 06:04:13","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/189?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/189?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:13 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3027,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":91,\"hash\":\"925fae7f6d950f5894413e031d9da371\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/925fae7f6d950f5894413e031d9da371\\/\",\"created\":1563256025,\"trigger_time\":1563259625,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"github@unbranded-bandwidth.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Create to GitHub MailBot\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"github@unbranded-bandwidth.eml.bot\",\"search_keys\":[\"searchkey1\",\"searchkey1\"],\"delivery_status\":\"\",\"stored_data\":{\"privatedata1\":\"Value1\"},\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"12\",\"email_outbound_last_at\":\"2019-07-16 05:59:45\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Github Issue Bot\",\"subdomain\":\"unbranded-bandwidth\",\"stored_data\":{\"access_token\":\"b6304a159036ca91f4587371748b1d4e011986f2\",\"github\":{\"token\":{\"access_token\":\"bccce1e3969f71584165ee13ed8791b4d477812e\",\"scope\":\"admin:org_hook,repo\",\"token_type\":\"bearer\"},\"installed_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"github_repos\":{\"rsweetland\\/tmp-2\":true,\"rsweetland\\/tmp-test\":true}},\"id\":85,\"icon\":\"https:\\/\\/fut-cdn.s3.amazonaws.com\\/mailbots\\/random-mailbot-icons\\/2.png\",\"description\":\"Hello World! See https:\\/\\/docs.mailbots.com\\/ to get started\"}}}]}","http_response_statuscode":200,"messages_sent":null},{"id":3026,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":190,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"129","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":190,\"hash\":\"9b30b3d5453af9837b25213b25cab845\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/9b30b3d5453af9837b25213b25cab845\\/\",\"created\":1563257052,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"329\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3025,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":189,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"157","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":189,\"hash\":\"b01ea7393d800fcdf9e32b5c65d9dd2b\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/b01ea7393d800fcdf9e32b5c65d9dd2b\\/\",\"created\":1563257052,\"trigger_time\":1563357600,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-2.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"60\",\"email_outbound_last_at\":null,\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":{\"access_token\":\"2cffd2867d4b8acc788d632614c7d02ce13f4db7\"},\"id\":90,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3024,"date":"2019-07-16 06:04:12","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":188,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"178","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":188,\"hash\":\"9d067e30e7abc77d26c99849d7cdb83c\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/9d067e30e7abc77d26c99849d7cdb83c\\/\",\"created\":1563257052,\"trigger_time\":2194412652,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"328\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"9\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3023,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":187,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"148","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":187,\"hash\":\"1f7c8b65f0716b3d6fea3e6211c35082\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/1f7c8b65f0716b3d6fea3e6211c35082\\/\",\"created\":1563257051,\"trigger_time\":1563260652,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"327\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"8\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201,"messages_sent":[]},{"id":3022,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/186?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/186?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3021,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/183?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/183?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3020,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/184?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/184?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3019,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/185?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/185?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200,"messages_sent":null},{"id":3018,"date":"2019-07-16 06:04:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?mailbot=test-mailbot-1&page=1&per_page=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?mailbot=test-mailbot-1&page=1&per_page=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 16 Jul 2019 06:04:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":183,\"hash\":\"beb60b4ffb692e05e7526f2cc887c898\",\"trigger_url\":\"http:\\/\\/localhost\\/api\\/v1\\/trigger\\/beb60b4ffb692e05e7526f2cc887c898\\/\",\"created\":1563257050,\"trigger_time\":1563260650,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"delivery_status\":\"\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"326\",\"email_outbound_last_at\":\"2019-07-16 06:03:50\",\"task_pending\":\"10\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"esweetland+e@gmail.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/New_York\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"sender_validation\":1,\"send_dev_errors\":false,\"accepted_terms\":true,\"unverified_emails\":[\"bounce@simulator.amazonses.com\"]},\"mailbot\":{\"name\":\"Test MailBot  1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":89,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200,"messages_sent":null}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:42 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/2')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:43 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":3,"hash":"eadbeb26cafefee072fedd3693787c2f","trigger_url":"http://localhost/api/v1/trigger/eadbeb26cafefee072fedd3693787c2f/","created":1563257143,"trigger_time":1563260743,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"332","email_outbound_last_at":"2019-07-16 06:03:50","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:43 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":"15min","reference_email":{"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":4,"hash":"ed9de02037c2747c4aa3528c93cc8a60","trigger_url":"http://localhost/api/v1/trigger/ed9de02037c2747c4aa3528c93cc8a60/","created":1563257143,"trigger_time":1563258043,"trigger_timeformat":"15min","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"333","email_outbound_last_at":"2019-07-16 06:03:50","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:43 GMT',
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
  '1621',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/4')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:43 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/3')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:43 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":5,"hash":"eadbeb26cafefee072fedd3693787c2f","trigger_url":"http://localhost/api/v1/trigger/eadbeb26cafefee072fedd3693787c2f/","created":1563257143,"trigger_time":1563260744,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"334","email_outbound_last_at":"2019-07-16 06:03:50","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:43 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"suppress_webhook":true,"task":{"command":"test@test-mailbot-1.eml.bot","reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"test@example.com","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"},"trigger_time":1520319928,"trigger_timeformat":"3days","completed":false},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","html":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":6,"hash":"3acd039b6cb337af4791712272b4eae0","trigger_url":"http://localhost/api/v1/trigger/3acd039b6cb337af4791712272b4eae0/","created":1563257144,"trigger_time":1563516344,"trigger_timeformat":"3days","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"335","email_outbound_last_at":"2019-07-16 06:05:44","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<h1>This is a test</h1>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24676&hash=26085d75fd4866a61b988ea4dd3546c1&gfr=\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:44 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/6')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:44 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/5')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:44 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":7,"hash":"ba7789ece323a87eff25e9cbb97c6ce8","trigger_url":"http://localhost/api/v1/trigger/ba7789ece323a87eff25e9cbb97c6ce8/","created":1563257144,"trigger_time":1563260744,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"336","email_outbound_last_at":"2019-07-16 06:05:44","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:44 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":"<h1>This is a test</h1>"}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","html":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":8,"hash":"6423caf9e9ec45eeb2ece21bae1f654c","trigger_url":"http://localhost/api/v1/trigger/6423caf9e9ec45eeb2ece21bae1f654c/","created":1563257144,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1563257144,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"<h1>This is a test</h1>","text":" This is a test ","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"337","email_outbound_last_at":"2019-07-16 06:05:44","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<h1>This is a test</h1>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24677&hash=9f65ee02c3a8a7dee00bec338f4e3b3e&gfr=\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:44 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/7')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/8')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":9,"hash":"2871543db1ea8e2ae6702d0bc836375c","trigger_url":"http://localhost/api/v1/trigger/2871543db1ea8e2ae6702d0bc836375c/","created":1563257145,"trigger_time":1563260745,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"338","email_outbound_last_at":"2019-07-16 06:05:44","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":""}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","html":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":10,"hash":"73562a064820cd6bc7b2c8deb6b12d72","trigger_url":"http://localhost/api/v1/trigger/73562a064820cd6bc7b2c8deb6b12d72/","created":1563257145,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1563257145,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"339","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<h1>This is a test</h1>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24678&hash=11dbb2b42243ad90eacce68e3a00ecf5&gfr=\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/9')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/10')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":11,"hash":"2871543db1ea8e2ae6702d0bc836375c","trigger_url":"http://localhost/api/v1/trigger/2871543db1ea8e2ae6702d0bc836375c/","created":1563257145,"trigger_time":1563260746,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"340","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:45 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/')
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"340","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"340","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":11,"hash":"2871543db1ea8e2ae6702d0bc836375c","trigger_url":"http://localhost/api/v1/trigger/2871543db1ea8e2ae6702d0bc836375c/","created":1563257145,"trigger_time":1563260746,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"340","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:46 GMT',
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
  '4534',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/11')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:46 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":12,"hash":"e0609ce2cf2a6e608c21a80dbaf8fb15","trigger_url":"http://localhost/api/v1/trigger/e0609ce2cf2a6e608c21a80dbaf8fb15/","created":1563257146,"trigger_time":1563260746,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"341","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:46 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"341","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:46 GMT',
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
  '1533',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/12')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":13,"hash":"754d02200abf6ac096ab2235d4ef3331","trigger_url":"http://localhost/api/v1/trigger/754d02200abf6ac096ab2235d4ef3331/","created":1563257147,"trigger_time":1563260747,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"342","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"342","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '1533',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/13')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":14,"hash":"754d02200abf6ac096ab2235d4ef3331","trigger_url":"http://localhost/api/v1/trigger/754d02200abf6ac096ab2235d4ef3331/","created":1563257147,"trigger_time":1563260747,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"343","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/14/')
  .reply(200, {"status":"success","task":{"id":14,"hash":"754d02200abf6ac096ab2235d4ef3331","trigger_url":"http://localhost/api/v1/trigger/754d02200abf6ac096ab2235d4ef3331/","created":1563257147,"trigger_time":1563260747,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"343","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/14')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:47 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":15,"hash":"067090ec6cef1a23f79a73456940c5d9","trigger_url":"http://localhost/api/v1/trigger/067090ec6cef1a23f79a73456940c5d9/","created":1563257148,"trigger_time":1563260748,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"344","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:48 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/15/', {"suppress_webhook":true,"task":{"id":15,"reference_email":{"html":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":15,"hash":"067090ec6cef1a23f79a73456940c5d9","trigger_url":"http://localhost/api/v1/trigger/067090ec6cef1a23f79a73456940c5d9/","created":1563257148,"trigger_time":1563260748,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"something else new","text":"something else new","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"344","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:48 GMT',
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
  '1575',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/15')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:48 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":16,"hash":"067090ec6cef1a23f79a73456940c5d9","trigger_url":"http://localhost/api/v1/trigger/067090ec6cef1a23f79a73456940c5d9/","created":1563257148,"trigger_time":1563260748,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"345","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:48 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/16/', {"suppress_webhook":true,"task":{"id":16,"trigger_timeformat":"1day"}})
  .reply(200, {"status":"success","task":{"id":16,"hash":"067090ec6cef1a23f79a73456940c5d9","trigger_url":"http://localhost/api/v1/trigger/067090ec6cef1a23f79a73456940c5d9/","created":1563257148,"trigger_time":1563343548,"trigger_timeformat":"1day","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"345","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:48 GMT',
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
  '1538',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/16')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:48 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":17,"hash":"531f8bcd868eb4ea552d3b4e226d3284","trigger_url":"http://localhost/api/v1/trigger/531f8bcd868eb4ea552d3b4e226d3284/","created":1563257149,"trigger_time":1563260749,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"346","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:49 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/17/', {"task":{"id":17,"trigger_timeformat":"invalid_jibberish"}})
  .reply(400, {"status":"error","type":"invalid_format","message":"An invalid date was provided in trigger_timeformat."}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:49 GMT',
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
  '106',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/17')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:49 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":18,"hash":"531f8bcd868eb4ea552d3b4e226d3284","trigger_url":"http://localhost/api/v1/trigger/531f8bcd868eb4ea552d3b4e226d3284/","created":1563257149,"trigger_time":1563260749,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"347","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:49 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"status":"success","valid":true,"time":"2019-07-17 02:05:49 EDT","time_gmt":"2019-07-17 06:05:49","time_ts":"1563343549","recurring":false}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:49 GMT',
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
  '140',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/18')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:49 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":19,"hash":"f2c4a2ccf62eb9babb37180191615640","trigger_url":"http://localhost/api/v1/trigger/f2c4a2ccf62eb9babb37180191615640/","created":1563257150,"trigger_time":1563260750,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"348","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:50 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":"1sec","reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":20,"hash":"77adc3dd5d1d0f8c38bf8c71ff48057c","trigger_url":"http://localhost/api/v1/trigger/77adc3dd5d1d0f8c38bf8c71ff48057c/","created":1563257150,"trigger_time":1563257151,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"349","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:50 GMT',
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
  '1635',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/19')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:50 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/20')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:50 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":21,"hash":"f2c4a2ccf62eb9babb37180191615640","trigger_url":"http://localhost/api/v1/trigger/f2c4a2ccf62eb9babb37180191615640/","created":1563257150,"trigger_time":1563260750,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"350","email_outbound_last_at":"2019-07-16 06:05:45","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:50 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"suppress_webhook":true,"verbose":1,"task":{"command":"test@test-mailbot-1.eml.bot"},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":22,"hash":"77adc3dd5d1d0f8c38bf8c71ff48057c","trigger_url":"http://localhost/api/v1/trigger/77adc3dd5d1d0f8c38bf8c71ff48057c/","created":1563257150,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"351","email_outbound_last_at":"2019-07-16 06:05:50","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://localhost/assets/mailbots/mailbots-logo-black.png?gfr=\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://localhost/tracker?id=24679&hash=bc184d40ff1b404380f7a4713c221d99&gfr=\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:50 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/22')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:51 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/21')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:51 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":23,"hash":"a3cc9a73b13e542a777a31a06ec0a43c","trigger_url":"http://localhost/api/v1/trigger/a3cc9a73b13e542a777a31a06ec0a43c/","created":1563257151,"trigger_time":1563260751,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"352","email_outbound_last_at":"2019-07-16 06:05:50","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:51 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"test@test-mailbot-1.eml.bot","reference_email":{"server_recipient":"test@test-mailbot-1.eml.bot"}},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .reply(201, {"status":"success","task":{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"353","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:51 GMT',
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
  '1575',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://localhost:80', {"encodedQueryParams":true})
  .post('/api/v1/trigger/48205965d72fecd97df193857ca03f88/')
  .reply(200, {"status":"success","task":{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"353","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"failed","message":"MailBot webhook url not set."}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:51 GMT',
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
  '1570',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/23')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:51 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":25,"hash":"ecf4969bddc0ce95024daef57bfc47d1","trigger_url":"http://localhost/api/v1/trigger/ecf4969bddc0ce95024daef57bfc47d1/","created":1563257152,"trigger_time":1563260752,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"354","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:52 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/25', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":25,"hash":"ecf4969bddc0ce95024daef57bfc47d1","trigger_url":"http://localhost/api/v1/trigger/ecf4969bddc0ce95024daef57bfc47d1/","created":1563257152,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1563257152,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"354","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:52 GMT',
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
  '1538',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/25/')
  .reply(200, {"status":"success","task":{"id":25,"hash":"ecf4969bddc0ce95024daef57bfc47d1","trigger_url":"http://localhost/api/v1/trigger/ecf4969bddc0ce95024daef57bfc47d1/","created":1563257152,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1563257152,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"354","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:52 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/25')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:52 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":26,"hash":"ecf4969bddc0ce95024daef57bfc47d1","trigger_url":"http://localhost/api/v1/trigger/ecf4969bddc0ce95024daef57bfc47d1/","created":1563257152,"trigger_time":1563260753,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"355","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:52 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/26', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":26,"hash":"ecf4969bddc0ce95024daef57bfc47d1","trigger_url":"http://localhost/api/v1/trigger/ecf4969bddc0ce95024daef57bfc47d1/","created":1563257152,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1563257153,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"355","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:53 GMT',
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
  '1538',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Subject%201","status":"completed"})
  .reply(200, {"status":"success","tasks":[{"id":26,"hash":"ecf4969bddc0ce95024daef57bfc47d1","trigger_url":"http://localhost/api/v1/trigger/ecf4969bddc0ce95024daef57bfc47d1/","created":1563257152,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1563257153,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"355","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:53 GMT',
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
  '1527',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/26')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:53 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":27,"hash":"717bbb5344aad2c6a4b1adf1e7c19564","trigger_url":"http://localhost/api/v1/trigger/717bbb5344aad2c6a4b1adf1e7c19564/","created":1563257153,"trigger_time":1563260753,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"356","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:53 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:53 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/27/')
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:53 GMT',
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
  '42',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:54 GMT',
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
  '42',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":28,"hash":"2a8461cb27dd387842198b496b73d054","trigger_url":"http://localhost/api/v1/trigger/2a8461cb27dd387842198b496b73d054/","created":1563257154,"trigger_time":1563260754,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"357","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:54 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":29,"hash":"c2998ee70da38df13a409300e9de69cb","trigger_url":"http://localhost/api/v1/trigger/c2998ee70da38df13a409300e9de69cb/","created":1563257154,"trigger_time":2194412754,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"358","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:54 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":30,"hash":"1f10eba1ea687d0613e25aabae5841af","trigger_url":"http://localhost/api/v1/trigger/1f10eba1ea687d0613e25aabae5841af/","created":1563257154,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"61","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:54 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":31,"hash":"2a8461cb27dd387842198b496b73d054","trigger_url":"http://localhost/api/v1/trigger/2a8461cb27dd387842198b496b73d054/","created":1563257154,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"359","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:54 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","search":"Subject"})
  .reply(200, {"status":"success","tasks":[{"id":28,"hash":"2a8461cb27dd387842198b496b73d054","trigger_url":"http://localhost/api/v1/trigger/2a8461cb27dd387842198b496b73d054/","created":1563257154,"trigger_time":1563260754,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"359","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:54 GMT',
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
  '1528',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/28')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:55 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/31')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:55 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/30')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:55 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/29')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:55 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":32,"hash":"65d6cb7eab0e0fe882b020980147cd32","trigger_url":"http://localhost/api/v1/trigger/65d6cb7eab0e0fe882b020980147cd32/","created":1563257155,"trigger_time":1563260755,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"360","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:55 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":33,"hash":"8a42bfb7cc2454c98276a4036c4fd4a8","trigger_url":"http://localhost/api/v1/trigger/8a42bfb7cc2454c98276a4036c4fd4a8/","created":1563257155,"trigger_time":2194412755,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"361","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:55 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":34,"hash":"438256ccb0f1b85c5483197266abe626","trigger_url":"http://localhost/api/v1/trigger/438256ccb0f1b85c5483197266abe626/","created":1563257156,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"62","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":35,"hash":"82821c06d6928ba5ea467484bec634da","trigger_url":"http://localhost/api/v1/trigger/82821c06d6928ba5ea467484bec634da/","created":1563257156,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"362","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"to":"Joe<joe@example.com>","subject":"Hi Joe"}}})
  .reply(201, {"status":"success","task":{"id":36,"hash":"3ea070ca3e98e6faf4df85a17b62ef90","trigger_url":"http://localhost/api/v1/trigger/3ea070ca3e98e6faf4df85a17b62ef90/","created":1563257156,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Hi Joe","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"63","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '1611',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/32')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/36')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/34')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/33')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/35')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":37,"hash":"82821c06d6928ba5ea467484bec634da","trigger_url":"http://localhost/api/v1/trigger/82821c06d6928ba5ea467484bec634da/","created":1563257156,"trigger_time":1563260757,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"363","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:56 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":38,"hash":"c7e1501274c5907518218111d7b01b72","trigger_url":"http://localhost/api/v1/trigger/c7e1501274c5907518218111d7b01b72/","created":1563257157,"trigger_time":2194412757,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"364","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":39,"hash":"f9932b567b770a071f95abe095f7440f","trigger_url":"http://localhost/api/v1/trigger/f9932b567b770a071f95abe095f7440f/","created":1563257157,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"64","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":40,"hash":"3514127ccd5a0c6c928a5eeec207edeb","trigger_url":"http://localhost/api/v1/trigger/3514127ccd5a0c6c928a5eeec207edeb/","created":1563257157,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"365","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki"}}})
  .reply(201, {"status":"success","task":{"id":41,"hash":"c7e1501274c5907518218111d7b01b72","trigger_url":"http://localhost/api/v1/trigger/c7e1501274c5907518218111d7b01b72/","created":1563257157,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"65","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '1609',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/37')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/38')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/40')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/39')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/41')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:57 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":42,"hash":"a579e3e38e7de4aa10e04579d749c1c9","trigger_url":"http://localhost/api/v1/trigger/a579e3e38e7de4aa10e04579d749c1c9/","created":1563257158,"trigger_time":1563260758,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"366","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:58 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":43,"hash":"57a5159042629afb9ddc75656c084d88","trigger_url":"http://localhost/api/v1/trigger/57a5159042629afb9ddc75656c084d88/","created":1563257158,"trigger_time":2194412758,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"367","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:58 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":44,"hash":"4ff6d5e523448395e57012f6beae4c98","trigger_url":"http://localhost/api/v1/trigger/4ff6d5e523448395e57012f6beae4c98/","created":1563257158,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:58 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":45,"hash":"5e7e0c530e82acb65bd24ade2c72466d","trigger_url":"http://localhost/api/v1/trigger/5e7e0c530e82acb65bd24ade2c72466d/","created":1563257159,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"368","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Space%20Ships%21"})
  .reply(200, {"status":"success","tasks":[{"id":43,"hash":"57a5159042629afb9ddc75656c084d88","trigger_url":"http://localhost/api/v1/trigger/57a5159042629afb9ddc75656c084d88/","created":1563257158,"trigger_time":2194412758,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"368","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '1518',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/45')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/42')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/44')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/43')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":46,"hash":"5e7e0c530e82acb65bd24ade2c72466d","trigger_url":"http://localhost/api/v1/trigger/5e7e0c530e82acb65bd24ade2c72466d/","created":1563257159,"trigger_time":1563260759,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"369","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":47,"hash":"86c36212a5f873835773829e9b28911d","trigger_url":"http://localhost/api/v1/trigger/86c36212a5f873835773829e9b28911d/","created":1563257159,"trigger_time":2194412759,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"370","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":48,"hash":"5ed9016cfd26325ce70f389b31cba422","trigger_url":"http://localhost/api/v1/trigger/5ed9016cfd26325ce70f389b31cba422/","created":1563257160,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"67","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:05:59 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":49,"hash":"79d00ee98b33784f786c38a5aa8ef967","trigger_url":"http://localhost/api/v1/trigger/79d00ee98b33784f786c38a5aa8ef967/","created":1563257160,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"371","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"joe%40example.com"})
  .reply(200, {"status":"success","tasks":[{"id":47,"hash":"86c36212a5f873835773829e9b28911d","trigger_url":"http://localhost/api/v1/trigger/86c36212a5f873835773829e9b28911d/","created":1563257159,"trigger_time":2194412759,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"371","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '1518',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/48')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/47')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/49')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/46')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":50,"hash":"79d00ee98b33784f786c38a5aa8ef967","trigger_url":"http://localhost/api/v1/trigger/79d00ee98b33784f786c38a5aa8ef967/","created":1563257160,"trigger_time":1563260760,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"372","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:00 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":51,"hash":"ceba833578e45dcb83d5285efc32f4fa","trigger_url":"http://localhost/api/v1/trigger/ceba833578e45dcb83d5285efc32f4fa/","created":1563257161,"trigger_time":2194412761,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"373","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:01 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":52,"hash":"6b6c398d201d4b5ec8ca191fb069b79e","trigger_url":"http://localhost/api/v1/trigger/6b6c398d201d4b5ec8ca191fb069b79e/","created":1563257161,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"68","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:01 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":53,"hash":"a12b4a65f30c45dc133eca91c3114ebc","trigger_url":"http://localhost/api/v1/trigger/a12b4a65f30c45dc133eca91c3114ebc/","created":1563257161,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:01 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","order_by":"due","order_dir":"desc"})
  .reply(200, {"status":"success","tasks":[{"id":51,"hash":"ceba833578e45dcb83d5285efc32f4fa","trigger_url":"http://localhost/api/v1/trigger/ceba833578e45dcb83d5285efc32f4fa/","created":1563257161,"trigger_time":2194412761,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":50,"hash":"79d00ee98b33784f786c38a5aa8ef967","trigger_url":"http://localhost/api/v1/trigger/79d00ee98b33784f786c38a5aa8ef967/","created":1563257160,"trigger_time":1563260760,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":53,"hash":"a12b4a65f30c45dc133eca91c3114ebc","trigger_url":"http://localhost/api/v1/trigger/a12b4a65f30c45dc133eca91c3114ebc/","created":1563257161,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:01 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/50')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/53')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/51')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/52')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":54,"hash":"87309f2d755976f09650c7c7207d772f","trigger_url":"http://localhost/api/v1/trigger/87309f2d755976f09650c7c7207d772f/","created":1563257162,"trigger_time":1563260762,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"375","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":55,"hash":"7895f545f762a994e22509f462bafe2b","trigger_url":"http://localhost/api/v1/trigger/7895f545f762a994e22509f462bafe2b/","created":1563257162,"trigger_time":2194412762,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"376","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":56,"hash":"1c916b68eee4bf56871e051f50e6a7ed","trigger_url":"http://localhost/api/v1/trigger/1c916b68eee4bf56871e051f50e6a7ed/","created":1563257162,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"69","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":57,"hash":"87309f2d755976f09650c7c7207d772f","trigger_url":"http://localhost/api/v1/trigger/87309f2d755976f09650c7c7207d772f/","created":1563257162,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"377","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:02 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki Now"},"trigger_timeformat":"1sec"}})
  .reply(201, {"status":"success","task":{"id":58,"hash":"2b2fb231033ccd1ee321f1ff283214ff","trigger_url":"http://localhost/api/v1/trigger/2b2fb231033ccd1ee321f1ff283214ff/","created":1563257163,"trigger_time":1563257164,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki Now","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '1584',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"order_by":"due","order_dir":"asc"})
  .reply(200, {"status":"success","tasks":[{"id":58,"hash":"2b2fb231033ccd1ee321f1ff283214ff","trigger_url":"http://localhost/api/v1/trigger/2b2fb231033ccd1ee321f1ff283214ff/","created":1563257163,"trigger_time":1563257164,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki Now","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":54,"hash":"87309f2d755976f09650c7c7207d772f","trigger_url":"http://localhost/api/v1/trigger/87309f2d755976f09650c7c7207d772f/","created":1563257162,"trigger_time":1563260762,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":56,"hash":"1c916b68eee4bf56871e051f50e6a7ed","trigger_url":"http://localhost/api/v1/trigger/1c916b68eee4bf56871e051f50e6a7ed/","created":1563257162,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"69","email_outbound_last_at":null,"task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":55,"hash":"7895f545f762a994e22509f462bafe2b","trigger_url":"http://localhost/api/v1/trigger/7895f545f762a994e22509f462bafe2b/","created":1563257162,"trigger_time":2194412762,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/55')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/57')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/58')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/54')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/56')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":59,"hash":"2152f0f15cfa8b5373e1b651067a3a20","trigger_url":"http://localhost/api/v1/trigger/2152f0f15cfa8b5373e1b651067a3a20/","created":1563257163,"trigger_time":1563260763,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"379","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:03 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":60,"hash":"fd74099eac1b2d9286ffc58db8e530f9","trigger_url":"http://localhost/api/v1/trigger/fd74099eac1b2d9286ffc58db8e530f9/","created":1563257164,"trigger_time":2194412764,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"380","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":61,"hash":"fc858930cd3c71ba87977087fde76bc7","trigger_url":"http://localhost/api/v1/trigger/fc858930cd3c71ba87977087fde76bc7/","created":1563257164,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"70","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":62,"hash":"c4cf4defa4bddcb3f708603c8bf26da8","trigger_url":"http://localhost/api/v1/trigger/c4cf4defa4bddcb3f708603c8bf26da8/","created":1563257164,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"381","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_after":"1878617164","mailbot":"test-mailbot-1"})
  .reply(200, {"status":"success","tasks":[{"id":60,"hash":"fd74099eac1b2d9286ffc58db8e530f9","trigger_url":"http://localhost/api/v1/trigger/fd74099eac1b2d9286ffc58db8e530f9/","created":1563257164,"trigger_time":2194412764,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"381","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '1518',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/62')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/60')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/61')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/59')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:04 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":63,"hash":"6ca6fe0f46ed37eaa9fe272255ff56dd","trigger_url":"http://localhost/api/v1/trigger/6ca6fe0f46ed37eaa9fe272255ff56dd/","created":1563257165,"trigger_time":1563260765,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"382","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:05 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":64,"hash":"4b8135227bdeb870faebed8397daf58a","trigger_url":"http://localhost/api/v1/trigger/4b8135227bdeb870faebed8397daf58a/","created":1563257165,"trigger_time":2194412765,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"383","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:05 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":65,"hash":"8abb781e380acb6c330f21b4244c02f8","trigger_url":"http://localhost/api/v1/trigger/8abb781e380acb6c330f21b4244c02f8/","created":1563257165,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"71","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:05 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":66,"hash":"6ca6fe0f46ed37eaa9fe272255ff56dd","trigger_url":"http://localhost/api/v1/trigger/6ca6fe0f46ed37eaa9fe272255ff56dd/","created":1563257165,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"384","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:05 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Twenty Minutes"},"trigger_timeformat":"20min"}})
  .reply(201, {"status":"success","task":{"id":67,"hash":"6ca6fe0f46ed37eaa9fe272255ff56dd","trigger_url":"http://localhost/api/v1/trigger/6ca6fe0f46ed37eaa9fe272255ff56dd/","created":1563257165,"trigger_time":1563258366,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:05 GMT',
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
  '1606',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_before":"1563258966","mailbot":"test-mailbot-1"})
  .reply(200, {"status":"success","tasks":[{"id":67,"hash":"6ca6fe0f46ed37eaa9fe272255ff56dd","trigger_url":"http://localhost/api/v1/trigger/6ca6fe0f46ed37eaa9fe272255ff56dd/","created":1563257165,"trigger_time":1563258366,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":66,"hash":"6ca6fe0f46ed37eaa9fe272255ff56dd","trigger_url":"http://localhost/api/v1/trigger/6ca6fe0f46ed37eaa9fe272255ff56dd/","created":1563257165,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '5974',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/63')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/64')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/66')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/67')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/65')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":68,"hash":"c22e6a45070545c44394d6432396e3f6","trigger_url":"http://localhost/api/v1/trigger/c22e6a45070545c44394d6432396e3f6/","created":1563257166,"trigger_time":1563260766,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"386","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":69,"hash":"5ce2b4dfe0f30802ce273dac927edf1b","trigger_url":"http://localhost/api/v1/trigger/5ce2b4dfe0f30802ce273dac927edf1b/","created":1563257166,"trigger_time":2194412766,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"387","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":70,"hash":"3a5693a329943b457d6a21614de349ec","trigger_url":"http://localhost/api/v1/trigger/3a5693a329943b457d6a21614de349ec/","created":1563257167,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"72","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:06 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":71,"hash":"d4faf34f0902c5f8066a5b60ddeb29f7","trigger_url":"http://localhost/api/v1/trigger/d4faf34f0902c5f8066a5b60ddeb29f7/","created":1563257167,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"388","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"388","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '1533',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/68')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/70')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/71')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/69')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":72,"hash":"d4faf34f0902c5f8066a5b60ddeb29f7","trigger_url":"http://localhost/api/v1/trigger/d4faf34f0902c5f8066a5b60ddeb29f7/","created":1563257167,"trigger_time":1563260768,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"389","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:07 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":73,"hash":"5febf1ca1e5698b66b37932a9b5ef9d0","trigger_url":"http://localhost/api/v1/trigger/5febf1ca1e5698b66b37932a9b5ef9d0/","created":1563257168,"trigger_time":2194412768,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"390","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:08 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":74,"hash":"aaa0df1e3836c6b1c204bb2cefda52a3","trigger_url":"http://localhost/api/v1/trigger/aaa0df1e3836c6b1c204bb2cefda52a3/","created":1563257168,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"73","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:08 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":75,"hash":"bfa7e0d6b8000baa1fdff806338b8edb","trigger_url":"http://localhost/api/v1/trigger/bfa7e0d6b8000baa1fdff806338b8edb/","created":1563257168,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:08 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","order_by":"due","order_dir":"desc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":72,"hash":"d4faf34f0902c5f8066a5b60ddeb29f7","trigger_url":"http://localhost/api/v1/trigger/d4faf34f0902c5f8066a5b60ddeb29f7/","created":1563257167,"trigger_time":1563260768,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":75,"hash":"bfa7e0d6b8000baa1fdff806338b8edb","trigger_url":"http://localhost/api/v1/trigger/bfa7e0d6b8000baa1fdff806338b8edb/","created":1563257168,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:08 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","order_by":"due","order_dir":"asc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":72,"hash":"d4faf34f0902c5f8066a5b60ddeb29f7","trigger_url":"http://localhost/api/v1/trigger/d4faf34f0902c5f8066a5b60ddeb29f7/","created":1563257167,"trigger_time":1563260768,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"48205965d72fecd97df193857ca03f88","trigger_url":"http://localhost/api/v1/trigger/48205965d72fecd97df193857ca03f88/","created":1563257151,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":75,"hash":"bfa7e0d6b8000baa1fdff806338b8edb","trigger_url":"http://localhost/api/v1/trigger/bfa7e0d6b8000baa1fdff806338b8edb/","created":1563257168,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/72')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/75')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/74')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/73')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":76,"hash":"0f269963cb2a8d8c0ab932f0cd3b9b9a","trigger_url":"http://localhost/api/v1/trigger/0f269963cb2a8d8c0ab932f0cd3b9b9a/","created":1563257169,"trigger_time":1563260769,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"392","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":77,"hash":"e9c8ccada9836b47f2309f718fe2071b","trigger_url":"http://localhost/api/v1/trigger/e9c8ccada9836b47f2309f718fe2071b/","created":1563257169,"trigger_time":2194412769,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"393","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":78,"hash":"4eb95749be8437cd320a2ec56e2b3868","trigger_url":"http://localhost/api/v1/trigger/4eb95749be8437cd320a2ec56e2b3868/","created":1563257170,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"74","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:09 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":79,"hash":"3b2eb19ab6f761e3608333e05b2aa57d","trigger_url":"http://localhost/api/v1/trigger/3b2eb19ab6f761e3608333e05b2aa57d/","created":1563257170,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"394","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:10 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","page":"1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"394","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:10 GMT',
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
  '1533',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/79')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:10 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/76')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:10 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/77')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:10 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/78')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:10 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":80,"hash":"007c4e6fe4c3ab79eeb410433c8bc0b8","trigger_url":"http://localhost/api/v1/trigger/007c4e6fe4c3ab79eeb410433c8bc0b8/","created":1563257171,"trigger_time":1563260771,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"395","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:11 GMT',
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
  '1601',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":81,"hash":"601032ad82f12edeea4093ee58c6513a","trigger_url":"http://localhost/api/v1/trigger/601032ad82f12edeea4093ee58c6513a/","created":1563257171,"trigger_time":2194412771,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"396","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:11 GMT',
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
  '1591',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":82,"hash":"02cd2737af8e424e71fdf24403b7380e","trigger_url":"http://localhost/api/v1/trigger/02cd2737af8e424e71fdf24403b7380e/","created":1563257171,"trigger_time":1563357600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"75","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  2","subdomain":"test-mailbot-2","stored_data":{"access_token":"2cffd2867d4b8acc788d632614c7d02ce13f4db7"},"id":90,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:11 GMT',
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
  '1649',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":83,"hash":"007c4e6fe4c3ab79eeb410433c8bc0b8","trigger_url":"http://localhost/api/v1/trigger/007c4e6fe4c3ab79eeb410433c8bc0b8/","created":1563257171,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"397","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:11 GMT',
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
  '1600',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"bd8729f1f980983a0e933bc95c444640","trigger_url":"http://localhost/api/v1/trigger/bd8729f1f980983a0e933bc95c444640/","created":1563257138,"trigger_time":1563260738,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","delivery_status":"","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"397","email_outbound_last_at":"2019-07-16 06:05:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"]},"mailbot":{"name":"Test MailBot  1","subdomain":"test-mailbot-1","stored_data":[],"id":89,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:11 GMT',
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
  '1533',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/80')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/82')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/83')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/81')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/users/self/')
  .reply(200, {"status":"success","user":{"id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","esweetland+e@gmail.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/New_York","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"sender_validation":1,"send_dev_errors":false,"accepted_terms":true,"unverified_emails":["bounce@simulator.amazonses.com"],"email":"esweetland@gmail.com","gopher_dev":true,"user_hash":"b18d08c0edce4c685e6350dbc9047470ff331da5428499ab5a5c0f9a2d81134e"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '622',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/mailbots/self/data/')
  .reply(200, {"status":"success","data":{"gmail_credentials":{"watch_id":"8913420","access_token":"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g","refresh_token":"1/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE","watch_data":{"historyId":"8913420"},"watch_expiry_date":"2019-05-19T16:33:16.935Z"},"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/New_York"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '486',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/mailbots/self/data/', {"foo":"bar"})
  .reply(200, {"status":"success","data":{"gmail_credentials":{"watch_id":"8913420","access_token":"ya29.GlsHB4vFovbjYSZVZfyjyHCc3tic4i001rqgy7OldzozHNDXynkiRjzmR9BzyOClPQiLbDTXjE0z1PgXzuEd2Fd1CUyQq1curAtzjSdIXyXC5CCYYoqUY2bdrJ7g","refresh_token":"1/I5FyGhzC27c4K7wGU-hsa5ydVRbcekR3hlot73jhFEE","watch_data":{"historyId":"8913420"},"watch_expiry_date":"2019-05-19T16:33:16.935Z"},"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/New_York"}}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '486',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_66624d3f37e21b82ec781e909042b2e4","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
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
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_66624d3f37e21b82ec781e909042b2e4","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Tue, 16 Jul 2019 06:06:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=ihiusith2k9c5iousk05k24so2; path=/',
  'Expires',
  'Thu, 19 Nov 1981 08:52:00 GMT',
  'Cache-Control',
  'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
  'Pragma',
  'no-cache',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '20',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);
