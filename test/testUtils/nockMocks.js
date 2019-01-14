//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.mailbots.com:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');
nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extensions/self/data/', {"three":"more"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '150',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/extensions/self')
  .reply(200, {"status":"success","extension":{"name":"Gopher Admin UI (Reilly Localhost)","subdomain":"local-gopher-admin-ui","stored_data":[],"installed":true,"event_url":"http://local.mailbots.com/api/v1/extension_event/177/cb37ceef9a1982fa/","id":39,"owner":{"email":"esweetland@gmail.com"},"description":"Description","icon":"","autocomplete_examples":"","tags":"","published":false,"devmode":false,"enabled":true,"install_url":"\n","settings_url":"","base_url":"http://127.0.0.1:3000/","developer_name":"","help_url":"","learn_more_url":"","privacy_policy_url":"","oauth2_client_id":"ext_0107e8160247f26a57d89ab5162829b2_","oauth2_scope":"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self","oauth2_redirect_uri":"http://127.0.0.1:3000/auth/callback","oauth2_client_secret":"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63","webhook_url":"http://127.0.0.1:3000/webhooks","webhook_version":1,"metrics":{"unique_users":{"2019-01-14":1}}}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1057',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extension_event/239/4f3eecc325493c5d/', {"foo":"bar"})
  .query({"type":"github.issue.opened"})
  .reply(200, {"extension":{"subdomain":"test-extension-1"},"webhook":{"status":"failed","message":null},"status":"success"}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=otioeaggu9r8quok5vh1vnbue3; path=/',
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
  '110',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/extensions/self/data/')
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '150',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Successful task"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"370","email_outbound_last_at":"2019-01-14 20:07:18","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1607',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Unsuccessful webhook"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":2,"hash":"4891d62b093fd0d346fadfc8b5fe7676","trigger_url":"http://local.mailbots.com/api/v1/trigger/4891d62b093fd0d346fadfc8b5fe7676/","created":1547496557,"trigger_time":1547500157,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful webhook","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"371","email_outbound_last_at":"2019-01-14 20:07:18","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"failed","message":"Extension webhook url not set."}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1607',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@$wrong.eml.bot","reference_email":{"subject":"Unsuccessful submission"},"trigger_timeformat":"1hour"}})
  .reply(400, {"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '261',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1950',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":8,"date":"2019-01-14 20:06:58","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:06:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '3869',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed","api"]})
  .reply(200, {"status":"success","logs":[{"id":212,"date":"2019-01-14 20:09:17","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":210,"date":"2019-01-14 20:09:17","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"152","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"4891d62b093fd0d346fadfc8b5fe7676\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/4891d62b093fd0d346fadfc8b5fe7676\\/\",\"created\":1547496557,\"trigger_time\":1547500157,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"371\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"Extension webhook url not set.\"}}","http_response_statuscode":201},{"id":208,"date":"2019-01-14 20:09:17","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"132","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"47e81c34e00e78e1ad9515df92bb6c65\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/47e81c34e00e78e1ad9515df92bb6c65\\/\",\"created\":1547496556,\"trigger_time\":1547500156,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"370\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":207,"date":"2019-01-14 20:09:16","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":205,"date":"2019-01-14 20:09:16","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\\n\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-14\":1}}}}","http_response_statuscode":200},{"id":204,"date":"2019-01-14 20:09:16","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":203,"date":"2019-01-14 20:07:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_0a4b80d547f91b8175c4376c31d74dc4\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200},{"id":202,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"13","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"foo\":\"bar\"}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":201,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":200,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/users/self/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/users/self/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false,\"email\":\"esweetland@gmail.com\",\"gopher_dev\":true,\"user_hash\":\"315e24c3ce53dc683f5c5cdaa6270964e1c2033c42b5c0b3123f65b4666516e0\"}}","http_response_statuscode":200},{"id":199,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/165?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/165?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":198,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/166?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/166?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":197,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/164?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/164?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":196,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/163?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/163?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":195,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":1,\"hash\":\"0ae28f6c8aa64b48e987e9a101502f2d\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/0ae28f6c8aa64b48e987e9a101502f2d\\/\",\"created\":1547493880,\"trigger_time\":1547497480,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"369\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":194,"date":"2019-01-14 20:07:51","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":166,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"131","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":166,\"hash\":\"292ea5f2c32130f5189ef698d171ca4e\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/292ea5f2c32130f5189ef698d171ca4e\\/\",\"created\":1547496471,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"369\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":193,"date":"2019-01-14 20:07:51","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":165,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"159","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":165,\"hash\":\"0560f04e4da49f91cf756abdac1c8643\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/0560f04e4da49f91cf756abdac1c8643\\/\",\"created\":1547496471,\"trigger_time\":1547560800,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"80\",\"email_outbound_last_at\":null,\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":101,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":192,"date":"2019-01-14 20:07:51","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":164,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"180","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":164,\"hash\":\"005f2d5bca21baf05a9f16ddfbd68e10\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/005f2d5bca21baf05a9f16ddfbd68e10\\/\",\"created\":1547496470,\"trigger_time\":2178648471,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"368\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"4\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":191,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":163,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":163,\"hash\":\"a6f568740828dd11c33fbb6ee3386599\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a6f568740828dd11c33fbb6ee3386599\\/\",\"created\":1547496470,\"trigger_time\":1547500070,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"367\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":190,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/160?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/160?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":189,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/159?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/159?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":188,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/162?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/162?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":187,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/161?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/161?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":186,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?extension=test-extension-1&page=1&per_page=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?extension=test-extension-1&page=1&per_page=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":84,\"hash\":\"5571966844355cbd135ff00faa746023\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/5571966844355cbd135ff00faa746023\\/\",\"created\":1547496418,\"trigger_time\":1547500018,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"366\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":185,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":162,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"131","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":162,\"hash\":\"774de0598629e7f63cbf5aa91a6cca48\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/774de0598629e7f63cbf5aa91a6cca48\\/\",\"created\":1547496469,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"366\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":184,"date":"2019-01-14 20:07:49","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":161,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"159","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":161,\"hash\":\"fc0969d8f986d927354adc82e2b2d20a\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/fc0969d8f986d927354adc82e2b2d20a\\/\",\"created\":1547496469,\"trigger_time\":1547560800,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"79\",\"email_outbound_last_at\":null,\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":101,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":183,"date":"2019-01-14 20:07:49","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":160,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"180","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":160,\"hash\":\"b33fdfc69eec902af47147b7ad0760f7\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/b33fdfc69eec902af47147b7ad0760f7\\/\",\"created\":1547496469,\"trigger_time\":2178648469,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"365\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"4\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":182,"date":"2019-01-14 20:07:49","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":159,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":159,\"hash\":\"774de0598629e7f63cbf5aa91a6cca48\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/774de0598629e7f63cbf5aa91a6cca48\\/\",\"created\":1547496469,\"trigger_time\":1547500069,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"364\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":181,"date":"2019-01-14 20:07:48","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/158?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/158?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:48 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:19 GMT',
  'Server',
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
  .reply(200, {"status":"success","logs":[{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1950',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"since":"1542312561"})
  .reply(200, {"status":"success","logs":[{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":209,"date":"2019-01-14 20:09:17","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":206,"date":"2019-01-14 20:09:16","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: extension.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":61,"date":"2019-01-14 20:07:18","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":107,"userId":2,"event":"webhook failed: webhook url not set: task.triggered","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":8,"date":"2019-01-14 20:06:58","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:06:58 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":6,"date":"2019-01-14 20:06:58","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":85,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":3,"date":"2019-01-14 20:06:57","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: extension.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5928',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["api","webhook","submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":212,"date":"2019-01-14 20:09:17","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":211,"date":"2019-01-14 20:09:17","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":210,"date":"2019-01-14 20:09:17","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"152","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"4891d62b093fd0d346fadfc8b5fe7676\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/4891d62b093fd0d346fadfc8b5fe7676\\/\",\"created\":1547496557,\"trigger_time\":1547500157,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"371\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"Extension webhook url not set.\"}}","http_response_statuscode":201},{"id":209,"date":"2019-01-14 20:09:17","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: webhook url not set: task.created","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":208,"date":"2019-01-14 20:09:17","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"132","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:17 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"47e81c34e00e78e1ad9515df92bb6c65\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/47e81c34e00e78e1ad9515df92bb6c65\\/\",\"created\":1547496556,\"trigger_time\":1547500156,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"370\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":207,"date":"2019-01-14 20:09:16","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":206,"date":"2019-01-14 20:09:16","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: webhook url not set: extension.event_received","details":"","data":[],"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":205,"date":"2019-01-14 20:09:16","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"\\n\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"unique_users\":{\"2019-01-14\":1}}}}","http_response_statuscode":200},{"id":204,"date":"2019-01-14 20:09:16","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:09:16 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":203,"date":"2019-01-14 20:07:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_0a4b80d547f91b8175c4376c31d74dc4\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200},{"id":202,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"13","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"foo\":\"bar\"}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":201,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":200,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/users/self/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/users/self/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false,\"email\":\"esweetland@gmail.com\",\"gopher_dev\":true,\"user_hash\":\"315e24c3ce53dc683f5c5cdaa6270964e1c2033c42b5c0b3123f65b4666516e0\"}}","http_response_statuscode":200},{"id":199,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/165?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/165?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":198,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/166?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/166?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":197,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/164?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/164?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":196,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/163?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/163?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":195,"date":"2019-01-14 20:07:52","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":1,\"hash\":\"0ae28f6c8aa64b48e987e9a101502f2d\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/0ae28f6c8aa64b48e987e9a101502f2d\\/\",\"created\":1547493880,\"trigger_time\":1547497480,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"369\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":194,"date":"2019-01-14 20:07:51","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":166,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"131","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":166,\"hash\":\"292ea5f2c32130f5189ef698d171ca4e\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/292ea5f2c32130f5189ef698d171ca4e\\/\",\"created\":1547496471,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"369\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":193,"date":"2019-01-14 20:07:51","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":165,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"159","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":165,\"hash\":\"0560f04e4da49f91cf756abdac1c8643\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/0560f04e4da49f91cf756abdac1c8643\\/\",\"created\":1547496471,\"trigger_time\":1547560800,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"80\",\"email_outbound_last_at\":null,\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":101,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":192,"date":"2019-01-14 20:07:51","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":164,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"180","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":164,\"hash\":\"005f2d5bca21baf05a9f16ddfbd68e10\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/005f2d5bca21baf05a9f16ddfbd68e10\\/\",\"created\":1547496470,\"trigger_time\":2178648471,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"368\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"4\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":191,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":163,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":163,\"hash\":\"a6f568740828dd11c33fbb6ee3386599\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a6f568740828dd11c33fbb6ee3386599\\/\",\"created\":1547496470,\"trigger_time\":1547500070,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"367\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":190,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/160?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/160?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":189,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/159?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/159?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":188,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/162?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/162?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":187,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/161?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/161?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":186,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?extension=test-extension-1&page=1&per_page=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?extension=test-extension-1&page=1&per_page=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":84,\"hash\":\"5571966844355cbd135ff00faa746023\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/5571966844355cbd135ff00faa746023\\/\",\"created\":1547496418,\"trigger_time\":1547500018,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"366\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":185,"date":"2019-01-14 20:07:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":162,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"131","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":162,\"hash\":\"774de0598629e7f63cbf5aa91a6cca48\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/774de0598629e7f63cbf5aa91a6cca48\\/\",\"created\":1547496469,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"366\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":184,"date":"2019-01-14 20:07:49","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":161,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"159","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.eml.bot\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":161,\"hash\":\"fc0969d8f986d927354adc82e2b2d20a\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/fc0969d8f986d927354adc82e2b2d20a\\/\",\"created\":1547496469,\"trigger_time\":1547560800,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"79\",\"email_outbound_last_at\":null,\"task_pending\":\"5\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":101,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":183,"date":"2019-01-14 20:07:49","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":160,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"180","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Mon, 14 Jan 2019 20:07:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":160,\"hash\":\"b33fdfc69eec902af47147b7ad0760f7\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/b33fdfc69eec902af47147b7ad0760f7\\/\",\"created\":1547496469,\"trigger_time\":2178648469,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"365\",\"email_outbound_last_at\":\"2019-01-14 20:07:18\",\"task_pending\":\"4\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"mailbot\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":100,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:21 GMT',
  'Server',
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
  'Mon, 14 Jan 2019 20:09:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":3,"hash":"4e24c57a5893c38e442e49852400c36e","trigger_url":"http://local.mailbots.com/api/v1/trigger/4e24c57a5893c38e442e49852400c36e/","created":1547496562,"trigger_time":1547500163,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"372","email_outbound_last_at":"2019-01-14 20:07:18","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":"15min","reference_email":{"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":4,"hash":"a7f1983060252908e315bc00d45b3a36","trigger_url":"http://local.mailbots.com/api/v1/trigger/a7f1983060252908e315bc00d45b3a36/","created":1547496563,"trigger_time":1547497463,"trigger_timeformat":"15min","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"373","email_outbound_last_at":"2019-01-14 20:07:18","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1622',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/4')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":5,"hash":"42783222db83e5b2af1cbdf7c7930568","trigger_url":"http://local.mailbots.com/api/v1/trigger/42783222db83e5b2af1cbdf7c7930568/","created":1547496563,"trigger_time":1547500163,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"374","email_outbound_last_at":"2019-01-14 20:07:18","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":1,"suppress_webhook":true,"task":{"command":"test@test-extension-1.eml.bot","reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"test@example.com","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"},"trigger_time":1520319928,"trigger_timeformat":"3days","completed":false},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":6,"hash":"6d33d6b22e51b628f14851a81afd7232","trigger_url":"http://local.mailbots.com/api/v1/trigger/6d33d6b22e51b628f14851a81afd7232/","created":1547496564,"trigger_time":1547755764,"trigger_timeformat":"3days","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"375","email_outbound_last_at":"2019-01-14 20:09:24","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23606&hash=1f9d2490545a6c2b573cdbc1745b3078\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:24 GMT',
  'Server',
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
  'Mon, 14 Jan 2019 20:09:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":7,"hash":"ad0a2a2a3239319af0e3b859516c0413","trigger_url":"http://local.mailbots.com/api/v1/trigger/ad0a2a2a3239319af0e3b859516c0413/","created":1547496564,"trigger_time":1547500165,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"376","email_outbound_last_at":"2019-01-14 20:09:24","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":"<h1>This is a test</h1>"}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":8,"hash":"8f22880f40717bf84ed4b289a29489dc","trigger_url":"http://local.mailbots.com/api/v1/trigger/8f22880f40717bf84ed4b289a29489dc/","created":1547496565,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1547496565,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"<h1>This is a test</h1>","text":" This is a test ","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"377","email_outbound_last_at":"2019-01-14 20:09:25","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23607&hash=bd3331ae1a72852bc27d48dd5b904355\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:25 GMT',
  'Server',
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
  'Mon, 14 Jan 2019 20:09:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":9,"hash":"16997ace5df92490567b8b0038f08ed8","trigger_url":"http://local.mailbots.com/api/v1/trigger/16997ace5df92490567b8b0038f08ed8/","created":1547496566,"trigger_time":1547500166,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"378","email_outbound_last_at":"2019-01-14 20:09:25","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":""}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":10,"hash":"e0931b55cd1f8e8a11d86bc56fbb9a3c","trigger_url":"http://local.mailbots.com/api/v1/trigger/e0931b55cd1f8e8a11d86bc56fbb9a3c/","created":1547496566,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1547496566,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"379","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23608&hash=d24beadc6bccd8a16369fb804260798b\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:26 GMT',
  'Server',
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
  'Mon, 14 Jan 2019 20:09:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":11,"hash":"ff5849bd42c02b8c5345670d1880ff48","trigger_url":"http://local.mailbots.com/api/v1/trigger/ff5849bd42c02b8c5345670d1880ff48/","created":1547496567,"trigger_time":1547500167,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"380","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/')
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"380","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"380","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":11,"hash":"ff5849bd42c02b8c5345670d1880ff48","trigger_url":"http://local.mailbots.com/api/v1/trigger/ff5849bd42c02b8c5345670d1880ff48/","created":1547496567,"trigger_time":1547500167,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"380","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '4489',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/11')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":12,"hash":"fcb262ba50ddf2881c05c6094ebe9a06","trigger_url":"http://local.mailbots.com/api/v1/trigger/fcb262ba50ddf2881c05c6094ebe9a06/","created":1547496568,"trigger_time":1547500168,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"381","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"381","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/12')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:29 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":13,"hash":"0d1f7704f2abbf80d7935ee189394647","trigger_url":"http://local.mailbots.com/api/v1/trigger/0d1f7704f2abbf80d7935ee189394647/","created":1547496569,"trigger_time":1547500169,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"382","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:29 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"382","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:29 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/13')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:30 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":14,"hash":"28013cee09163f5fe257f15dd01641e6","trigger_url":"http://local.mailbots.com/api/v1/trigger/28013cee09163f5fe257f15dd01641e6/","created":1547496570,"trigger_time":1547500170,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"383","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:30 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/14/')
  .reply(200, {"status":"success","task":{"id":14,"hash":"28013cee09163f5fe257f15dd01641e6","trigger_url":"http://local.mailbots.com/api/v1/trigger/28013cee09163f5fe257f15dd01641e6/","created":1547496570,"trigger_time":1547500170,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"383","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:30 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1588',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/14')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":15,"hash":"a4b2c0da300f82f5f47e0a28ef8f79d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/a4b2c0da300f82f5f47e0a28ef8f79d6/","created":1547496571,"trigger_time":1547500171,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"384","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/15/', {"suppress_webhook":true,"task":{"id":15,"reference_email":{"html":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":15,"hash":"a4b2c0da300f82f5f47e0a28ef8f79d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/a4b2c0da300f82f5f47e0a28ef8f79d6/","created":1547496571,"trigger_time":1547500171,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"something else new","text":"something else new","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"384","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1560',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/15')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":16,"hash":"8beed74297cba1d732d063b271cb0c0c","trigger_url":"http://local.mailbots.com/api/v1/trigger/8beed74297cba1d732d063b271cb0c0c/","created":1547496572,"trigger_time":1547500172,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/16/', {"suppress_webhook":true,"task":{"id":16,"trigger_timeformat":"1day"}})
  .reply(200, {"status":"success","task":{"id":16,"hash":"8beed74297cba1d732d063b271cb0c0c","trigger_url":"http://local.mailbots.com/api/v1/trigger/8beed74297cba1d732d063b271cb0c0c/","created":1547496572,"trigger_time":1547582972,"trigger_timeformat":"1day","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"385","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1523',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/16')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":17,"hash":"ca7af1a345bdb7dcd9a8ae2d0594b614","trigger_url":"http://local.mailbots.com/api/v1/trigger/ca7af1a345bdb7dcd9a8ae2d0594b614/","created":1547496573,"trigger_time":1547500173,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"386","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/17/', {"task":{"id":17,"trigger_timeformat":"invalid_jibberish"}})
  .reply(400, {"status":"error","type":"invalid_format","message":"An invalid date was provided in trigger_timeformat."}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":18,"hash":"ca7af1a345bdb7dcd9a8ae2d0594b614","trigger_url":"http://local.mailbots.com/api/v1/trigger/ca7af1a345bdb7dcd9a8ae2d0594b614/","created":1547496573,"trigger_time":1547500173,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"387","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"status":"success","valid":true,"time":"2019-01-15 12:09:33 PST","time_gmt":"2019-01-15 20:09:33","time_ts":"1547582973","recurring":false}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":19,"hash":"3a1170a121b824a746caf42340255ae2","trigger_url":"http://local.mailbots.com/api/v1/trigger/3a1170a121b824a746caf42340255ae2/","created":1547496574,"trigger_time":1547500174,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"388","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":"1sec","reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":20,"hash":"8e30eddb0799c1652db27b6a8ff55cec","trigger_url":"http://local.mailbots.com/api/v1/trigger/8e30eddb0799c1652db27b6a8ff55cec/","created":1547496574,"trigger_time":1547496575,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"389","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1622',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/20')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/19')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":21,"hash":"cf0a9ea745b1fef08f5b5a95ae2eda6d","trigger_url":"http://local.mailbots.com/api/v1/trigger/cf0a9ea745b1fef08f5b5a95ae2eda6d/","created":1547496575,"trigger_time":1547500175,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"390","email_outbound_last_at":"2019-01-14 20:09:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"suppress_webhook":true,"verbose":1,"task":{"command":"test@test-extension-1.eml.bot"},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":22,"hash":"db81418429a5c3beeeda3c7484b0879d","trigger_url":"http://local.mailbots.com/api/v1/trigger/db81418429a5c3beeeda3c7484b0879d/","created":1547496575,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"391","email_outbound_last_at":"2019-01-14 20:09:35","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23609&hash=d9fa05427f1d7f247574c65a2fc7713c\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:35 GMT',
  'Server',
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
  .delete('/api/v1/tasks/21')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/22')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":23,"hash":"45b60036662c560ee3b4ad4ebc5c146a","trigger_url":"http://local.mailbots.com/api/v1/trigger/45b60036662c560ee3b4ad4ebc5c146a/","created":1547496576,"trigger_time":1547500176,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"392","email_outbound_last_at":"2019-01-14 20:09:35","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"test@test-extension-1.eml.bot","reference_email":{"server_recipient":"test@test-extension-1.eml.bot"}},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .reply(201, {"status":"success","task":{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"393","email_outbound_last_at":"2019-01-14 20:09:35","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/')
  .reply(200, {"status":"success","task":{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"393","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"webhook":{"status":"failed","message":"Extension webhook url not set."}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1557',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/23')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":25,"hash":"69dd876c7edeb4fb60b7af1c982db362","trigger_url":"http://local.mailbots.com/api/v1/trigger/69dd876c7edeb4fb60b7af1c982db362/","created":1547496577,"trigger_time":1547500177,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"394","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/25', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":25,"hash":"69dd876c7edeb4fb60b7af1c982db362","trigger_url":"http://local.mailbots.com/api/v1/trigger/69dd876c7edeb4fb60b7af1c982db362/","created":1547496577,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547496578,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"394","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1523',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/25/')
  .reply(200, {"status":"success","task":{"id":25,"hash":"69dd876c7edeb4fb60b7af1c982db362","trigger_url":"http://local.mailbots.com/api/v1/trigger/69dd876c7edeb4fb60b7af1c982db362/","created":1547496577,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547496578,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"394","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1587',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/25')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":26,"hash":"46f185ad1998b9d0ed2ee33de875d2df","trigger_url":"http://local.mailbots.com/api/v1/trigger/46f185ad1998b9d0ed2ee33de875d2df/","created":1547496578,"trigger_time":1547500179,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"395","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/26', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":26,"hash":"46f185ad1998b9d0ed2ee33de875d2df","trigger_url":"http://local.mailbots.com/api/v1/trigger/46f185ad1998b9d0ed2ee33de875d2df/","created":1547496578,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547496579,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"395","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1523',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Subject%201","status":"completed"})
  .reply(200, {"status":"success","tasks":[{"id":26,"hash":"46f185ad1998b9d0ed2ee33de875d2df","trigger_url":"http://local.mailbots.com/api/v1/trigger/46f185ad1998b9d0ed2ee33de875d2df/","created":1547496578,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1547496579,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"395","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1512',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/26')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":27,"hash":"a63b673d52783c410913f3edaa343b0a","trigger_url":"http://local.mailbots.com/api/v1/trigger/a63b673d52783c410913f3edaa343b0a/","created":1547496579,"trigger_time":1547500180,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"396","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":28,"hash":"4ff86f9ed62d1ea08a84d6de61b57e98","trigger_url":"http://local.mailbots.com/api/v1/trigger/4ff86f9ed62d1ea08a84d6de61b57e98/","created":1547496580,"trigger_time":1547500180,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"397","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":29,"hash":"368aea2519796e087a1a1ab6529602d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/368aea2519796e087a1a1ab6529602d6/","created":1547496581,"trigger_time":2178648581,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"398","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":30,"hash":"67e8a796c2d04dfe0d55596d3eb9ce1f","trigger_url":"http://local.mailbots.com/api/v1/trigger/67e8a796c2d04dfe0d55596d3eb9ce1f/","created":1547496581,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"81","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":31,"hash":"634ac87444aa17539dc5ed4fad1931a8","trigger_url":"http://local.mailbots.com/api/v1/trigger/634ac87444aa17539dc5ed4fad1931a8/","created":1547496581,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"399","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","search":"Subject"})
  .reply(200, {"status":"success","tasks":[{"id":28,"hash":"4ff86f9ed62d1ea08a84d6de61b57e98","trigger_url":"http://local.mailbots.com/api/v1/trigger/4ff86f9ed62d1ea08a84d6de61b57e98/","created":1547496580,"trigger_time":1547500180,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"399","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1513',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/30')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/28')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":32,"hash":"18cb4ae8ff3e16ab942faf890d09c236","trigger_url":"http://local.mailbots.com/api/v1/trigger/18cb4ae8ff3e16ab942faf890d09c236/","created":1547496582,"trigger_time":1547500182,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"400","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":33,"hash":"fdb1623de9c1061dcd09bb4d3ff037d3","trigger_url":"http://local.mailbots.com/api/v1/trigger/fdb1623de9c1061dcd09bb4d3ff037d3/","created":1547496582,"trigger_time":2178648582,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"401","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":34,"hash":"df6e8d7628d31e2cbf115504f1c6f0ad","trigger_url":"http://local.mailbots.com/api/v1/trigger/df6e8d7628d31e2cbf115504f1c6f0ad/","created":1547496583,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"82","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":35,"hash":"74ad09fb57eb148c25e58f872249e5d3","trigger_url":"http://local.mailbots.com/api/v1/trigger/74ad09fb57eb148c25e58f872249e5d3/","created":1547496583,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"402","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"to":"Joe<joe@example.com>","subject":"Hi Joe"}}})
  .reply(201, {"status":"success","task":{"id":36,"hash":"403db363bb6d41c0fc8a7a5ad29c81bb","trigger_url":"http://local.mailbots.com/api/v1/trigger/403db363bb6d41c0fc8a7a5ad29c81bb/","created":1547496583,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Hi Joe","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"83","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1553',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/34')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/32')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":37,"hash":"e884ae7de2643e476276ae9c3fd89598","trigger_url":"http://local.mailbots.com/api/v1/trigger/e884ae7de2643e476276ae9c3fd89598/","created":1547496584,"trigger_time":1547500184,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"403","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":38,"hash":"182dc3ec613ef1ea90dc2036561b7596","trigger_url":"http://local.mailbots.com/api/v1/trigger/182dc3ec613ef1ea90dc2036561b7596/","created":1547496584,"trigger_time":2178648584,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"404","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":39,"hash":"e447671fbb4dd5c3cacb45fbb8920973","trigger_url":"http://local.mailbots.com/api/v1/trigger/e447671fbb4dd5c3cacb45fbb8920973/","created":1547496585,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"84","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":40,"hash":"59be164113ee73d1d2508abe36a52736","trigger_url":"http://local.mailbots.com/api/v1/trigger/59be164113ee73d1d2508abe36a52736/","created":1547496585,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"405","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki"}}})
  .reply(201, {"status":"success","task":{"id":41,"hash":"ad662ef9cd08047c0a7f811778493419","trigger_url":"http://local.mailbots.com/api/v1/trigger/ad662ef9cd08047c0a7f811778493419/","created":1547496585,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"85","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1551',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/39')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/37')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":42,"hash":"02599f5b8c86ea5a7ab34349d3913433","trigger_url":"http://local.mailbots.com/api/v1/trigger/02599f5b8c86ea5a7ab34349d3913433/","created":1547496586,"trigger_time":1547500186,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"406","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":43,"hash":"431a29ab3170dd7098a03cc1b9e0f7a9","trigger_url":"http://local.mailbots.com/api/v1/trigger/431a29ab3170dd7098a03cc1b9e0f7a9/","created":1547496586,"trigger_time":2178648586,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"407","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":44,"hash":"d30f9d786958d0401139476c04f122df","trigger_url":"http://local.mailbots.com/api/v1/trigger/d30f9d786958d0401139476c04f122df/","created":1547496587,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"86","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":45,"hash":"91a4299454b2b71decbc652cdd491351","trigger_url":"http://local.mailbots.com/api/v1/trigger/91a4299454b2b71decbc652cdd491351/","created":1547496587,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"408","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"search":"Space%20Ships%21"})
  .reply(200, {"status":"success","tasks":[{"id":43,"hash":"431a29ab3170dd7098a03cc1b9e0f7a9","trigger_url":"http://local.mailbots.com/api/v1/trigger/431a29ab3170dd7098a03cc1b9e0f7a9/","created":1547496586,"trigger_time":2178648586,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"408","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1501',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/43')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/45')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":46,"hash":"2d38895d58f8f8d58d0f115a244f0ec7","trigger_url":"http://local.mailbots.com/api/v1/trigger/2d38895d58f8f8d58d0f115a244f0ec7/","created":1547496588,"trigger_time":1547500188,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"409","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":47,"hash":"5d9fde2fa64324af1636864cec3099eb","trigger_url":"http://local.mailbots.com/api/v1/trigger/5d9fde2fa64324af1636864cec3099eb/","created":1547496588,"trigger_time":2178648588,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"410","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":48,"hash":"a42ab01d1233e70b3726717d6c0d3c7c","trigger_url":"http://local.mailbots.com/api/v1/trigger/a42ab01d1233e70b3726717d6c0d3c7c/","created":1547496588,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"87","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":49,"hash":"92789151cd61574a4d4d9c6b28b634f5","trigger_url":"http://local.mailbots.com/api/v1/trigger/92789151cd61574a4d4d9c6b28b634f5/","created":1547496589,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"411","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"search":"joe%40example.com"})
  .reply(200, {"status":"success","tasks":[{"id":47,"hash":"5d9fde2fa64324af1636864cec3099eb","trigger_url":"http://local.mailbots.com/api/v1/trigger/5d9fde2fa64324af1636864cec3099eb/","created":1547496588,"trigger_time":2178648588,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"411","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1501',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/46')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/48')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":50,"hash":"8d4b3315e3a54333c2678f86dbb7b699","trigger_url":"http://local.mailbots.com/api/v1/trigger/8d4b3315e3a54333c2678f86dbb7b699/","created":1547496590,"trigger_time":1547500190,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"412","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":51,"hash":"c108d943c75644d6a9a52b2bdcd83485","trigger_url":"http://local.mailbots.com/api/v1/trigger/c108d943c75644d6a9a52b2bdcd83485/","created":1547496590,"trigger_time":2178648590,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"413","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":52,"hash":"4d534cffe0a56fee4ffd27b13a246c24","trigger_url":"http://local.mailbots.com/api/v1/trigger/4d534cffe0a56fee4ffd27b13a246c24/","created":1547496590,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"88","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":53,"hash":"1b2a4505de85a9b0daefe2646a3537f5","trigger_url":"http://local.mailbots.com/api/v1/trigger/1b2a4505de85a9b0daefe2646a3537f5/","created":1547496591,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc"})
  .reply(200, {"status":"success","tasks":[{"id":51,"hash":"c108d943c75644d6a9a52b2bdcd83485","trigger_url":"http://local.mailbots.com/api/v1/trigger/c108d943c75644d6a9a52b2bdcd83485/","created":1547496590,"trigger_time":2178648590,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":50,"hash":"8d4b3315e3a54333c2678f86dbb7b699","trigger_url":"http://local.mailbots.com/api/v1/trigger/8d4b3315e3a54333c2678f86dbb7b699/","created":1547496590,"trigger_time":1547500190,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":53,"hash":"1b2a4505de85a9b0daefe2646a3537f5","trigger_url":"http://local.mailbots.com/api/v1/trigger/1b2a4505de85a9b0daefe2646a3537f5/","created":1547496591,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"414","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:51 GMT',
  'Server',
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
  .delete('/api/v1/tasks/51')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/50')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":54,"hash":"763fbd07328005a60bbd53550f95e71b","trigger_url":"http://local.mailbots.com/api/v1/trigger/763fbd07328005a60bbd53550f95e71b/","created":1547496592,"trigger_time":1547500192,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"415","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":55,"hash":"a4b0bec79abb0022e11960a671ec887e","trigger_url":"http://local.mailbots.com/api/v1/trigger/a4b0bec79abb0022e11960a671ec887e/","created":1547496593,"trigger_time":2178648593,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"416","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":56,"hash":"5da05011f3d021a5b15487220d0ef681","trigger_url":"http://local.mailbots.com/api/v1/trigger/5da05011f3d021a5b15487220d0ef681/","created":1547496593,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"89","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":57,"hash":"d7e4ca1067354900e601df0bcd8dd80a","trigger_url":"http://local.mailbots.com/api/v1/trigger/d7e4ca1067354900e601df0bcd8dd80a/","created":1547496593,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"417","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki Now"},"trigger_timeformat":"1sec"}})
  .reply(201, {"status":"success","task":{"id":58,"hash":"b920a6293c35066bdf1af430b39bbd3b","trigger_url":"http://local.mailbots.com/api/v1/trigger/b920a6293c35066bdf1af430b39bbd3b/","created":1547496594,"trigger_time":1547496595,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki Now","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1583',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"order_by":"due","order_dir":"asc"})
  .reply(200, {"status":"success","tasks":[{"id":58,"hash":"b920a6293c35066bdf1af430b39bbd3b","trigger_url":"http://local.mailbots.com/api/v1/trigger/b920a6293c35066bdf1af430b39bbd3b/","created":1547496594,"trigger_time":1547496595,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki Now","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":54,"hash":"763fbd07328005a60bbd53550f95e71b","trigger_url":"http://local.mailbots.com/api/v1/trigger/763fbd07328005a60bbd53550f95e71b/","created":1547496592,"trigger_time":1547500192,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":56,"hash":"5da05011f3d021a5b15487220d0ef681","trigger_url":"http://local.mailbots.com/api/v1/trigger/5da05011f3d021a5b15487220d0ef681/","created":1547496593,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"89","email_outbound_last_at":null,"task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":55,"hash":"a4b0bec79abb0022e11960a671ec887e","trigger_url":"http://local.mailbots.com/api/v1/trigger/a4b0bec79abb0022e11960a671ec887e/","created":1547496593,"trigger_time":2178648593,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"418","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:54 GMT',
  'Server',
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
  .delete('/api/v1/tasks/58')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/55')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":59,"hash":"a1d3fb000053aa4190cb7a5c3c9ab9d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/a1d3fb000053aa4190cb7a5c3c9ab9d6/","created":1547496595,"trigger_time":1547500196,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"419","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":60,"hash":"8d3359f6c3f7d23c8a7fa66e3baebfaf","trigger_url":"http://local.mailbots.com/api/v1/trigger/8d3359f6c3f7d23c8a7fa66e3baebfaf/","created":1547496596,"trigger_time":2178648596,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"420","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":61,"hash":"0e09cc21b1b4c2d7bf2b934f6fbc4460","trigger_url":"http://local.mailbots.com/api/v1/trigger/0e09cc21b1b4c2d7bf2b934f6fbc4460/","created":1547496596,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"90","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":62,"hash":"0ceea149f55f98b9acf116fee0994189","trigger_url":"http://local.mailbots.com/api/v1/trigger/0ceea149f55f98b9acf116fee0994189/","created":1547496597,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"421","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"due_after":"1862856597","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":60,"hash":"8d3359f6c3f7d23c8a7fa66e3baebfaf","trigger_url":"http://local.mailbots.com/api/v1/trigger/8d3359f6c3f7d23c8a7fa66e3baebfaf/","created":1547496596,"trigger_time":2178648596,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"421","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1501',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/61')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/62')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":63,"hash":"0ceea149f55f98b9acf116fee0994189","trigger_url":"http://local.mailbots.com/api/v1/trigger/0ceea149f55f98b9acf116fee0994189/","created":1547496597,"trigger_time":1547500197,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"422","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":64,"hash":"48f5ff8441a904e85c7248be884c5133","trigger_url":"http://local.mailbots.com/api/v1/trigger/48f5ff8441a904e85c7248be884c5133/","created":1547496598,"trigger_time":2178648598,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"423","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":65,"hash":"5faf387cccd0024e5aadb21d5872a271","trigger_url":"http://local.mailbots.com/api/v1/trigger/5faf387cccd0024e5aadb21d5872a271/","created":1547496598,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"91","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":66,"hash":"99b31612a795c6cd146630ccf78bbd5f","trigger_url":"http://local.mailbots.com/api/v1/trigger/99b31612a795c6cd146630ccf78bbd5f/","created":1547496598,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"424","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Twenty Minutes"},"trigger_timeformat":"20min"}})
  .reply(201, {"status":"success","task":{"id":67,"hash":"28d7163544e38a6c3f20f75207cb8479","trigger_url":"http://local.mailbots.com/api/v1/trigger/28d7163544e38a6c3f20f75207cb8479/","created":1547496599,"trigger_time":1547497799,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"425","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1607',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_before":"1547498399","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":67,"hash":"28d7163544e38a6c3f20f75207cb8479","trigger_url":"http://local.mailbots.com/api/v1/trigger/28d7163544e38a6c3f20f75207cb8479/","created":1547496599,"trigger_time":1547497799,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"425","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"425","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"425","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":66,"hash":"99b31612a795c6cd146630ccf78bbd5f","trigger_url":"http://local.mailbots.com/api/v1/trigger/99b31612a795c6cd146630ccf78bbd5f/","created":1547496598,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"425","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5914',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/64')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/63')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:09:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":68,"hash":"83a61820e3b05c3c7818af3d425bdfd1","trigger_url":"http://local.mailbots.com/api/v1/trigger/83a61820e3b05c3c7818af3d425bdfd1/","created":1547496600,"trigger_time":1547500200,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"426","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":69,"hash":"a5bd5dbeef9d5f403fe213aade478dd5","trigger_url":"http://local.mailbots.com/api/v1/trigger/a5bd5dbeef9d5f403fe213aade478dd5/","created":1547496600,"trigger_time":2178648600,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"427","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":70,"hash":"13e2717f2a81bf30ad2b83eebd8c91f0","trigger_url":"http://local.mailbots.com/api/v1/trigger/13e2717f2a81bf30ad2b83eebd8c91f0/","created":1547496600,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"92","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":71,"hash":"101e75e3126645aae1a9ff9b393dd9f9","trigger_url":"http://local.mailbots.com/api/v1/trigger/101e75e3126645aae1a9ff9b393dd9f9/","created":1547496601,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"428","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"428","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/69')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/68')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":72,"hash":"60853c6f3f6c67c4630178fa52a0cf63","trigger_url":"http://local.mailbots.com/api/v1/trigger/60853c6f3f6c67c4630178fa52a0cf63/","created":1547496602,"trigger_time":1547500202,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"429","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":73,"hash":"8c245d97736a47b9d358f45a98cbb780","trigger_url":"http://local.mailbots.com/api/v1/trigger/8c245d97736a47b9d358f45a98cbb780/","created":1547496602,"trigger_time":2178648602,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"430","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":74,"hash":"a25602d33c51770b73daf6876b2da9d1","trigger_url":"http://local.mailbots.com/api/v1/trigger/a25602d33c51770b73daf6876b2da9d1/","created":1547496603,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"93","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":75,"hash":"c0f9b74d19976e96a7d97083386de112","trigger_url":"http://local.mailbots.com/api/v1/trigger/c0f9b74d19976e96a7d97083386de112/","created":1547496603,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":72,"hash":"60853c6f3f6c67c4630178fa52a0cf63","trigger_url":"http://local.mailbots.com/api/v1/trigger/60853c6f3f6c67c4630178fa52a0cf63/","created":1547496602,"trigger_time":1547500202,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":75,"hash":"c0f9b74d19976e96a7d97083386de112","trigger_url":"http://local.mailbots.com/api/v1/trigger/c0f9b74d19976e96a7d97083386de112/","created":1547496603,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:03 GMT',
  'Server',
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
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":72,"hash":"60853c6f3f6c67c4630178fa52a0cf63","trigger_url":"http://local.mailbots.com/api/v1/trigger/60853c6f3f6c67c4630178fa52a0cf63/","created":1547496602,"trigger_time":1547500202,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":24,"hash":"b0a5e17b56b9831a5be3c9a85d475cbf","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0a5e17b56b9831a5be3c9a85d475cbf/","created":1547496576,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},{"id":75,"hash":"c0f9b74d19976e96a7d97083386de112","trigger_url":"http://local.mailbots.com/api/v1/trigger/c0f9b74d19976e96a7d97083386de112/","created":1547496603,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"431","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:04 GMT',
  'Server',
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
  .delete('/api/v1/tasks/73')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/72')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":76,"hash":"a7cbcb14a9eefda7ff2e41d8d087eeb5","trigger_url":"http://local.mailbots.com/api/v1/trigger/a7cbcb14a9eefda7ff2e41d8d087eeb5/","created":1547496605,"trigger_time":1547500205,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"432","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":77,"hash":"95b3a88105109727efab803a4bbd44b7","trigger_url":"http://local.mailbots.com/api/v1/trigger/95b3a88105109727efab803a4bbd44b7/","created":1547496605,"trigger_time":2178648606,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"433","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":78,"hash":"5c33cfcd43f21a04433e66a8638b3da1","trigger_url":"http://local.mailbots.com/api/v1/trigger/5c33cfcd43f21a04433e66a8638b3da1/","created":1547496606,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"94","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":79,"hash":"e945b630721572756b3870044f3f8ba4","trigger_url":"http://local.mailbots.com/api/v1/trigger/e945b630721572756b3870044f3f8ba4/","created":1547496606,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"434","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","page":"1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"434","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/77')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/79')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":80,"hash":"838abf228d354cb1c6fa36aebdafcc2a","trigger_url":"http://local.mailbots.com/api/v1/trigger/838abf228d354cb1c6fa36aebdafcc2a/","created":1547496607,"trigger_time":1547500208,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"435","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":81,"hash":"60f2d442ec55cb5a76fb84d37b2de6c3","trigger_url":"http://local.mailbots.com/api/v1/trigger/60f2d442ec55cb5a76fb84d37b2de6c3/","created":1547496608,"trigger_time":2178648608,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"436","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":82,"hash":"94ab883c886d17b432e33e713b8f6b5d","trigger_url":"http://local.mailbots.com/api/v1/trigger/94ab883c886d17b432e33e713b8f6b5d/","created":1547496608,"trigger_time":1547560800,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"95","email_outbound_last_at":null,"task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":101,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1593',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":83,"hash":"7597df9765f1e37e8f17c2dd15d1d1bc","trigger_url":"http://local.mailbots.com/api/v1/trigger/7597df9765f1e37e8f17c2dd15d1d1bc/","created":1547496608,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"437","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"47e81c34e00e78e1ad9515df92bb6c65","trigger_url":"http://local.mailbots.com/api/v1/trigger/47e81c34e00e78e1ad9515df92bb6c65/","created":1547496556,"trigger_time":1547500156,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"437","email_outbound_last_at":"2019-01-14 20:09:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"mailbot":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":100,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":""}}}]}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/82')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/80')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Mon, 14 Jan 2019 20:10:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Mon, 14 Jan 2019 20:10:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","user":{"id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false,"email":"esweetland@gmail.com","gopher_dev":true,"user_hash":"315e24c3ce53dc683f5c5cdaa6270964e1c2033c42b5c0b3123f65b4666516e0"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '579',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/extensions/self/data/')
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '150',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extensions/self/data/', {"foo":"bar"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '150',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_0a4b80d547f91b8175c4376c31d74dc4","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/invites/', {"client_id":"ext_0a4b80d547f91b8175c4376c31d74dc4","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=dg4f4eeuhfl6820k5abapo83q1; path=/',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/invites/', {"client_id":"ext_0a4b80d547f91b8175c4376c31d74dc4","email_address":["blackhole@example.com","blackhole2@example.com"]})
  .reply(200, {"status":"success"}, [ 'Date',
  'Mon, 14 Jan 2019 20:10:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=bh9mrgomg7hl6jaej661u1mvi2; path=/',
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
