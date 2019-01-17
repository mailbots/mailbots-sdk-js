//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.mailbots.com:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');
nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/mailbots/self/data/', {"three":"more"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar","evernote_access_token":"abc"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:08 GMT',
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
  '186',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/mailbots/self')
  .reply(200, {"status":"success","mailbot":{"name":"MailBots","subdomain":"local-gopher-admin-ui","stored_data":[],"installed":true,"event_url":"http://local.mailbots.com/api/v1/mailbot_event/177/735c18e988ff64b6/","id":39,"owner":{"email":"esweetland@gmail.com"},"description":"Description","icon":"","autocomplete_examples":"","tags":"","published":false,"devmode":false,"enabled":true,"install_url":"\n","settings_url":"","base_url":"http://localhost:3000/","developer_name":"","help_url":"","learn_more_url":"","privacy_policy_url":"","oauth2_client_id":"ext_0107e8160247f26a57d89ab5162829b2_","oauth2_scope":"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self","oauth2_redirect_uri":"http://127.0.0.1:3000/auth/callback","oauth2_client_secret":"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63","webhook_url":"http://127.0.0.1:3000/webhooks","webhook_version":1,"metrics":{"unique_users":{"2019-01-17":1,"2019-01-14":1},"email_sent":{"2019-01-16":2}}}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:09 GMT',
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
  '1072',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/mailbot_event/255/205fac3799bc2f9b/', {"foo":"bar"})
  .query({"type":"github.issue.opened"})
  .reply(200, {"mailbot":{"subdomain":"test-mailbot-1"},"webhook":{"status":"failed","message":null},"status":"success"}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=dnq717ijeuka8bpod4edh742c3; path=/',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/mailbots/self/data/')
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar","evernote_access_token":"abc"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:09 GMT',
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
  '186',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Successful task"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"5","email_outbound_last_at":null,"task_pending":"1","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:10 GMT',
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
  '1603',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Unsuccessful webhook"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":2,"hash":"5498fdb7a17a72a01041d3cad5cd9319","trigger_url":"http://local.mailbots.com/api/v1/trigger/5498fdb7a17a72a01041d3cad5cd9319/","created":1547766431,"trigger_time":1547770031,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful webhook","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"6","email_outbound_last_at":null,"task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"failed","message":"Mailbot webhook url not set."}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:11 GMT',
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
  '1603',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@$wrong.eml.bot","reference_email":{"subject":"Unsuccessful submission"},"trigger_timeformat":"1hour"}})
  .reply(400, {"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:11 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":2647,"date":"2019-01-17 23:07:11","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:12 GMT',
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
  '2015',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":2647,"date":"2019-01-17 23:07:11","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2633,"date":"2019-01-17 23:06:48","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:48 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2610,"date":"2019-01-17 23:05:08","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","http_response_statuscode":400},{"id":2608,"date":"2019-01-17 23:05:08","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"132","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","http_response_statuscode":400},{"id":2147,"date":"2019-01-17 04:27:50","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:27:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2121,"date":"2019-01-17 04:27:22","type":"submit_failed","level":"error","mailbot":"test-extension-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: mailbot_command_not_installed","details":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/complementary-include-jigsaw-supplement-join-puzzle-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.eml.bot\"}","data":{"status":"error","type":"mailbot_command_not_installed","message":"Mailbot command not installed","mailbot":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/complementary-include-jigsaw-supplement-join-puzzle-128.png","description":"","name":"Test Extension 2"},"command":"test-extension-2","format":"example@test-extension-2.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"317","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"complete\":false,\"reference_email\":{\"to\":[\"Mrs. Grace Champlin<Zoey.Bashirian64@gmail.com>\"],\"server_recipient\":\"example@test-extension-2.eml.bot\",\"subject\":\"Liaison Yuan Renminbi ___GTEST___\"},\"trigger_timeformat\":\"5hours\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:27:22 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/complementary-include-jigsaw-supplement-join-puzzle-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.eml.bot\"}","http_response_statuscode":400},{"id":2117,"date":"2019-01-17 04:27:22","type":"submit_failed","level":"error","mailbot":"test-extension-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: mailbot_command_not_installed","details":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.eml.bot\"}","data":{"status":"error","type":"mailbot_command_not_installed","message":"Mailbot command not installed","mailbot":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"302","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"complete\":false,\"reference_email\":{\"to\":[\"Jaclyn Ratke<Akeem.Jenkins@gmail.com>\"],\"server_recipient\":\"example@test-extension-1.eml.bot\",\"subject\":\"transmit primary ___GTEST___\"},\"trigger_timeformat\":\"5hours\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:27:22 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.eml.bot\"}","http_response_statuscode":400},{"id":2109,"date":"2019-01-17 04:25:12","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:25:12 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","http_response_statuscode":400},{"id":2107,"date":"2019-01-17 04:25:11","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"132","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:25:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-1.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@test-extension-1.eml.bot\"}","http_response_statuscode":400},{"id":2048,"date":"2019-01-17 04:24:16","type":"submit_failed","level":"error","mailbot":"test-extension-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: mailbot_command_not_installed","details":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.eml.bot\"}","data":{"status":"error","type":"mailbot_command_not_installed","message":"Mailbot command not installed","mailbot":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"309","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"complete\":false,\"reference_email\":{\"to\":[\"Lurline Legros<Tyson2@gmail.com>\"],\"server_recipient\":\"example@test-extension-1.eml.bot\",\"subject\":\"Inlet Industrial open-source ___GTEST___\"},\"trigger_timeformat\":\"1month\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:24:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.eml.bot\"}","http_response_statuscode":400},{"id":2045,"date":"2019-01-17 04:24:15","type":"submit_failed","level":"error","mailbot":"test-extension-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: mailbot_command_not_installed","details":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.eml.bot\"}","data":{"status":"error","type":"mailbot_command_not_installed","message":"Mailbot command not installed","mailbot":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 2"},"command":"test-extension-2","format":"example@test-extension-2.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"318","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"complete\":false,\"reference_email\":{\"to\":[\"Patsy Yundt I<Jeanette_Rice17@hotmail.com>\"],\"server_recipient\":\"example@test-extension-2.eml.bot\",\"subject\":\"incentivize Regional Shoes ___GTEST___\"},\"trigger_timeformat\":\"weds3pm\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:24:15 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.eml.bot\"}","http_response_statuscode":400},{"id":2041,"date":"2019-01-17 04:24:15","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-2.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@test-extension-2.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@test-extension-2.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@test-extension-2.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"323","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"complete\":true,\"reference_email\":{\"to\":[\"Ms. Josefa Kuhn<Hailie_Carroll10@hotmail.com>\"],\"server_recipient\":\"example@test-extension-2.eml.bot\",\"subject\":\"Buckinghamshire blue protocol ___GTEST___\"},\"trigger_timeformat\":\"weds3pm\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:24:15 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-2.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@test-extension-2.eml.bot\"}","http_response_statuscode":400},{"id":1938,"date":"2019-01-17 04:23:24","type":"submit_failed","level":"error","mailbot":"test-extension-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: mailbot_command_not_installed","details":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"mailbot_command_not_installed","message":"Mailbot command not installed","mailbot":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"314","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Vicky Rogahn<Olin.Bradtke@hotmail.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Savings Account ___GTEST___\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:23:24 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":1934,"date":"2019-01-17 04:23:24","type":"submit_failed","level":"error","mailbot":"test-extension-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: mailbot_command_not_installed","details":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/complementary-include-jigsaw-supplement-join-puzzle-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","data":{"status":"error","type":"mailbot_command_not_installed","message":"Mailbot command not installed","mailbot":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/complementary-include-jigsaw-supplement-join-puzzle-128.png","description":"","name":"Test Extension 2"},"command":"test-extension-2","format":"example@test-extension-2.gopher.email"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"310","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Elvis Kerluke<Prince39@gmail.com>\"],\"server_recipient\":\"example@test-extension-2.gopher.email\",\"subject\":\"Health XML Granite ___GTEST___\"},\"trigger_timeformat\":\"1month\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:23:24 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"mailbot_command_not_installed\",\"message\":\"Mailbot command not installed\",\"mailbot\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/complementary-include-jigsaw-supplement-join-puzzle-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","http_response_statuscode":400},{"id":1931,"date":"2019-01-17 04:23:23","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-2.gopher.email) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@test-extension-2.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@test-extension-2.gopher.email) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@test-extension-2.gopher.email"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"311","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Colby Reichert<Kirsten_Herzog89@yahoo.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"eyeballs ___GTEST___\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 04:23:23 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@test-extension-2.gopher.email) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@test-extension-2.gopher.email\"}","http_response_statuscode":400},{"id":1711,"date":"2019-01-17 01:38:15","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 01:38:15 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":1646,"date":"2019-01-17 00:28:03","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 00:28:03 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":1595,"date":"2019-01-17 00:26:07","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 00:26:07 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":1392,"date":"2019-01-17 00:24:57","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 00:24:57 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":1148,"date":"2019-01-17 00:19:53","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 00:19:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":8,"date":"2019-01-14 20:06:58","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:06:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:13 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed","api"]})
  .reply(200, {"status":"success","logs":[{"id":2648,"date":"2019-01-17 23:07:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2647,"date":"2019-01-17 23:07:11","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2646,"date":"2019-01-17 23:07:11","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"5498fdb7a17a72a01041d3cad5cd9319\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/5498fdb7a17a72a01041d3cad5cd9319\\/\",\"created\":1547766431,\"trigger_time\":1547770031,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"6\",\"email_outbound_last_at\":null,\"task_pending\":\"2\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"Mailbot webhook url not set.\"}}","http_response_statuscode":201},{"id":2644,"date":"2019-01-17 23:07:10","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"3a742e286f6d8a1b423645276b45176b\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/3a742e286f6d8a1b423645276b45176b\\/\",\"created\":1547766430,\"trigger_time\":1547770030,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"5\",\"email_outbound_last_at\":null,\"task_pending\":\"1\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2643,"date":"2019-01-17 23:07:10","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2641,"date":"2019-01-17 23:07:09","type":"api","level":"info","mailbot":"local-gopher-admin-ui","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:09 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"MailBots\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/177\\/735c18e988ff64b6\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\\n\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1,\"2019-01-14\":1},\"email_sent\":{\"2019-01-16\":2}}}}","http_response_statuscode":200},{"id":2640,"date":"2019-01-17 23:07:08","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2639,"date":"2019-01-17 23:06:53","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/3?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/3?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2638,"date":"2019-01-17 23:06:53","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/4?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/4?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2637,"date":"2019-01-17 23:06:53","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":4,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"244","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"test@test-mailbot-1.eml.bot\",\"trigger_timeformat\":\"15min\",\"reference_email\":{\"cc\":[],\"bcc\":[],\"from\":\"bar@bar.email\",\"subject\":\"Test1\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"stored_data\":{\"privatedata1\":\"Value1\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":4,\"hash\":\"8f13ca224c243a9acc3cac647fff6a24\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/8f13ca224c243a9acc3cac647fff6a24\\/\",\"created\":1547766412,\"trigger_time\":1547767312,\"trigger_timeformat\":\"15min\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"test@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Test1\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"test@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"4\",\"email_outbound_last_at\":null,\"task_pending\":\"3\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2636,"date":"2019-01-17 23:06:52","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"148","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":3,\"hash\":\"ba35cf2cf66887a9b64275c1ac170851\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/ba35cf2cf66887a9b64275c1ac170851\\/\",\"created\":1547766412,\"trigger_time\":1547770012,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"3\",\"email_outbound_last_at\":null,\"task_pending\":\"2\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2635,"date":"2019-01-17 23:06:51","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/2?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/2?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2634,"date":"2019-01-17 23:06:48","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:48 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2633,"date":"2019-01-17 23:06:48","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:48 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2632,"date":"2019-01-17 23:06:47","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:47 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"02913e7ba83c260b6e3cd40234e6aeca\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/02913e7ba83c260b6e3cd40234e6aeca\\/\",\"created\":1547766407,\"trigger_time\":1547770007,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2\",\"email_outbound_last_at\":null,\"task_pending\":\"2\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"Mailbot webhook url not set.\"}}","http_response_statuscode":201},{"id":2630,"date":"2019-01-17 23:06:46","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:46 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"bbf3f93eaad11bf7bcf3af69ad256592\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/bbf3f93eaad11bf7bcf3af69ad256592\\/\",\"created\":1547766406,\"trigger_time\":1547770006,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"1\",\"email_outbound_last_at\":null,\"task_pending\":\"1\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2629,"date":"2019-01-17 23:06:46","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:46 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2627,"date":"2019-01-17 23:06:45","type":"api","level":"info","mailbot":"local-gopher-admin-ui","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:45 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"MailBots\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/177\\/735c18e988ff64b6\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\\n\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1,\"2019-01-14\":1},\"email_sent\":{\"2019-01-16\":2}}}}","http_response_statuscode":200},{"id":2626,"date":"2019-01-17 23:06:45","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:45 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2625,"date":"2019-01-17 23:05:58","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/119","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/119","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":119}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/254\\/68291a28d2969bef\\/\",\"id\":119,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_be86c0e7fc4d61a763e8682908b41a0a\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"b0675ea4af649e1fd0b177758be101d4f425d023be7e47f0463c14a5704beeda\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}}}}","http_response_statuscode":200},{"id":2624,"date":"2019-01-17 23:05:58","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/118","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/118","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":118}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/255\\/205fac3799bc2f9b\\/\",\"id\":118,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0b051aa5668fae6021de5deda8e9c4e5\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"914c61993fb44c9be8b4d69e12f19a52391d8af35f0718904b0323f308d2d0b0\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}}}}","http_response_statuscode":200},{"id":2623,"date":"2019-01-17 23:05:58","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: PUT /api/v1/mailbots/118/install/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/118/install/","http_request_method":"PUT","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":118}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":201},{"id":2622,"date":"2019-01-17 23:05:57","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: PUT /api/v1/mailbots/119/install/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/119/install/","http_request_method":"PUT","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":119}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:57 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":201},{"id":2621,"date":"2019-01-17 23:05:57","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"295","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"enabled\":true,\"icon\":\"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:57 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":[],\"id\":119,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_be86c0e7fc4d61a763e8682908b41a0a\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"b0675ea4af649e1fd0b177758be101d4f425d023be7e47f0463c14a5704beeda\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}},\"installed\":false}}","http_response_statuscode":201},{"id":2620,"date":"2019-01-17 23:05:56","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"289","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"icon\":\"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png\",\"enabled\":true}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:56 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0b051aa5668fae6021de5deda8e9c4e5\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"914c61993fb44c9be8b4d69e12f19a52391d8af35f0718904b0323f308d2d0b0\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}},\"installed\":false}}","http_response_statuscode":201},{"id":2619,"date":"2019-01-17 23:05:49","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/mailbots/117","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/117","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":117}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:49 GMT"},"http_response_body":"","http_response_statuscode":204},{"id":2618,"date":"2019-01-17 23:05:48","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/mailbots/116","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/116","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":116}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:48 GMT"},"http_response_body":"","http_response_statuscode":204},{"id":2617,"date":"2019-01-17 23:05:47","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots?owner=self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots?owner=self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"owner\":\"self\"}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:47 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbots\":[{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/253\\/f4c0b29af1e23a92\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.email\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.email\",\"base_url\":\"http:\\/\\/memorize.email\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.email\\/auth\\/callback\"},{\"name\":\"kitchen\",\"subdomain\":\"kitchen\",\"stored_data\":[],\"installed\":false,\"id\":17,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Get an item from the kitchen\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"[item]\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_5c4df24a263870f1839aff49c30ef919\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"dropbox\",\"subdomain\":\"dropbox\",\"stored_data\":[],\"installed\":false,\"id\":18,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"File your attachments in Dropbox\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\".[folder].[visibility]\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/304a6beb.local.mailbots.com\",\"settings_url\":\"http:\\/\\/304a6beb.local.mailbots.com\",\"base_url\":\"http:\\/\\/304a6beb.local.mailbots.com\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_48640424183d999007ad38a96f71fd9b\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"evernote\",\"subdomain\":\"evernote\",\"stored_data\":[],\"installed\":false,\"id\":19,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"[notebook][tag][reminder]\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_431c2d0852af9fe40d1aaa184c6d5fc9\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"shared_list\",\"subdomain\":\"shared_list\",\"stored_data\":[],\"installed\":false,\"id\":21,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_ab647c323427a7b2da7f6304991ec22f\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"gdrive\",\"subdomain\":\"gdrive\",\"stored_data\":[],\"installed\":false,\"id\":22,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"[folder][visibility]\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0ca903adeb54917cff5cd8c45b3a4419\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"dropbox_reilly\",\"subdomain\":\"dropbox_reilly\",\"stored_data\":[],\"installed\":false,\"id\":24,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\".[folder].[visibility]\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_c74c731fc2909c7bab2f55494ffbb616\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"remind_dev\",\"subdomain\":\"remind_dev\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/146\\/8016cd5fc11a7eed\\/\",\"id\":26,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"schedule an email reminder\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\".who.when.duration\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/reminder.local.mailbots.com\",\"settings_url\":\"http:\\/\\/reminder.local.mailbots.com\",\"base_url\":\"http:\\/\\/reminder.local.mailbots.com\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8e69ac27c9a93bc3d1f8243f9ac9130d\",\"oauth2_scope\":\"extension_manage_self manage_reminders get_user_info\",\"oauth2_redirect_uri\":\"http:\\/\\/reminder.local.mailbots.com\\/?fut_authorized=1\"},{\"name\":\"remind-serverless\",\"subdomain\":\"remind-serverless\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/156\\/b273d99de94f38b3\\/\",\"id\":28,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"schedule an email reminder\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\".when.where\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/remind.local.mailbots.com\",\"settings_url\":\"http:\\/\\/remind.local.mailbots.com\",\"base_url\":\"http:\\/\\/remind.local.mailbots.com\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_37d72203502d2ff97b96cd847e6b8adf\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders\",\"oauth2_redirect_uri\":\"http:\\/\\/remind.local.mailbots.com\\/?fut_authorized=1\"},{\"name\":\"gcal\",\"subdomain\":\"gcal\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/147\\/c8db72044d1435af\\/\",\"id\":29,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Google Calendar event with invitations\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\".who.when.duration\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/gcal.local.mailbots.com\",\"settings_url\":\"http:\\/\\/gcal.local.mailbots.com\",\"base_url\":\"http:\\/\\/gcal.local.mailbots.com\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_eda471bed754e527df5862737baffb5b\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders\",\"oauth2_redirect_uri\":\"http:\\/\\/gcal.local.mailbots.com\\/?gopher_authorized=1\"},{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/162\\/54f9e7efeb0492da\\/\",\"id\":30,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Gopher for Chrome\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_f54f94f5d324876aaf862ebb5703f7a2\",\"oauth2_scope\":\"extension_manage_self manage_reminders get_user_info\",\"oauth2_redirect_uri\":\"https:\\/\\/fognajdkajljkjjhaepaghjaibijnpjm.chromiumapp.org\\/cb\"},{\"name\":\"kit\",\"subdomain\":\"kit\",\"stored_data\":[],\"installed\":false,\"id\":31,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Gopher command kit\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\".try\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/0f6e33ce.local.mailbots.com\",\"settings_url\":\"http:\\/\\/0f6e33ce.local.mailbots.com\",\"base_url\":\"http:\\/\\/0f6e33ce.local.mailbots.com\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_38e166fa20d90155719314c11cc7bc09\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders\",\"oauth2_redirect_uri\":\"http:\\/\\/0f6e33ce.local.mailbots.com?gopher_authorized=1\"},{\"name\":\"gopher-v3-api\",\"subdomain\":\"gopher-v3-api\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/165\\/3598089b91570f80\\/\",\"id\":32,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"description updated from API\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/gopher-api-docs.glitch.me\\/\",\"settings_url\":\"https:\\/\\/gopher-api-docs.glitch.me\\/\",\"base_url\":\"https:\\/\\/gopher-api-docs.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_efb07fd13c395b016765ff701c154f75\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"https:\\/\\/gopher-api-docs.glitch.me\\/callback\"},{\"name\":\"extension1\",\"subdomain\":\"extension1\",\"stored_data\":[],\"installed\":false,\"id\":33,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"extension1 description\",\"icon\":\"\\/favicon.ico\",\"autocomplete_examples\":\"\",\"tags\":\"productivity\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/www.gopher.email\",\"settings_url\":\"https:\\/\\/www.gopher.email\",\"base_url\":\"https:\\/\\/www.gopher.email\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0ae3da9021b3d305ab29f9130c1680b0\",\"oauth2_scope\":\"manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/something.glitch.me\\/auth\\/callback\"},{\"name\":\"extension2\",\"subdomain\":\"extension2\",\"stored_data\":[],\"installed\":false,\"id\":35,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"extension1 description\",\"icon\":\"\\/favicon.ico\",\"autocomplete_examples\":\"\",\"tags\":\"productivity\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/www.gopher.email\",\"settings_url\":\"https:\\/\\/www.gopher.email\",\"base_url\":\"https:\\/\\/www.gopher.email\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_da3e7a4d03881b72bf5ddb5c386d5d2f\",\"oauth2_scope\":\"manage_extensions\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"postman-extension1\",\"subdomain\":\"postman-ext1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/179\\/5d7c55f2654d926a\\/\",\"id\":37,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"extension1 description edited\",\"icon\":\"\\/favicon.ico\",\"autocomplete_examples\":\"invite, autocomplete, 3days, 3weeks, 3months\",\"tags\":\"productivity, finance\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/www.gopher.email\\/test\",\"settings_url\":\"https:\\/\\/www.gopher.email\\/test\",\"base_url\":\"https:\\/\\/www.gopher.email\\/tests\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_2cc91b6705ab75e942ecb095720a5953\",\"oauth2_scope\":\"manage_extensions manage_tasks\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"express\",\"subdomain\":\"express\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/175\\/e7c680deeb8ab8be\\/\",\"id\":38,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/gopher-express.glitch.me\\/\",\"settings_url\":\"https:\\/\\/gopher-express.glitch.me\\/\",\"base_url\":\"https:\\/\\/gopher-express.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_a289678a8cf03f25773cd8f49eb336a8\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/gopher-express.glitch.me\\/auth\\/callback\"},{\"name\":\"fdsa\",\"subdomain\":\"fdsafdsa\",\"stored_data\":[],\"installed\":false,\"id\":41,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"fdsa\",\"icon\":\"fds\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":false,\"install_url\":\"https:\\/\\/fdsafdsa.glitch.me\",\"settings_url\":\"https:\\/\\/fdsafdsa.glitch.me\",\"base_url\":\"https:\\/\\/fdsafdsa.glitch.me\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_6867fd78fdf0b9008ae783f8d5a9de72\",\"oauth2_scope\":\"get_user_info extension_manage_self read_tasks manage_tasks\",\"oauth2_redirect_uri\":\" https:\\/\\/fdsafdsa.glitch.meauth\\/callback\"},{\"name\":\"Temp Extension\",\"subdomain\":\"tmp1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/189\\/ac7b57d4318d7e01\\/\",\"id\":42,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Temp\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/abounding-touch.glitch.me\\/\",\"settings_url\":\"https:\\/\\/abounding-touch.glitch.me\\/\",\"base_url\":\"https:\\/\\/abounding-touch.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_5effb6c7f0ec10de05cd51d6728774d8\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/abounding-touch.glitch.me\\/auth\\/callback\"},{\"name\":\"Gopher Express (Glitch Staging)\",\"subdomain\":\"gopher-express-glitch\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/211\\/54231fe2d1416e08\\/\",\"id\":43,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Gopher Express hosted on Glitch\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/diversity-avatars-vol-2\\/64\\/robot-android-humanoid-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/gopher-express-staging.glitch.me\\/\",\"settings_url\":\"https:\\/\\/gopher-express-staging.glitch.me\\/\",\"base_url\":\"https:\\/\\/gopher-express-staging.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_ad96728de90ef244e864c9eb63a406d5\",\"oauth2_scope\":\"get_user_info extension_manage_self\",\"oauth2_redirect_uri\":\"https:\\/\\/gopher-express-staging.glitch.me\\/auth\\/callback\"},{\"name\":\"Gopher Express (Localhost)\",\"subdomain\":\"gopher-express-ngrok\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/192\\/e3d94961660c264c\\/\",\"id\":44,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Same Gopher Express, just hosted locally.\",\"icon\":\"\",\"autocomplete_examples\":\"test\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/gopher-express.local.mailbots.com\\/\",\"settings_url\":\"http:\\/\\/gopher-express.local.mailbots.com\\/\",\"base_url\":\"http:\\/\\/gopher-express-ngrok.local.mailbots.com\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_6431c66d329d344322a3311f7672d48e\",\"oauth2_scope\":\"get_user_info extension_manage_self\",\"oauth2_redirect_uri\":\"http:\\/\\/gopher-express-ngrok.local.mailbots.com\\/auth\\/callback\"},{\"name\":\"New Test Extension\",\"subdomain\":\"tmp-test\",\"stored_data\":[],\"installed\":false,\"id\":47,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description of Extension\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/leather-amusement.glitch.me\\/\",\"settings_url\":\"https:\\/\\/leather-amusement.glitch.me\\/\",\"base_url\":\"https:\\/\\/leather-amusement.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d75f5af17e101961257ceecbe52a776f\",\"oauth2_scope\":\"get_user_info extension_manage_self\",\"oauth2_redirect_uri\":\"https:\\/\\/leather-amusement.glitch.me\\/auth\\/callback\"},{\"name\":\"fsda\",\"subdomain\":\"fdsa\",\"stored_data\":[],\"installed\":false,\"id\":55,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"fdsa\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_fcd2909c781dbcf556162894f3dcaa32\",\"oauth2_scope\":\"\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"A new extension\",\"subdomain\":\"tmp-gopher-fdasa43\",\"stored_data\":[],\"installed\":false,\"id\":59,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/hissing-canvas.glitch.me\\/\",\"settings_url\":\"https:\\/\\/hissing-canvas.glitch.me\\/\",\"base_url\":\"https:\\/\\/hissing-canvas.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_c7da490ec33045519c0e551911b60c9f\",\"oauth2_scope\":\"get_user_info extension_manage_self read_tasks manage_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/hissing-canvas.glitch.me\\/auth\\/callback\"},{\"name\":\"fdsafdsa\",\"subdomain\":\"fdsa4a3\",\"stored_data\":[],\"installed\":false,\"id\":61,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"fdsafdsa\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_39fa8ee2963ac3f498fa22cfe6da2694\",\"oauth2_scope\":\"get_user_info extension_manage_self\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"Memorization 123\",\"subdomain\":\"memorize-tmp\",\"stored_data\":[],\"installed\":false,\"id\":63,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Memorize anything with this handy spaced repetition algorithm. Nothing worth saving in here. Delete away.\",\"icon\":\"\",\"autocomplete_examples\":\"invite help\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/gopher-express.glitch.me\\/\",\"settings_url\":\"https:\\/\\/gopher-express.glitch.me\\/\",\"base_url\":\"https:\\/\\/gopher-express.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_2a972126fc7efd5281d86841e40684d7\",\"oauth2_scope\":\"get_user_info extension_manage_self\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"fdafdsa4a43a\",\"subdomain\":\"54rat43t4\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/202\\/00e3ea8de7b17a92\\/\",\"id\":66,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"fdsa\",\"icon\":\"\",\"autocomplete_examples\":\"1min test\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/impossible-bumper.glitch.me\\/\",\"settings_url\":\"https:\\/\\/impossible-bumper.glitch.me\\/\",\"base_url\":\"https:\\/\\/impossible-bumper.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d0567e6142e975d8542d618911f95e2d\",\"oauth2_scope\":\"get_user_info\",\"oauth2_redirect_uri\":\"https:\\/\\/impossible-bumper.glitch.me\\/auth\\/callback\"},{\"name\":\"TPS Reports\",\"subdomain\":\"tps-reports\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/208\\/521eac70f02526c1\\/\",\"id\":71,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"TPS reports every monday\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/youthful-mare.glitch.me\",\"settings_url\":\"https:\\/\\/youthful-mare.glitch.me\",\"base_url\":\"https:\\/\\/youthful-mare.glitch.me\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_26bc53701e8cddfaead71b54781f89aa\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/youthful-mare.glitch.me\\/auth\\/callback\"},{\"name\":\"My Extension\",\"subdomain\":\"my-ext\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/209\\/9dbafd479617a9b0\\/\",\"id\":72,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/quickest-baseball.glitch.me\",\"settings_url\":\"https:\\/\\/quickest-baseball.glitch.me\",\"base_url\":\"https:\\/\\/quickest-baseball.glitch.me\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_ce32c053680df21e1d60150e97db710b\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/quickest-baseball.glitch.me\\/auth\\/callback\"},{\"name\":\"Simple Reminder\",\"subdomain\":\"reminder\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/210\\/a91c7749de46258c\\/\",\"id\":73,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Implementing FollowUpThen with Gopher\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/gopher-remind-staging.glitch.me\",\"settings_url\":\"https:\\/\\/gopher-remind-staging.glitch.me\",\"base_url\":\"https:\\/\\/gopher-remind-staging.glitch.me\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8851f1ccd0f9ffcb3d967a3deb3aabe9\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/gopher-remind-staging.glitch.me\\/auth\\/callback\"},{\"name\":\"Gopher Admin UI (Deployed)\",\"subdomain\":\"gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/212\\/287bd6756e3333d8\\/\",\"id\":74,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Live Staging Admin UI\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/staging1.www.gopheremail.com\",\"settings_url\":\"https:\\/\\/staging1.www.gopheremail.com\",\"base_url\":\"https:\\/\\/staging.gopher.email\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"https:\\/\\/staging.gopher.email\\/auth\\/callback\"},{\"name\":\"New Extension \",\"subdomain\":\"new-xtension\",\"stored_data\":[],\"installed\":false,\"id\":75,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/prong-nut.glitch.me\",\"settings_url\":\"https:\\/\\/prong-nut.glitch.me\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_317561be5dea77d971acad4a16e89c81\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks manage_extensions\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"Time Sheet Connector\",\"subdomain\":\"time-sheet\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/215\\/2caeb1d783f433df\\/\",\"id\":76,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/prong-nut.glitch.me\",\"settings_url\":\"https:\\/\\/prong-nut.glitch.me\",\"base_url\":\"https:\\/\\/prong-nut.glitch.me\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_c33f505f7279d42ff0f88b3f9fa938ad\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_reminders read_reminders manage_logs read_logs read_tasks manage_tasks manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/prong-nut.glitch.me\\/auth\\/callback\"},{\"name\":\"a94jtaj\",\"subdomain\":\"fda4awfa\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/220\\/a8b5993f97cf855e\\/\",\"id\":79,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"fdsajkl\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/luck-tax.glitch.me\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_d10bcb66c1d39f499a2e1ed6d281bfe7\",\"oauth2_scope\":\"get_user_info extension_manage_self read_tasks manage_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/luck-tax.glitch.me\\/auth\\/callback\"},{\"name\":\"17 July 2018 Gopher Ext (tmp)\",\"subdomain\":\"17july-test\",\"stored_data\":[],\"installed\":false,\"id\":82,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Test\",\"icon\":\"\",\"autocomplete_examples\":\"test@staging1.gopheremail.com\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":false,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_79e72449a274cc7575adb40cf0816429\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\"},{\"name\":\"gfawfewS\",\"subdomain\":\"gfawfews\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/221\\/c2e1627977cf64a6\\/\",\"id\":83,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"DFAEWdwAQ\",\"icon\":\"\",\"autocomplete_examples\":\"hello-world@gfawfewsstaging1.gopheremail.com,todo@gfawfewsstaging1.gopheremail.com,my-todos@gfawfewsstaging1.gopheremail.com,example-wunderlist@gfawfewsstaging1.gopheremail.com,example-ticket@gfawfewsstaging1.gopheremail.com,example-crm@gfawfewsstaging1.gopheremail.com,remember@gfawfewsstaging1.gopheremail.com\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":false,\"install_url\":\"https:\\/\\/blushing-corn.glitch.me\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/blushing-corn.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_2cd467e248ab24dd5efc9baac049d546\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/blushing-corn.glitch.me\\/auth\\/callback\"},{\"name\":\"MailBots Support\",\"subdomain\":\"mailbots-support\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/240\\/df17f33fd2e9a659\\/\",\"id\":102,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"\",\"autocomplete_examples\":\"hello-world@mailbots-support.eml.bot,todo@mailbots-support.eml.bot,my-todos@mailbots-support.eml.bot,example-wunderlist@mailbots-support.eml.bot,example-ticket@mailbots-support.eml.bot,example-crm@mailbots-support.eml.bot,remember@mailbots-support.eml.bot\",\"tags\":\"\",\"published\":false,\"devmode\":true,\"enabled\":false,\"install_url\":\"http:\\/\\/mailbots-support.local.mailbots.com\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/mailbots-support.local.mailbots.com\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_3e43df96d2007c00f2d1b5fff974bef7\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/mailbots-support.local.mailbots.com\\/auth\\/callback\"},{\"name\":\"{{tmp_new_mailbot_name}}\",\"subdomain\":\"3434738e46\",\"stored_data\":[],\"installed\":false,\"id\":103,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"updated\",\"icon\":\"\\/favicon.ico\",\"autocomplete_examples\":\"test@test.com\",\"tags\":\"productivity\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/www.gopher.email\",\"settings_url\":\"https:\\/\\/www.gopher.email\",\"base_url\":\"https:\\/\\/www.gopher.email\",\"developer_name\":\"Hacking Hank\",\"help_url\":\"https:\\/\\/www.gopher.email\",\"learn_more_url\":\"learn_more_url\",\"privacy_policy_url\":\"privacy_policy_url\",\"oauth2_client_id\":\"ext_299a82245848ba3c5deb07ea14d34ac0\",\"oauth2_scope\":\"manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/www.gopher.email\"},{\"name\":\"4cb267601e\",\"subdomain\":\"4cb267601e\",\"stored_data\":[],\"installed\":false,\"id\":104,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"extension1 description\",\"icon\":\"\\/favicon.ico\",\"autocomplete_examples\":\"test@test.com\",\"tags\":\"productivity\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/www.gopher.email\",\"settings_url\":\"https:\\/\\/www.gopher.email\",\"base_url\":\"https:\\/\\/www.gopher.email\",\"developer_name\":\"Hacking Hank\",\"help_url\":\"https:\\/\\/www.gopher.email\",\"learn_more_url\":\"learn_more_url\",\"privacy_policy_url\":\"privacy_policy_url\",\"oauth2_client_id\":\"ext_35e87c4ecb912035caea5f8a359fd5c3\",\"oauth2_scope\":\"manage_extensions\",\"oauth2_redirect_uri\":\"https:\\/\\/www.gopher.email\"},{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/252\\/5277e2f3c6d43882\\/\",\"id\":116,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"https:\\/\\/stormy-pendulum.glitch.me\\/\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"https:\\/\\/stormy-pendulum.glitch.me\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_a9e78a8be608e241e3c05347ee9ca1ae\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"https:\\/\\/stormy-pendulum.glitch.me\\/auth\\/callback\"},{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/251\\/b5a7a711b64dd9ba\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/complementary-include-jigsaw-supplement-join-puzzle-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_5809c790a6e4a8e4c101c3c04f3df683\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\"}]}","http_response_statuscode":200},{"id":2616,"date":"2019-01-17 23:05:47","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=100&search=___GTEST___","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=100&search=___GTEST___","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:47 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200},{"id":2615,"date":"2019-01-17 23:05:10","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_a0ddf96aa6240384c0128446b6ba94b5\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"message\":\"mailbot not found\"}","http_response_statuscode":404}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:15 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":2647,"date":"2019-01-17 23:07:11","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:16 GMT',
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
  '2015',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"since":"1542582437"})
  .reply(200, {"status":"success","logs":[]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:17 GMT',
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
  '30',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["api","webhook","submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":2648,"date":"2019-01-17 23:07:11","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2647,"date":"2019-01-17 23:07:11","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2646,"date":"2019-01-17 23:07:11","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:11 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"5498fdb7a17a72a01041d3cad5cd9319\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/5498fdb7a17a72a01041d3cad5cd9319\\/\",\"created\":1547766431,\"trigger_time\":1547770031,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"6\",\"email_outbound_last_at\":null,\"task_pending\":\"2\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"Mailbot webhook url not set.\"}}","http_response_statuscode":201},{"id":2645,"date":"2019-01-17 23:07:11","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":2644,"date":"2019-01-17 23:07:10","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"3a742e286f6d8a1b423645276b45176b\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/3a742e286f6d8a1b423645276b45176b\\/\",\"created\":1547766430,\"trigger_time\":1547770030,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"5\",\"email_outbound_last_at\":null,\"task_pending\":\"1\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2643,"date":"2019-01-17 23:07:10","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:10 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2642,"date":"2019-01-17 23:07:09","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":2641,"date":"2019-01-17 23:07:09","type":"api","level":"info","mailbot":"local-gopher-admin-ui","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:09 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"MailBots\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/177\\/735c18e988ff64b6\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\\n\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1,\"2019-01-14\":1},\"email_sent\":{\"2019-01-16\":2}}}}","http_response_statuscode":200},{"id":2640,"date":"2019-01-17 23:07:08","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:07:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2639,"date":"2019-01-17 23:06:53","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/3?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/3?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2638,"date":"2019-01-17 23:06:53","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/4?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/4?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2637,"date":"2019-01-17 23:06:53","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":4,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"244","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"test@test-mailbot-1.eml.bot\",\"trigger_timeformat\":\"15min\",\"reference_email\":{\"cc\":[],\"bcc\":[],\"from\":\"bar@bar.email\",\"subject\":\"Test1\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"stored_data\":{\"privatedata1\":\"Value1\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":4,\"hash\":\"8f13ca224c243a9acc3cac647fff6a24\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/8f13ca224c243a9acc3cac647fff6a24\\/\",\"created\":1547766412,\"trigger_time\":1547767312,\"trigger_timeformat\":\"15min\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"test@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Test1\",\"html\":\"Test1\",\"text\":\"Test1\",\"attachments\":[]},\"command\":\"test@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"4\",\"email_outbound_last_at\":null,\"task_pending\":\"3\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2636,"date":"2019-01-17 23:06:52","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":3,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"148","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":3,\"hash\":\"ba35cf2cf66887a9b64275c1ac170851\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/ba35cf2cf66887a9b64275c1ac170851\\/\",\"created\":1547766412,\"trigger_time\":1547770012,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"3\",\"email_outbound_last_at\":null,\"task_pending\":\"2\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2635,"date":"2019-01-17 23:06:51","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/2?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/2?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2634,"date":"2019-01-17 23:06:48","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:48 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2633,"date":"2019-01-17 23:06:48","type":"submit_failed","level":"error","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:48 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This mailbot command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":2632,"date":"2019-01-17 23:06:47","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:47 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"02913e7ba83c260b6e3cd40234e6aeca\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/02913e7ba83c260b6e3cd40234e6aeca\\/\",\"created\":1547766407,\"trigger_time\":1547770007,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2\",\"email_outbound_last_at\":null,\"task_pending\":\"2\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"Mailbot webhook url not set.\"}}","http_response_statuscode":201},{"id":2631,"date":"2019-01-17 23:06:47","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":2630,"date":"2019-01-17 23:06:46","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-mailbot-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:46 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"bbf3f93eaad11bf7bcf3af69ad256592\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/bbf3f93eaad11bf7bcf3af69ad256592\\/\",\"created\":1547766406,\"trigger_time\":1547770006,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-mailbot-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-mailbot-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"1\",\"email_outbound_last_at\":null,\"task_pending\":\"1\",\"id\":2,\"name\":\"Reilly Sweetland\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d,4d,everyMonday,monday,tuesday,weds\",\"flagged\":0,\"validate_sender_email\":true,\"send_dev_errors\":true,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The mailbot was not contacted\"}}","http_response_statuscode":201},{"id":2629,"date":"2019-01-17 23:06:46","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:46 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2628,"date":"2019-01-17 23:06:45","type":"webhook","level":"error","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: mailbot.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":2627,"date":"2019-01-17 23:06:45","type":"api","level":"info","mailbot":"local-gopher-admin-ui","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:45 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"MailBots\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/177\\/735c18e988ff64b6\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\\n\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1,\"2019-01-14\":1},\"email_sent\":{\"2019-01-16\":2}}}}","http_response_statuscode":200},{"id":2626,"date":"2019-01-17 23:06:45","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:06:45 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\",\"evernote_access_token\":\"abc\"},\"user\":{\"name\":\"Reilly Sweetland\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2625,"date":"2019-01-17 23:05:58","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/119","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/119","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":119}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/254\\/68291a28d2969bef\\/\",\"id\":119,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_be86c0e7fc4d61a763e8682908b41a0a\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"b0675ea4af649e1fd0b177758be101d4f425d023be7e47f0463c14a5704beeda\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}}}}","http_response_statuscode":200},{"id":2624,"date":"2019-01-17 23:05:58","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/mailbots/118","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/118","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":118}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/mailbot_event\\/255\\/205fac3799bc2f9b\\/\",\"id\":118,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0b051aa5668fae6021de5deda8e9c4e5\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"914c61993fb44c9be8b4d69e12f19a52391d8af35f0718904b0323f308d2d0b0\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}}}}","http_response_statuscode":200},{"id":2623,"date":"2019-01-17 23:05:58","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: PUT /api/v1/mailbots/118/install/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/118/install/","http_request_method":"PUT","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":118}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":201},{"id":2622,"date":"2019-01-17 23:05:57","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: PUT /api/v1/mailbots/119/install/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/119/install/","http_request_method":"PUT","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":119}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:57 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":201},{"id":2621,"date":"2019-01-17 23:05:57","type":"api","level":"info","mailbot":"test-mailbot-2","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"295","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"enabled\":true,\"icon\":\"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png\"}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:57 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-mailbot-2\",\"stored_data\":[],\"id\":119,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_be86c0e7fc4d61a763e8682908b41a0a\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"b0675ea4af649e1fd0b177758be101d4f425d023be7e47f0463c14a5704beeda\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}},\"installed\":false}}","http_response_statuscode":201},{"id":2620,"date":"2019-01-17 23:05:56","type":"api","level":"info","mailbot":"test-mailbot-1","mailbot_ownerid":2,"taskId":0,"userId":2,"event":"API: POST /api/v1/mailbots","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"289","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"icon\":\"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png\",\"enabled\":true}}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:56 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-mailbot-1\",\"stored_data\":[],\"id\":118,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\",\"settings_url\":\"\",\"base_url\":\"\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0b051aa5668fae6021de5deda8e9c4e5\",\"oauth2_scope\":\"get_user_info mailbot_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"\",\"oauth2_client_secret\":\"914c61993fb44c9be8b4d69e12f19a52391d8af35f0718904b0323f308d2d0b0\",\"webhook_url\":null,\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-17\":1}},\"installed\":false}}","http_response_statuscode":201},{"id":2619,"date":"2019-01-17 23:05:49","type":"api","level":"info","mailbot":"","mailbot_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/mailbots/117","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/mailbots/117","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"17","host":"local.mailbots.com","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"mailbotid\":117}","http_response_headers":{"cache-control":"no-cache","date":"Thu, 17 Jan 2019 23:05:49 GMT"},"http_response_body":"","http_response_statuscode":204}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:18 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/2')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:19 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":3,"hash":"b2cbc9c2b2bb67f3932532789ae6299e","trigger_url":"http://local.mailbots.com/api/v1/trigger/b2cbc9c2b2bb67f3932532789ae6299e/","created":1547766440,"trigger_time":1547770040,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"7","email_outbound_last_at":null,"task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:20 GMT',
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
  '1597',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":"15min","reference_email":{"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":4,"hash":"b8e5b2ba36d02e2d10ad05b5a9c205a5","trigger_url":"http://local.mailbots.com/api/v1/trigger/b8e5b2ba36d02e2d10ad05b5a9c205a5/","created":1547766440,"trigger_time":1547767341,"trigger_timeformat":"15min","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"8","email_outbound_last_at":null,"task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:20 GMT',
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
  '1597',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/4')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:21 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/3')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:21 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":5,"hash":"5caca9ac8b5daa9b9739327301e972c3","trigger_url":"http://local.mailbots.com/api/v1/trigger/5caca9ac8b5daa9b9739327301e972c3/","created":1547766442,"trigger_time":1547770042,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"9","email_outbound_last_at":null,"task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:22 GMT',
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
  '1597',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"suppress_webhook":true,"task":{"command":"test@test-mailbot-1.eml.bot","reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"test@example.com","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"},"trigger_time":1520319928,"trigger_timeformat":"3days","completed":false},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":6,"hash":"db8c08663652a25ddda3f687a1a21a62","trigger_url":"http://local.mailbots.com/api/v1/trigger/db8c08663652a25ddda3f687a1a21a62/","created":1547766442,"trigger_time":1548025642,"trigger_timeformat":"3days","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"10","email_outbound_last_at":"2019-01-17 23:07:23","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/mailbots/mailbots-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23694&hash=1e9025c78873bf2c1ebc055b5f0b74d1\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:22 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/6')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:23 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/5')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:23 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":7,"hash":"0e37fa52f1c3650d4c47d00fe1d344b2","trigger_url":"http://local.mailbots.com/api/v1/trigger/0e37fa52f1c3650d4c47d00fe1d344b2/","created":1547766444,"trigger_time":1547770044,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"11","email_outbound_last_at":"2019-01-17 23:07:23","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:24 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":"<h1>This is a test</h1>"}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":8,"hash":"58f785b560384f196f6e95d10bc025db","trigger_url":"http://local.mailbots.com/api/v1/trigger/58f785b560384f196f6e95d10bc025db/","created":1547766444,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1547766445,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"<h1>This is a test</h1>","text":" This is a test ","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"12","email_outbound_last_at":"2019-01-17 23:07:25","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/mailbots/mailbots-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23695&hash=9bc2a125d82ba89f67b52ee65982e62c\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:24 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/7')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/8')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":9,"hash":"b6f3c6a3422001f7d6cb13bf1e384488","trigger_url":"http://local.mailbots.com/api/v1/trigger/b6f3c6a3422001f7d6cb13bf1e384488/","created":1547766446,"trigger_time":1547770046,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"13","email_outbound_last_at":"2019-01-17 23:07:25","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:26 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":""}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":10,"hash":"775857211b0179d17bddccfe9a6da079","trigger_url":"http://local.mailbots.com/api/v1/trigger/775857211b0179d17bddccfe9a6da079/","created":1547766446,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1547766447,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"14","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/mailbots/mailbots-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23696&hash=47d67dd1f256cdecaf03716d8ffef338\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:26 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/10')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:27 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/9')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:27 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":11,"hash":"9ff57bd9451faf1ba133e719e5888515","trigger_url":"http://local.mailbots.com/api/v1/trigger/9ff57bd9451faf1ba133e719e5888515/","created":1547766448,"trigger_time":1547770048,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"15","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:28 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks/')
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"15","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":11,"hash":"9ff57bd9451faf1ba133e719e5888515","trigger_url":"http://local.mailbots.com/api/v1/trigger/9ff57bd9451faf1ba133e719e5888515/","created":1547766448,"trigger_time":1547770048,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"15","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:28 GMT',
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
  '3033',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/11')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:29 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":12,"hash":"41cc044336beb0469f1f1831556c6cda","trigger_url":"http://local.mailbots.com/api/v1/trigger/41cc044336beb0469f1f1831556c6cda/","created":1547766449,"trigger_time":1547770050,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"16","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:29 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"16","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:30 GMT',
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
  '1534',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/12')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:31 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":13,"hash":"5fdc419ea01ea4d768c62bf88029da76","trigger_url":"http://local.mailbots.com/api/v1/trigger/5fdc419ea01ea4d768c62bf88029da76/","created":1547766451,"trigger_time":1547770051,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"17","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:31 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"17","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:32 GMT',
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
  '1534',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/13')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:32 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":14,"hash":"45cf7b53f38c0ca1998ad86cfae76cb4","trigger_url":"http://local.mailbots.com/api/v1/trigger/45cf7b53f38c0ca1998ad86cfae76cb4/","created":1547766453,"trigger_time":1547770053,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"18","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:33 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks/14/')
  .reply(200, {"status":"success","task":{"id":14,"hash":"45cf7b53f38c0ca1998ad86cfae76cb4","trigger_url":"http://local.mailbots.com/api/v1/trigger/45cf7b53f38c0ca1998ad86cfae76cb4/","created":1547766453,"trigger_time":1547770053,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"18","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:34 GMT',
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
  '1602',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/14')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:34 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":15,"hash":"867eac7a1959a579ae4fccc725fc636c","trigger_url":"http://local.mailbots.com/api/v1/trigger/867eac7a1959a579ae4fccc725fc636c/","created":1547766455,"trigger_time":1547770055,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"19","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:35 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .put('/api/v1/tasks/15/', {"suppress_webhook":true,"task":{"id":15,"reference_email":{"html":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":15,"hash":"867eac7a1959a579ae4fccc725fc636c","trigger_url":"http://local.mailbots.com/api/v1/trigger/867eac7a1959a579ae4fccc725fc636c/","created":1547766455,"trigger_time":1547770055,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"something else new","text":"something else new","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"19","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:35 GMT',
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
  '1576',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/15')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:36 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":16,"hash":"62a0ca7246c97f2497d80632258b506d","trigger_url":"http://local.mailbots.com/api/v1/trigger/62a0ca7246c97f2497d80632258b506d/","created":1547766456,"trigger_time":1547770057,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"20","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:36 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .put('/api/v1/tasks/16/', {"suppress_webhook":true,"task":{"id":16,"trigger_timeformat":"1day"}})
  .reply(200, {"status":"success","task":{"id":16,"hash":"62a0ca7246c97f2497d80632258b506d","trigger_url":"http://local.mailbots.com/api/v1/trigger/62a0ca7246c97f2497d80632258b506d/","created":1547766456,"trigger_time":1547852857,"trigger_timeformat":"1day","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"20","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:37 GMT',
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
  '1539',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/16')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:38 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":17,"hash":"9d8257f23cf3c1c37601e5479ea1e34b","trigger_url":"http://local.mailbots.com/api/v1/trigger/9d8257f23cf3c1c37601e5479ea1e34b/","created":1547766458,"trigger_time":1547770058,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"21","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:38 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .put('/api/v1/tasks/17/', {"task":{"id":17,"trigger_timeformat":"invalid_jibberish"}})
  .reply(400, {"status":"error","type":"invalid_format","message":"An invalid date was provided in trigger_timeformat."}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:39 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/17')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:39 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":18,"hash":"b43c9a001f46f5e55b40992131d44c69","trigger_url":"http://local.mailbots.com/api/v1/trigger/b43c9a001f46f5e55b40992131d44c69/","created":1547766460,"trigger_time":1547770060,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"22","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:40 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"status":"success","valid":true,"time":"2019-01-18 15:07:40 PST","time_gmt":"2019-01-18 23:07:40","time_ts":"1547852860","recurring":false}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:40 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/18')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:41 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":19,"hash":"e267db1154a849a63e5a3368f1888ed6","trigger_url":"http://local.mailbots.com/api/v1/trigger/e267db1154a849a63e5a3368f1888ed6/","created":1547766461,"trigger_time":1547770062,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"23","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:41 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"task":{"command":"test@test-mailbot-1.eml.bot","trigger_timeformat":"1sec","reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":20,"hash":"335db6d8a9c8c2cad2bc853fd07197a9","trigger_url":"http://local.mailbots.com/api/v1/trigger/335db6d8a9c8c2cad2bc853fd07197a9/","created":1547766462,"trigger_time":1547766463,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"24","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:42 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/20')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:43 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/19')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:43 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":21,"hash":"c47f735b8a97aa65a33e3ea91b938b25","trigger_url":"http://local.mailbots.com/api/v1/trigger/c47f735b8a97aa65a33e3ea91b938b25/","created":1547766464,"trigger_time":1547770064,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"25","email_outbound_last_at":"2019-01-17 23:07:27","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:43 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"suppress_webhook":true,"verbose":1,"task":{"command":"test@test-mailbot-1.eml.bot"},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":22,"hash":"2a3995756384bccbeda3b1bd5561282f","trigger_url":"http://local.mailbots.com/api/v1/trigger/2a3995756384bccbeda3b1bd5561282f/","created":1547766464,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"26","email_outbound_last_at":"2019-01-17 23:07:45","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/mailbots/mailbots-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23697&hash=4305c76a35aec8468e0527b43a6e2007\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:44 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/21')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:45 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/22')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:45 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":23,"hash":"d6d7ed13c0d3fc939af1992b471373f1","trigger_url":"http://local.mailbots.com/api/v1/trigger/d6d7ed13c0d3fc939af1992b471373f1/","created":1547766466,"trigger_time":1547770066,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"27","email_outbound_last_at":"2019-01-17 23:07:45","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:46 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"test@test-mailbot-1.eml.bot","reference_email":{"server_recipient":"test@test-mailbot-1.eml.bot"}},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .reply(201, {"status":"success","task":{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"28","email_outbound_last_at":"2019-01-17 23:07:45","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:47 GMT',
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
  '1590',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/')
  .reply(200, {"status":"success","task":{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"28","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"failed","message":"Mailbot webhook url not set."}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:48 GMT',
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
  '1571',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/23')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:49 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":25,"hash":"c03181b1124cb596156c4c302ab74799","trigger_url":"http://local.mailbots.com/api/v1/trigger/c03181b1124cb596156c4c302ab74799/","created":1547766470,"trigger_time":1547770070,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"29","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:50 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .put('/api/v1/tasks/25', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":25,"hash":"c03181b1124cb596156c4c302ab74799","trigger_url":"http://local.mailbots.com/api/v1/trigger/c03181b1124cb596156c4c302ab74799/","created":1547766470,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547766471,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"29","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"1","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:50 GMT',
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
  '1539',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks/25/')
  .reply(200, {"status":"success","task":{"id":25,"hash":"c03181b1124cb596156c4c302ab74799","trigger_url":"http://local.mailbots.com/api/v1/trigger/c03181b1124cb596156c4c302ab74799/","created":1547766470,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547766471,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"29","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"1","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:51 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/25')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:52 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":26,"hash":"24585ef7e15d83906b46a6d46948e1dc","trigger_url":"http://local.mailbots.com/api/v1/trigger/24585ef7e15d83906b46a6d46948e1dc/","created":1547766472,"trigger_time":1547770073,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"30","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:52 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .put('/api/v1/tasks/26', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":26,"hash":"24585ef7e15d83906b46a6d46948e1dc","trigger_url":"http://local.mailbots.com/api/v1/trigger/24585ef7e15d83906b46a6d46948e1dc/","created":1547766472,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547766473,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"30","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"1","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:53 GMT',
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
  '1539',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Subject%201","status":"completed"})
  .reply(200, {"status":"success","tasks":[{"id":26,"hash":"24585ef7e15d83906b46a6d46948e1dc","trigger_url":"http://local.mailbots.com/api/v1/trigger/24585ef7e15d83906b46a6d46948e1dc/","created":1547766472,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547766473,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"30","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"1","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:54 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/26')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:55 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":27,"hash":"094e5a48f1d7c0c8bcc09f47a8b9c2a5","trigger_url":"http://local.mailbots.com/api/v1/trigger/094e5a48f1d7c0c8bcc09f47a8b9c2a5/","created":1547766475,"trigger_time":1547770075,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"31","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:55 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:07:56 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks/27/')
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:56 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:56 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":28,"hash":"87d75ff9f2b3e5f1dd888ccee379e8ef","trigger_url":"http://local.mailbots.com/api/v1/trigger/87d75ff9f2b3e5f1dd888ccee379e8ef/","created":1547766477,"trigger_time":1547770077,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"32","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:57 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":29,"hash":"70f1f914bc0b8c2344c850b709a0e0f2","trigger_url":"http://local.mailbots.com/api/v1/trigger/70f1f914bc0b8c2344c850b709a0e0f2/","created":1547766478,"trigger_time":2178918478,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"33","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:58 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":30,"hash":"0caa22fe4969e75493a162a0de896f14","trigger_url":"http://local.mailbots.com/api/v1/trigger/0caa22fe4969e75493a162a0de896f14/","created":1547766478,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"1","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:58 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":31,"hash":"83671148da0e6320ff053551371f327c","trigger_url":"http://local.mailbots.com/api/v1/trigger/83671148da0e6320ff053551371f327c/","created":1547766479,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"34","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:59 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","search":"Subject"})
  .reply(200, {"status":"success","tasks":[{"id":28,"hash":"87d75ff9f2b3e5f1dd888ccee379e8ef","trigger_url":"http://local.mailbots.com/api/v1/trigger/87d75ff9f2b3e5f1dd888ccee379e8ef/","created":1547766477,"trigger_time":1547770077,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"34","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:07:59 GMT',
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
  '1529',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/31')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:00 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/30')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:00 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/28')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:00 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/29')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:00 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":32,"hash":"4bbb3e7cabea1a880c4741eac28fa28d","trigger_url":"http://local.mailbots.com/api/v1/trigger/4bbb3e7cabea1a880c4741eac28fa28d/","created":1547766481,"trigger_time":1547770081,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"35","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:01 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":33,"hash":"1822542ad1255ada8ce6a825a71fdc6d","trigger_url":"http://local.mailbots.com/api/v1/trigger/1822542ad1255ada8ce6a825a71fdc6d/","created":1547766481,"trigger_time":2178918481,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"36","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:01 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":34,"hash":"aaea436d5f81c9ce5061a36571f3532d","trigger_url":"http://local.mailbots.com/api/v1/trigger/aaea436d5f81c9ce5061a36571f3532d/","created":1547766482,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:02 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":35,"hash":"f1a4f0ae487d92fb5ecd7fe749f20d01","trigger_url":"http://local.mailbots.com/api/v1/trigger/f1a4f0ae487d92fb5ecd7fe749f20d01/","created":1547766483,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"37","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:02 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"to":"Joe<joe@example.com>","subject":"Hi Joe"}}})
  .reply(201, {"status":"success","task":{"id":36,"hash":"29187b0da2e3d0eca8b799f51a6fac2f","trigger_url":"http://local.mailbots.com/api/v1/trigger/29187b0da2e3d0eca8b799f51a6fac2f/","created":1547766483,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Hi Joe","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"3","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:03 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/35')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:04 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/32')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:04 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/33')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:04 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/36')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:04 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/34')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:04 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":37,"hash":"61db1a812159feec63649af0030e0b5c","trigger_url":"http://local.mailbots.com/api/v1/trigger/61db1a812159feec63649af0030e0b5c/","created":1547766484,"trigger_time":1547770085,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"38","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:04 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":38,"hash":"4246d01a464cc39ca48c511c6778d53f","trigger_url":"http://local.mailbots.com/api/v1/trigger/4246d01a464cc39ca48c511c6778d53f/","created":1547766485,"trigger_time":2178918485,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"39","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:05 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":39,"hash":"31d50ee2306a056a2bb7d865407ac70e","trigger_url":"http://local.mailbots.com/api/v1/trigger/31d50ee2306a056a2bb7d865407ac70e/","created":1547766486,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"4","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:06 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":40,"hash":"95eb65e2f14a5e2598f6e23ed88c5123","trigger_url":"http://local.mailbots.com/api/v1/trigger/95eb65e2f14a5e2598f6e23ed88c5123/","created":1547766487,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"40","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:07 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki"}}})
  .reply(201, {"status":"success","task":{"id":41,"hash":"c58d8cf6f31b355766c66883b83c94b1","trigger_url":"http://local.mailbots.com/api/v1/trigger/c58d8cf6f31b355766c66883b83c94b1/","created":1547766487,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"5","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:07 GMT',
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
  '1573',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/38')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:08 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/40')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:08 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/39')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:08 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/37')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:08 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/41')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:08 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":42,"hash":"9127cc913d6cfab3484952b51b90ff60","trigger_url":"http://local.mailbots.com/api/v1/trigger/9127cc913d6cfab3484952b51b90ff60/","created":1547766489,"trigger_time":1547770089,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"41","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:08 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":43,"hash":"5ff043700462f442a5ae6d6750a5386d","trigger_url":"http://local.mailbots.com/api/v1/trigger/5ff043700462f442a5ae6d6750a5386d/","created":1547766489,"trigger_time":2178918489,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"42","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:09 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":44,"hash":"ba4d324641acf69124057846ced0930e","trigger_url":"http://local.mailbots.com/api/v1/trigger/ba4d324641acf69124057846ced0930e/","created":1547766490,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"6","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:10 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":45,"hash":"010234b1a3a7ef7be0bc74218a5f3e17","trigger_url":"http://local.mailbots.com/api/v1/trigger/010234b1a3a7ef7be0bc74218a5f3e17/","created":1547766490,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"43","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:10 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Space%20Ships%21"})
  .reply(200, {"status":"success","tasks":[{"id":43,"hash":"5ff043700462f442a5ae6d6750a5386d","trigger_url":"http://local.mailbots.com/api/v1/trigger/5ff043700462f442a5ae6d6750a5386d/","created":1547766489,"trigger_time":2178918489,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"43","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:11 GMT',
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
  '1519',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/43')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:12 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/42')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:12 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/44')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:12 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/45')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:12 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":46,"hash":"44b72140380c598bf8b54b7eedda5082","trigger_url":"http://local.mailbots.com/api/v1/trigger/44b72140380c598bf8b54b7eedda5082/","created":1547766492,"trigger_time":1547770093,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"44","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:12 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":47,"hash":"3def69bf9fbd71f3da04cf705443a4f5","trigger_url":"http://local.mailbots.com/api/v1/trigger/3def69bf9fbd71f3da04cf705443a4f5/","created":1547766493,"trigger_time":2178918493,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"45","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:13 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":48,"hash":"d7d84a2e1ef0ea041233879a39795440","trigger_url":"http://local.mailbots.com/api/v1/trigger/d7d84a2e1ef0ea041233879a39795440/","created":1547766494,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"7","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:14 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":49,"hash":"5694bb7ca0cdf2654d1537e396198c93","trigger_url":"http://local.mailbots.com/api/v1/trigger/5694bb7ca0cdf2654d1537e396198c93/","created":1547766495,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"46","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:14 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"joe%40example.com"})
  .reply(200, {"status":"success","tasks":[{"id":47,"hash":"3def69bf9fbd71f3da04cf705443a4f5","trigger_url":"http://local.mailbots.com/api/v1/trigger/3def69bf9fbd71f3da04cf705443a4f5/","created":1547766493,"trigger_time":2178918493,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"46","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:15 GMT',
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
  '1519',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/46')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:16 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/48')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:16 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/47')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:16 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/49')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:16 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":50,"hash":"85f2dd7f32b482675ecf4e9181abe28d","trigger_url":"http://local.mailbots.com/api/v1/trigger/85f2dd7f32b482675ecf4e9181abe28d/","created":1547766497,"trigger_time":1547770097,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"47","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:16 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":51,"hash":"9b3b50d80f466002ab9da06a8d7f8036","trigger_url":"http://local.mailbots.com/api/v1/trigger/9b3b50d80f466002ab9da06a8d7f8036/","created":1547766497,"trigger_time":2178918498,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"48","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:17 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":52,"hash":"cb610a2f7afa651c6c0d2472700b54e5","trigger_url":"http://local.mailbots.com/api/v1/trigger/cb610a2f7afa651c6c0d2472700b54e5/","created":1547766498,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"8","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:18 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":53,"hash":"896c4db9aa561cf5981faf005857ebcb","trigger_url":"http://local.mailbots.com/api/v1/trigger/896c4db9aa561cf5981faf005857ebcb/","created":1547766499,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"49","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:19 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","order_by":"due","order_dir":"desc"})
  .reply(200, {"status":"success","tasks":[{"id":51,"hash":"9b3b50d80f466002ab9da06a8d7f8036","trigger_url":"http://local.mailbots.com/api/v1/trigger/9b3b50d80f466002ab9da06a8d7f8036/","created":1547766497,"trigger_time":2178918498,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"49","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":50,"hash":"85f2dd7f32b482675ecf4e9181abe28d","trigger_url":"http://local.mailbots.com/api/v1/trigger/85f2dd7f32b482675ecf4e9181abe28d/","created":1547766497,"trigger_time":1547770097,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"49","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"49","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"49","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":53,"hash":"896c4db9aa561cf5981faf005857ebcb","trigger_url":"http://local.mailbots.com/api/v1/trigger/896c4db9aa561cf5981faf005857ebcb/","created":1547766499,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"49","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:20 GMT',
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
  '7493',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/51')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:20 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/52')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:20 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/53')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:20 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/50')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:20 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":54,"hash":"fe4b7803f8a402957f40088054d99ab7","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe4b7803f8a402957f40088054d99ab7/","created":1547766501,"trigger_time":1547770101,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"50","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:21 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":55,"hash":"7348bb9d331f3826341531b72c86876d","trigger_url":"http://local.mailbots.com/api/v1/trigger/7348bb9d331f3826341531b72c86876d/","created":1547766502,"trigger_time":2178918502,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"51","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:22 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":56,"hash":"cb853e0f603fb53e261507f5d1ee5453","trigger_url":"http://local.mailbots.com/api/v1/trigger/cb853e0f603fb53e261507f5d1ee5453/","created":1547766502,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"9","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:22 GMT',
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
  '1613',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":57,"hash":"8d388cd41fd085b52ec7437b8e2ddafa","trigger_url":"http://local.mailbots.com/api/v1/trigger/8d388cd41fd085b52ec7437b8e2ddafa/","created":1547766503,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"52","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:23 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki Now"},"trigger_timeformat":"1sec"}})
  .reply(201, {"status":"success","task":{"id":58,"hash":"634a5487fe84c0295fa28252968c7b3a","trigger_url":"http://local.mailbots.com/api/v1/trigger/634a5487fe84c0295fa28252968c7b3a/","created":1547766503,"trigger_time":1547766505,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki Now","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:23 GMT',
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
  '1599',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"order_by":"due","order_dir":"asc"})
  .reply(200, {"status":"success","tasks":[{"id":58,"hash":"634a5487fe84c0295fa28252968c7b3a","trigger_url":"http://local.mailbots.com/api/v1/trigger/634a5487fe84c0295fa28252968c7b3a/","created":1547766503,"trigger_time":1547766505,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki Now","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":54,"hash":"fe4b7803f8a402957f40088054d99ab7","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe4b7803f8a402957f40088054d99ab7/","created":1547766501,"trigger_time":1547770101,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":56,"hash":"cb853e0f603fb53e261507f5d1ee5453","trigger_url":"http://local.mailbots.com/api/v1/trigger/cb853e0f603fb53e261507f5d1ee5453/","created":1547766502,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"9","email_outbound_last_at":null,"task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":55,"hash":"7348bb9d331f3826341531b72c86876d","trigger_url":"http://local.mailbots.com/api/v1/trigger/7348bb9d331f3826341531b72c86876d/","created":1547766502,"trigger_time":2178918502,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":57,"hash":"8d388cd41fd085b52ec7437b8e2ddafa","trigger_url":"http://local.mailbots.com/api/v1/trigger/8d388cd41fd085b52ec7437b8e2ddafa/","created":1547766503,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"53","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:24 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/54')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/58')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/56')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/57')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/55')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:25 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":59,"hash":"1a133efaa98f2df6049cc3f3aaac60e5","trigger_url":"http://local.mailbots.com/api/v1/trigger/1a133efaa98f2df6049cc3f3aaac60e5/","created":1547766505,"trigger_time":1547770106,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"54","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:25 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":60,"hash":"52a5f2a57c69761cb7dec729a31cc058","trigger_url":"http://local.mailbots.com/api/v1/trigger/52a5f2a57c69761cb7dec729a31cc058/","created":1547766506,"trigger_time":2178918506,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"55","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:26 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":61,"hash":"af9d77573d95fa949ada06907c337637","trigger_url":"http://local.mailbots.com/api/v1/trigger/af9d77573d95fa949ada06907c337637/","created":1547766507,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"10","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:27 GMT',
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
  '1614',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":62,"hash":"44dd80865e3dbe38e7bf29eec3461f54","trigger_url":"http://local.mailbots.com/api/v1/trigger/44dd80865e3dbe38e7bf29eec3461f54/","created":1547766507,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"56","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:27 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_after":"1863126508","mailbot":"test-mailbot-1"})
  .reply(200, {"status":"success","tasks":[{"id":60,"hash":"52a5f2a57c69761cb7dec729a31cc058","trigger_url":"http://local.mailbots.com/api/v1/trigger/52a5f2a57c69761cb7dec729a31cc058/","created":1547766506,"trigger_time":2178918506,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"56","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:28 GMT',
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
  '1519',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/60')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:29 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/61')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:29 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/59')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:29 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/62')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:29 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":63,"hash":"9d6cfc4e5ed25f565005ff00f450230e","trigger_url":"http://local.mailbots.com/api/v1/trigger/9d6cfc4e5ed25f565005ff00f450230e/","created":1547766509,"trigger_time":1547770109,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"57","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:29 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":64,"hash":"10ff88acd8ed200d954ea0256ff64343","trigger_url":"http://local.mailbots.com/api/v1/trigger/10ff88acd8ed200d954ea0256ff64343/","created":1547766510,"trigger_time":2178918510,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"58","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:30 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":65,"hash":"b30286875649434a6d417162212acca9","trigger_url":"http://local.mailbots.com/api/v1/trigger/b30286875649434a6d417162212acca9/","created":1547766511,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"11","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:30 GMT',
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
  '1614',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":66,"hash":"2ac737ea542399fb0b84441fefacd27a","trigger_url":"http://local.mailbots.com/api/v1/trigger/2ac737ea542399fb0b84441fefacd27a/","created":1547766511,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"59","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:31 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Twenty Minutes"},"trigger_timeformat":"20min"}})
  .reply(201, {"status":"success","task":{"id":67,"hash":"ffa5c1bf7dcc915437528210da0ed575","trigger_url":"http://local.mailbots.com/api/v1/trigger/ffa5c1bf7dcc915437528210da0ed575/","created":1547766512,"trigger_time":1547767712,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"60","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:32 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_before":"1547768312","mailbot":"test-mailbot-1"})
  .reply(200, {"status":"success","tasks":[{"id":67,"hash":"ffa5c1bf7dcc915437528210da0ed575","trigger_url":"http://local.mailbots.com/api/v1/trigger/ffa5c1bf7dcc915437528210da0ed575/","created":1547766512,"trigger_time":1547767712,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"60","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"60","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":66,"hash":"2ac737ea542399fb0b84441fefacd27a","trigger_url":"http://local.mailbots.com/api/v1/trigger/2ac737ea542399fb0b84441fefacd27a/","created":1547766511,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"60","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"5","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:32 GMT',
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
  '4505',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/64')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:33 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/63')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:33 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/66')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:33 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/65')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:33 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/67')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:33 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":68,"hash":"ddb1c5dbe471f9f44b096290551e7b45","trigger_url":"http://local.mailbots.com/api/v1/trigger/ddb1c5dbe471f9f44b096290551e7b45/","created":1547766514,"trigger_time":1547770114,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"61","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:34 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":69,"hash":"f8d6817bb71d7a1f7d39e2df47f58a50","trigger_url":"http://local.mailbots.com/api/v1/trigger/f8d6817bb71d7a1f7d39e2df47f58a50/","created":1547766514,"trigger_time":2178918515,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"62","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:34 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":70,"hash":"73a5ed869b6f98540255489b6c5d036d","trigger_url":"http://local.mailbots.com/api/v1/trigger/73a5ed869b6f98540255489b6c5d036d/","created":1547766516,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"12","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:36 GMT',
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
  '1614',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":71,"hash":"e634b02083fa1a47304909a9083e4d93","trigger_url":"http://local.mailbots.com/api/v1/trigger/e634b02083fa1a47304909a9083e4d93/","created":1547766517,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"63","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:37 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"63","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:37 GMT',
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
  '1534',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/68')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:38 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/69')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:38 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/71')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:38 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/70')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:38 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":72,"hash":"91a263b0c2bbade46a999e4c5b9633cf","trigger_url":"http://local.mailbots.com/api/v1/trigger/91a263b0c2bbade46a999e4c5b9633cf/","created":1547766518,"trigger_time":1547770119,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"64","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:38 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":73,"hash":"632ed04ccec912fd8e78f30b40bc72a3","trigger_url":"http://local.mailbots.com/api/v1/trigger/632ed04ccec912fd8e78f30b40bc72a3/","created":1547766519,"trigger_time":2178918519,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"65","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:39 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":74,"hash":"c2d6133001becd1a408c6f8b83bdb56a","trigger_url":"http://local.mailbots.com/api/v1/trigger/c2d6133001becd1a408c6f8b83bdb56a/","created":1547766520,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"13","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:40 GMT',
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
  '1614',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":75,"hash":"2bde65167ed00e1f0faeb53470016075","trigger_url":"http://local.mailbots.com/api/v1/trigger/2bde65167ed00e1f0faeb53470016075/","created":1547766520,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:40 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","order_by":"due","order_dir":"desc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":72,"hash":"91a263b0c2bbade46a999e4c5b9633cf","trigger_url":"http://local.mailbots.com/api/v1/trigger/91a263b0c2bbade46a999e4c5b9633cf/","created":1547766518,"trigger_time":1547770119,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":75,"hash":"2bde65167ed00e1f0faeb53470016075","trigger_url":"http://local.mailbots.com/api/v1/trigger/2bde65167ed00e1f0faeb53470016075/","created":1547766520,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:41 GMT',
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
  '6004',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","order_by":"due","order_dir":"asc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":72,"hash":"91a263b0c2bbade46a999e4c5b9633cf","trigger_url":"http://local.mailbots.com/api/v1/trigger/91a263b0c2bbade46a999e4c5b9633cf/","created":1547766518,"trigger_time":1547770119,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":24,"hash":"1788eeed70895cc0e7b82877cf7cacdb","trigger_url":"http://local.mailbots.com/api/v1/trigger/1788eeed70895cc0e7b82877cf7cacdb/","created":1547766467,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},{"id":75,"hash":"2bde65167ed00e1f0faeb53470016075","trigger_url":"http://local.mailbots.com/api/v1/trigger/2bde65167ed00e1f0faeb53470016075/","created":1547766520,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"66","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:42 GMT',
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
  '6004',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/75')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:42 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/74')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:42 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/73')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:42 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/72')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:42 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":76,"hash":"65a972a303f349876fb46aa909e742a2","trigger_url":"http://local.mailbots.com/api/v1/trigger/65a972a303f349876fb46aa909e742a2/","created":1547766523,"trigger_time":1547770123,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"67","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:43 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":77,"hash":"5beae8fd24457965002e411ce03a9289","trigger_url":"http://local.mailbots.com/api/v1/trigger/5beae8fd24457965002e411ce03a9289/","created":1547766524,"trigger_time":2178918524,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"68","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:44 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":78,"hash":"da431591d1c1599b444feb90a9a8c8e0","trigger_url":"http://local.mailbots.com/api/v1/trigger/da431591d1c1599b444feb90a9a8c8e0/","created":1547766524,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"14","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:44 GMT',
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
  '1614',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":79,"hash":"95c601cbc8adae9ba6e359d2689a1a4f","trigger_url":"http://local.mailbots.com/api/v1/trigger/95c601cbc8adae9ba6e359d2689a1a4f/","created":1547766525,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"69","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:45 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"mailbot":"test-mailbot-1","page":"1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":76,"hash":"65a972a303f349876fb46aa909e742a2","trigger_url":"http://local.mailbots.com/api/v1/trigger/65a972a303f349876fb46aa909e742a2/","created":1547766523,"trigger_time":1547770123,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"69","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:46 GMT',
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
  '1529',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/76')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:46 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/77')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:46 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/79')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:46 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/78')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:46 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":80,"hash":"f1c36e596fa48859dbddf092d41aebeb","trigger_url":"http://local.mailbots.com/api/v1/trigger/f1c36e596fa48859dbddf092d41aebeb/","created":1547766527,"trigger_time":1547770127,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"70","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"2","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:47 GMT',
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
  '1616',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":81,"hash":"c1892560b460ea47e3ea128fe8797e2b","trigger_url":"http://local.mailbots.com/api/v1/trigger/c1892560b460ea47e3ea128fe8797e2b/","created":1547766528,"trigger_time":2178918528,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"71","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"3","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:48 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":82,"hash":"12fa8b88b30473f1f21cf01217fbe25f","trigger_url":"http://local.mailbots.com/api/v1/trigger/12fa8b88b30473f1f21cf01217fbe25f/","created":1547766529,"trigger_time":1547820000,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-mailbot-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"15","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-mailbot-2","stored_data":[],"id":119,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:49 GMT',
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
  '1614',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-mailbot-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":83,"hash":"ce8b5108685cbb33eb041165f7403d66","trigger_url":"http://local.mailbots.com/api/v1/trigger/ce8b5108685cbb33eb041165f7403d66/","created":1547766529,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"72","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The mailbot was not contacted"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:49 GMT',
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
  '1615',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"3a742e286f6d8a1b423645276b45176b","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a742e286f6d8a1b423645276b45176b/","created":1547766430,"trigger_time":1547770030,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-mailbot-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-mailbot-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"72","email_outbound_last_at":"2019-01-17 23:07:48","task_pending":"4","id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-mailbot-1","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}}]}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:50 GMT',
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
  '1534',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/80')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:51 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/81')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:51 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/82')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:51 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/83')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Thu, 17 Jan 2019 23:08:51 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/users/self/')
  .reply(200, {"status":"success","user":{"id":2,"name":"Reilly Sweetland","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d,4d,everyMonday,monday,tuesday,weds","flagged":0,"validate_sender_email":true,"send_dev_errors":true,"accepted_terms":false,"email":"esweetland@gmail.com","gopher_dev":true,"user_hash":"315e24c3ce53dc683f5c5cdaa6270964e1c2033c42b5c0b3123f65b4666516e0"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:51 GMT',
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
  '618',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .get('/api/v1/mailbots/self/data/')
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar","evernote_access_token":"abc"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:52 GMT',
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
  '186',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/mailbots/self/data/', {"foo":"bar"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar","evernote_access_token":"abc"},"user":{"name":"Reilly Sweetland","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:52 GMT',
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
  '186',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_0b051aa5668fae6021de5deda8e9c4e5","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:53 GMT',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_0b051aa5668fae6021de5deda8e9c4e5","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=c121ibuqr0rv4vsfi14jdgvp30; path=/',
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

nock('http://local.mailbots.com', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_0b051aa5668fae6021de5deda8e9c4e5","email_address":["blackhole@example.com","blackhole2@example.com"]})
  .reply(200, {"status":"success"}, [ 'Date',
  'Thu, 17 Jan 2019 23:08:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=sk7c3mfn28p7hl7nke9d6ctb83; path=/',
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
