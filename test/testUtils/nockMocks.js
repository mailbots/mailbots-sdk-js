//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.mailbots.com:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');
nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extensions/self/data/', {"three":"more"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","extension":{"name":"Gopher Admin UI (Reilly Localhost)","subdomain":"local-gopher-admin-ui","stored_data":[],"installed":true,"event_url":"http://local.mailbots.com/api/v1/extension_event/177/cb37ceef9a1982fa/","id":39,"owner":{"email":"esweetland@gmail.com"},"description":"Description","icon":"","autocomplete_examples":"","tags":"","published":false,"devmode":false,"enabled":true,"install_url":"gadmin-react.ngrok.io","settings_url":"gadmin-react.ngrok.io","base_url":"http://127.0.0.1:3000/","developer_name":"","help_url":"","learn_more_url":"","privacy_policy_url":"","oauth2_client_id":"ext_0107e8160247f26a57d89ab5162829b2_","oauth2_scope":"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self","oauth2_redirect_uri":"http://127.0.0.1:3000/auth/callback","oauth2_client_secret":"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63","webhook_url":"http://127.0.0.1:3000/webhooks","webhook_version":1,"metrics":[]}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 20:02:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=jeh47adms8fba1ngu5dhb29jc0; path=/',
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
  'Wed, 12 Dec 2018 20:02:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 07:00:42","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1457',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Unsuccessful webhook"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":3,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful webhook","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 07:00:42","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1384',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"example@$wrong.eml.bot","reference_email":{"subject":"Unsuccessful submission"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":4,"hash":"a2dd8dc261d6882f457361a73861b7ee","trigger_url":"http://local.mailbots.com/api/v1/trigger/a2dd8dc261d6882f457361a73861b7ee/","created":1544644946,"trigger_time":1544648546,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":[],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful submission","html":"","text":"","attachments":[]},"command":"example@$wrong.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 07:00:42","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1421',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"num":"1"})
  .reply(200, {"status":"success","logs":[{"id":6,"date":"2018-12-12 20:02:21","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: extension.event_received","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-Gopher-Timestamp":[1544644941],"X-Gopher-Signature":["df462f55cebd9d4d8d3e09e68ff4b176246614ebc8aef06f50e1752fa88a9d50"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1814]},"http_request_body":"{\"payload\":{\"type\":\"github.issue.opened\",\"uri\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/?type=github.issue.opened\",\"headers\":{\"accept\":\"application\\/json, text\\/plain, *\\/*\",\"content-type\":\"application\\/json; charset=UTF-8\",\"user-agent\":\"axios\\/0.17.1\",\"content-length\":\"13\",\"host\":\"local.mailbots.com\",\"connection\":\"close\",\"x-php-ob-level\":\"1\"},\"method\":\"POST\",\"body_text\":\"{\\\"foo\\\":\\\"bar\\\"}\",\"body_json\":{\"foo\":\"bar\"}},\"event\":\"extension.event_received\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '3625',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":10,"date":"2018-12-12 20:02:26","type":"submit_failed","level":"info","extension":"","extension_ownerid":2,"taskId":4,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:26 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":4,\"hash\":\"a2dd8dc261d6882f457361a73861b7ee\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a2dd8dc261d6882f457361a73861b7ee\\/\",\"created\":1544644946,\"trigger_time\":1544648546,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful submission\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@$wrong.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["submit_failed","api"]})
  .reply(200, {"status":"success","logs":[{"id":10,"date":"2018-12-12 20:02:26","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":4,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:26 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":4,\"hash\":\"a2dd8dc261d6882f457361a73861b7ee\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a2dd8dc261d6882f457361a73861b7ee\\/\",\"created\":1544644946,\"trigger_time\":1544648546,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful submission\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@$wrong.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":9,"date":"2018-12-12 20:02:26","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":3,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"152","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":3,\"hash\":\"6f842f966a58bb23e666f8bc720c46a4\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/6f842f966a58bb23e666f8bc720c46a4\\/\",\"created\":1544644945,\"trigger_time\":1544648545,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[]}","http_response_statuscode":201},{"id":8,"date":"2018-12-12 20:02:25","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"132","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"6f842f966a58bb23e666f8bc720c46a4\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/6f842f966a58bb23e666f8bc720c46a4\\/\",\"created\":1544644945,\"trigger_time\":1544648545,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":7,"date":"2018-12-12 20:02:25","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":5,"date":"2018-12-12 20:02:21","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:21 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"gadmin-react.ngrok.io\",\"settings_url\":\"gadmin-react.ngrok.io\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":[]}}","http_response_statuscode":200},{"id":4,"date":"2018-12-12 20:02:21","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:21 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":3,"date":"2018-12-12 20:02:07","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/1?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/1?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:07 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2,"date":"2018-12-12 20:02:07","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: GET /api/v1/tasks/1/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/1/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:07 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"a964e9349fc251a67a832fbdc931d647\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a964e9349fc251a67a832fbdc931d647\\/\",\"created\":1544644926,\"trigger_time\":1544648526,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":200},{"id":1,"date":"2018-12-12 20:02:06","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:06 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"a964e9349fc251a67a832fbdc931d647\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a964e9349fc251a67a832fbdc931d647\\/\",\"created\":1544644926,\"trigger_time\":1544648526,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:28 GMT',
  'Server',
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
  .reply(200, {"status":"success","logs":[{"id":6,"date":"2018-12-12 20:02:21","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: extension.event_received","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-Gopher-Timestamp":[1544644941],"X-Gopher-Signature":["df462f55cebd9d4d8d3e09e68ff4b176246614ebc8aef06f50e1752fa88a9d50"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1814]},"http_request_body":"{\"payload\":{\"type\":\"github.issue.opened\",\"uri\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/?type=github.issue.opened\",\"headers\":{\"accept\":\"application\\/json, text\\/plain, *\\/*\",\"content-type\":\"application\\/json; charset=UTF-8\",\"user-agent\":\"axios\\/0.17.1\",\"content-length\":\"13\",\"host\":\"local.mailbots.com\",\"connection\":\"close\",\"x-php-ob-level\":\"1\"},\"method\":\"POST\",\"body_text\":\"{\\\"foo\\\":\\\"bar\\\"}\",\"body_json\":{\"foo\":\"bar\"}},\"event\":\"extension.event_received\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:29 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '3625',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"since":"1539460950"})
  .reply(200, {"status":"success","logs":[{"id":6,"date":"2018-12-12 20:02:21","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: extension.event_received","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-Gopher-Timestamp":[1544644941],"X-Gopher-Signature":["df462f55cebd9d4d8d3e09e68ff4b176246614ebc8aef06f50e1752fa88a9d50"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1814]},"http_request_body":"{\"payload\":{\"type\":\"github.issue.opened\",\"uri\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/?type=github.issue.opened\",\"headers\":{\"accept\":\"application\\/json, text\\/plain, *\\/*\",\"content-type\":\"application\\/json; charset=UTF-8\",\"user-agent\":\"axios\\/0.17.1\",\"content-length\":\"13\",\"host\":\"local.mailbots.com\",\"connection\":\"close\",\"x-php-ob-level\":\"1\"},\"method\":\"POST\",\"body_text\":\"{\\\"foo\\\":\\\"bar\\\"}\",\"body_json\":{\"foo\":\"bar\"}},\"event\":\"extension.event_received\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:30 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '3625',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/logs')
  .query({"type":["api","webhook","submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":10,"date":"2018-12-12 20:02:26","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":4,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"130","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@$wrong.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful submission\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:26 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":4,\"hash\":\"a2dd8dc261d6882f457361a73861b7ee\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a2dd8dc261d6882f457361a73861b7ee\\/\",\"created\":1544644946,\"trigger_time\":1544648546,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful submission\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@$wrong.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":9,"date":"2018-12-12 20:02:26","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":3,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"152","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Unsuccessful webhook\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":3,\"hash\":\"6f842f966a58bb23e666f8bc720c46a4\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/6f842f966a58bb23e666f8bc720c46a4\\/\",\"created\":1544644945,\"trigger_time\":1544648545,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Unsuccessful webhook\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[]}","http_response_statuscode":201},{"id":8,"date":"2018-12-12 20:02:25","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":2,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"132","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Successful task\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":2,\"hash\":\"6f842f966a58bb23e666f8bc720c46a4\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/6f842f966a58bb23e666f8bc720c46a4\\/\",\"created\":1544644945,\"trigger_time\":1544648545,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Successful task\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":7,"date":"2018-12-12 20:02:25","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:25 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":6,"date":"2018-12-12 20:02:21","type":"webhook","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook failed: extension.event_received","details":"","data":[],"http_request_url":"http://localhost:3012/webhooks","http_request_method":"POST","http_request_headers":{"Host":["localhost:3012"],"X-Gopher-Timestamp":[1544644941],"X-Gopher-Signature":["df462f55cebd9d4d8d3e09e68ff4b176246614ebc8aef06f50e1752fa88a9d50"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1814]},"http_request_body":"{\"payload\":{\"type\":\"github.issue.opened\",\"uri\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/?type=github.issue.opened\",\"headers\":{\"accept\":\"application\\/json, text\\/plain, *\\/*\",\"content-type\":\"application\\/json; charset=UTF-8\",\"user-agent\":\"axios\\/0.17.1\",\"content-length\":\"13\",\"host\":\"local.mailbots.com\",\"connection\":\"close\",\"x-php-ob-level\":\"1\"},\"method\":\"POST\",\"body_text\":\"{\\\"foo\\\":\\\"bar\\\"}\",\"body_json\":{\"foo\":\"bar\"}},\"event\":\"extension.event_received\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/248\\/771c82bde8d76624\\/\",\"id\":117,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/localhost:3012\\/auth\\/login\",\"settings_url\":\"\",\"base_url\":\"http:\\/\\/localhost:3012\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/localhost:3012\\/auth\\/callback\"}}","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":5,"date":"2018-12-12 20:02:21","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:21 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"gadmin-react.ngrok.io\",\"settings_url\":\"gadmin-react.ngrok.io\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":[]}}","http_response_statuscode":200},{"id":4,"date":"2018-12-12 20:02:21","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:21 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":3,"date":"2018-12-12 20:02:07","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/1?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/1?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:07 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":2,"date":"2018-12-12 20:02:07","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: GET /api/v1/tasks/1/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/1/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:07 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"a964e9349fc251a67a832fbdc931d647\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a964e9349fc251a67a832fbdc931d647\\/\",\"created\":1544644926,\"trigger_time\":1544648526,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":200},{"id":1,"date":"2018-12-12 20:02:06","type":"api","level":"info","extension":"","extension_ownerid":2,"taskId":1,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"150","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.eml.bot\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Wed, 12 Dec 2018 20:02:06 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":1,\"hash\":\"a964e9349fc251a67a832fbdc931d647\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a964e9349fc251a67a832fbdc931d647\\/\",\"created\":1544644926,\"trigger_time\":1544648526,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.eml.bot\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.eml.bot\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":null,\"email_outbound_last_at\":\"2018-12-12 07:00:42\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Gopher for Chrome\",\"subdomain\":\"\",\"stored_data\":[],\"id\":30,\"icon\":\"\",\"description\":\"Gopher for Chrome\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:31 GMT',
  'Server',
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
  .delete('/api/v1/tasks/3')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":5,"hash":"eabc338aad836ca6e8aa2a3c09e52473","trigger_url":"http://local.mailbots.com/api/v1/trigger/eabc338aad836ca6e8aa2a3c09e52473/","created":1544644952,"trigger_time":1544648552,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 07:00:42","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":"15min","reference_email":{"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":6,"hash":"9ab113566eadb895f57cb52991af3ae8","trigger_url":"http://local.mailbots.com/api/v1/trigger/9ab113566eadb895f57cb52991af3ae8/","created":1544644952,"trigger_time":1544645852,"trigger_timeformat":"15min","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 07:00:42","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1472',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/6')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":7,"hash":"57d75de9bebefa2f1bad334f03c2b0c6","trigger_url":"http://local.mailbots.com/api/v1/trigger/57d75de9bebefa2f1bad334f03c2b0c6/","created":1544644953,"trigger_time":1544648553,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 07:00:42","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"suppress_webhook":true,"task":{"command":"test@test-extension-1.eml.bot","reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"test@example.com","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"},"trigger_time":1520319928,"trigger_timeformat":"3days","completed":false},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":8,"hash":"9650a6f0738808129718d348cdec92a7","trigger_url":"http://local.mailbots.com/api/v1/trigger/9650a6f0738808129718d348cdec92a7/","created":1544644954,"trigger_time":1544904154,"trigger_timeformat":"3days","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:34","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"Gopher <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23925&hash=394579beccf5f254910cec2305be59ea\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:33 GMT',
  'Server',
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
  'Wed, 12 Dec 2018 20:02:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":9,"hash":"00379da498fd40e167ea7071402345d5","trigger_url":"http://local.mailbots.com/api/v1/trigger/00379da498fd40e167ea7071402345d5/","created":1544644955,"trigger_time":1544648555,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:34","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":"<h1>This is a test</h1>"}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":10,"hash":"3256a2d48ce72cc5ec77492112023fb5","trigger_url":"http://local.mailbots.com/api/v1/trigger/3256a2d48ce72cc5ec77492112023fb5/","created":1544644955,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1544644955,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"<h1>This is a test</h1>","text":" This is a test ","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:35","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"Gopher <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23926&hash=c0d942719bcc095e86574f0f0d525671\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:35 GMT',
  'Server',
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
  'Wed, 12 Dec 2018 20:02:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":11,"hash":"01d4e66387afb9208328d43798b31a90","trigger_url":"http://local.mailbots.com/api/v1/trigger/01d4e66387afb9208328d43798b31a90/","created":1544644956,"trigger_time":1544648557,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:35","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":""}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":12,"hash":"01a85e7c19eb0caa88d683835b48fef2","trigger_url":"http://local.mailbots.com/api/v1/trigger/01a85e7c19eb0caa88d683835b48fef2/","created":1544644957,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1544644957,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"Gopher <help@mailbots.com>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23927&hash=6c09f1f73ee68499452151c4caab84be\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:37 GMT',
  'Server',
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
  .delete('/api/v1/tasks/12')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .delete('/api/v1/tasks/11')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":13,"hash":"5c6959d24e976659d9d919734cede69b","trigger_url":"http://local.mailbots.com/api/v1/trigger/5c6959d24e976659d9d919734cede69b/","created":1544644958,"trigger_time":1544648558,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/')
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":4,"hash":"a2dd8dc261d6882f457361a73861b7ee","trigger_url":"http://local.mailbots.com/api/v1/trigger/a2dd8dc261d6882f457361a73861b7ee/","created":1544644946,"trigger_time":1544648546,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":[],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Unsuccessful submission","html":"","text":"","attachments":[]},"command":"example@$wrong.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":13,"hash":"5c6959d24e976659d9d919734cede69b","trigger_url":"http://local.mailbots.com/api/v1/trigger/5c6959d24e976659d9d919734cede69b/","created":1544644958,"trigger_time":1544648558,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '4003',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/13')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":14,"hash":"5145f597d29d8f0d012cc9825e8fb57d","trigger_url":"http://local.mailbots.com/api/v1/trigger/5145f597d29d8f0d012cc9825e8fb57d/","created":1544644959,"trigger_time":1544648559,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1368',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/14')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":15,"hash":"c2a707c8fff9a8ce6576214a416b2f55","trigger_url":"http://local.mailbots.com/api/v1/trigger/c2a707c8fff9a8ce6576214a416b2f55/","created":1544644960,"trigger_time":1544648560,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1368',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/15')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":16,"hash":"7d8064f454e01b44a71ca277d5d0189f","trigger_url":"http://local.mailbots.com/api/v1/trigger/7d8064f454e01b44a71ca277d5d0189f/","created":1544644961,"trigger_time":1544648561,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/16/')
  .reply(200, {"status":"success","task":{"id":16,"hash":"7d8064f454e01b44a71ca277d5d0189f","trigger_url":"http://local.mailbots.com/api/v1/trigger/7d8064f454e01b44a71ca277d5d0189f/","created":1544644961,"trigger_time":1544648561,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1438',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/16')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":17,"hash":"10f6b15a5a8040cbf75d9619f4a92c39","trigger_url":"http://local.mailbots.com/api/v1/trigger/10f6b15a5a8040cbf75d9619f4a92c39/","created":1544644963,"trigger_time":1544648563,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/17/', {"suppress_webhook":true,"task":{"id":17,"reference_email":{"html":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":17,"hash":"10f6b15a5a8040cbf75d9619f4a92c39","trigger_url":"http://local.mailbots.com/api/v1/trigger/10f6b15a5a8040cbf75d9619f4a92c39/","created":1544644963,"trigger_time":1544648563,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"something else new","text":"something else new","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1410',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/17')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":18,"hash":"2e0e782470b381bb3015718ab6506cdc","trigger_url":"http://local.mailbots.com/api/v1/trigger/2e0e782470b381bb3015718ab6506cdc/","created":1544644964,"trigger_time":1544648564,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/18/', {"suppress_webhook":true,"task":{"id":18,"trigger_timeformat":"1day"}})
  .reply(200, {"status":"success","task":{"id":18,"hash":"2e0e782470b381bb3015718ab6506cdc","trigger_url":"http://local.mailbots.com/api/v1/trigger/2e0e782470b381bb3015718ab6506cdc/","created":1544644964,"trigger_time":1544731364,"trigger_timeformat":"1day","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1373',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/18')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":19,"hash":"5c85467c695e68bf117002578023060b","trigger_url":"http://local.mailbots.com/api/v1/trigger/5c85467c695e68bf117002578023060b/","created":1544644965,"trigger_time":1544648565,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/19/', {"task":{"id":19,"trigger_timeformat":"invalid_jibberish"}})
  .reply(400, {"status":"error","type":"invalid_format","message":"An invalid date was provided in trigger_timeformat."}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/19')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":20,"hash":"c9de30a5f200a99c8a9995036d8adac5","trigger_url":"http://local.mailbots.com/api/v1/trigger/c9de30a5f200a99c8a9995036d8adac5/","created":1544644966,"trigger_time":1544648566,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/natural_time')
  .query({"format":"1day","method":"bcc","timezone":"America%2FLos_Angeles"})
  .reply(200, {"status":"success","valid":true,"time":"2018-12-13 12:02:46 PST","time_gmt":"2018-12-13 20:02:46","time_ts":"1544731366","recurring":false}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/20')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":21,"hash":"b960ee98d91f77e172774a462f3860af","trigger_url":"http://local.mailbots.com/api/v1/trigger/b960ee98d91f77e172774a462f3860af/","created":1544644967,"trigger_time":1544648567,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"verbose":1,"task":{"command":"test@test-extension-1.eml.bot","trigger_timeformat":"1sec","reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":22,"hash":"eae9dd07782d266a163df8850d505cb9","trigger_url":"http://local.mailbots.com/api/v1/trigger/eae9dd07782d266a163df8850d505cb9/","created":1544644967,"trigger_time":1544644969,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1472',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/21')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":23,"hash":"f4e9a6a208ff8cd047d579f92945b072","trigger_url":"http://local.mailbots.com/api/v1/trigger/f4e9a6a208ff8cd047d579f92945b072/","created":1544644968,"trigger_time":1544648568,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:37","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks', {"suppress_webhook":true,"verbose":1,"task":{"command":"test@test-extension-1.eml.bot"},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":24,"hash":"7c6028b17ac0f910da075f21d8d881b2","trigger_url":"http://local.mailbots.com/api/v1/trigger/7c6028b17ac0f910da075f21d8d881b2/","created":1544644969,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:49","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"Gopher <help@mailbots.com>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23928&hash=8e819e40c434a07eb2606d8a6587bb86\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:49 GMT',
  'Server',
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
  .delete('/api/v1/tasks/23')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .delete('/api/v1/tasks/24')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":25,"hash":"831132d8968f3b50be87080d2fe56b0b","trigger_url":"http://local.mailbots.com/api/v1/trigger/831132d8968f3b50be87080d2fe56b0b/","created":1544644970,"trigger_time":1544648570,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:49","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"test@test-extension-1.eml.bot","reference_email":{"server_recipient":"test@test-extension-1.eml.bot"}},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .reply(201, {"status":"success","task":{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:49","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1426',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/')
  .reply(200, {"status":"success","task":{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1334',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/25')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":27,"hash":"37ea3ff09f255e0f328d61952c482ebf","trigger_url":"http://local.mailbots.com/api/v1/trigger/37ea3ff09f255e0f328d61952c482ebf/","created":1544644971,"trigger_time":1544648572,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/27', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":27,"hash":"37ea3ff09f255e0f328d61952c482ebf","trigger_url":"http://local.mailbots.com/api/v1/trigger/37ea3ff09f255e0f328d61952c482ebf/","created":1544644971,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544644972,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1373',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/27/')
  .reply(200, {"status":"success","task":{"id":27,"hash":"37ea3ff09f255e0f328d61952c482ebf","trigger_url":"http://local.mailbots.com/api/v1/trigger/37ea3ff09f255e0f328d61952c482ebf/","created":1544644971,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544644972,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1437',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/27')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":28,"hash":"024af19628107fbcc20c3d32caf30597","trigger_url":"http://local.mailbots.com/api/v1/trigger/024af19628107fbcc20c3d32caf30597/","created":1544644973,"trigger_time":1544648573,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .put('/api/v1/tasks/28', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":28,"hash":"024af19628107fbcc20c3d32caf30597","trigger_url":"http://local.mailbots.com/api/v1/trigger/024af19628107fbcc20c3d32caf30597/","created":1544644973,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544644973,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1373',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Subject%201","status":"completed"})
  .reply(200, {"status":"success","tasks":[{"id":28,"hash":"024af19628107fbcc20c3d32caf30597","trigger_url":"http://local.mailbots.com/api/v1/trigger/024af19628107fbcc20c3d32caf30597/","created":1544644973,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544644973,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1362',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/28')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":29,"hash":"94061aac5552feecccae20e88912e12e","trigger_url":"http://local.mailbots.com/api/v1/trigger/94061aac5552feecccae20e88912e12e/","created":1544644974,"trigger_time":1544648575,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/29')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .get('/api/v1/tasks/29/')
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/29')
  .query({"permanent":"1"})
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(201, {"status":"success","task":{"id":30,"hash":"949b42104cff7d7466430adfd27f3c2b","trigger_url":"http://local.mailbots.com/api/v1/trigger/949b42104cff7d7466430adfd27f3c2b/","created":1544644976,"trigger_time":1544648576,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":31,"hash":"950569ba5b569e7ecee5223457a708b4","trigger_url":"http://local.mailbots.com/api/v1/trigger/950569ba5b569e7ecee5223457a708b4/","created":1544644976,"trigger_time":2175796976,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":32,"hash":"bf7abf470e6d3ff8190c9dce157bc2a7","trigger_url":"http://local.mailbots.com/api/v1/trigger/bf7abf470e6d3ff8190c9dce157bc2a7/","created":1544644976,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":33,"hash":"dca1f37af5a37d9aceaaafbb9659865e","trigger_url":"http://local.mailbots.com/api/v1/trigger/dca1f37af5a37d9aceaaafbb9659865e/","created":1544644977,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","search":"Subject"})
  .reply(200, {"status":"success","tasks":[{"id":30,"hash":"949b42104cff7d7466430adfd27f3c2b","trigger_url":"http://local.mailbots.com/api/v1/trigger/949b42104cff7d7466430adfd27f3c2b/","created":1544644976,"trigger_time":1544648576,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1363',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/33')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:02:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:02:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":34,"hash":"0157595ba142df742c01afe540fb26d7","trigger_url":"http://local.mailbots.com/api/v1/trigger/0157595ba142df742c01afe540fb26d7/","created":1544644978,"trigger_time":1544648578,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":35,"hash":"59de2c0659a3c7612e7409d1f7d083c4","trigger_url":"http://local.mailbots.com/api/v1/trigger/59de2c0659a3c7612e7409d1f7d083c4/","created":1544644979,"trigger_time":2175796979,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":36,"hash":"12cd291c7b0fc0395ee06e76ed5403ed","trigger_url":"http://local.mailbots.com/api/v1/trigger/12cd291c7b0fc0395ee06e76ed5403ed/","created":1544644979,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:02:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":37,"hash":"fa2008a982f2ccdf207d79f2cab05b58","trigger_url":"http://local.mailbots.com/api/v1/trigger/fa2008a982f2ccdf207d79f2cab05b58/","created":1544644980,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"to":"Joe<joe@example.com>","subject":"Hi Joe"}}})
  .reply(201, {"status":"success","task":{"id":38,"hash":"f1038105fb762e4decedeae15cc3541c","trigger_url":"http://local.mailbots.com/api/v1/trigger/f1038105fb762e4decedeae15cc3541c/","created":1544644980,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Hi Joe","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1421',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/34')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":39,"hash":"0255439a5da83ce44a9f83e62d4f28d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/0255439a5da83ce44a9f83e62d4f28d6/","created":1544644981,"trigger_time":1544648582,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":40,"hash":"3bebf65163ba3f4feacaec8e64f62b66","trigger_url":"http://local.mailbots.com/api/v1/trigger/3bebf65163ba3f4feacaec8e64f62b66/","created":1544644982,"trigger_time":2175796982,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":41,"hash":"14302d939dea955b29ffd55efe50ce64","trigger_url":"http://local.mailbots.com/api/v1/trigger/14302d939dea955b29ffd55efe50ce64/","created":1544644982,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":42,"hash":"feb2396b6f009f95149009d5e6759277","trigger_url":"http://local.mailbots.com/api/v1/trigger/feb2396b6f009f95149009d5e6759277/","created":1544644983,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"to":"joe@example.com","subject":"Zuki"}}})
  .reply(201, {"status":"success","task":{"id":43,"hash":"99415b0317fb16b60d59d78febe5d4de","trigger_url":"http://local.mailbots.com/api/v1/trigger/99415b0317fb16b60d59d78febe5d4de/","created":1544644983,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1419',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/41')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":44,"hash":"5586882d1a4b6525f52fe6da6975fa43","trigger_url":"http://local.mailbots.com/api/v1/trigger/5586882d1a4b6525f52fe6da6975fa43/","created":1544644984,"trigger_time":1544648584,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":45,"hash":"97276b90f10cfe7c35b796e8f6b8f0f2","trigger_url":"http://local.mailbots.com/api/v1/trigger/97276b90f10cfe7c35b796e8f6b8f0f2/","created":1544644985,"trigger_time":2175796985,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":46,"hash":"11f0f5bcbd4f0011c5f9643f486114b0","trigger_url":"http://local.mailbots.com/api/v1/trigger/11f0f5bcbd4f0011c5f9643f486114b0/","created":1544644985,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":47,"hash":"83b67e30c72ef9a310ca903b49ba2abc","trigger_url":"http://local.mailbots.com/api/v1/trigger/83b67e30c72ef9a310ca903b49ba2abc/","created":1544644986,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Space%20Ships%21"})
  .reply(200, {"status":"success","tasks":[{"id":45,"hash":"97276b90f10cfe7c35b796e8f6b8f0f2","trigger_url":"http://local.mailbots.com/api/v1/trigger/97276b90f10cfe7c35b796e8f6b8f0f2/","created":1544644985,"trigger_time":2175796985,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1351',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/44')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":48,"hash":"caec4649e1ee94314d7119bac810469c","trigger_url":"http://local.mailbots.com/api/v1/trigger/caec4649e1ee94314d7119bac810469c/","created":1544644987,"trigger_time":1544648587,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":49,"hash":"f7b88466073c99061474d02f57b713b9","trigger_url":"http://local.mailbots.com/api/v1/trigger/f7b88466073c99061474d02f57b713b9/","created":1544644988,"trigger_time":2175796988,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":50,"hash":"a80e5aca6abe07cb44750767f3fda256","trigger_url":"http://local.mailbots.com/api/v1/trigger/a80e5aca6abe07cb44750767f3fda256/","created":1544644988,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":51,"hash":"a4cba41ba25990d77ad68cf39512b3f6","trigger_url":"http://local.mailbots.com/api/v1/trigger/a4cba41ba25990d77ad68cf39512b3f6/","created":1544644989,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"joe%40example.com"})
  .reply(200, {"status":"success","tasks":[{"id":49,"hash":"f7b88466073c99061474d02f57b713b9","trigger_url":"http://local.mailbots.com/api/v1/trigger/f7b88466073c99061474d02f57b713b9/","created":1544644988,"trigger_time":2175796988,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1351',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/48')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":52,"hash":"3c99f1329ab3955c9064c04c7b55c8fe","trigger_url":"http://local.mailbots.com/api/v1/trigger/3c99f1329ab3955c9064c04c7b55c8fe/","created":1544644990,"trigger_time":1544648591,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":53,"hash":"374c9e6ffb8322befd30016c53ace5e8","trigger_url":"http://local.mailbots.com/api/v1/trigger/374c9e6ffb8322befd30016c53ace5e8/","created":1544644991,"trigger_time":2175796991,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":54,"hash":"2fad916547302c601f813b6fd2b79bca","trigger_url":"http://local.mailbots.com/api/v1/trigger/2fad916547302c601f813b6fd2b79bca/","created":1544644991,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":55,"hash":"f72ca2cfacb48b4974d39eb7ca30a826","trigger_url":"http://local.mailbots.com/api/v1/trigger/f72ca2cfacb48b4974d39eb7ca30a826/","created":1544644992,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc"})
  .reply(200, {"status":"success","tasks":[{"id":53,"hash":"374c9e6ffb8322befd30016c53ace5e8","trigger_url":"http://local.mailbots.com/api/v1/trigger/374c9e6ffb8322befd30016c53ace5e8/","created":1544644991,"trigger_time":2175796991,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":52,"hash":"3c99f1329ab3955c9064c04c7b55c8fe","trigger_url":"http://local.mailbots.com/api/v1/trigger/3c99f1329ab3955c9064c04c7b55c8fe/","created":1544644990,"trigger_time":1544648591,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":55,"hash":"f72ca2cfacb48b4974d39eb7ca30a826","trigger_url":"http://local.mailbots.com/api/v1/trigger/f72ca2cfacb48b4974d39eb7ca30a826/","created":1544644992,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '6661',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/53')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":56,"hash":"1ec56a0dde79573e5aad9ff4d1c58566","trigger_url":"http://local.mailbots.com/api/v1/trigger/1ec56a0dde79573e5aad9ff4d1c58566/","created":1544644993,"trigger_time":1544648593,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":57,"hash":"06634a63a6e2652202a430d10b6937e6","trigger_url":"http://local.mailbots.com/api/v1/trigger/06634a63a6e2652202a430d10b6937e6/","created":1544644994,"trigger_time":2175796994,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":58,"hash":"308804b36e51cfbc7003ef1cc86e06e4","trigger_url":"http://local.mailbots.com/api/v1/trigger/308804b36e51cfbc7003ef1cc86e06e4/","created":1544644994,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":59,"hash":"01a6966ee516493deebebfcfc7de7a7a","trigger_url":"http://local.mailbots.com/api/v1/trigger/01a6966ee516493deebebfcfc7de7a7a/","created":1544644995,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc"})
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":56,"hash":"1ec56a0dde79573e5aad9ff4d1c58566","trigger_url":"http://local.mailbots.com/api/v1/trigger/1ec56a0dde79573e5aad9ff4d1c58566/","created":1544644993,"trigger_time":1544648593,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":57,"hash":"06634a63a6e2652202a430d10b6937e6","trigger_url":"http://local.mailbots.com/api/v1/trigger/06634a63a6e2652202a430d10b6937e6/","created":1544644994,"trigger_time":2175796994,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":59,"hash":"01a6966ee516493deebebfcfc7de7a7a","trigger_url":"http://local.mailbots.com/api/v1/trigger/01a6966ee516493deebebfcfc7de7a7a/","created":1544644995,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '6661',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/58')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":60,"hash":"cc9da72a65b26080888b7165cde3dc4c","trigger_url":"http://local.mailbots.com/api/v1/trigger/cc9da72a65b26080888b7165cde3dc4c/","created":1544644996,"trigger_time":1544648597,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":61,"hash":"2ba8a23360d2cab2b11de8b60ced3d9c","trigger_url":"http://local.mailbots.com/api/v1/trigger/2ba8a23360d2cab2b11de8b60ced3d9c/","created":1544644998,"trigger_time":2175796998,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":62,"hash":"0a105bc03c5cda792ab956c2e58ec8f4","trigger_url":"http://local.mailbots.com/api/v1/trigger/0a105bc03c5cda792ab956c2e58ec8f4/","created":1544644999,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":63,"hash":"b0aa7a5595f0529f5010c7e34d4377d9","trigger_url":"http://local.mailbots.com/api/v1/trigger/b0aa7a5595f0529f5010c7e34d4377d9/","created":1544644999,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_after":"1860005000","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":61,"hash":"2ba8a23360d2cab2b11de8b60ced3d9c","trigger_url":"http://local.mailbots.com/api/v1/trigger/2ba8a23360d2cab2b11de8b60ced3d9c/","created":1544644998,"trigger_time":2175796998,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1351',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/63')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":64,"hash":"a137560e3c1803a0a7601766687febdd","trigger_url":"http://local.mailbots.com/api/v1/trigger/a137560e3c1803a0a7601766687febdd/","created":1544645001,"trigger_time":1544648601,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":65,"hash":"db0ed389521344e28ef380fc7967a36f","trigger_url":"http://local.mailbots.com/api/v1/trigger/db0ed389521344e28ef380fc7967a36f/","created":1544645001,"trigger_time":2175797001,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":66,"hash":"9726ad446e1cc4baced86c4061dd7273","trigger_url":"http://local.mailbots.com/api/v1/trigger/9726ad446e1cc4baced86c4061dd7273/","created":1544645002,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":67,"hash":"c236113ded29f6a58b8369e76e15ce9d","trigger_url":"http://local.mailbots.com/api/v1/trigger/c236113ded29f6a58b8369e76e15ce9d/","created":1544645003,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Twenty Minutes"},"trigger_timeformat":"20min"}})
  .reply(201, {"status":"success","task":{"id":68,"hash":"c236113ded29f6a58b8369e76e15ce9d","trigger_url":"http://local.mailbots.com/api/v1/trigger/c236113ded29f6a58b8369e76e15ce9d/","created":1544645003,"trigger_time":1544646203,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"6","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1457',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_before":"1544646803","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":68,"hash":"c236113ded29f6a58b8369e76e15ce9d","trigger_url":"http://local.mailbots.com/api/v1/trigger/c236113ded29f6a58b8369e76e15ce9d/","created":1544645003,"trigger_time":1544646203,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"6","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"6","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":67,"hash":"c236113ded29f6a58b8369e76e15ce9d","trigger_url":"http://local.mailbots.com/api/v1/trigger/c236113ded29f6a58b8369e76e15ce9d/","created":1544645003,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"6","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '4007',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/65')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":69,"hash":"61afa45469a92abb4f941ac4558b108a","trigger_url":"http://local.mailbots.com/api/v1/trigger/61afa45469a92abb4f941ac4558b108a/","created":1544645005,"trigger_time":1544648605,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":70,"hash":"76c48876e80e76b3310574f545e484f2","trigger_url":"http://local.mailbots.com/api/v1/trigger/76c48876e80e76b3310574f545e484f2/","created":1544645005,"trigger_time":2175797006,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":71,"hash":"0cee0d0036a59676735cf182369702f8","trigger_url":"http://local.mailbots.com/api/v1/trigger/0cee0d0036a59676735cf182369702f8/","created":1544645006,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":72,"hash":"a9e07e265c95949dc071caef60ad4100","trigger_url":"http://local.mailbots.com/api/v1/trigger/a9e07e265c95949dc071caef60ad4100/","created":1544645006,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1368',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/70')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:28 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":73,"hash":"f422cd5bcf048efefa22aeaa0f0283e4","trigger_url":"http://local.mailbots.com/api/v1/trigger/f422cd5bcf048efefa22aeaa0f0283e4/","created":1544645009,"trigger_time":1544648609,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:29 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":74,"hash":"2d69dbe5b64b7adc5d41c54544cedba5","trigger_url":"http://local.mailbots.com/api/v1/trigger/2d69dbe5b64b7adc5d41c54544cedba5/","created":1544645009,"trigger_time":2175797009,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:29 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":75,"hash":"5ed255a9d5d261da04734300c251b4d6","trigger_url":"http://local.mailbots.com/api/v1/trigger/5ed255a9d5d261da04734300c251b4d6/","created":1544645010,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:30 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":76,"hash":"67403146997c6d3eb062d084da83d970","trigger_url":"http://local.mailbots.com/api/v1/trigger/67403146997c6d3eb062d084da83d970/","created":1544645010,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:30 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":73,"hash":"f422cd5bcf048efefa22aeaa0f0283e4","trigger_url":"http://local.mailbots.com/api/v1/trigger/f422cd5bcf048efefa22aeaa0f0283e4/","created":1544645009,"trigger_time":1544648609,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":76,"hash":"67403146997c6d3eb062d084da83d970","trigger_url":"http://local.mailbots.com/api/v1/trigger/67403146997c6d3eb062d084da83d970/","created":1544645010,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5340',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":73,"hash":"f422cd5bcf048efefa22aeaa0f0283e4","trigger_url":"http://local.mailbots.com/api/v1/trigger/f422cd5bcf048efefa22aeaa0f0283e4/","created":1544645009,"trigger_time":1544648609,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":26,"hash":"d311eaabe17ea4a5f8e47926a79473de","trigger_url":"http://local.mailbots.com/api/v1/trigger/d311eaabe17ea4a5f8e47926a79473de/","created":1544644970,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},{"id":76,"hash":"67403146997c6d3eb062d084da83d970","trigger_url":"http://local.mailbots.com/api/v1/trigger/67403146997c6d3eb062d084da83d970/","created":1544645010,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:31 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5340',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/75')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":77,"hash":"fa7950d240bf0c99d43a92589e0d60f9","trigger_url":"http://local.mailbots.com/api/v1/trigger/fa7950d240bf0c99d43a92589e0d60f9/","created":1544645012,"trigger_time":1544648612,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":78,"hash":"5e7fcb4a75da5dcc0d5e8400ff7e963d","trigger_url":"http://local.mailbots.com/api/v1/trigger/5e7fcb4a75da5dcc0d5e8400ff7e963d/","created":1544645013,"trigger_time":2175797013,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:32 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":79,"hash":"813eca190b36c1823091e590181ebf61","trigger_url":"http://local.mailbots.com/api/v1/trigger/813eca190b36c1823091e590181ebf61/","created":1544645013,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:33 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":80,"hash":"df871051ee92f5bcbc7f277ea4e6b5e9","trigger_url":"http://local.mailbots.com/api/v1/trigger/df871051ee92f5bcbc7f277ea4e6b5e9/","created":1544645014,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:34 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","page":"1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":77,"hash":"fa7950d240bf0c99d43a92589e0d60f9","trigger_url":"http://local.mailbots.com/api/v1/trigger/fa7950d240bf0c99d43a92589e0d60f9/","created":1544645012,"trigger_time":1544648612,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1363',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/79')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:35 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .reply(201, {"status":"success","task":{"id":81,"hash":"fc8a736bc5a500c39f47dab2428778fb","trigger_url":"http://local.mailbots.com/api/v1/trigger/fc8a736bc5a500c39f47dab2428778fb/","created":1544645016,"trigger_time":1544648616,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:36 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1452',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":82,"hash":"de2522d67c30140146bd1b2f44ec8b81","trigger_url":"http://local.mailbots.com/api/v1/trigger/de2522d67c30140146bd1b2f44ec8b81/","created":1544645017,"trigger_time":2175797017,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1440',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.eml.bot","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":83,"hash":"12feac4ce8882b26c9293b4063e8a833","trigger_url":"http://local.mailbots.com/api/v1/trigger/12feac4ce8882b26c9293b4063e8a833/","created":1544645018,"trigger_time":1544709600,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1461',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.eml.bot","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":84,"hash":"3e625e7d2be89b79937618d8855fee9e","trigger_url":"http://local.mailbots.com/api/v1/trigger/3e625e7d2be89b79937618d8855fee9e/","created":1544645019,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:38 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1451',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"limit":"1"})
  .reply(200, {"status":"success","tasks":[{"id":2,"hash":"6f842f966a58bb23e666f8bc720c46a4","trigger_url":"http://local.mailbots.com/api/v1/trigger/6f842f966a58bb23e666f8bc720c46a4/","created":1544644945,"trigger_time":1544648545,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.eml.bot"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Successful task","html":"","text":"","attachments":[]},"command":"example@test-extension-1.eml.bot","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":null,"email_outbound_last_at":"2018-12-12 20:02:51","task_pending":"5","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Gopher for Chrome","subdomain":"","stored_data":[],"id":30,"icon":"","description":"Gopher for Chrome"}}}]}, [ 'Date',
  'Wed, 12 Dec 2018 20:03:39 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1368',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/83')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  .delete('/api/v1/tasks/84')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Wed, 12 Dec 2018 20:03:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:40 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
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
  'Wed, 12 Dec 2018 20:03:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 20:03:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 20:03:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 20:03:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Wed, 12 Dec 2018 20:03:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=80raa429dn11rh9bdifj7phno7; path=/',
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
  'Wed, 12 Dec 2018 20:03:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=36pk8osq5o38srariq750ikmr7; path=/',
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
