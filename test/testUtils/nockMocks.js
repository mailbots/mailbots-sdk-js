//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.eml.bot:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');
nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extensions/self/data/', {"three":"more"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:46:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","extension":{"name":"MailBots Admin UI (Reilly Localhost)","subdomain":"local-gopher-admin-ui","stored_data":[],"installed":true,"event_url":"http://local.mailbots.com/api/v1/extension_event/177/cb37ceef9a1982fa/","id":39,"owner":{"email":"esweetland@gmail.com"},"description":"Description","icon":"","autocomplete_examples":"","tags":"","published":false,"devmode":false,"enabled":true,"install_url":"gadmin-react.ngrok.io","settings_url":"gadmin-react.ngrok.io","base_url":"http://127.0.0.1:3000/","developer_name":"","help_url":"","learn_more_url":"","privacy_policy_url":"","oauth2_client_id":"ext_0107e8160247f26a57d89ab5162829b2_","oauth2_scope":"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self","oauth2_redirect_uri":"http://127.0.0.1:3000/auth/callback","oauth2_client_secret":"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63","webhook_url":"http://127.0.0.1:3000/webhooks","webhook_version":1,"metrics":[]}}, [ 'Date',
  'Wed, 12 Dec 2018 00:46:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1050',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extension_event/248/771c82bde8d76624/', {"foo":"bar"})
  .query({"type":"github.issue.opened"})
  .reply(200, {"extension":{"subdomain":"test-extension-1"},"webhook":{"status":"failed","message":null},"status":"success"}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=r3qelgg7v1sbvvjd7j9u3gfb00; path=/',
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
  'Wed, 12 Dec 2018 00:47:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2483","email_outbound_last_at":"2018-12-12 00:39:32","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1594',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Unsuccessful webhook"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":2,"hash":"8ebfe97d3d3c9f04477be9421361edaa","trigger_url":"http://local.mailbots.com/api/v1/trigger/8ebfe97d3d3c9f04477be9421361edaa/","created":1544575624,"trigger_time":1544579224,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful webhook","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2484","email_outbound_last_at":"2018-12-12 00:39:32","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"failed","message":"The extension did not respond."}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1594',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@$wrong.eml.bot","reference_email":{"subject":"Unsuccessful submission"},"trigger_timeformat":"1hour"}})
  .reply(400, {"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '271',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":8,"date":"2018-12-12 00:47:08","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1983',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":8,"date":"2018-12-12 00:47:08","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1983',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed","api"]})
  .reply(200, {"status":"success","logs":[{"id":9,"date":"2018-12-12 00:47:08","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":8,"date":"2018-12-12 00:47:08","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":7,"date":"2018-12-12 00:47:07","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"157","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:07 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"8ebfe97d3d3c9f04477be9421361edaa\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/8ebfe97d3d3c9f04477be9421361edaa\\/\",\"created\":1544575624,\"trigger_time\":1544579224,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2484\",\"email_outbound_last_at\":\"2018-12-12 00:39:32\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"The extension did not respond.\"}}","http_response_statuscode":201},{"id":5,"date":"2018-12-12 00:47:04","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"137","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:04 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"84a3768424ec6f9a840e8af1879387b3\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/84a3768424ec6f9a840e8af1879387b3\\/\",\"created\":1544575623,\"trigger_time\":1544579223,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2483\",\"email_outbound_last_at\":\"2018-12-12 00:39:32\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":4,"date":"2018-12-12 00:47:03","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:03 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":2,"date":"2018-12-12 00:47:00","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:00 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"MailBots Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"gadmin-react.ngrok.io\",\"settings_url\":\"gadmin-react.ngrok.io\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":[]}}","http_response_statuscode":200},{"id":1,"date":"2018-12-12 00:46:59","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:46:59 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:10 GMT',
  'Server',
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
  .reply(200, {"status":"success","logs":[{"id":8,"date":"2018-12-12 00:47:08","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1983',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"since":"1539391632"})
  .reply(200, {"status":"success","logs":[{"id":8,"date":"2018-12-12 00:47:08","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":6,"date":"2018-12-12 00:47:04","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: task.created","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-MailBots-Timestamp":[1544575624],"X-MailBots-Signature":["c4dbc82ff77e5733eb3e3bf0b83f4c250081d447b61bb639afa0ec622b00652e"],"User-Agent":["MailBots (http://www.mailbots.com)"],"Content-Type":["application/json"],"Content-Length":[2248]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"example@test-extension-1.eml.bot\",\"from\":\"esweetland@gmail.com\",\"method\":\"bcc\",\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"headers\":{\"to\":\"example@test-extension-1.eml.bot\",\"cc\":null,\"bcc\":null,\"subject\":\"Unsuccessful webhook\",\"from\":\"esweetland@gmail.com\"}},\"command\":{\"format\":\"example\",\"full_address\":\"example@test-extension-1.eml.bot\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"},\"task\":{\"created\":1544575624,\"completed\":false,\"completed_on\":\"\",\"hash\":\"8ebfe97d3d3c9f04477be9421361edaa\",\"id\":2,\"trigger_time\":1544579224,\"trigger_timeformat\":\"1hour\",\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":3,"date":"2018-12-12 00:47:00","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: extension.event_received","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-MailBots-Timestamp":[1544575620],"X-MailBots-Signature":["22110b620e30a79612f3c2473f2119f69d8f0549e41f5c2bdd7d0d81755d7706"],"User-Agent":["MailBots (http://www.mailbots.com)"],"Content-Type":["application/json"],"Content-Length":[1814]},"http_request_body":"{\"payload\":{\"type\":\"github.issue.opened\",\"uri\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/?type=github.issue.opened\",\"headers\":{\"accept\":\"application\\/json, text\\/plain, *\\/*\",\"content-type\":\"application\\/json; charset=UTF-8\",\"user-agent\":\"axios\\/0.17.1\",\"content-length\":\"13\",\"host\":\"local.mailbots.com\",\"connection\":\"close\",\"x-php-ob-level\":\"1\"},\"method\":\"POST\",\"body_text\":\"{\\\"foo\\\":\\\"bar\\\"}\",\"body_json\":{\"foo\":\"bar\"}},\"event\":\"extension.event_received\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:11 GMT',
  'Server',
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
  .reply(200, {"status":"success","logs":[{"id":9,"date":"2018-12-12 00:47:08","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":8,"date":"2018-12-12 00:47:08","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"example@$wrong.eml.bot\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"example@$wrong.eml.bot"},"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"135","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:08 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This MailBots Command (example@$wrong.eml.bot) doesn\\u0027t exist or hasn\\u0027t been installed. Are you sure that\\u0027s the right address?\",\"format\":\"example@$wrong.eml.bot\"}","http_response_statuscode":400},{"id":7,"date":"2018-12-12 00:47:07","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"157","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:07 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"8ebfe97d3d3c9f04477be9421361edaa\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/8ebfe97d3d3c9f04477be9421361edaa\\/\",\"created\":1544575624,\"trigger_time\":1544579224,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2484\",\"email_outbound_last_at\":\"2018-12-12 00:39:32\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"failed\",\"message\":\"The extension did not respond.\"}}","http_response_statuscode":201},{"id":6,"date":"2018-12-12 00:47:04","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":2,"userId":2,"event":"webhook failed: task.created","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-MailBots-Timestamp":[1544575624],"X-MailBots-Signature":["c4dbc82ff77e5733eb3e3bf0b83f4c250081d447b61bb639afa0ec622b00652e"],"User-Agent":["MailBots (http://www.mailbots.com)"],"Content-Type":["application/json"],"Content-Length":[2248]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"example@test-extension-1.eml.bot\",\"from\":\"esweetland@gmail.com\",\"method\":\"bcc\",\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"headers\":{\"to\":\"example@test-extension-1.eml.bot\",\"cc\":null,\"bcc\":null,\"subject\":\"Unsuccessful webhook\",\"from\":\"esweetland@gmail.com\"}},\"command\":{\"format\":\"example\",\"full_address\":\"example@test-extension-1.eml.bot\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"},\"task\":{\"created\":1544575624,\"completed\":false,\"completed_on\":\"\",\"hash\":\"8ebfe97d3d3c9f04477be9421361edaa\",\"id\":2,\"trigger_time\":1544579224,\"trigger_timeformat\":\"1hour\",\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":5,"date":"2018-12-12 00:47:04","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"137","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:04 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"84a3768424ec6f9a840e8af1879387b3\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/84a3768424ec6f9a840e8af1879387b3\\/\",\"created\":1544575623,\"trigger_time\":1544579223,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2483\",\"email_outbound_last_at\":\"2018-12-12 00:39:32\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":4,"date":"2018-12-12 00:47:03","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:03 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":3,"date":"2018-12-12 00:47:00","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: extension.event_received","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-MailBots-Timestamp":[1544575620],"X-MailBots-Signature":["22110b620e30a79612f3c2473f2119f69d8f0549e41f5c2bdd7d0d81755d7706"],"User-Agent":["MailBots (http://www.mailbots.com)"],"Content-Type":["application/json"],"Content-Length":[1814]},"http_request_body":"{\"payload\":{\"type\":\"github.issue.opened\",\"uri\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/?type=github.issue.opened\",\"headers\":{\"accept\":\"application\\/json, text\\/plain, *\\/*\",\"content-type\":\"application\\/json; charset=UTF-8\",\"user-agent\":\"axios\\/0.17.1\",\"content-length\":\"13\",\"host\":\"local.mailbots.com\",\"connection\":\"close\",\"x-php-ob-level\":\"1\"},\"method\":\"POST\",\"body_text\":\"{\\\"foo\\\":\\\"bar\\\"}\",\"body_json\":{\"foo\":\"bar\"}},\"event\":\"extension.event_received\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":2,"date":"2018-12-12 00:47:00","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:47:00 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"MailBots Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"gadmin-react.ngrok.io\",\"settings_url\":\"gadmin-react.ngrok.io\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":[]}}","http_response_statuscode":200},{"id":1,"date":"2018-12-12 00:46:59","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 00:46:59 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:12 GMT',
  'Server',
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
  'Wed, 12 Dec 2018 00:47:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":3,"hash":"99f9b6c1d2bfa05c290965cff4dfb28a","trigger_url":"http://local.mailbots.com/api/v1/trigger/99f9b6c1d2bfa05c290965cff4dfb28a/","created":1544575633,"trigger_time":1544579233,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2485","email_outbound_last_at":"2018-12-12 00:39:32","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":"15min","reference_email":{"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":4,"hash":"102fa88cb77df0df3e0eac6e119c8f5d","trigger_url":"http://local.mailbots.com/api/v1/trigger/102fa88cb77df0df3e0eac6e119c8f5d/","created":1544575633,"trigger_time":1544576534,"trigger_timeformat":"15min","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2486","email_outbound_last_at":"2018-12-12 00:39:32","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/3')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/4')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":5,"hash":"9586026ebc86187585eebdd807a7ba60","trigger_url":"http://local.mailbots.com/api/v1/trigger/9586026ebc86187585eebdd807a7ba60/","created":1544575634,"trigger_time":1544579234,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2487","email_outbound_last_at":"2018-12-12 00:39:32","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":1,"suppress_webhook":true,"task":{"command":"test@test-extension-1.eml.bot","reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"test@example.com","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"},"trigger_time":1520319928,"trigger_timeformat":"3days","completed":false},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":6,"hash":"f41465eae32e91a73b7fa21c9778632f","trigger_url":"http://local.mailbots.com/api/v1/trigger/f41465eae32e91a73b7fa21c9778632f/","created":1544575634,"trigger_time":1544834834,"trigger_timeformat":"3days","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2488","email_outbound_last_at":"2018-12-12 00:47:15","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <gopher@eml.bot>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23901&hash=5e326764d3c86131d81dd16ccddde181\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:14 GMT',
  'Server',
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
  .delete('/api/v1/tasks/5')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/6')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":7,"hash":"ce5ce5ba85e93eac0b452794c37e8d99","trigger_url":"http://local.mailbots.com/api/v1/trigger/ce5ce5ba85e93eac0b452794c37e8d99/","created":1544575635,"trigger_time":1544579235,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2489","email_outbound_last_at":"2018-12-12 00:47:15","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":"<h1>This is a test</h1>"}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":8,"hash":"0840969761c67118085da4f3c2e7307c","trigger_url":"http://local.mailbots.com/api/v1/trigger/0840969761c67118085da4f3c2e7307c/","created":1544575636,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1544575636,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"<h1>This is a test</h1>","text":" This is a test ","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2490","email_outbound_last_at":"2018-12-12 00:47:16","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <gopher@eml.bot>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23902&hash=75bd9ebfa50d92ee033a02ef154d183d\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:15 GMT',
  'Server',
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
  .delete('/api/v1/tasks/8')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/7')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":9,"hash":"e0e53248f7b328ab74abcdd36165dbf1","trigger_url":"http://local.mailbots.com/api/v1/trigger/e0e53248f7b328ab74abcdd36165dbf1/","created":1544575637,"trigger_time":1544579237,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2491","email_outbound_last_at":"2018-12-12 00:47:16","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":""}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":10,"hash":"7f91b0e99166d1e4540237eb77fdf8e0","trigger_url":"http://local.mailbots.com/api/v1/trigger/7f91b0e99166d1e4540237eb77fdf8e0/","created":1544575637,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1544575637,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2492","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"MailBots <gopher@eml.bot>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23903&hash=3aa6830516d983eeb378e5c08ec418f1\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:17 GMT',
  'Server',
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
  .delete('/api/v1/tasks/10')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/9')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":11,"hash":"6adbef85f048cfd6b44d366daed6c6f4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6adbef85f048cfd6b44d366daed6c6f4/","created":1544575638,"trigger_time":1544579238,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2493","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/')
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2493","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":11,"hash":"6adbef85f048cfd6b44d366daed6c6f4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6adbef85f048cfd6b44d366daed6c6f4/","created":1544575638,"trigger_time":1544579238,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2493","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2975',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/11')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":12,"hash":"cc740f62565c075ee0958d912fca5ae9","trigger_url":"http://local.mailbots.com/api/v1/trigger/cc740f62565c075ee0958d912fca5ae9/","created":1544575639,"trigger_time":1544579239,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2494","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2494","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1505',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/12')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":13,"hash":"891380b883df1224fe0ce4060ffc9cbc","trigger_url":"http://local.mailbots.com/api/v1/trigger/891380b883df1224fe0ce4060ffc9cbc/","created":1544575640,"trigger_time":1544579240,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2495","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2495","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1505',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/13')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":14,"hash":"6b2bc378fdbc75f8d548d2194e12340d","trigger_url":"http://local.mailbots.com/api/v1/trigger/6b2bc378fdbc75f8d548d2194e12340d/","created":1544575641,"trigger_time":1544579241,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2496","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/14/')
  .reply(200, {"status":"success","task":{"id":14,"hash":"6b2bc378fdbc75f8d548d2194e12340d","trigger_url":"http://local.mailbots.com/api/v1/trigger/6b2bc378fdbc75f8d548d2194e12340d/","created":1544575641,"trigger_time":1544579241,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2496","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/14')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":15,"hash":"01c6f379e89640f2595f182900afeb42","trigger_url":"http://local.mailbots.com/api/v1/trigger/01c6f379e89640f2595f182900afeb42/","created":1544575642,"trigger_time":1544579242,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2497","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/15/', {"suppress_webhook":true,"task":{"id":15,"reference_email":{"html":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":15,"hash":"01c6f379e89640f2595f182900afeb42","trigger_url":"http://local.mailbots.com/api/v1/trigger/01c6f379e89640f2595f182900afeb42/","created":1544575642,"trigger_time":1544579242,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"something else new","text":"something else new","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2497","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1547',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/15')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":16,"hash":"79cf2930d13a190eb74150eba1a78fdc","trigger_url":"http://local.mailbots.com/api/v1/trigger/79cf2930d13a190eb74150eba1a78fdc/","created":1544575643,"trigger_time":1544579243,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2498","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/16/', {"suppress_webhook":true,"task":{"id":16,"trigger_timeformat":"1day"}})
  .reply(200, {"status":"success","task":{"id":16,"hash":"79cf2930d13a190eb74150eba1a78fdc","trigger_url":"http://local.mailbots.com/api/v1/trigger/79cf2930d13a190eb74150eba1a78fdc/","created":1544575643,"trigger_time":1544662043,"trigger_timeformat":"1day","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2498","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1510',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/16')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":17,"hash":"79cf2930d13a190eb74150eba1a78fdc","trigger_url":"http://local.mailbots.com/api/v1/trigger/79cf2930d13a190eb74150eba1a78fdc/","created":1544575643,"trigger_time":1544579244,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2499","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/17/', {"task":{"id":17,"trigger_timeformat":"invalid_jibberish"}})
  .reply(400, {"status":"error","type":"invalid_format","message":"An invalid date was provided in trigger_timeformat."}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":18,"hash":"46331f834d75fc968769b6f64ca8296a","trigger_url":"http://local.mailbots.com/api/v1/trigger/46331f834d75fc968769b6f64ca8296a/","created":1544575644,"trigger_time":1544579244,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2500","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"status":"success","valid":true,"time":"2018-12-12 16:47:24 PST","time_gmt":"2018-12-13 00:47:24","time_ts":"1544662044","recurring":false}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":19,"hash":"719e29d6bc8cb448e5ccec5d8664ac30","trigger_url":"http://local.mailbots.com/api/v1/trigger/719e29d6bc8cb448e5ccec5d8664ac30/","created":1544575645,"trigger_time":1544579245,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2501","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":"1sec","reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":20,"hash":"c7ca0150afdc9c15e783fed944472e4d","trigger_url":"http://local.mailbots.com/api/v1/trigger/c7ca0150afdc9c15e783fed944472e4d/","created":1544575645,"trigger_time":1544575646,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2502","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/20')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":21,"hash":"610b1b24a72eb172645b1eb98f188f40","trigger_url":"http://local.mailbots.com/api/v1/trigger/610b1b24a72eb172645b1eb98f188f40/","created":1544575646,"trigger_time":1544579246,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2503","email_outbound_last_at":"2018-12-12 00:47:17","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"suppress_webhook":true,"verbose":1,"task":{"command":"test@test-extension-1.eml.bot"},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":22,"hash":"5059f8a6f045b4adcef881b436205428","trigger_url":"http://local.mailbots.com/api/v1/trigger/5059f8a6f045b4adcef881b436205428/","created":1544575646,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2504","email_outbound_last_at":"2018-12-12 00:47:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"MailBots <gopher@eml.bot>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.mailbots.com\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+mailbots@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23904&hash=ba3d79591ed546f503b1183ac68738e2\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:26 GMT',
  'Server',
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
  'Wed, 12 Dec 2018 00:47:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":23,"hash":"6353828c78808c7b728739ce424bb70a","trigger_url":"http://local.mailbots.com/api/v1/trigger/6353828c78808c7b728739ce424bb70a/","created":1544575647,"trigger_time":1544579247,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2505","email_outbound_last_at":"2018-12-12 00:47:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"test@test-extension-1.eml.bot","reference_email":{"server_recipient":"test@test-extension-1.eml.bot"}},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .reply(201, {"status":"success","task":{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2506","email_outbound_last_at":"2018-12-12 00:47:26","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1563',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/')
  .reply(200, {"status":"success","task":{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2506","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"webhook":{"status":"failed","message":"The extension did not respond."}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1544',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/23')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":25,"hash":"cc4ac2fa5155298d768c702ee1d8af22","trigger_url":"http://local.mailbots.com/api/v1/trigger/cc4ac2fa5155298d768c702ee1d8af22/","created":1544575651,"trigger_time":1544579251,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2507","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/25', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":25,"hash":"cc4ac2fa5155298d768c702ee1d8af22","trigger_url":"http://local.mailbots.com/api/v1/trigger/cc4ac2fa5155298d768c702ee1d8af22/","created":1544575651,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544575652,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2507","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1510',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/25/')
  .reply(200, {"status":"success","task":{"id":25,"hash":"cc4ac2fa5155298d768c702ee1d8af22","trigger_url":"http://local.mailbots.com/api/v1/trigger/cc4ac2fa5155298d768c702ee1d8af22/","created":1544575651,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544575652,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2507","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1574',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/25')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":26,"hash":"8a5bab3ed2c76e5ee83e96b25231ff40","trigger_url":"http://local.mailbots.com/api/v1/trigger/8a5bab3ed2c76e5ee83e96b25231ff40/","created":1544575652,"trigger_time":1544579252,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2508","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/26', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":26,"hash":"8a5bab3ed2c76e5ee83e96b25231ff40","trigger_url":"http://local.mailbots.com/api/v1/trigger/8a5bab3ed2c76e5ee83e96b25231ff40/","created":1544575652,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544575653,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2508","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1510',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Subject%201","status":"completed"})
  .reply(200, {"status":"success","tasks":[{"id":26,"hash":"8a5bab3ed2c76e5ee83e96b25231ff40","trigger_url":"http://local.mailbots.com/api/v1/trigger/8a5bab3ed2c76e5ee83e96b25231ff40/","created":1544575652,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544575653,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2508","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1499',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/26')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":27,"hash":"bd42f32e88e383f42611f077a67b5ce1","trigger_url":"http://local.mailbots.com/api/v1/trigger/bd42f32e88e383f42611f077a67b5ce1/","created":1544575653,"trigger_time":1544579253,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2509","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":28,"hash":"f8b9ac73df149d1030df5b7077335e20","trigger_url":"http://local.mailbots.com/api/v1/trigger/f8b9ac73df149d1030df5b7077335e20/","created":1544575654,"trigger_time":1544579255,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2510","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":29,"hash":"d8be618ef0613bd284c5eec43af91c00","trigger_url":"http://local.mailbots.com/api/v1/trigger/d8be618ef0613bd284c5eec43af91c00/","created":1544575655,"trigger_time":2175727655,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2511","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":30,"hash":"684a29520282dc4607f4198d13383f60","trigger_url":"http://local.mailbots.com/api/v1/trigger/684a29520282dc4607f4198d13383f60/","created":1544575655,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"580","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":31,"hash":"2045b4827a64324a739f72e8f42b46ee","trigger_url":"http://local.mailbots.com/api/v1/trigger/2045b4827a64324a739f72e8f42b46ee/","created":1544575656,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2512","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","search":"Subject"})
  .reply(200, {"status":"success","tasks":[{"id":28,"hash":"f8b9ac73df149d1030df5b7077335e20","trigger_url":"http://local.mailbots.com/api/v1/trigger/f8b9ac73df149d1030df5b7077335e20/","created":1544575654,"trigger_time":1544579255,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2512","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1500',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/30')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":32,"hash":"2045b4827a64324a739f72e8f42b46ee","trigger_url":"http://local.mailbots.com/api/v1/trigger/2045b4827a64324a739f72e8f42b46ee/","created":1544575656,"trigger_time":1544579256,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2513","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":33,"hash":"fb6046a54d2d4ad265b0d8915b0a06f8","trigger_url":"http://local.mailbots.com/api/v1/trigger/fb6046a54d2d4ad265b0d8915b0a06f8/","created":1544575657,"trigger_time":2175727657,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2514","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":34,"hash":"8945145cd53ceccf9a78ff1a0bc7f02a","trigger_url":"http://local.mailbots.com/api/v1/trigger/8945145cd53ceccf9a78ff1a0bc7f02a/","created":1544575657,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"581","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":35,"hash":"f70185b1f451c14133a5570497383f54","trigger_url":"http://local.mailbots.com/api/v1/trigger/f70185b1f451c14133a5570497383f54/","created":1544575658,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2515","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"to":"Joe<joe@example.com>","subject":"Hi Joe"}}})
  .reply(201, {"status":"success","task":{"id":36,"hash":"c0de4031ae44b311286e22c0f94513a0","trigger_url":"http://local.mailbots.com/api/v1/trigger/c0de4031ae44b311286e22c0f94513a0/","created":1544575658,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Hi Joe","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"582","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1546',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/32')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":37,"hash":"1d6b068d9db07463910398e106853442","trigger_url":"http://local.mailbots.com/api/v1/trigger/1d6b068d9db07463910398e106853442/","created":1544575659,"trigger_time":1544579259,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2516","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":38,"hash":"22228fd5616ec21c8e11bb26f48c2509","trigger_url":"http://local.mailbots.com/api/v1/trigger/22228fd5616ec21c8e11bb26f48c2509/","created":1544575659,"trigger_time":2175727660,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2517","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":39,"hash":"c15959d0326403ce20fd921f868f3e1e","trigger_url":"http://local.mailbots.com/api/v1/trigger/c15959d0326403ce20fd921f868f3e1e/","created":1544575660,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"583","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":40,"hash":"e9fce46c15818e476a3a91eb87ed46ee","trigger_url":"http://local.mailbots.com/api/v1/trigger/e9fce46c15818e476a3a91eb87ed46ee/","created":1544575662,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2518","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki"}}})
  .reply(201, {"status":"success","task":{"id":41,"hash":"8a97afa0007af1a55e3a88e6fd4436e5","trigger_url":"http://local.mailbots.com/api/v1/trigger/8a97afa0007af1a55e3a88e6fd4436e5/","created":1544575662,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"584","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1544',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/39')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":42,"hash":"461c32213fd7c644d9e5c87b65065541","trigger_url":"http://local.mailbots.com/api/v1/trigger/461c32213fd7c644d9e5c87b65065541/","created":1544575664,"trigger_time":1544579265,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2519","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":43,"hash":"7ae448e81e3be946c5c667197ce35c55","trigger_url":"http://local.mailbots.com/api/v1/trigger/7ae448e81e3be946c5c667197ce35c55/","created":1544575665,"trigger_time":2175727666,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2520","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":44,"hash":"4d41469c9af7afefea2c8b40c4dd5d5a","trigger_url":"http://local.mailbots.com/api/v1/trigger/4d41469c9af7afefea2c8b40c4dd5d5a/","created":1544575666,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"585","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":45,"hash":"5d5fac04bcbe6170273e6d97241cbff2","trigger_url":"http://local.mailbots.com/api/v1/trigger/5d5fac04bcbe6170273e6d97241cbff2/","created":1544575667,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2521","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"search":"Space%20Ships%21"})
  .reply(200, {"status":"success","tasks":[{"id":43,"hash":"7ae448e81e3be946c5c667197ce35c55","trigger_url":"http://local.mailbots.com/api/v1/trigger/7ae448e81e3be946c5c667197ce35c55/","created":1544575665,"trigger_time":2175727666,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2521","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1483',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/45')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":46,"hash":"4c29d40436e447cb59f4610637c9221f","trigger_url":"http://local.mailbots.com/api/v1/trigger/4c29d40436e447cb59f4610637c9221f/","created":1544575668,"trigger_time":1544579268,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2522","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":47,"hash":"3ce1bee7d71348339a9f03ea2a31fdd8","trigger_url":"http://local.mailbots.com/api/v1/trigger/3ce1bee7d71348339a9f03ea2a31fdd8/","created":1544575669,"trigger_time":2175727669,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2523","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":48,"hash":"fe4c71ce3d451185550d61ae4ffa726b","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe4c71ce3d451185550d61ae4ffa726b/","created":1544575670,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"586","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":49,"hash":"d6e4cf9157165c2a686f9fdd3cf43a74","trigger_url":"http://local.mailbots.com/api/v1/trigger/d6e4cf9157165c2a686f9fdd3cf43a74/","created":1544575670,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2524","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"search":"joe%40example.com"})
  .reply(200, {"status":"success","tasks":[{"id":47,"hash":"3ce1bee7d71348339a9f03ea2a31fdd8","trigger_url":"http://local.mailbots.com/api/v1/trigger/3ce1bee7d71348339a9f03ea2a31fdd8/","created":1544575669,"trigger_time":2175727669,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2524","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1483',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/47')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":50,"hash":"71d7a65500087c582cd0f9dd0c250607","trigger_url":"http://local.mailbots.com/api/v1/trigger/71d7a65500087c582cd0f9dd0c250607/","created":1544575671,"trigger_time":1544579272,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2525","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":51,"hash":"6ede024af7f3c63f75f7daae48792e4f","trigger_url":"http://local.mailbots.com/api/v1/trigger/6ede024af7f3c63f75f7daae48792e4f/","created":1544575672,"trigger_time":2175727672,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2526","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":52,"hash":"e268755f52dcf917fe15c8f2e68cf725","trigger_url":"http://local.mailbots.com/api/v1/trigger/e268755f52dcf917fe15c8f2e68cf725/","created":1544575673,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"587","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":53,"hash":"7aa83177cc1620264bf47aa022baf797","trigger_url":"http://local.mailbots.com/api/v1/trigger/7aa83177cc1620264bf47aa022baf797/","created":1544575673,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2527","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc"})
  .reply(200, {"status":"success","tasks":[{"id":51,"hash":"6ede024af7f3c63f75f7daae48792e4f","trigger_url":"http://local.mailbots.com/api/v1/trigger/6ede024af7f3c63f75f7daae48792e4f/","created":1544575672,"trigger_time":2175727672,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2527","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":50,"hash":"71d7a65500087c582cd0f9dd0c250607","trigger_url":"http://local.mailbots.com/api/v1/trigger/71d7a65500087c582cd0f9dd0c250607/","created":1544575671,"trigger_time":1544579272,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2527","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2527","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2527","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":53,"hash":"7aa83177cc1620264bf47aa022baf797","trigger_url":"http://local.mailbots.com/api/v1/trigger/7aa83177cc1620264bf47aa022baf797/","created":1544575673,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2527","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '7341',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/52')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":54,"hash":"2aea9d7b1c4c2ba1feb184e7f256c61f","trigger_url":"http://local.mailbots.com/api/v1/trigger/2aea9d7b1c4c2ba1feb184e7f256c61f/","created":1544575675,"trigger_time":1544579275,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2528","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":55,"hash":"200bf2c46e0786ea04bf62b62c455336","trigger_url":"http://local.mailbots.com/api/v1/trigger/200bf2c46e0786ea04bf62b62c455336/","created":1544575676,"trigger_time":2175727676,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2529","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":56,"hash":"77f6395a448cd9b1cbcab0219991578c","trigger_url":"http://local.mailbots.com/api/v1/trigger/77f6395a448cd9b1cbcab0219991578c/","created":1544575676,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"588","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":57,"hash":"19ebbc49fb5f36fe178a27016635c586","trigger_url":"http://local.mailbots.com/api/v1/trigger/19ebbc49fb5f36fe178a27016635c586/","created":1544575676,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2530","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2530","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":54,"hash":"2aea9d7b1c4c2ba1feb184e7f256c61f","trigger_url":"http://local.mailbots.com/api/v1/trigger/2aea9d7b1c4c2ba1feb184e7f256c61f/","created":1544575675,"trigger_time":1544579275,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2530","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":55,"hash":"200bf2c46e0786ea04bf62b62c455336","trigger_url":"http://local.mailbots.com/api/v1/trigger/200bf2c46e0786ea04bf62b62c455336/","created":1544575676,"trigger_time":2175727676,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2530","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2530","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":57,"hash":"19ebbc49fb5f36fe178a27016635c586","trigger_url":"http://local.mailbots.com/api/v1/trigger/19ebbc49fb5f36fe178a27016635c586/","created":1544575676,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2530","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '7341',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/55')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:47:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:47:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":58,"hash":"8ce0181f12238401e2dbfcc20823e4cf","trigger_url":"http://local.mailbots.com/api/v1/trigger/8ce0181f12238401e2dbfcc20823e4cf/","created":1544575678,"trigger_time":1544579278,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2531","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":59,"hash":"aea8e9be2164e4b8f44921250b0e8cf7","trigger_url":"http://local.mailbots.com/api/v1/trigger/aea8e9be2164e4b8f44921250b0e8cf7/","created":1544575678,"trigger_time":2175727679,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2532","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":60,"hash":"5a28d61536a24ab9c912292bbb357f7b","trigger_url":"http://local.mailbots.com/api/v1/trigger/5a28d61536a24ab9c912292bbb357f7b/","created":1544575679,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"589","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":61,"hash":"632a55d94d2eeb118dcc0eecd766651d","trigger_url":"http://local.mailbots.com/api/v1/trigger/632a55d94d2eeb118dcc0eecd766651d/","created":1544575679,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2533","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:47:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"due_after":"1859935680","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":59,"hash":"aea8e9be2164e4b8f44921250b0e8cf7","trigger_url":"http://local.mailbots.com/api/v1/trigger/aea8e9be2164e4b8f44921250b0e8cf7/","created":1544575678,"trigger_time":2175727679,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2533","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1483',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/59')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:48:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":62,"hash":"5f3dc85283c2cb0ea4a68aa448734fed","trigger_url":"http://local.mailbots.com/api/v1/trigger/5f3dc85283c2cb0ea4a68aa448734fed/","created":1544575681,"trigger_time":1544579281,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2534","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":63,"hash":"06e3583b839d997b8a7f4cd4a37d0080","trigger_url":"http://local.mailbots.com/api/v1/trigger/06e3583b839d997b8a7f4cd4a37d0080/","created":1544575682,"trigger_time":2175727682,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2535","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":64,"hash":"a9a65e2cad0bd2382a8e35b40b412a79","trigger_url":"http://local.mailbots.com/api/v1/trigger/a9a65e2cad0bd2382a8e35b40b412a79/","created":1544575682,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"590","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":65,"hash":"14389d954097e3b7c800c3367af69921","trigger_url":"http://local.mailbots.com/api/v1/trigger/14389d954097e3b7c800c3367af69921/","created":1544575683,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2536","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Twenty Minutes"},"trigger_timeformat":"20min"}})
  .reply(201, {"status":"success","task":{"id":66,"hash":"14389d954097e3b7c800c3367af69921","trigger_url":"http://local.mailbots.com/api/v1/trigger/14389d954097e3b7c800c3367af69921/","created":1544575683,"trigger_time":1544576883,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2537","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1594',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_before":"1544577483","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":66,"hash":"14389d954097e3b7c800c3367af69921","trigger_url":"http://local.mailbots.com/api/v1/trigger/14389d954097e3b7c800c3367af69921/","created":1544575683,"trigger_time":1544576883,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2537","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2537","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":65,"hash":"14389d954097e3b7c800c3367af69921","trigger_url":"http://local.mailbots.com/api/v1/trigger/14389d954097e3b7c800c3367af69921/","created":1544575683,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2537","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '4418',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/65')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:48:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":67,"hash":"9c2c930f1bc34761d29055af6cadc3aa","trigger_url":"http://local.mailbots.com/api/v1/trigger/9c2c930f1bc34761d29055af6cadc3aa/","created":1544575685,"trigger_time":1544579285,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2538","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":68,"hash":"fc8c9a7bd32b1fdcd17e89f28df2fa13","trigger_url":"http://local.mailbots.com/api/v1/trigger/fc8c9a7bd32b1fdcd17e89f28df2fa13/","created":1544575686,"trigger_time":2175727686,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2539","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":69,"hash":"9ec97ae77e8c252cb3d4c8a07bbc9c66","trigger_url":"http://local.mailbots.com/api/v1/trigger/9ec97ae77e8c252cb3d4c8a07bbc9c66/","created":1544575686,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"591","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":70,"hash":"bccd5027393b6e56e6d52d36a9476ae2","trigger_url":"http://local.mailbots.com/api/v1/trigger/bccd5027393b6e56e6d52d36a9476ae2/","created":1544575687,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2540","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2540","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1505',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/69')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:48:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":71,"hash":"844a7892f17d2e537b0575ba7bbddf88","trigger_url":"http://local.mailbots.com/api/v1/trigger/844a7892f17d2e537b0575ba7bbddf88/","created":1544575690,"trigger_time":1544579290,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2541","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":72,"hash":"37b4af52cbf84f9418801424a7e89e06","trigger_url":"http://local.mailbots.com/api/v1/trigger/37b4af52cbf84f9418801424a7e89e06/","created":1544575690,"trigger_time":2175727691,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2542","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":73,"hash":"2a11b2c43f300aa90d1af8739f0bcab4","trigger_url":"http://local.mailbots.com/api/v1/trigger/2a11b2c43f300aa90d1af8739f0bcab4/","created":1544575691,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"592","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":74,"hash":"17a77503f590a778a1eeafaca1537049","trigger_url":"http://local.mailbots.com/api/v1/trigger/17a77503f590a778a1eeafaca1537049/","created":1544575692,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":71,"hash":"844a7892f17d2e537b0575ba7bbddf88","trigger_url":"http://local.mailbots.com/api/v1/trigger/844a7892f17d2e537b0575ba7bbddf88/","created":1544575690,"trigger_time":1544579290,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":74,"hash":"17a77503f590a778a1eeafaca1537049","trigger_url":"http://local.mailbots.com/api/v1/trigger/17a77503f590a778a1eeafaca1537049/","created":1544575692,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5888',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":71,"hash":"844a7892f17d2e537b0575ba7bbddf88","trigger_url":"http://local.mailbots.com/api/v1/trigger/844a7892f17d2e537b0575ba7bbddf88/","created":1544575690,"trigger_time":1544579290,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":24,"hash":"172b045b81dcbb97bfab6888b649be8d","trigger_url":"http://local.mailbots.com/api/v1/trigger/172b045b81dcbb97bfab6888b649be8d/","created":1544575647,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":74,"hash":"17a77503f590a778a1eeafaca1537049","trigger_url":"http://local.mailbots.com/api/v1/trigger/17a77503f590a778a1eeafaca1537049/","created":1544575692,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2543","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5888',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/73')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:48:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":75,"hash":"7817d5cacdcf287dfab40d9e5942a700","trigger_url":"http://local.mailbots.com/api/v1/trigger/7817d5cacdcf287dfab40d9e5942a700/","created":1544575694,"trigger_time":1544579294,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2544","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":76,"hash":"f38dd9aca6c041f24e250586163b5e57","trigger_url":"http://local.mailbots.com/api/v1/trigger/f38dd9aca6c041f24e250586163b5e57/","created":1544575695,"trigger_time":2175727695,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2545","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":77,"hash":"f7ab53bbb398a74c71fd5e2a293a6dd6","trigger_url":"http://local.mailbots.com/api/v1/trigger/f7ab53bbb398a74c71fd5e2a293a6dd6/","created":1544575695,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"593","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":78,"hash":"53a5cc3f0cdb2b762e6b565358fe29d3","trigger_url":"http://local.mailbots.com/api/v1/trigger/53a5cc3f0cdb2b762e6b565358fe29d3/","created":1544575696,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2546","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","page":"1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":75,"hash":"7817d5cacdcf287dfab40d9e5942a700","trigger_url":"http://local.mailbots.com/api/v1/trigger/7817d5cacdcf287dfab40d9e5942a700/","created":1544575694,"trigger_time":1544579294,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2546","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1500',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/75')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:48:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":79,"hash":"642b648548c37ccd4773aed60b3bf06d","trigger_url":"http://local.mailbots.com/api/v1/trigger/642b648548c37ccd4773aed60b3bf06d/","created":1544575698,"trigger_time":1544579298,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2547","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1589',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":80,"hash":"311063c3d8160416391e8daa0db464d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/311063c3d8160416391e8daa0db464d6/","created":1544575699,"trigger_time":2175727699,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2548","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1572',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":81,"hash":"5ccc473b6681e3c7c7d67772b3dcc1c0","trigger_url":"http://local.mailbots.com/api/v1/trigger/5ccc473b6681e3c7c7d67772b3dcc1c0/","created":1544575699,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"594","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":82,"hash":"6028b7453cf40e7a4c081c0a716496d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/6028b7453cf40e7a4c081c0a716496d6/","created":1544575700,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2549","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":1,"hash":"84a3768424ec6f9a840e8af1879387b3","trigger_url":"http://local.mailbots.com/api/v1/trigger/84a3768424ec6f9a840e8af1879387b3/","created":1544575623,"trigger_time":1544579223,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2549","email_outbound_last_at":"2018-12-12 00:47:31","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1505',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/81')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 00:48:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 00:48:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/invites/', {"client_id":"ext_8a02ef3d58948ab52ed1958c53a6efff","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/invites/', {"client_id":"ext_8a02ef3d58948ab52ed1958c53a6efff","email_address":"test@example.com"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=ofv66vcq1r9d83rgp753c7vh34; path=/',
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
  .post('/api/v1/invites/', {"client_id":"ext_8a02ef3d58948ab52ed1958c53a6efff","email_address":["blackhole@example.com","blackhole2@example.com"]})
  .reply(200, {"status":"success"}, [ 'Date',
  'Wed, 12 Dec 2018 00:48:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=3645fm5ataqj9e3stbg1jgr3l5; path=/',
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
