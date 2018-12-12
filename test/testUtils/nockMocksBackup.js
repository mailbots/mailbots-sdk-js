//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.gopher.email:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');
nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extensions/self/data/', {"three":"more"})
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","extension":{"name":"Gopher Admin UI (Reilly Localhost)","subdomain":"local-gopher-admin-ui","stored_data":[],"installed":true,"event_url":"http://local.mailbots.com/api/v1/extension_event/177/cb37ceef9a1982fa/","id":39,"owner":{"email":"esweetland@gmail.com"},"description":"Description","icon":"","autocomplete_examples":"","tags":"","published":false,"devmode":false,"enabled":true,"install_url":"gadmin-react.ngrok.io","settings_url":"gadmin-react.ngrok.io","base_url":"http://127.0.0.1:3000/","developer_name":"","help_url":"","learn_more_url":"","privacy_policy_url":"","oauth2_client_id":"ext_0107e8160247f26a57d89ab5162829b2_","oauth2_scope":"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self","oauth2_redirect_uri":"http://127.0.0.1:3000/auth/callback","oauth2_client_secret":"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63","webhook_url":"http://127.0.0.1:3000/webhooks","webhook_version":1,"metrics":{"daily_webhooks":{"2018-12-06":1},"unique_users":{"2018-12-11":1,"2018-12-07":1,"2018-12-06":1},"http_response_codes":{"2018-12-06":[1]}}}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1186',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/extension_event/248/771c82bde8d76624/', {"foo":"bar"})
  .query({"type":"github.issue.opened"})
  .reply(200, {"status":"success"}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=0l3la8q8on44b4n7ufj7p03tb6; path=/',
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
  .get('/api/v1/extensions/self/data/')
  .reply(200, {"status":"success","data":{"three":"more","foo":"bar"},"user":{"name":"Joe Schmoe","email":"esweetland@gmail.com","timezone":"America/Los_Angeles"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:37 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/logs')
  .query({"type":["webhook","submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":409,"date":"2018-12-07 20:09:30","type":"submit_failed","level":"error","extension":"test-extension-2","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 2"},"command":"test-extension-2","format":"example@test-extension-2.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"340","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Larissa Cronin<Felicita_Botsford@gmail.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Pound Sterling Refined Metal Soap Shoes ___GTEST___\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","http_response_statuscode":400},{"id":406,"date":"2018-12-07 20:09:30","type":"submit_failed","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"324","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Vesta Reinger<Bessie_Moore@yahoo.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Rufiyaa markets calculating ___GTEST___\"},\"trigger_timeformat\":\"weds3pm\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":403,"date":"2018-12-07 20:09:29","type":"submit_failed","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"306","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Miss Cheyanne Rowe<Joan85@yahoo.com>\"],\"server_recipient\":\"example@test-extension-2.gopher.email\",\"subject\":\"interface ___GTEST___\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:29 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":278,"date":"2018-12-07 00:36:42","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544143001],"X-Gopher-Signature":["95422d018b03338440098c015173221265d463c061828f9be841c33987559cbc"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:36:42 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":273,"date":"2018-12-07 00:36:17","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142977],"X-Gopher-Signature":["48e1850fe1d39696b48225d481a45dcc07f017422f14200c0baf977386f10a93"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:36:17 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":268,"date":"2018-12-07 00:35:44","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142943],"X-Gopher-Signature":["2555282d034147aa7b101650637876e1a5d8e2c5c205a2ad7a7d79f720ca181e"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:35:44 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":263,"date":"2018-12-07 00:34:30","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142870],"X-Gopher-Signature":["bfd8f8d0a6590e57b3dc9f71329dad4bba38b8d7fe5d550ca135cff7ce22cb90"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:34:31 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":258,"date":"2018-12-07 00:31:58","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142718],"X-Gopher-Signature":["49b3bcd10eb961dbf46300829ef38b37dd21d5b15c0dc6bbc3ea1f1053a230bc"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:31:59 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":253,"date":"2018-12-07 00:31:40","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142699],"X-Gopher-Signature":["c6b7dcf17c87dd3027bda3775ff22268e35af42529922c36471da1622cfc86a8"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:31:40 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":248,"date":"2018-12-07 00:31:09","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142668],"X-Gopher-Signature":["13fbbe532d4478fdf6b2ef15ec5c38834d30b4384904f8c53893986aecedcba3"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:31:09 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":243,"date":"2018-12-07 00:30:57","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142657],"X-Gopher-Signature":["957917c619e149ab6e49b95bb960675e951d92b0333a6bb07a29aa55bb64a977"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:30:57 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":238,"date":"2018-12-07 00:30:14","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142614],"X-Gopher-Signature":["177787a24edb5c93bb0362ac6bccc35b291fc14f80253efec1581a440201f5a6"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:30:15 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":233,"date":"2018-12-07 00:27:46","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142466],"X-Gopher-Signature":["ef26bb8a6dac70e4f2048623cf43e1c5bf2a232513952377e967e9c4fdd9af35"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:27:46 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":228,"date":"2018-12-07 00:25:50","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142349],"X-Gopher-Signature":["2dad30d4c1eaad31b6c98e207e18d5ede7e3838e0d1e26ccd693b31a10381b64"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:25:50 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":217,"date":"2018-12-07 00:24:19","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142258],"X-Gopher-Signature":["b3ebf2b235eb62ae383d7ace64aa65ea39f22771ca7b998623cc2fa87f2bb34e"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:24:19 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":213,"date":"2018-12-07 00:23:23","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142203],"X-Gopher-Signature":["75b2122132faf363efbcf18660ae565dbcab7fc54b1417392ac03b15aac87993"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:23:24 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":209,"date":"2018-12-07 00:22:19","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142138],"X-Gopher-Signature":["88f3632a6c802e5740871c438015c9cc29829f7f9e736be16772c4873df55bc2"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:22:19 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":207,"date":"2018-12-07 00:22:18","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.updated","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142137],"X-Gopher-Signature":["b34121bbbdc0edd7102bfa4f354a964e9fffa5bf42dad6134ad2cec7655c1700"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1938]},"http_request_body":"{\"event\":\"task.updated\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["269"],"ETag":["W/\"10d-6E//qKSV4v8n7RqJ5K6ga97NeEA\""],"Date":["Fri, 07 Dec 2018 00:22:18 GMT"]},"http_response_body":"{\"version\":\"1\",\"task\":{\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}},\"trigger_time\":1544249885},\"webhook\":{\"status\":\"success\",\"message\":\"Memorization schedule restored. Your next reminder arrives in about 1 day.\"}}","http_response_statuscode":200},{"id":205,"date":"2018-12-07 00:22:14","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142134],"X-Gopher-Signature":["11e30bf283900559f6878e8a97ea3a622c0102baa6b87bd0bdcce06c2c1d7d1d"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1944]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":true,\"completed_on\":1544142132,\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11395"],"ETag":["W/\"2c83-3amLbN8En8HX6apRY01VwDWYTP4\""],"Date":["Fri, 07 Dec 2018 00:22:15 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in -17872 days.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":203,"date":"2018-12-07 00:22:13","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.updated","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142132],"X-Gopher-Signature":["7136ef9510edaa5b6ec6e1bc76812b13a985c78077bd1da2c72fc778432fd129"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1945]},"http_request_body":"{\"event\":\"task.updated\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":true,\"completed_on\":1544142132,\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["82"],"ETag":["W/\"52-07+NhVaNkavBNQRua0N4So6vdY4\""],"Date":["Fri, 07 Dec 2018 00:22:13 GMT"]},"http_response_body":"{\"version\":\"1\",\"webhook\":{\"status\":\"success\",\"message\":\"Memorization cancelled.\"}}","http_response_statuscode":200},{"id":201,"date":"2018-12-07 00:22:03","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142123],"X-Gopher-Signature":["48625ed720d4fc95196961651d8f8b98b060d3a49812bcf3aa1664b08d32baa7"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544247786,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:22:04 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":145,"date":"2018-12-07 00:04:42","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544141081],"X-Gopher-Signature":["dd6c45cb5ce3a462d47781c63a88c3829bceffbcec31757ddc1c6e2db8223a08"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544247786,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:04:42 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":130,"date":"2018-12-06 23:55:22","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3519,"userId":2,"event":"webhook success: task.created","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140522],"X-Gopher-Signature":["8d437a5f633012d232d945a11087ff0961b41b40a9256c0faddbf9f0d4562c68"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2565]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"memorize@memorize.gopher.email\",\"from\":\"esweetland@gmail.com\",\"method\":\"cc\",\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\r\\n\",\"text\":\"This is a body\\r\\n\",\"headers\":{\"message-id\":\"<1544140521.5c09b6e9aaaec@swift.generated>\",\"date\":\"Thu, 06 Dec 2018 23:55:21 +0000\",\"subject\":\"Cc followup from CLI\",\"from\":\"esweetland@gmail.com\",\"to\":\"test@example.com\",\"cc\":\"memorize@memorize.gopher.email\",\"mime-version\":\"1.0\",\"content-type\":\"multipart\\/alternative; boundary=\\\"_=_swift_v4_15441405215c09b6e9b6a72_=_\\\"\"}},\"command\":{\"format\":\"memorize\",\"full_address\":\"memorize@memorize.gopher.email\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140521,\"completed\":false,\"completed_on\":\"\",\"hash\":\"fed482a48651a1552cadc0fa3e7682eb\",\"id\":3519,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":null}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["10445"],"ETag":["W/\"28cd-xzhd5KNsNN2XNFTPaFC/W4C02Ow\""],"Date":["Thu, 06 Dec 2018 23:55:23 GMT"]},"http_response_body":"{\"version\":\"1\",\"task\":{\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}},\"trigger_time\":1544248270},\"send_messages\":[{\"type\":\"email\",\"to\":\"esweetland@gmail.com\",\"subject\":\"Memorizing: Cc followup from CLI\",\"body\":[{\"type\":\"title\",\"text\":\"Memorization Started!\"},{\"type\":\"html\",\"text\":\"Your first reminder arrives in about 1 day.\"},{\"type\":\"section\",\"text\":\"Memorization Schedule\"},{\"type\":\"html\",\"text\":\"Reminders will arrive less frequently as you begin to memorize this email.\"},{\"type\":\"html\",\"text\":\"<div style=\\\"line-height: 45px; white-space: nowrap;\\\" title=\\\"1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\\\"}>\\n              <table cellpadding=\\\"0\\\" cellspacing=\\\"1\\\" border=\\\"0\\\">\\n                <tr>\\n                  <td>\\n                   <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">(now)</span>&nbsp; &nbsp;\\n                  </td>\\n                    <td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td>\\n                  <td>\\n                  <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">\\n                    &nbsp; &nbsp; +90 days\\n                  </span>\\n                  </td>  \\n                </tr>\\n              </table>\\n          </div>\"},{\"type\":\"section\",\"text\":\"Update Memorization Schedule\"},{\"type\":\"button\",\"action\":\"mem.freq.50\",\"text\":\"less\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 8 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 8 days, 16 days, 28 days, 44 days, 65 days, 91 days, 122 days, 158 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.30\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 5 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 5 days, 10 days, 17 days, 26 days, 39 days, 54 days, 73 days, 95 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.15\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 2 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 2 days, 5 days, 8 days, 13 days, 19 days, 27 days, 36 days, 47 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.8\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"primary\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.6\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 2 days, 3 days, 5 days, 8 days, 11 days, 15 days, 19 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.3\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 11 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 11 hours, 1 day, 2 days, 3 days, 4 days, 5 days, 7 days, 9 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.1\",\"text\":\"more\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 4 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 4 hours, 8 hours, 1 day, 1 day, 1 day, 2 days, 2 days, 3 days, etc.\"},{\"type\":\"section\",\"text\":\"Task Actions\"},{\"type\":\"button\",\"action\":\"task.cancel\",\"text\":\"Cancel\",\"subject\":\"Hit 'send' to cancel this task'\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks/3519\",\"text\":\"Edit\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\",\"text\":\"List All\"},{\"type\":\"section\",\"text\":\"Extension Information\"},{\"type\":\"html\",\"text\":\"\\n            <span style=\\\"color: #aaaaaa\\\"> \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\\\"\\n                >\\n                My Memorizations</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15/settings\\\"\\n                >\\n                Settings</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15\\\"\\n                >\\n                About</a>\\n            </span>\"},{\"type\":\"section\",\"title\":\"Confirmation Emails\"},{\"type\":\"button\",\"text\":\"Turn Confirmation Emails Off\",\"action\":\"confirmations.off\",\"subject\":\"Hit send to turn off email confirmations\",\"title\":\"Turn off these email confirmations\"},{\"type\":\"section\"}]}]}","http_response_statuscode":200},{"id":129,"date":"2018-12-06 23:55:19","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3518,"userId":2,"event":"webhook success: task.created","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140518],"X-Gopher-Signature":["e2b1aba13a74547236ce4ba3e766af4cc0d0d1293cd5b7762fb53443b6d89aa4"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2565]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"memorize@memorize.gopher.email\",\"from\":\"esweetland@gmail.com\",\"method\":\"cc\",\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\r\\n\",\"text\":\"This is a body\\r\\n\",\"headers\":{\"message-id\":\"<1544140518.5c09b6e626555@swift.generated>\",\"date\":\"Thu, 06 Dec 2018 23:55:18 +0000\",\"subject\":\"Cc followup from CLI\",\"from\":\"esweetland@gmail.com\",\"to\":\"test@example.com\",\"cc\":\"memorize@memorize.gopher.email\",\"mime-version\":\"1.0\",\"content-type\":\"multipart\\/alternative; boundary=\\\"_=_swift_v4_15441405185c09b6e632163_=_\\\"\"}},\"command\":{\"format\":\"memorize\",\"full_address\":\"memorize@memorize.gopher.email\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140518,\"completed\":false,\"completed_on\":\"\",\"hash\":\"e436e03c9f477e802ed1f2a8b53ec32b\",\"id\":3518,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":null}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["10445"],"ETag":["W/\"28cd-GBuWFUF0vp1FtqhFSuLGjZ8HQRw\""],"Date":["Thu, 06 Dec 2018 23:55:19 GMT"]},"http_response_body":"{\"version\":\"1\",\"task\":{\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}},\"trigger_time\":1544248266},\"send_messages\":[{\"type\":\"email\",\"to\":\"esweetland@gmail.com\",\"subject\":\"Memorizing: Cc followup from CLI\",\"body\":[{\"type\":\"title\",\"text\":\"Memorization Started!\"},{\"type\":\"html\",\"text\":\"Your first reminder arrives in about 1 day.\"},{\"type\":\"section\",\"text\":\"Memorization Schedule\"},{\"type\":\"html\",\"text\":\"Reminders will arrive less frequently as you begin to memorize this email.\"},{\"type\":\"html\",\"text\":\"<div style=\\\"line-height: 45px; white-space: nowrap;\\\" title=\\\"1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\\\"}>\\n              <table cellpadding=\\\"0\\\" cellspacing=\\\"1\\\" border=\\\"0\\\">\\n                <tr>\\n                  <td>\\n                   <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">(now)</span>&nbsp; &nbsp;\\n                  </td>\\n                    <td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td>\\n                  <td>\\n                  <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">\\n                    &nbsp; &nbsp; +90 days\\n                  </span>\\n                  </td>  \\n                </tr>\\n              </table>\\n          </div>\"},{\"type\":\"section\",\"text\":\"Update Memorization Schedule\"},{\"type\":\"button\",\"action\":\"mem.freq.50\",\"text\":\"less\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 8 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 8 days, 16 days, 28 days, 44 days, 65 days, 91 days, 121 days, 158 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.30\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 5 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 5 days, 10 days, 17 days, 26 days, 39 days, 54 days, 73 days, 95 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.15\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 2 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 2 days, 5 days, 8 days, 13 days, 19 days, 27 days, 36 days, 47 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.8\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"primary\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.6\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 2 days, 3 days, 5 days, 8 days, 11 days, 15 days, 19 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.3\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 11 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 11 hours, 1 day, 2 days, 3 days, 4 days, 5 days, 7 days, 9 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.1\",\"text\":\"more\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 4 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 4 hours, 8 hours, 1 day, 1 day, 1 day, 2 days, 2 days, 3 days, etc.\"},{\"type\":\"section\",\"text\":\"Task Actions\"},{\"type\":\"button\",\"action\":\"task.cancel\",\"text\":\"Cancel\",\"subject\":\"Hit 'send' to cancel this task'\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks/3518\",\"text\":\"Edit\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\",\"text\":\"List All\"},{\"type\":\"section\",\"text\":\"Extension Information\"},{\"type\":\"html\",\"text\":\"\\n            <span style=\\\"color: #aaaaaa\\\"> \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\\\"\\n                >\\n                My Memorizations</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15/settings\\\"\\n                >\\n                Settings</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15\\\"\\n                >\\n                About</a>\\n            </span>\"},{\"type\":\"section\",\"title\":\"Confirmation Emails\"},{\"type\":\"button\",\"text\":\"Turn Confirmation Emails Off\",\"action\":\"confirmations.off\",\"subject\":\"Hit send to turn off email confirmations\",\"title\":\"Turn off these email confirmations\"},{\"type\":\"section\"}]}]}","http_response_statuscode":200},{"id":124,"date":"2018-12-06 23:54:58","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3517,"userId":2,"event":"webhook success: task.created","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140498],"X-Gopher-Signature":["43477042e66eb7f59ede75710ca85b33ffbfed2e07d0bb12818c82dbbbdd62dc"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2565]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"memorize@memorize.gopher.email\",\"from\":\"esweetland@gmail.com\",\"method\":\"cc\",\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\r\\n\",\"text\":\"This is a body\\r\\n\",\"headers\":{\"message-id\":\"<1544140497.5c09b6d17e399@swift.generated>\",\"date\":\"Thu, 06 Dec 2018 23:54:57 +0000\",\"subject\":\"Cc followup from CLI\",\"from\":\"esweetland@gmail.com\",\"to\":\"test@example.com\",\"cc\":\"memorize@memorize.gopher.email\",\"mime-version\":\"1.0\",\"content-type\":\"multipart\\/alternative; boundary=\\\"_=_swift_v4_15441404975c09b6d18b812_=_\\\"\"}},\"command\":{\"format\":\"memorize\",\"full_address\":\"memorize@memorize.gopher.email\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140497,\"completed\":false,\"completed_on\":\"\",\"hash\":\"2d595c9e9cbfa837bad0faf3f3872cd9\",\"id\":3517,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":null}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["10445"],"ETag":["W/\"28cd-ut58SOvGDbY4wjrfCgbfzIq7bRQ\""],"Date":["Thu, 06 Dec 2018 23:54:59 GMT"]},"http_response_body":"{\"version\":\"1\",\"task\":{\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}},\"trigger_time\":1544248246},\"send_messages\":[{\"type\":\"email\",\"to\":\"esweetland@gmail.com\",\"subject\":\"Memorizing: Cc followup from CLI\",\"body\":[{\"type\":\"title\",\"text\":\"Memorization Started!\"},{\"type\":\"html\",\"text\":\"Your first reminder arrives in about 1 day.\"},{\"type\":\"section\",\"text\":\"Memorization Schedule\"},{\"type\":\"html\",\"text\":\"Reminders will arrive less frequently as you begin to memorize this email.\"},{\"type\":\"html\",\"text\":\"<div style=\\\"line-height: 45px; white-space: nowrap;\\\" title=\\\"1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\\\"}>\\n              <table cellpadding=\\\"0\\\" cellspacing=\\\"1\\\" border=\\\"0\\\">\\n                <tr>\\n                  <td>\\n                   <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">(now)</span>&nbsp; &nbsp;\\n                  </td>\\n                    <td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td>\\n                  <td>\\n                  <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">\\n                    &nbsp; &nbsp; +90 days\\n                  </span>\\n                  </td>  \\n                </tr>\\n              </table>\\n          </div>\"},{\"type\":\"section\",\"text\":\"Update Memorization Schedule\"},{\"type\":\"button\",\"action\":\"mem.freq.50\",\"text\":\"less\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 8 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 8 days, 16 days, 28 days, 44 days, 65 days, 91 days, 122 days, 158 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.30\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 5 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 5 days, 10 days, 17 days, 26 days, 39 days, 54 days, 73 days, 95 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.15\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 2 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 2 days, 5 days, 8 days, 13 days, 19 days, 27 days, 36 days, 47 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.8\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"primary\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.6\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 2 days, 3 days, 5 days, 8 days, 11 days, 15 days, 19 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.3\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 11 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 11 hours, 1 day, 2 days, 3 days, 4 days, 5 days, 7 days, 9 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.1\",\"text\":\"more\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 4 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 4 hours, 8 hours, 1 day, 1 day, 1 day, 2 days, 2 days, 3 days, etc.\"},{\"type\":\"section\",\"text\":\"Task Actions\"},{\"type\":\"button\",\"action\":\"task.cancel\",\"text\":\"Cancel\",\"subject\":\"Hit 'send' to cancel this task'\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks/3517\",\"text\":\"Edit\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\",\"text\":\"List All\"},{\"type\":\"section\",\"text\":\"Extension Information\"},{\"type\":\"html\",\"text\":\"\\n            <span style=\\\"color: #aaaaaa\\\"> \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\\\"\\n                >\\n                My Memorizations</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15/settings\\\"\\n                >\\n                Settings</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15\\\"\\n                >\\n                About</a>\\n            </span>\"},{\"type\":\"section\",\"title\":\"Confirmation Emails\"},{\"type\":\"button\",\"text\":\"Turn Confirmation Emails Off\",\"action\":\"confirmations.off\",\"subject\":\"Hit send to turn off email confirmations\",\"title\":\"Turn off these email confirmations\"},{\"type\":\"section\"}]}]}","http_response_statuscode":200},{"id":107,"date":"2018-12-06 23:48:43","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140122],"X-Gopher-Signature":["54ebee9a47a60e088b25632498b591e0e71fc6d62c9ce65592cd94e493ec9c67"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544247786,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Thu, 06 Dec 2018 23:48:43 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":102,"date":"2018-12-06 23:47:19","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.created","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140038],"X-Gopher-Signature":["fb02f90d3baed4fa82b8eb1a9e36a45cd753635d027991a2e638ea9c8a2ffc83"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[2565]},"http_request_body":"{\"source\":{\"type\":\"email\",\"recipient\":\"memorize@memorize.gopher.email\",\"from\":\"esweetland@gmail.com\",\"method\":\"cc\",\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\r\\n\",\"text\":\"This is a body\\r\\n\",\"headers\":{\"message-id\":\"<1544140037.5c09b50553dfe@swift.generated>\",\"date\":\"Thu, 06 Dec 2018 23:47:17 +0000\",\"subject\":\"Cc followup from CLI\",\"from\":\"esweetland@gmail.com\",\"to\":\"test@example.com\",\"cc\":\"memorize@memorize.gopher.email\",\"mime-version\":\"1.0\",\"content-type\":\"multipart\\/alternative; boundary=\\\"_=_swift_v4_15441400375c09b50566be5_=_\\\"\"}},\"command\":{\"format\":\"memorize\",\"full_address\":\"memorize@memorize.gopher.email\"},\"event\":\"task.created\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":null}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["10445"],"ETag":["W/\"28cd-L7cOXHW4kE0I57hwEl4JwIZB6Ro\""],"Date":["Thu, 06 Dec 2018 23:47:19 GMT"]},"http_response_body":"{\"version\":\"1\",\"task\":{\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}},\"trigger_time\":1544247786},\"send_messages\":[{\"type\":\"email\",\"to\":\"esweetland@gmail.com\",\"subject\":\"Memorizing: Cc followup from CLI\",\"body\":[{\"type\":\"title\",\"text\":\"Memorization Started!\"},{\"type\":\"html\",\"text\":\"Your first reminder arrives in about 1 day.\"},{\"type\":\"section\",\"text\":\"Memorization Schedule\"},{\"type\":\"html\",\"text\":\"Reminders will arrive less frequently as you begin to memorize this email.\"},{\"type\":\"html\",\"text\":\"<div style=\\\"line-height: 45px; white-space: nowrap;\\\" title=\\\"1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\\\"}>\\n              <table cellpadding=\\\"0\\\" cellspacing=\\\"1\\\" border=\\\"0\\\">\\n                <tr>\\n                  <td>\\n                   <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">(now)</span>&nbsp; &nbsp;\\n                  </td>\\n                    <td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 20px; line-height: 5px; font-family: monospace; color: #0099cc;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td><td style=\\\"font-size: 3px; line-height: 5px; font-family: monospace; color: #333;\\\">&bull;</td>\\n                  <td>\\n                  <span style=\\\"font-size: 10px; font-family: helvetica, sans-serif; color: #aaaaaa\\\">\\n                    &nbsp; &nbsp; +90 days\\n                  </span>\\n                  </td>  \\n                </tr>\\n              </table>\\n          </div>\"},{\"type\":\"section\",\"text\":\"Update Memorization Schedule\"},{\"type\":\"button\",\"action\":\"mem.freq.50\",\"text\":\"less\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 8 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 8 days, 16 days, 28 days, 44 days, 65 days, 91 days, 121 days, 158 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.30\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 5 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 5 days, 10 days, 17 days, 26 days, 39 days, 54 days, 73 days, 95 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.15\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 2 days from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 2 days, 5 days, 8 days, 13 days, 19 days, 27 days, 36 days, 47 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.8\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"primary\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.6\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 1 day from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 1 day, 2 days, 3 days, 5 days, 8 days, 11 days, 15 days, 19 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.3\",\"text\":\"&nbsp; &nbsp;\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 11 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 11 hours, 1 day, 2 days, 3 days, 4 days, 5 days, 7 days, 9 days, etc.\"},{\"type\":\"button\",\"action\":\"mem.freq.1\",\"text\":\"more\",\"style\":\"\",\"subject\":\"Hit 'send' to update memorization schedule\",\"body\":\"Your next reminder date will be about 4 hours from now.\\n\\nAs you answer yes or no to each reminder, the next interval will move  forwards or backwards on this new schedule: 4 hours, 8 hours, 1 day, 1 day, 1 day, 2 days, 2 days, 3 days, etc.\"},{\"type\":\"section\",\"text\":\"Task Actions\"},{\"type\":\"button\",\"action\":\"task.cancel\",\"text\":\"Cancel\",\"subject\":\"Hit 'send' to cancel this task'\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks/3516\",\"text\":\"Edit\"},{\"type\":\"button\",\"url\":\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\",\"text\":\"List All\"},{\"type\":\"section\",\"text\":\"Extension Information\"},{\"type\":\"html\",\"text\":\"\\n            <span style=\\\"color: #aaaaaa\\\"> \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/tasks?extension=memorize&filter_extension=memorize\\\"\\n                >\\n                My Memorizations</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15/settings\\\"\\n                >\\n                Settings</a> |  \\n              <a \\n                style=\\\"color: #aaaaaa\\\" \\n                href=\\\"http://localhost:3000/extensions/15\\\"\\n                >\\n                About</a>\\n            </span>\"},{\"type\":\"section\",\"title\":\"Confirmation Emails\"},{\"type\":\"button\",\"text\":\"Turn Confirmation Emails Off\",\"action\":\"confirmations.off\",\"subject\":\"Hit send to turn off email confirmations\",\"title\":\"Turn off these email confirmations\"},{\"type\":\"section\"}]}]}","http_response_statuscode":200},{"id":98,"date":"2018-12-06 23:47:00","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: extension.settings_viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140020],"X-Gopher-Signature":["3eb6a1a63cb55a34d27c3cd9c446f116cc53c19ccbf5c9c2ec55ce38d7350f45"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1420]},"http_request_body":"{\"url_params\":[],\"event\":\"extension.settings_viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["5242"],"ETag":["W/\"147a-2ZRIAkFefT3M+vfq6pbNpATxgrw\""],"Date":["Thu, 06 Dec 2018 23:47:00 GMT"]},"http_response_body":"{\"version\":\"1\",\"settings\":{\"welcome\":{\"JSONSchema\":{\"title\":\"\",\"type\":\"object\",\"properties\":{\"_md_6771665121\":{\"type\":\"string\"},\"_md_9691441254\":{\"type\":\"string\"},\"_md_2869073171\":{\"type\":\"string\"}}},\"uiSchema\":{\"_md_6771665121\":{\"ui:widget\":\"customTextWidget\",\"ui:emptyValue\":\"\",\"ui:options\":{\"label\":false,\"text\":\"\\n# Welcome to Memorize.email\\nMemorize anything by sending it to to [memorize@memorize.email](mailto:memorize@memorize.email).\"}},\"_md_9691441254\":{\"ui:widget\":\"customYouTubeEmbedWidget\",\"classNames\":\"embed-responsive embed-responsive-16by9 golden-ratio-16by9\",\"ui:options\":{\"url\":\"https://youtube.com/embed/1XPvgelHZTo\",\"label\":false},\"ui:emptyValue\":\"\"},\"_md_2869073171\":{\"ui:widget\":\"customTextWidget\",\"ui:emptyValue\":\"\",\"ui:options\":{\"label\":false,\"text\":\"![What to Memorize](https://fut-cdn.s3.amazonaws.com/memorize.email/what-to-memorize.png)\\n\\n## What Should I Do Now?\\nThink of something to memorize! Then email it to [memorize@memorize.email](mailto:memorize@memorize.email).\\n\\n> Tip: Use the subject as the question. Put the answer in the email body. This gives you a chance to recall the answer before seeing it.\\n\\nWe will respond with an email confirming the memorization has been received. (This email can be turned off in your settings.)\\n\\n## Did you remember?\\nSome time later (depending on your settings) you will receive a reminder that asks whether or not you remembered.  \\n\\nAnswering \\\"yes\\\" will cause your next reminder to be delivered further into the future than the  previous reminder. \\n \\nAnswering \\\"no\\\" moves the next reminder sooner than the previous reminder.  Watch the above video for more information.\\n\\nIf the reminder goes unanswered, we will followup 1 day later. If that goes unanswered we will follow up two more times, then pause the reminder so we don't needlessly fill your inbox. Re-activate the reminder by answering \\\"yes\\\", \\\"no\\\" or changing the memorization frequency on any previous reminder email.\\n\\n## View Memorizations\\nView and edit your current memorization on the [Memorize.email Tasks Page](https://app.gopher.email/tasks?extension=memorize&filter_extension=memorize).\\n\\n## Edit Memorizations\\nTo edit the content of one of your memorizations, go the [Memorize.email Tasks Page](https://app.gopher.email/tasks?extension=memorize&filter_extension=memorize), click on the relevant task, then click the \\\"original email\\\" link on the right-side.\\n\\nYou can also change the memorization frequency and cancel memorization from this this same page – everything you can  do from within email.\\n\\n## Adjusting the Memorization\\nThe frequency of each memorization task can be individually adjusted. A memorable family moment, for example may only need to appear in your inbox after 1 month, 4 months, 6 months, etc. Whereas \\na memorable quote or poem may be needed after 3 hours, 6 hours, 1 day, etc.\\n\\nYour default memorization frequency and frequency options are are editable on your settings page.\\n\\n## Help / Feedback\\nClick the \\\"Help\\\" link on the left. We'd be happy to hear from you.\\n\\n\"}}},\"formData\":{},\"formMeta\":{\"menuTitle\":\"Welcome\"}},\"mem_email\":{\"JSONSchema\":{\"title\":\"Notifications\",\"type\":\"object\",\"properties\":{\"confirmation_emails\":{\"type\":\"boolean\",\"title\":\"Confirmation Emails\",\"description\":\"Receive confirmation emails with each action\"}}},\"uiSchema\":{\"confirmation_emails\":{\"ui:emptyValue\":false}},\"formData\":{\"confirmation_emails\":true},\"formMeta\":{\"menuTitle\":\"Notifications\",\"hasSubmitButton\":true,\"submitText\":\"Save Notification Settings\",\"urlParams\":{\"saveSettings\":1}}},\"mem\":{\"JSONSchema\":{\"title\":\"Memorization Settings\",\"type\":\"object\",\"properties\":{\"defaultFrequencyPref\":{\"type\":\"string\",\"title\":\"Default Frequency\"},\"frequencyOptions\":{\"type\":\"string\",\"title\":\"Frequency Options\"},\"_md_8160224584\":{\"type\":\"string\"}}},\"uiSchema\":{\"defaultFrequencyPref\":{\"ui:help\":\"Start memorizations using this frequency\",\"ui:placeholder\":\"Enter a default frequency\",\"ui:emptyValue\":\"\"},\"frequencyOptions\":{\"ui:help\":\"Alternate memorization frequencies. (The \\\"more\\\" to \\\"less\\\" email buttons.) Add or modify spacing. Preview memorization schedules below after saving.\",\"ui:emptyValue\":\"\"},\"_md_8160224584\":{\"ui:widget\":\"customTextWidget\",\"ui:emptyValue\":\"\",\"ui:options\":{\"label\":false,\"text\":\"**Frequency Option Schedules** \\n\\n\\n\\n**1** – 0 hours, 1 hours, 4 hours, 8 hours, 1 days, 1 days, 1 days, 2 days, 2 days, 3 days\\n\\n\\n\\n**3** – 1 hours, 4 hours, 11 hours, 1 days, 2 days, 3 days, 4 days, 5 days, 7 days, 9 days\\n\\n\\n\\n**6** – 1 hours, 8 hours, 1 days, 2 days, 3 days, 5 days, 8 days, 11 days, 15 days, 19 days\\n\\n\\n\\n**8** – 2 hours, 11 hours, 1 days, 3 days, 4 days, 7 days, 10 days, 14 days, 19 days, 25 days\\n\\n\\n\\n**15** – 4 hours, 1 days, 2 days, 5 days, 8 days, 13 days, 19 days, 27 days, 36 days, 47 days\\n\\n\\n\\n**30** – 7 hours, 2 days, 5 days, 10 days, 17 days, 26 days, 39 days, 54 days, 73 days, 95 days\\n\\n\\n\\n**50** – 12 hours, 3 days, 8 days, 16 days, 28 days, 44 days, 65 days, 91 days, 121 days, 158 days\"}}},\"formData\":{\"defaultFrequencyPref\":\"8\",\"frequencyOptions\":\"1,3,6,8,15,30,50\"},\"formMeta\":{\"menuTitle\":\"Memorization\",\"hasSubmitButton\":true,\"submitText\":\"Save Settings\",\"urlParams\":{}}}}}","http_response_statuscode":200},{"id":95,"date":"2018-12-06 23:46:56","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":0,"userId":2,"event":"webhook success: extension.installed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544140015],"X-Gopher-Signature":["ec5effcccc2d4f9f4006cf2e99117c947578a3f62ecc4ae6f08fe504509aa397"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1398]},"http_request_body":"{\"event\":\"extension.installed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["15"],"ETag":["W/\"f-sHigu4BMVa0IJ0LR3NDJ5y8l4sc\""],"Date":["Thu, 06 Dec 2018 23:46:57 GMT"]},"http_response_body":"{\"version\":\"1\"}","http_response_statuscode":200},{"id":64,"date":"2018-12-06 23:04:10","type":"submit_failed","level":"error","extension":"memorize","extension_ownerid":157,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"http:\\/\\/memorize.ngrok.io\",\"icon\":\"\",\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"name\":\"memorize\"},\"command\":\"memorize\",\"format\":\"memorize@memorize.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"http://memorize.ngrok.io","icon":"","description":"Sends reminders repeatedly over longer and longer intervals to help you remember things.","name":"memorize"},"command":"memorize","format":"memorize@memorize.gopher.email"},"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:38 GMT',
  'Server',
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
  .query({"type":["submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":409,"date":"2018-12-07 20:09:30","type":"submit_failed","level":"error","extension":"test-extension-2","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 2"},"command":"test-extension-2","format":"example@test-extension-2.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"340","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Larissa Cronin<Felicita_Botsford@gmail.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Pound Sterling Refined Metal Soap Shoes ___GTEST___\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","http_response_statuscode":400},{"id":406,"date":"2018-12-07 20:09:30","type":"submit_failed","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"324","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Vesta Reinger<Bessie_Moore@yahoo.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Rufiyaa markets calculating ___GTEST___\"},\"trigger_timeformat\":\"weds3pm\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":403,"date":"2018-12-07 20:09:29","type":"submit_failed","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"306","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Miss Cheyanne Rowe<Joan85@yahoo.com>\"],\"server_recipient\":\"example@test-extension-2.gopher.email\",\"subject\":\"interface ___GTEST___\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:29 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":64,"date":"2018-12-06 23:04:10","type":"submit_failed","level":"error","extension":"memorize","extension_ownerid":157,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"http:\\/\\/memorize.ngrok.io\",\"icon\":\"\",\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"name\":\"memorize\"},\"command\":\"memorize\",\"format\":\"memorize@memorize.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"http://memorize.ngrok.io","icon":"","description":"Sends reminders repeatedly over longer and longer intervals to help you remember things.","name":"memorize"},"command":"memorize","format":"memorize@memorize.gopher.email"},"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0},{"id":63,"date":"2018-12-06 23:03:55","type":"submit_failed","level":"error","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_found","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_found\",\"message\":\"Command Does Not Exist. This Gopher Command (memorize@gopher-memorize.gopher.email) doesn't exist or hasn't been installed. Are you sure that's the right address?\",\"format\":\"memorize@gopher-memorize.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_found","message":"Command Does Not Exist. This Gopher Command (memorize@gopher-memorize.gopher.email) doesn't exist or hasn't been installed. Are you sure that's the right address?","format":"memorize@gopher-memorize.gopher.email"},"http_request_url":"","http_request_method":"","http_request_headers":[],"http_request_body":"","http_response_headers":[],"http_response_body":"","http_response_statuscode":0}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:39 GMT',
  'Server',
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
  .reply(200, {"status":"success","logs":[{"id":15094,"date":"2018-12-11 22:21:37","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:21:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15093,"date":"2018-12-11 22:21:37","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:21:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"gadmin-react.ngrok.io\",\"settings_url\":\"gadmin-react.ngrok.io\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"daily_webhooks\":{\"2018-12-06\":1},\"unique_users\":{\"2018-12-11\":1,\"2018-12-07\":1,\"2018-12-06\":1},\"http_response_codes\":{\"2018-12-06\":[1]}}}}","http_response_statuscode":200},{"id":15092,"date":"2018-12-11 22:21:37","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:21:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15091,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200},{"id":15090,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"13","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"foo\":\"bar\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15089,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15088,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/users/self/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/users/self/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false,\"email\":\"esweetland@gmail.com\",\"gopher_dev\":true,\"user_hash\":\"315e24c3ce53dc683f5c5cdaa6270964e1c2033c42b5c0b3123f65b4666516e0\"}}","http_response_statuscode":200},{"id":15087,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/80?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/80?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15086,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/79?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/79?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15085,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/78?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/78?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15084,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/77?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/77?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15083,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":77,\"hash\":\"7a1bc861ab02d578e73db2d18c54f8ac\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/7a1bc861ab02d578e73db2d18c54f8ac\\/\",\"created\":1544566851,\"trigger_time\":1544570452,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2208\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":15082,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":80,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"136","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":80,\"hash\":\"82ec9a443baa2b572f7d8e697b7cc761\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/82ec9a443baa2b572f7d8e697b7cc761\\/\",\"created\":1544566852,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2208\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15081,"date":"2018-12-11 22:20:52","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":79,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"164","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":79,\"hash\":\"91c91c4c517cba4e847eb131a0665db8\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/91c91c4c517cba4e847eb131a0665db8\\/\",\"created\":1544566852,\"trigger_time\":1544623200,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"533\",\"email_outbound_last_at\":\"2018-12-11 14:08:07\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15080,"date":"2018-12-11 22:20:52","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":78,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"185","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":78,\"hash\":\"51fc88d9c1153a6cb710a6420453b322\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/51fc88d9c1153a6cb710a6420453b322\\/\",\"created\":1544566852,\"trigger_time\":2175718852,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2207\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15079,"date":"2018-12-11 22:20:52","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":77,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"155","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":77,\"hash\":\"7a1bc861ab02d578e73db2d18c54f8ac\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/7a1bc861ab02d578e73db2d18c54f8ac\\/\",\"created\":1544566851,\"trigger_time\":1544570452,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2206\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15078,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/76?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/76?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15077,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/75?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/75?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15076,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/73?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/73?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15075,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/74?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/74?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15074,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?extension=test-extension-1&page=1&per_page=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?extension=test-extension-1&page=1&per_page=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":74,\"hash\":\"c7bac872e31488cd4e1f94cff51aa92a\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/c7bac872e31488cd4e1f94cff51aa92a\\/\",\"created\":1544566850,\"trigger_time\":2175718850,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2205\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":15073,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":76,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"136","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":76,\"hash\":\"7a1bc861ab02d578e73db2d18c54f8ac\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/7a1bc861ab02d578e73db2d18c54f8ac\\/\",\"created\":1544566851,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2205\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15072,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":75,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"164","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":75,\"hash\":\"c8531f1dc8949398f694ad20946b211d\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/c8531f1dc8949398f694ad20946b211d\\/\",\"created\":1544566850,\"trigger_time\":1544623200,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"532\",\"email_outbound_last_at\":\"2018-12-11 14:08:07\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15071,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":74,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"185","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":74,\"hash\":\"c7bac872e31488cd4e1f94cff51aa92a\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/c7bac872e31488cd4e1f94cff51aa92a\\/\",\"created\":1544566850,\"trigger_time\":2175718850,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2204\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15070,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":73,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"155","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":73,\"hash\":\"dd3ca1f3dddf3abac2a82c779b618659\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/dd3ca1f3dddf3abac2a82c779b618659\\/\",\"created\":1544566850,\"trigger_time\":1544570450,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2203\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15069,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/72?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/72?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15068,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/69?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/69?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15067,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/70?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/70?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15066,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/71?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/71?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15065,"date":"2018-12-11 22:20:49","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?extension=test-extension-1&order_by=due&order_dir=asc&search=TEST","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?extension=test-extension-1&order_by=due&order_dir=asc&search=TEST","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":69,\"hash\":\"a752654e77b2e006a1dd448ed01fd4d6\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a752654e77b2e006a1dd448ed01fd4d6\\/\",\"created\":1544566848,\"trigger_time\":1544570448,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2202\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},{\"id\":22,\"hash\":\"e81f28ce67d8d30ea9e7aebf89f92180\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/e81f28ce67d8d30ea9e7aebf89f92180\\/\",\"created\":1544566821,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"test@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"test@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2202\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},{\"id\":72,\"hash\":\"a752654e77b2e006a1dd448ed01fd4d6\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a752654e77b2e006a1dd448ed01fd4d6\\/\",\"created\":1544566848,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2202\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:39 GMT',
  'Server',
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
  .query({"num":"10"})
  .reply(200, {"status":"success","logs":[{"id":409,"date":"2018-12-07 20:09:30","type":"submit_failed","level":"error","extension":"test-extension-2","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 2"},"command":"test-extension-2","format":"example@test-extension-2.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"340","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Larissa Cronin<Felicita_Botsford@gmail.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Pound Sterling Refined Metal Soap Shoes ___GTEST___\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 2\"},\"command\":\"test-extension-2\",\"format\":\"example@test-extension-2.gopher.email\"}","http_response_statuscode":400},{"id":406,"date":"2018-12-07 20:09:30","type":"submit_failed","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"324","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Vesta Reinger<Bessie_Moore@yahoo.com>\"],\"server_recipient\":\"example@test-extension-1.gopher.email\",\"subject\":\"Rufiyaa markets calculating ___GTEST___\"},\"trigger_timeformat\":\"weds3pm\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:30 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":403,"date":"2018-12-07 20:09:29","type":"submit_failed","level":"error","extension":"test-extension-1","extension_ownerid":2,"taskId":0,"userId":2,"event":"Creating task failed: gopher_command_not_installed","details":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","data":{"status":"error","type":"gopher_command_not_installed","message":"Gopher command not installed","extension":{"install_url":"","icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/superior-win-better-greater-higher-grander-competition-128.png","description":"","name":"Test Extension 1"},"command":"test-extension-1","format":"example@test-extension-1.gopher.email"},"http_request_url":"http://local-mailbots-rsweetland.ngrok.io/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"306","host":"local-mailbots-rsweetland.ngrok.io","connection":"close","x-forwarded-for":"73.162.30.34","x-php-ob-level":"1"},"http_request_body":"{\"webhook\":false,\"suppress_email\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"complete\":false,\"reference_email\":{\"to\":[\"Miss Cheyanne Rowe<Joan85@yahoo.com>\"],\"server_recipient\":\"example@test-extension-2.gopher.email\",\"subject\":\"interface ___GTEST___\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Fri, 07 Dec 2018 20:09:29 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"error\",\"type\":\"gopher_command_not_installed\",\"message\":\"Gopher command not installed\",\"extension\":{\"install_url\":\"\",\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/superior-win-better-greater-higher-grander-competition-128.png\",\"description\":\"\",\"name\":\"Test Extension 1\"},\"command\":\"test-extension-1\",\"format\":\"example@test-extension-1.gopher.email\"}","http_response_statuscode":400},{"id":278,"date":"2018-12-07 00:36:42","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544143001],"X-Gopher-Signature":["95422d018b03338440098c015173221265d463c061828f9be841c33987559cbc"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:36:42 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":273,"date":"2018-12-07 00:36:17","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142977],"X-Gopher-Signature":["48e1850fe1d39696b48225d481a45dcc07f017422f14200c0baf977386f10a93"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:36:17 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":268,"date":"2018-12-07 00:35:44","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142943],"X-Gopher-Signature":["2555282d034147aa7b101650637876e1a5d8e2c5c205a2ad7a7d79f720ca181e"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:35:44 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":263,"date":"2018-12-07 00:34:30","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142870],"X-Gopher-Signature":["bfd8f8d0a6590e57b3dc9f71329dad4bba38b8d7fe5d550ca135cff7ce22cb90"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:34:31 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":258,"date":"2018-12-07 00:31:58","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142718],"X-Gopher-Signature":["49b3bcd10eb961dbf46300829ef38b37dd21d5b15c0dc6bbc3ea1f1053a230bc"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:31:59 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":253,"date":"2018-12-07 00:31:40","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142699],"X-Gopher-Signature":["c6b7dcf17c87dd3027bda3775ff22268e35af42529922c36471da1622cfc86a8"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-tpMYjwJx5O01cvqd2oO8OUtAlig\""],"Date":["Fri, 07 Dec 2018 00:31:40 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200},{"id":248,"date":"2018-12-07 00:31:09","type":"webhook","level":"success","extension":"memorize","extension_ownerid":2,"taskId":3516,"userId":2,"event":"webhook success: task.viewed","details":"","data":[],"http_request_url":"http://memorize.ngrok.io/webhooks","http_request_method":"POST","http_request_headers":{"Host":["memorize.ngrok.io"],"X-Gopher-Timestamp":[1544142668],"X-Gopher-Signature":["13fbbe532d4478fdf6b2ef15ec5c38834d30b4384904f8c53893986aecedcba3"],"User-Agent":["Gopher (http://www.gopher.email)"],"Content-Type":["application/json"],"Content-Length":[1943]},"http_request_body":"{\"event\":\"task.viewed\",\"version\":\"1\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM 'YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"memorize\",\"subdomain\":\"memorize\",\"stored_data\":{\"access_token\":\"8010b8a77355a742c0b5db587825c8b61eb356b1\"},\"installed\":true,\"event_url\":\"http:\\/\\/local-gopher.ngrok.io\\/api\\/v1\\/extension_event\\/222\\/a9ae0f51128d2ee9\\/\",\"id\":15,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Sends reminders repeatedly over longer and longer intervals to help you remember things.\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":true,\"devmode\":false,\"enabled\":true,\"install_url\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/login\",\"settings_url\":\"http:\\/\\/memorize.ngrok.io\",\"base_url\":\"http:\\/\\/memorize.ngrok.io\\/\",\"developer_name\":\"Reilly\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_772301a1d150c3417cf09851c722dd41\",\"oauth2_scope\":\"get_user_info extension_manage_self read_own_tasks manage_own_tasks\",\"oauth2_redirect_uri\":\"http:\\/\\/memorize.ngrok.io\\/auth\\/callback\"},\"task\":{\"created\":1544140037,\"completed\":false,\"completed_on\":\"\",\"hash\":\"3b232c49255951a5f0875ed8a3d35994\",\"id\":3516,\"trigger_time\":1544249885,\"trigger_timeformat\":\"\",\"reference_email\":{\"to\":[\"test@example.com\"],\"cc\":[\"memorize@memorize.gopher.email\"],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Cc followup from CLI\",\"html\":\"This is a body\\n\",\"text\":\"This is a body\\n\",\"attachments\":[]},\"command\":\"memorize@memorize.gopher.email\",\"stored_data\":{\"mem\":{\"frequency_pref\":8,\"reminder_num\":2,\"repeat_last_reminder_ct\":\"no_reminders\"}}}}","http_response_headers":{"X-Powered-By":["Express"],"Content-Type":["application/json; charset=utf-8"],"Content-Length":["11389"],"ETag":["W/\"2c7d-Dgf1XMpt0Npfwp63MnMinP7IpgY\""],"Date":["Fri, 07 Dec 2018 00:31:09 GMT"]},"http_response_body":"{\"version\":\"1\",\"send_messages\":[{\"type\":\"email\",\"from\":\"Memorize\",\"subject\":\"Cc followup from CLI\",\"body\":[{\"type\":\"preview_text\",\"text\":\"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................\"},{\"type\":\"html\",\"text\":\"<br />Here is a working preview of the reminder you will receive in 1 day.<br /><br />--<br /><br />\"},{\"type\":\"html\",\"text\":\"\"},{\"type\":\"html\",\"text\":\"This is a body\\n\"},{\"type\":\"section\",\"text\":\"Did you remember?\"},{\"type\":\"button\",\"action\":\"mem.check.yes\",\"text\":\"✔ Yes<img scr=\\\"http://localhost:3000/static/media/gopherLogo.81a5d5a2.png\\\" onload=\\\"alert('hi')\\\" />\",\"subject\":\"Hit 'send' to mark that you remembered\",\"body\":\"Good job! ","http_response_statuscode":200}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:40 GMT',
  'Server',
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
  .query({"since":"1539382901"})
  .reply(200, {"status":"success","logs":[]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:41 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"type":["api","webhook","submit_failed"]})
  .reply(200, {"status":"success","logs":[{"id":15094,"date":"2018-12-11 22:21:37","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:21:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15093,"date":"2018-12-11 22:21:37","type":"api","level":"info","extension":"local-gopher-admin-ui","extension_ownerid":2,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:21:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"extension\":{\"name\":\"Gopher Admin UI (Reilly Localhost)\",\"subdomain\":\"local-gopher-admin-ui\",\"stored_data\":[],\"installed\":true,\"event_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/extension_event\\/177\\/cb37ceef9a1982fa\\/\",\"id\":39,\"owner\":{\"email\":\"esweetland@gmail.com\"},\"description\":\"Description\",\"icon\":\"\",\"autocomplete_examples\":\"\",\"tags\":\"\",\"published\":false,\"devmode\":false,\"enabled\":true,\"install_url\":\"gadmin-react.ngrok.io\",\"settings_url\":\"gadmin-react.ngrok.io\",\"base_url\":\"http:\\/\\/127.0.0.1:3000\\/\",\"developer_name\":\"\",\"help_url\":\"\",\"learn_more_url\":\"\",\"privacy_policy_url\":\"\",\"oauth2_client_id\":\"ext_0107e8160247f26a57d89ab5162829b2_\",\"oauth2_scope\":\"get_user_info extension_manage_self manage_all_tasks read_all_tasks read_logs read_extensions manage_extensions manage_user_self\",\"oauth2_redirect_uri\":\"http:\\/\\/127.0.0.1:3000\\/auth\\/callback\",\"oauth2_client_secret\":\"c04489b244e64c3e3824a924f4a7e29e895b26656d699ffe809cc0f62af71a63\",\"webhook_url\":\"http:\\/\\/127.0.0.1:3000\\/webhooks\",\"webhook_version\":1,\"metrics\":{\"daily_webhooks\":{\"2018-12-06\":1},\"unique_users\":{\"2018-12-11\":1,\"2018-12-07\":1,\"2018-12-06\":1},\"http_response_codes\":{\"2018-12-06\":[1]}}}}","http_response_statuscode":200},{"id":15092,"date":"2018-12-11 22:21:37","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"16","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"three\":\"more\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:21:37 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15091,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/invites/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/invites/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"87","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"client_id\":\"ext_8a02ef3d58948ab52ed1958c53a6efff\",\"email_address\":\"test@example.com\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\"}","http_response_statuscode":200},{"id":15090,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: POST /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","content-length":"13","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"foo\":\"bar\"}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15089,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/extensions/self/data/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/extensions/self/data/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"data\":{\"three\":\"more\",\"foo\":\"bar\"},\"user\":{\"name\":\"Joe Schmoe\",\"email\":\"esweetland@gmail.com\",\"timezone\":\"America\\/Los_Angeles\"}}","http_response_statuscode":200},{"id":15088,"date":"2018-12-11 22:20:54","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/users/self/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/users/self/","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:54 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"user\":{\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false,\"email\":\"esweetland@gmail.com\",\"gopher_dev\":true,\"user_hash\":\"315e24c3ce53dc683f5c5cdaa6270964e1c2033c42b5c0b3123f65b4666516e0\"}}","http_response_statuscode":200},{"id":15087,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/80?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/80?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15086,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/79?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/79?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15085,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/78?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/78?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15084,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/77?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/77?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15083,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?limit=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?limit=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":77,\"hash\":\"7a1bc861ab02d578e73db2d18c54f8ac\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/7a1bc861ab02d578e73db2d18c54f8ac\\/\",\"created\":1544566851,\"trigger_time\":1544570452,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2208\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":15082,"date":"2018-12-11 22:20:53","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":80,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"136","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:53 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":80,\"hash\":\"82ec9a443baa2b572f7d8e697b7cc761\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/82ec9a443baa2b572f7d8e697b7cc761\\/\",\"created\":1544566852,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2208\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15081,"date":"2018-12-11 22:20:52","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":79,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"164","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":79,\"hash\":\"91c91c4c517cba4e847eb131a0665db8\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/91c91c4c517cba4e847eb131a0665db8\\/\",\"created\":1544566852,\"trigger_time\":1544623200,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"533\",\"email_outbound_last_at\":\"2018-12-11 14:08:07\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15080,"date":"2018-12-11 22:20:52","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":78,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"185","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":78,\"hash\":\"51fc88d9c1153a6cb710a6420453b322\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/51fc88d9c1153a6cb710a6420453b322\\/\",\"created\":1544566852,\"trigger_time\":2175718852,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2207\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15079,"date":"2018-12-11 22:20:52","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":77,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"155","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:52 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":77,\"hash\":\"7a1bc861ab02d578e73db2d18c54f8ac\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/7a1bc861ab02d578e73db2d18c54f8ac\\/\",\"created\":1544566851,\"trigger_time\":1544570452,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2206\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15078,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/76?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/76?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15077,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/75?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/75?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15076,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/73?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/73?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15075,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/74?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/74?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15074,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?extension=test-extension-1&page=1&per_page=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?extension=test-extension-1&page=1&per_page=1","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":74,\"hash\":\"c7bac872e31488cd4e1f94cff51aa92a\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/c7bac872e31488cd4e1f94cff51aa92a\\/\",\"created\":1544566850,\"trigger_time\":2175718850,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2205\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200},{"id":15073,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":76,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"136","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Null due date\"}}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":76,\"hash\":\"7a1bc861ab02d578e73db2d18c54f8ac\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/7a1bc861ab02d578e73db2d18c54f8ac\\/\",\"created\":1544566851,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2205\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15072,"date":"2018-12-11 22:20:51","type":"api","level":"info","extension":"test-extension-2","extension_ownerid":2,"taskId":75,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"164","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-2.gopher.email\",\"reference_email\":{\"subject\":\"TEST: Subject 2\"},\"trigger_timeformat\":\"tomorrow\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:51 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":75,\"hash\":\"c8531f1dc8949398f694ad20946b211d\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/c8531f1dc8949398f694ad20946b211d\\/\",\"created\":1544566850,\"trigger_time\":1544623200,\"trigger_timeformat\":\"tomorrow\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-2.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Subject 2\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-2.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"532\",\"email_outbound_last_at\":\"2018-12-11 14:08:07\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 2\",\"subdomain\":\"test-extension-2\",\"stored_data\":[],\"id\":118,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/product-management-color\\/64\\/absorbing-absorb-digest-message-imbibe-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15071,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":74,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"185","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Space Ships!\",\"to\":[\"joe@example.com\"]},\"trigger_timeformat\":\"20years\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":74,\"hash\":\"c7bac872e31488cd4e1f94cff51aa92a\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/c7bac872e31488cd4e1f94cff51aa92a\\/\",\"created\":1544566850,\"trigger_time\":2175718850,\"trigger_timeformat\":\"20years\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"joe@example.com\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Space Ships!\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2204\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"2\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15070,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"test-extension-1","extension_ownerid":2,"taskId":73,"userId":2,"event":"API: POST /api/v1/tasks/","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/","http_request_method":"POST","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","content-length":"155","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"{\"suppress_webhook\":true,\"task\":{\"command\":\"example@test-extension-1.gopher.email\",\"reference_email\":{\"subject\":\"Subject 1\"},\"trigger_timeformat\":\"1hour\"}}","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"task\":{\"id\":73,\"hash\":\"dd3ca1f3dddf3abac2a82c779b618659\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/dd3ca1f3dddf3abac2a82c779b618659\\/\",\"created\":1544566850,\"trigger_time\":1544570450,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2203\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"1\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},\"messages\":[],\"webhook\":{\"status\":\"suppressed\",\"message\":\"The extension was not contacted\"}}","http_response_statuscode":201},{"id":15069,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/72?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/72?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15068,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/69?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/69?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15067,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/70?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/70?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15066,"date":"2018-12-11 22:20:50","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: DELETE /api/v1/tasks/71?permanent=1","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks/71?permanent=1","http_request_method":"DELETE","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json; charset=UTF-8","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:50 GMT","content-type":"application/json"},"http_response_body":"[]","http_response_statuscode":200},{"id":15065,"date":"2018-12-11 22:20:49","type":"api","level":"info","extension":"","extension_ownerid":null,"taskId":0,"userId":2,"event":"API: GET /api/v1/tasks?extension=test-extension-1&order_by=due&order_dir=asc&search=TEST","details":"","data":[],"http_request_url":"http://local.mailbots.com/api/v1/tasks?extension=test-extension-1&order_by=due&order_dir=asc&search=TEST","http_request_method":"GET","http_request_headers":{"accept":"application/json, text/plain, */*","content-type":"application/json","user-agent":"axios/0.17.1","host":"local.mailbots.com","connection":"close","x-php-ob-level":"1"},"http_request_body":"","http_response_headers":{"cache-control":"no-cache","date":"Tue, 11 Dec 2018 22:20:49 GMT","content-type":"application/json"},"http_response_body":"{\"status\":\"success\",\"tasks\":[{\"id\":69,\"hash\":\"a752654e77b2e006a1dd448ed01fd4d6\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a752654e77b2e006a1dd448ed01fd4d6\\/\",\"created\":1544566848,\"trigger_time\":1544570448,\"trigger_timeformat\":\"1hour\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"Subject 1\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2202\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},{\"id\":22,\"hash\":\"e81f28ce67d8d30ea9e7aebf89f92180\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/e81f28ce67d8d30ea9e7aebf89f92180\\/\",\"created\":1544566821,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"test@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"test@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2202\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}},{\"id\":72,\"hash\":\"a752654e77b2e006a1dd448ed01fd4d6\",\"trigger_url\":\"http:\\/\\/local.mailbots.com\\/api\\/v1\\/trigger\\/a752654e77b2e006a1dd448ed01fd4d6\\/\",\"created\":1544566848,\"trigger_time\":null,\"trigger_timeformat\":\"\",\"completed\":false,\"completed_on\":null,\"reference_email\":{\"to\":[\"example@test-extension-1.gopher.email\"],\"cc\":[],\"bcc\":[],\"from\":\"esweetland@gmail.com\",\"reply_to\":\"\",\"subject\":\"TEST: Null due date\",\"html\":\"\",\"text\":\"\",\"attachments\":[]},\"command\":\"example@test-extension-1.gopher.email\",\"stored_data\":null,\"relationships\":{\"user\":{\"userid\":\"2\",\"email_outbound_deferred_monthly\":null,\"email_outbound_bounced_monthly\":null,\"email_outbound_sent_monthly\":null,\"email_outbound_monthly\":null,\"task_created_monthly\":\"2202\",\"email_outbound_last_at\":\"2018-12-11 22:20:22\",\"task_pending\":\"3\",\"id\":2,\"name\":\"Joe Schmoe\",\"primary_email\":\"esweetland@gmail.com\",\"emails\":[\"reilly@isimple.net\",\"ersweetland@icloud.com\",\"esweetland@gmail.com\"],\"is_validated\":true,\"timezone\":\"America\\/Los_Angeles\",\"preferred_date_format\":\"D, F jS Y g:ia T\",\"preferred_date_format_js\":\"ddd, D MMM \\u0027YY [at] h:mma z\",\"postpone_times\":\"8h,1d,3d\",\"flagged\":0,\"validate_sender_email\":false,\"send_dev_errors\":false,\"accepted_terms\":false},\"extension\":{\"name\":\"Test Extension 1\",\"subdomain\":\"test-extension-1\",\"stored_data\":[],\"id\":117,\"icon\":\"https:\\/\\/cdn3.iconfinder.com\\/data\\/icons\\/free-mix\\/128\\/business_office_seo_finance_work_coffee_pause_management-10-128.png\",\"description\":\"\"}}}]}","http_response_statuscode":200}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:41 GMT',
  'Server',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":81,"hash":"bd4d33c677ced84ffe54536f8278bfcb","trigger_url":"http://local.mailbots.com/api/v1/trigger/bd4d33c677ced84ffe54536f8278bfcb/","created":1544566902,"trigger_time":1544570502,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2209","email_outbound_last_at":"2018-12-11 22:20:22","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:42 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"task":{"command":"test@test-extension-1.gopher.email","trigger_timeformat":"15min","reference_email":{"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .reply(201, {"status":"success","task":{"id":82,"hash":"b5c23f84a5a4b91f11bedf0144597014","trigger_url":"http://local.mailbots.com/api/v1/trigger/b5c23f84a5a4b91f11bedf0144597014/","created":1544566903,"trigger_time":1544567803,"trigger_timeformat":"15min","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2210","email_outbound_last_at":"2018-12-11 22:20:22","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1610',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/81')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
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
  'Tue, 11 Dec 2018 22:21:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":83,"hash":"81505260782e9d5602cba88eab769f57","trigger_url":"http://local.mailbots.com/api/v1/trigger/81505260782e9d5602cba88eab769f57/","created":1544566903,"trigger_time":1544570503,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2211","email_outbound_last_at":"2018-12-11 22:20:22","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:43 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":1,"suppress_webhook":true,"task":{"command":"test@test-extension-1.gopher.email","reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"test@example.com","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"},"trigger_time":1520319928,"trigger_timeformat":"3days","completed":false},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":84,"hash":"932c66476cfc59d554bab4d7b0fe8ece","trigger_url":"http://local.mailbots.com/api/v1/trigger/932c66476cfc59d554bab4d7b0fe8ece/","created":1544566904,"trigger_time":1544826104,"trigger_timeformat":"3days","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2212","email_outbound_last_at":"2018-12-11 22:21:44","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"Gopher <gopher@gopher.email>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23872&hash=954a7050a645162cfccbe8c3102bf991\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:43 GMT',
  'Server',
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
  .delete('/api/v1/tasks/83')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
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
  'Tue, 11 Dec 2018 22:21:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":85,"hash":"2d09277fc9d984f8ed69b7c64adc03ad","trigger_url":"http://local.mailbots.com/api/v1/trigger/2d09277fc9d984f8ed69b7c64adc03ad/","created":1544566904,"trigger_time":1544570504,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2213","email_outbound_last_at":"2018-12-11 22:21:44","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:44 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.gopher.email","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":"<h1>This is a test</h1>"}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":86,"hash":"5b679a92536b69baa0a533b22bc1f0b8","trigger_url":"http://local.mailbots.com/api/v1/trigger/5b679a92536b69baa0a533b22bc1f0b8/","created":1544566904,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1544566905,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"<h1>This is a test</h1>","text":" This is a test ","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2214","email_outbound_last_at":"2018-12-11 22:21:45","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"Gopher <gopher@gopher.email>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23873&hash=dd03114b9498e9b25835ce148b7d9b2b\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:44 GMT',
  'Server',
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
  .delete('/api/v1/tasks/86')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/85')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":87,"hash":"e341e8ef2c063caec41d6a86fbd7b897","trigger_url":"http://local.mailbots.com/api/v1/trigger/e341e8ef2c063caec41d6a86fbd7b897/","created":1544566905,"trigger_time":1544570505,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2215","email_outbound_last_at":"2018-12-11 22:21:45","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:45 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":true,"webhook":false,"task":{"command":"test@test-extension-1.gopher.email","trigger_timeformat":null,"completed":true,"reference_email":{"to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","html":""}},"send_messages":[{"type":"email","to":"test@exampletask.com","cc":[],"bcc":[],"subject":"Test1","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":88,"hash":"8c01779a0e187be8a4ef859a3abd1229","trigger_url":"http://local.mailbots.com/api/v1/trigger/8c01779a0e187be8a4ef859a3abd1229/","created":1544566905,"trigger_time":null,"trigger_timeformat":"test","completed":true,"completed_on":1544566906,"reference_email":{"to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2216","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@exampletask.com"],"cc":[],"bcc":[],"from":"Gopher <gopher@gopher.email>","reply_to":null,"subject":"Test1","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>Test1</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23874&hash=28c27cb68196caad73921debb11d49d1\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:45 GMT',
  'Server',
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
  .delete('/api/v1/tasks/87')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/88')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":89,"hash":"b59d4a707df5a37b42fa801102b52fef","trigger_url":"http://local.mailbots.com/api/v1/trigger/b59d4a707df5a37b42fa801102b52fef/","created":1544566906,"trigger_time":1544570506,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2217","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:46 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","tasks":[{"id":89,"hash":"b59d4a707df5a37b42fa801102b52fef","trigger_url":"http://local.mailbots.com/api/v1/trigger/b59d4a707df5a37b42fa801102b52fef/","created":1544566906,"trigger_time":1544570506,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2217","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":22,"hash":"e81f28ce67d8d30ea9e7aebf89f92180","trigger_url":"http://local.mailbots.com/api/v1/trigger/e81f28ce67d8d30ea9e7aebf89f92180/","created":1544566821,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2217","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2944',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/89')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":90,"hash":"7f28754945c4ba2ded432bb87f318022","trigger_url":"http://local.mailbots.com/api/v1/trigger/7f28754945c4ba2ded432bb87f318022/","created":1544566907,"trigger_time":1544570507,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2218","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","tasks":[{"id":90,"hash":"7f28754945c4ba2ded432bb87f318022","trigger_url":"http://local.mailbots.com/api/v1/trigger/7f28754945c4ba2ded432bb87f318022/","created":1544566907,"trigger_time":1544570507,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2218","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:47 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/90')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":91,"hash":"51370df626ae0a8eda5aa3b22dc52512","trigger_url":"http://local.mailbots.com/api/v1/trigger/51370df626ae0a8eda5aa3b22dc52512/","created":1544566908,"trigger_time":1544570508,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2219","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","tasks":[{"id":91,"hash":"51370df626ae0a8eda5aa3b22dc52512","trigger_url":"http://local.mailbots.com/api/v1/trigger/51370df626ae0a8eda5aa3b22dc52512/","created":1544566908,"trigger_time":1544570508,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2219","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:48 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/91')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":92,"hash":"a8ce61278acbffd44582f745e9eb1988","trigger_url":"http://local.mailbots.com/api/v1/trigger/a8ce61278acbffd44582f745e9eb1988/","created":1544566909,"trigger_time":1544570509,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2220","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .get('/api/v1/tasks/92/')
  .reply(200, {"status":"success","task":{"id":92,"hash":"a8ce61278acbffd44582f745e9eb1988","trigger_url":"http://local.mailbots.com/api/v1/trigger/a8ce61278acbffd44582f745e9eb1988/","created":1544566909,"trigger_time":1544570509,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2220","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/92')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:49 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":93,"hash":"78a48a9779ae66c166923abc7bfe0712","trigger_url":"http://local.mailbots.com/api/v1/trigger/78a48a9779ae66c166923abc7bfe0712/","created":1544566910,"trigger_time":1544570510,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2221","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .put('/api/v1/tasks/93/', {"suppress_webhook":true,"task":{"id":93,"reference_email":{"html":"something else new"}}})
  .reply(200, {"status":"success","task":{"id":93,"hash":"78a48a9779ae66c166923abc7bfe0712","trigger_url":"http://local.mailbots.com/api/v1/trigger/78a48a9779ae66c166923abc7bfe0712/","created":1544566910,"trigger_time":1544570510,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"something else new","text":"something else new","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2221","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/93')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":94,"hash":"78a48a9779ae66c166923abc7bfe0712","trigger_url":"http://local.mailbots.com/api/v1/trigger/78a48a9779ae66c166923abc7bfe0712/","created":1544566910,"trigger_time":1544570510,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2222","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:50 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .put('/api/v1/tasks/94/', {"suppress_webhook":true,"task":{"id":94,"trigger_timeformat":"1day"}})
  .reply(200, {"status":"success","task":{"id":94,"hash":"78a48a9779ae66c166923abc7bfe0712","trigger_url":"http://local.mailbots.com/api/v1/trigger/78a48a9779ae66c166923abc7bfe0712/","created":1544566910,"trigger_time":1544653311,"trigger_timeformat":"1day","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2222","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/94')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":95,"hash":"63a9fa5b42332b916fa3a5db201ff0aa","trigger_url":"http://local.mailbots.com/api/v1/trigger/63a9fa5b42332b916fa3a5db201ff0aa/","created":1544566911,"trigger_time":1544570511,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2223","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:51 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .put('/api/v1/tasks/95/', {"task":{"id":95,"trigger_timeformat":"invalid_jibberish"}})
  .reply(400, {"status":"error","type":"invalid_format","message":"An invalid date was provided in trigger_timeformat."}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/95')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":96,"hash":"989eff69e41131809340ea404435969f","trigger_url":"http://local.mailbots.com/api/v1/trigger/989eff69e41131809340ea404435969f/","created":1544566912,"trigger_time":1544570512,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2224","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","valid":true,"time":"2018-12-12 14:21:52 PST","time_gmt":"2018-12-12 22:21:52","time_ts":"1544653312","recurring":false}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/96')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:52 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":97,"hash":"f6205a1d76c6509cbd13e22df98437d8","trigger_url":"http://local.mailbots.com/api/v1/trigger/f6205a1d76c6509cbd13e22df98437d8/","created":1544566913,"trigger_time":1544570513,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2225","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"verbose":1,"task":{"command":"test@test-extension-1.gopher.email","trigger_timeformat":"1sec","reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"bar@bar.email","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"stored_data":{"privatedata1":"Value1"}}})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":98,"hash":"b28d494fb29c9196212cfc2abc410636","trigger_url":"http://local.mailbots.com/api/v1/trigger/b28d494fb29c9196212cfc2abc410636/","created":1544566913,"trigger_time":1544566914,"trigger_timeformat":"1sec","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Test1","html":"Test1","text":"Test1","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":{"privatedata1":"Value1"},"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2226","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/98')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/97')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":99,"hash":"726c562ec9a403dfa6259c10130b256b","trigger_url":"http://local.mailbots.com/api/v1/trigger/726c562ec9a403dfa6259c10130b256b/","created":1544566914,"trigger_time":1544570514,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2227","email_outbound_last_at":"2018-12-11 22:21:46","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:53 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks', {"suppress_webhook":true,"verbose":1,"task":{"command":"test@test-extension-1.gopher.email"},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .query({"verbose":"1"})
  .reply(201, {"status":"success","task":{"id":100,"hash":"dba66d3db9c1fdd7369002cc6d7f37af","trigger_url":"http://local.mailbots.com/api/v1/trigger/dba66d3db9c1fdd7369002cc6d7f37af/","created":1544566914,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2228","email_outbound_last_at":"2018-12-11 22:21:54","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[{"type":"email","to":["test@example.com"],"cc":[],"bcc":[],"from":"Gopher <gopher@gopher.email>","reply_to":null,"subject":"A test email message","html":"<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n   \"http://www.w3.org/TR/html4/loose.dtd\">\n<html>\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <title>A test email message</title>\n    <style type=\"text/css\">\n        body {\n            width:100% !important; \n            -webkit-text-size-adjust:none; \n            -ms-text-size-adjust:none; \n            -moz-text-size-adjust:none;\n            -webkit-font-smoothing: antialiased;\n            margin:0; \n            padding:0;\n\n        }\n\n        .plain_text {\n            padding: 5px;\n        }\n\n        p.tight {\n            margin: 0;\n            font-size: 13px;\n            padding: 0;\n        }\n\n        .grey {\n            color: #aaaaaa;\n            text-decoration: none;\n        }\n\n        .small_footer {\n            /*color: #555555; font-size: 11px !important;*/\n            text-decoration: none;\n        }\n\n        .center {\n            text-align: center;\n        }\n\n        .footer {\n            color: #111111;\n            font-size: 11px;\n            padding-top: 12px !important;\n            line-height: 13px;\n        }\n\n        .fut_blue {\n            color: #0099cc;\n        }\n\n        #fut .announcement {\n            padding-right: 33px;\n        }\n\n        #fut .announcement .header {\n            color: #c09853;\n            background-color: #fcf8e3; \n            padding: 2px;\n            text-decoration: none;\n        }\n\n        #fut .announcement a {\n            color: #aaaaaa;\n            text-decoration: underline;\n        }\n\n        #fut p, #fut h2, #fut h3, #fut li, #fut h1, #fut h4, #fut h5 {\n            font-family: 'Helvetica Neue', Helvetica, Arial; \n            margin: 0; \n            padding: 0;\n            padding-left: 4px;\n        }\n\n        #fut a {\n            font-family: 'Helvetica Neue', Helvetica, Arial;\n            margin: 0;\n            padding: 0;           \n        } \n        \n        #fut img {\n            border: 0;\n            padding: 0;\n            margin: 0;\n        }\n\n        #fut p, #fut li, #fut ul {\n            font-size: 13px; \n            padding-right: 5px;\n            /*margin: 0 0 15px 0; */\n            line-height: 16px;\n            color: #111111;\n            padding-left: 4px;\n        }\n\n        #fut p {\n            padding-bottom: 10px;\n        }\n\n        #fut p.small {\n            font-size: 11px;\n            color: #999;\n        }\n\n        #fut p.spacious {\n            margin-top: 12px;\n        }\n\n        #fut ul, #fut li {\n            margin-left: 5px;\n            padding-left: 5px;            \n        }\n\n\n       #fut h1 {\n            font-size: 19px;\n            margin: 0;\n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n        }\n\n        #fut h1.name {\n            padding-bottom: 0; \n            line-height: 21px;\n            font-size: 22px;\n            font-weight: bold;\n        }\n \n        #fut h2 {\n            font-size: 19px; \n            color: #404040; \n            padding: 5px 5px 5px 4px;\n            font-weight: normal;\n\n        }\n\n        #fut h1.pending {\n            font-size: 23px;\n            margin-top: 0px;\n            padding-top: 0px;\n            padding-left: 4px;\n        }\n\n        #fut h1#email_company_name {\n            font-weight: bold;\n            padding-bottom: 10px;\n\n        }\n\n        #fut p.intro {\n            padding-bottom: 0px;\n            color: #8d8d8d;\n            font-size: 14px;\n        }\n\n        #fut h2.pending {\n            background-color: #eeeeee;\n            border: 1px solid #dddddd;\n            border-width: 1px 0;\n            font-size: 12px;\n            margin-left: -11px;\n            padding: 2px 6px 2px 14px;\n            color: #757575;\n            text-transform: uppercase;\n        }\n\n        #fut .pending_divider {\n            margin-top: 0px;\n            margin-left: -11px;\n            margin-bottom: 7px;\n            border-top: 1px solid #dddddd;\n            padding: 0;\n        }\n\n        #fut .no_border {\n            border: 0;\n        }\n        \n        #fut h2 span.title {\n            font-size: 13px; \n            font-weight: normal;\n            white-space: nowrap;\n        }\n        \n        #fut h2 span.fancy_at {\n            color: #808080;\n        }\n        \n        #fut h3 {\n            font-size: 13px; \n            color: #404040; \n            margin: 15px 5px 3px 0px;\n            padding-bottom: 3px;\n        }\n\n        #fut table.pending h3 {\n            margin-top: 0px;\n        }\n\n        #fut table.pending p {\n            color: #808080;\n            margin-bottom: 0;\n            padding-bottom: 0;\n        }\n\n        #fut table.pending .task_column {\n            padding: 0 0 10px 10px;\n        }\n\n        #fut div.icon {\n            text-align: center;\n            padding: 0px 0 11px 0;\n        }\n\n        #fut h4 {\n            font-size: 12px; \n            color: #8c8c8c; \n            font-weight: normal;\n            text-transform: uppercase;\n            padding-top: 15px; \n            padding-bottom: 2px;           \n        }\n\n        #fut h4.tight {\n            padding-top: 0;\n            padding-bottom: 0;\n\n        }\n        \n        #fut h5 {\n            font-size: 12px; \n            color: #000000;\n            font-weight: normal; \n            padding-left: 4px;\n            padding-top: 6px;\n        }\n        \n        #fut .sub_section {\n            margin-left: 4px;\n            padding-left: 7px;\n            padding-top: 8px;\n        }\n\n        #fut a.button {        \n            background-color: #efefef;\n            color: #111111;\n            -moz-border-radius: 4px; \n            border-radius: 4px; \n            border-bottom: 1px solid #ccc;\n            border-right: 1px solid #ccc;\n            text-decoration: none;\n            font-size: 14px; \n            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; \n            text-align: center;\n            padding: 8px;\n        }\n \n        #fut a.button.large {\n            display: block;\n        }\n \n        #fut a.button.small {\n            display: inline;\n            line-height: 34px;\n            margin: 4px 0px;\n        }\n \n        #fut a.button td.label {\n            width: 80px; color: #aaa; font-size: 12px;\n        }\n \n        #fut div.buttons {\n            white-space: nowrap;\n            width:100%;\n            margin-top: 0px;\n        }\n\n        #fut img.logo {\n            margin: 0; \n            border: 0;\n            padding: 0;\n            padding-top: 4px;\n        }\n         \n        #fut .inner_container {\n            padding-left: 8px;\n        }\n  \n        #fut .button_column {\n            padding-right: 8px;\n        }\n \n        #fut .activity_column {\n            padding-left: 6px;\n        }\n \n        \n        #fut .activity_column h3 {\n            margin: 20px 0 3px 0;\n        }\n        \n        #fut .activity_column h4 {\n            margin: 0;\n        }\n \n        #fut .postpone {\n            padding-top: 3px;\n        }\n\n        #fut .postpone h3 {\n            margin-top: 10px;\n        }\n        \n        #fut .futlink {\n            white-space: nowrap;\n            color: #111111;\n        }\n\n        #fut .soft_error {\n            padding: 15px; \n            background-color: #fcf8e3; \n            border-color: #fbeed5; \n            border-style: solid; \n            margin: 15px 15px 5px 0;\n            border-width: 1px; \n            color: #c09853;\n\t\t\tfont-family: 'Helvetica Neue', Helvetica, Arial;\n\t\t\tfont-size: 12px;\n\t\t}\n\n        #fut table.search_result td {\n            font-size: 12px;\n        }\n\n        #fut table.search_result td.label {\n            padding-right: 20px;\n            font-size: 12px;\n        }\n\n        #fut table.pending {\n            margin-left: -4px;\n        }\n\n        #fut div.callout {\n            background: #CFE1EF; \n            padding: 8px; \n            margin-bottom: 8px;\n            -moz-border-radius: 3px; \n            -webkit-border-radius: 3px; \n            border-radius: 3px; \n            text-align: left; \n            line-height: 20px;\n            margin-right: 10px;\n        }\n\n        #fut div.callout em {\n            font-family: Georgia, serif; \n            font-weight: bold; \n            color: #609FE5; \n            font-style: italic;\n        }\n\n        #fut div.callout a {\n            color: #3A638C;\n            text-decoration: underline; \n            font-weight: bold;\n        }\n\n        #fut div.hr {\n            border-bottom: 1px solid #cccccc;\n            margin: 5px 0;\n        }\n\n        #fut div.time {\n            font-size: 13px;\n            font-weight: bold;\n            color: #0080ac;\n            text-align: center;\n            margin: 0;\n            padding-top: 2px;\n            padding-bottom: 9px;\n            padding-right: 0;\n            padding-left: 0;\n        }\n\n        /* overides for iOS auto-linking of times */\n        #fut div.time a {\n            color: #0080ac;\n            text-decoration: none;\n        }\n\n        .nolink {\n            color: #111111;\n            text-decoration: none;\n        }\n\n        p.lead {\n            padding-top: 20px;\n            font-size: 17px !important;\n            color: #5c5c5c !important;\n            line-height: 21px !important;\n        }\n\n        h1.black {\n            color: #000 !important;\n            font-weight: bold !important;\n            font-size: 25px !important;\n        }\n\n\n</style>\n\n\n<style type=\"text/css\">\nbody {\nwidth: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\n}\n</style>\n</head>\n<body bgcolor=\"#ffffff\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" style=\"width: 100% !important; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -moz-text-size-adjust: none; -webkit-font-smoothing: antialiased; margin: 0; padding: 0;\">\n<table id=\"fut\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\">\n  <tr>\n    <td align=\"left\" valign=\"top\" bgcolor=\"#ffffff\" style=\"padding-left: 15px;\">\n        <!-- header end -->\n\n<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial; font-size: 13px; line-height: 16px; color: #111111; margin: 0; padding: 0 5px 0 4px;\"><h1>This is a test</h1></p>\n\n<!-- footer start -->\n<br />\n<table class=\"footer\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-top-width: 1px; border-top-color: #efefef; border-top-style: solid; border-bottom-width: 1px; border-bottom-color: #efefef; border-bottom-style: solid; color: #111111; font-size: 11px; line-height: 13px; padding: 12px 10px 10px;\">\n    <tr>\n        <td width=\"75px\" valign=\"middle\">\n            <a class=\"logo\" href=\"https://www.gopher.email\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\"><img style=\"margin: 0 0 0 3px; padding: 4px 0 0; border: 0;\" src=\"http://local.followupthen.com/assets/gopher/gopher-logo-black.png\" class=\"logo\" height=\"25\" border=\"0\" /></a>\n        </td>\n        <td valign=\"middle\">\n            <p class=\"footer grey\" style=\"color: #111111; text-decoration: none; font-size: 13px; line-height: 16px; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 12px 5px 10px 4px;\">Get things done without leaving your inbox. This is a beta release. <a class=\"grey\" href=\"mailto:help+gopher@humans.fut.io\" style=\"color: #aaaaaa; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial; margin: 0; padding: 0;\">What do you think?</a>\n        </p>\n        </td>\n    </tr>\n</table>\n    </td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n<img src=\"http://local.followupthen.com/tracker?id=23875&hash=253b327b38b247f9b8657f39d50a1607\" width=\"1\" height=\"1\" border=\"0\"></img>","text":"","attachments":[]}],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:54 GMT',
  'Server',
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
  .delete('/api/v1/tasks/100')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/99')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":101,"hash":"01e3c5e70eac3cb462fa566ff9882fab","trigger_url":"http://local.mailbots.com/api/v1/trigger/01e3c5e70eac3cb462fa566ff9882fab/","created":1544566915,"trigger_time":1544570515,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2229","email_outbound_last_at":"2018-12-11 22:21:54","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:54 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"test@test-extension-1.gopher.email","reference_email":{"server_recipient":"test@test-extension-1.gopher.email"}},"send_messages":[{"type":"email","subject":"A test email message","to":"test@example.com","body":[{"type":"html","text":"<h1>This is a test</h1>"}]}]})
  .reply(201, {"status":"success","task":{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2230","email_outbound_last_at":"2018-12-11 22:21:54","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1564',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/')
  .reply(200, {"status":"success","task":{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2230","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:55 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/101')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":103,"hash":"6697becfd655c5bca24a4a45b319990d","trigger_url":"http://local.mailbots.com/api/v1/trigger/6697becfd655c5bca24a4a45b319990d/","created":1544566916,"trigger_time":1544570516,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2231","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .put('/api/v1/tasks/103', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":103,"hash":"6697becfd655c5bca24a4a45b319990d","trigger_url":"http://local.mailbots.com/api/v1/trigger/6697becfd655c5bca24a4a45b319990d/","created":1544566916,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544566916,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2231","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"0","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1511',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/103/')
  .reply(200, {"status":"success","task":{"id":103,"hash":"6697becfd655c5bca24a4a45b319990d","trigger_url":"http://local.mailbots.com/api/v1/trigger/6697becfd655c5bca24a4a45b319990d/","created":1544566916,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544566916,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2231","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"0","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:56 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/103')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":104,"hash":"b7f95b85d0f6885e604322e0ef38d6f8","trigger_url":"http://local.mailbots.com/api/v1/trigger/b7f95b85d0f6885e604322e0ef38d6f8/","created":1544566917,"trigger_time":1544570517,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2232","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .put('/api/v1/tasks/104', {"task":{"completed":true}})
  .reply(200, {"status":"success","task":{"id":104,"hash":"b7f95b85d0f6885e604322e0ef38d6f8","trigger_url":"http://local.mailbots.com/api/v1/trigger/b7f95b85d0f6885e604322e0ef38d6f8/","created":1544566917,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544566917,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2232","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"0","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1511',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"search":"Subject%201","status":"completed"})
  .reply(200, {"status":"success","tasks":[{"id":104,"hash":"b7f95b85d0f6885e604322e0ef38d6f8","trigger_url":"http://local.mailbots.com/api/v1/trigger/b7f95b85d0f6885e604322e0ef38d6f8/","created":1544566917,"trigger_time":null,"trigger_timeformat":"1hour","completed":true,"completed_on":1544566917,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2232","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"0","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:57 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/104')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":105,"hash":"e316b5eaeebd1d24c41bb97a79b58d18","trigger_url":"http://local.mailbots.com/api/v1/trigger/e316b5eaeebd1d24c41bb97a79b58d18/","created":1544566918,"trigger_time":1544570518,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2233","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/105')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:21:58 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks/105/')
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/105')
  .query({"permanent":"1"})
  .reply(404, {"status":"error","type":"task_not_found"}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":106,"hash":"7f0e8124bad4ba02ca6a67fa9e22fa34","trigger_url":"http://local.mailbots.com/api/v1/trigger/7f0e8124bad4ba02ca6a67fa9e22fa34/","created":1544566919,"trigger_time":1544570519,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2234","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":107,"hash":"1a5298a3dcf62e088177a1980775f5ae","trigger_url":"http://local.mailbots.com/api/v1/trigger/1a5298a3dcf62e088177a1980775f5ae/","created":1544566919,"trigger_time":2175718919,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2235","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":108,"hash":"51cfefc373095571ca201fef8b3c7e04","trigger_url":"http://local.mailbots.com/api/v1/trigger/51cfefc373095571ca201fef8b3c7e04/","created":1544566919,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"534","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:21:59 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":109,"hash":"53192af2d336927a4b6bc896f44ca90d","trigger_url":"http://local.mailbots.com/api/v1/trigger/53192af2d336927a4b6bc896f44ca90d/","created":1544566920,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2236","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","search":"Subject"})
  .reply(200, {"status":"success","tasks":[{"id":106,"hash":"7f0e8124bad4ba02ca6a67fa9e22fa34","trigger_url":"http://local.mailbots.com/api/v1/trigger/7f0e8124bad4ba02ca6a67fa9e22fa34/","created":1544566919,"trigger_time":1544570519,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2236","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/106')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/108')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/109')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/107')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:00 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":110,"hash":"59f4a0b8e0f0e097ff22bb55a80918d0","trigger_url":"http://local.mailbots.com/api/v1/trigger/59f4a0b8e0f0e097ff22bb55a80918d0/","created":1544566921,"trigger_time":1544570521,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2237","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":111,"hash":"38ef5c08eb1d38382e9897411d0b4868","trigger_url":"http://local.mailbots.com/api/v1/trigger/38ef5c08eb1d38382e9897411d0b4868/","created":1544566921,"trigger_time":2175718921,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2238","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":112,"hash":"cf4e3653fec08fdba08cc2bdab9eccf3","trigger_url":"http://local.mailbots.com/api/v1/trigger/cf4e3653fec08fdba08cc2bdab9eccf3/","created":1544566922,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"535","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:01 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":113,"hash":"4f65efbf05bd9c1324ea7d74e63e46c3","trigger_url":"http://local.mailbots.com/api/v1/trigger/4f65efbf05bd9c1324ea7d74e63e46c3/","created":1544566922,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2239","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"to":"Joe<joe@example.com>","subject":"Hi Joe"}}})
  .reply(201, {"status":"success","task":{"id":114,"hash":"d4c0df1a1474702631eb6188be854146","trigger_url":"http://local.mailbots.com/api/v1/trigger/d4c0df1a1474702631eb6188be854146/","created":1544566922,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Hi Joe","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"536","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/113')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/112')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/111')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/110')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/114')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:02 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":115,"hash":"25cd927f6a2bdad29777ecafb075591d","trigger_url":"http://local.mailbots.com/api/v1/trigger/25cd927f6a2bdad29777ecafb075591d/","created":1544566923,"trigger_time":1544570523,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2240","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":116,"hash":"57f39ef48c4abe78e29585b4489bc626","trigger_url":"http://local.mailbots.com/api/v1/trigger/57f39ef48c4abe78e29585b4489bc626/","created":1544566923,"trigger_time":2175718923,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2241","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":117,"hash":"068c6f984a0566b84e5ffd0aaa330677","trigger_url":"http://local.mailbots.com/api/v1/trigger/068c6f984a0566b84e5ffd0aaa330677/","created":1544566923,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"537","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:03 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":118,"hash":"d90d661d3c05934b109e3436b4caee32","trigger_url":"http://local.mailbots.com/api/v1/trigger/d90d661d3c05934b109e3436b4caee32/","created":1544566924,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2242","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"to":"joe@example.com","subject":"Zuki"}}})
  .reply(201, {"status":"success","task":{"id":119,"hash":"11e4ba102b0d545dbec81c442ae10faa","trigger_url":"http://local.mailbots.com/api/v1/trigger/11e4ba102b0d545dbec81c442ae10faa/","created":1544566924,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Zuki","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"538","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1545',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/118')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/116')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/115')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/119')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/117')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:04 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":120,"hash":"90959d5a7b37858a49dbdc96183051bf","trigger_url":"http://local.mailbots.com/api/v1/trigger/90959d5a7b37858a49dbdc96183051bf/","created":1544566925,"trigger_time":1544570525,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2243","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":121,"hash":"6ffe28cfcdf9eb7fced402e816deb3e2","trigger_url":"http://local.mailbots.com/api/v1/trigger/6ffe28cfcdf9eb7fced402e816deb3e2/","created":1544566925,"trigger_time":2175718925,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2244","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":122,"hash":"68cdb415619dd44e0badc54566c4fb6c","trigger_url":"http://local.mailbots.com/api/v1/trigger/68cdb415619dd44e0badc54566c4fb6c/","created":1544566925,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"539","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":123,"hash":"8eb16cd94e8d8f7ba47af32971bd2aeb","trigger_url":"http://local.mailbots.com/api/v1/trigger/8eb16cd94e8d8f7ba47af32971bd2aeb/","created":1544566926,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2245","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:05 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"search":"Space%20Ships%21"})
  .reply(200, {"status":"success","tasks":[{"id":121,"hash":"6ffe28cfcdf9eb7fced402e816deb3e2","trigger_url":"http://local.mailbots.com/api/v1/trigger/6ffe28cfcdf9eb7fced402e816deb3e2/","created":1544566925,"trigger_time":2175718925,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2245","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1484',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/123')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/120')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/121')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/122')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":124,"hash":"7f4955fb2216aff9dbd4bb7df0b16f76","trigger_url":"http://local.mailbots.com/api/v1/trigger/7f4955fb2216aff9dbd4bb7df0b16f76/","created":1544566927,"trigger_time":1544570527,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2246","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:06 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":125,"hash":"e3d7251ea8cad344eeee02b810571ccb","trigger_url":"http://local.mailbots.com/api/v1/trigger/e3d7251ea8cad344eeee02b810571ccb/","created":1544566927,"trigger_time":2175718927,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2247","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":126,"hash":"8ff80fe149487cdeb9933ecee13cbed4","trigger_url":"http://local.mailbots.com/api/v1/trigger/8ff80fe149487cdeb9933ecee13cbed4/","created":1544566927,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"540","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:07 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":127,"hash":"c1904d1c8458a4abe7417969e09f4060","trigger_url":"http://local.mailbots.com/api/v1/trigger/c1904d1c8458a4abe7417969e09f4060/","created":1544566928,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2248","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"search":"joe%40example.com"})
  .reply(200, {"status":"success","tasks":[{"id":125,"hash":"e3d7251ea8cad344eeee02b810571ccb","trigger_url":"http://local.mailbots.com/api/v1/trigger/e3d7251ea8cad344eeee02b810571ccb/","created":1544566927,"trigger_time":2175718927,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2248","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1484',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/127')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/125')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/124')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/126')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:08 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":128,"hash":"32525e32dcb56c548f8a464835207539","trigger_url":"http://local.mailbots.com/api/v1/trigger/32525e32dcb56c548f8a464835207539/","created":1544566929,"trigger_time":1544570529,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2249","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":129,"hash":"993cbf01da3eeef8165c68170b250511","trigger_url":"http://local.mailbots.com/api/v1/trigger/993cbf01da3eeef8165c68170b250511/","created":1544566929,"trigger_time":2175718929,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2250","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":130,"hash":"9514b57e796f35911044f3ef378124d9","trigger_url":"http://local.mailbots.com/api/v1/trigger/9514b57e796f35911044f3ef378124d9/","created":1544566929,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"541","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:09 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":131,"hash":"d56f5ab425212a0bf65ae7839851cc4c","trigger_url":"http://local.mailbots.com/api/v1/trigger/d56f5ab425212a0bf65ae7839851cc4c/","created":1544566930,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2251","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc"})
  .reply(200, {"status":"success","tasks":[{"id":129,"hash":"993cbf01da3eeef8165c68170b250511","trigger_url":"http://local.mailbots.com/api/v1/trigger/993cbf01da3eeef8165c68170b250511/","created":1544566929,"trigger_time":2175718929,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2251","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":128,"hash":"32525e32dcb56c548f8a464835207539","trigger_url":"http://local.mailbots.com/api/v1/trigger/32525e32dcb56c548f8a464835207539/","created":1544566929,"trigger_time":1544570529,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2251","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":22,"hash":"e81f28ce67d8d30ea9e7aebf89f92180","trigger_url":"http://local.mailbots.com/api/v1/trigger/e81f28ce67d8d30ea9e7aebf89f92180/","created":1544566821,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2251","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":131,"hash":"d56f5ab425212a0bf65ae7839851cc4c","trigger_url":"http://local.mailbots.com/api/v1/trigger/d56f5ab425212a0bf65ae7839851cc4c/","created":1544566930,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2251","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2251","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '7314',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/130')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/128')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/131')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/129')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:10 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":132,"hash":"8bc99927a256265722206eab903f150e","trigger_url":"http://local.mailbots.com/api/v1/trigger/8bc99927a256265722206eab903f150e/","created":1544566931,"trigger_time":1544570531,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2252","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":133,"hash":"535c4f512a87ebac93616869f58fb7c2","trigger_url":"http://local.mailbots.com/api/v1/trigger/535c4f512a87ebac93616869f58fb7c2/","created":1544566931,"trigger_time":2175718931,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2253","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":134,"hash":"f071879080653fcaa102b5f059505e42","trigger_url":"http://local.mailbots.com/api/v1/trigger/f071879080653fcaa102b5f059505e42/","created":1544566931,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"542","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:11 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":135,"hash":"7c2f5fd561e0fb57ccf3197835891d68","trigger_url":"http://local.mailbots.com/api/v1/trigger/7c2f5fd561e0fb57ccf3197835891d68/","created":1544566932,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2254","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc"})
  .reply(200, {"status":"success","tasks":[{"id":132,"hash":"8bc99927a256265722206eab903f150e","trigger_url":"http://local.mailbots.com/api/v1/trigger/8bc99927a256265722206eab903f150e/","created":1544566931,"trigger_time":1544570531,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2254","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":133,"hash":"535c4f512a87ebac93616869f58fb7c2","trigger_url":"http://local.mailbots.com/api/v1/trigger/535c4f512a87ebac93616869f58fb7c2/","created":1544566931,"trigger_time":2175718931,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2254","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":22,"hash":"e81f28ce67d8d30ea9e7aebf89f92180","trigger_url":"http://local.mailbots.com/api/v1/trigger/e81f28ce67d8d30ea9e7aebf89f92180/","created":1544566821,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2254","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":135,"hash":"7c2f5fd561e0fb57ccf3197835891d68","trigger_url":"http://local.mailbots.com/api/v1/trigger/7c2f5fd561e0fb57ccf3197835891d68/","created":1544566932,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2254","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2254","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:12 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '7314',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/132')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/134')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/133')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/135')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":136,"hash":"719c68c9c3ff1c48489befc8c465e08b","trigger_url":"http://local.mailbots.com/api/v1/trigger/719c68c9c3ff1c48489befc8c465e08b/","created":1544566933,"trigger_time":1544570533,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2255","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":137,"hash":"1b3f4f7bdff7e3d2848d51d946ec74c1","trigger_url":"http://local.mailbots.com/api/v1/trigger/1b3f4f7bdff7e3d2848d51d946ec74c1/","created":1544566933,"trigger_time":2175718933,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2256","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:13 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":138,"hash":"c8865fc6602dc4895199b880b825b061","trigger_url":"http://local.mailbots.com/api/v1/trigger/c8865fc6602dc4895199b880b825b061/","created":1544566934,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"543","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":139,"hash":"262c0edd5d7f87f2889827a664bbdedd","trigger_url":"http://local.mailbots.com/api/v1/trigger/262c0edd5d7f87f2889827a664bbdedd/","created":1544566934,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2257","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"due_after":"1859926934","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":137,"hash":"1b3f4f7bdff7e3d2848d51d946ec74c1","trigger_url":"http://local.mailbots.com/api/v1/trigger/1b3f4f7bdff7e3d2848d51d946ec74c1/","created":1544566933,"trigger_time":2175718933,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2257","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1484',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/139')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/137')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/136')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/138')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:14 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":140,"hash":"4d2270cfe22dec4c857b51e77e773199","trigger_url":"http://local.mailbots.com/api/v1/trigger/4d2270cfe22dec4c857b51e77e773199/","created":1544566935,"trigger_time":1544570535,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2258","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":141,"hash":"418f5b0061a06b018d0fd34236a474bc","trigger_url":"http://local.mailbots.com/api/v1/trigger/418f5b0061a06b018d0fd34236a474bc/","created":1544566935,"trigger_time":2175718935,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2259","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":142,"hash":"9fd084c40a913b2226cf2e8c9527fa13","trigger_url":"http://local.mailbots.com/api/v1/trigger/9fd084c40a913b2226cf2e8c9527fa13/","created":1544566935,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"544","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:15 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":143,"hash":"a0b4aa1ea41bf8305b85599fb3598d07","trigger_url":"http://local.mailbots.com/api/v1/trigger/a0b4aa1ea41bf8305b85599fb3598d07/","created":1544566936,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2260","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Twenty Minutes"},"trigger_timeformat":"20min"}})
  .reply(201, {"status":"success","task":{"id":144,"hash":"a0b4aa1ea41bf8305b85599fb3598d07","trigger_url":"http://local.mailbots.com/api/v1/trigger/a0b4aa1ea41bf8305b85599fb3598d07/","created":1544566936,"trigger_time":1544568136,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2261","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:16 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1595',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"due_before":"1544568737","extension":"test-extension-1"})
  .reply(200, {"status":"success","tasks":[{"id":144,"hash":"a0b4aa1ea41bf8305b85599fb3598d07","trigger_url":"http://local.mailbots.com/api/v1/trigger/a0b4aa1ea41bf8305b85599fb3598d07/","created":1544566936,"trigger_time":1544568136,"trigger_timeformat":"20min","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Twenty Minutes","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2261","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":22,"hash":"e81f28ce67d8d30ea9e7aebf89f92180","trigger_url":"http://local.mailbots.com/api/v1/trigger/e81f28ce67d8d30ea9e7aebf89f92180/","created":1544566821,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2261","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":143,"hash":"a0b4aa1ea41bf8305b85599fb3598d07","trigger_url":"http://local.mailbots.com/api/v1/trigger/a0b4aa1ea41bf8305b85599fb3598d07/","created":1544566936,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2261","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2261","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"4","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5865',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/142')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/143')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/141')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/144')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/140')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":145,"hash":"637952b844f404d5c25eae9353b536c1","trigger_url":"http://local.mailbots.com/api/v1/trigger/637952b844f404d5c25eae9353b536c1/","created":1544566937,"trigger_time":1544570537,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2262","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:17 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":146,"hash":"551ff344c6940b25fe59c984361cc8b1","trigger_url":"http://local.mailbots.com/api/v1/trigger/551ff344c6940b25fe59c984361cc8b1/","created":1544566938,"trigger_time":2175718938,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2263","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":147,"hash":"4817bedc735558067a230bc9bf0b3ee8","trigger_url":"http://local.mailbots.com/api/v1/trigger/4817bedc735558067a230bc9bf0b3ee8/","created":1544566938,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"545","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":148,"hash":"57ede382cb89fd9d7c68de4752cf11c4","trigger_url":"http://local.mailbots.com/api/v1/trigger/57ede382cb89fd9d7c68de4752cf11c4/","created":1544566939,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2264","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:18 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":145,"hash":"637952b844f404d5c25eae9353b536c1","trigger_url":"http://local.mailbots.com/api/v1/trigger/637952b844f404d5c25eae9353b536c1/","created":1544566937,"trigger_time":1544570537,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2264","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/146')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/147')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/148')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/145')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":149,"hash":"fe35a619051e0225cc9021ce8cf96e64","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe35a619051e0225cc9021ce8cf96e64/","created":1544566940,"trigger_time":1544570540,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2265","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:19 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":150,"hash":"926ddb3fee490c06fc33910ec5ec74b4","trigger_url":"http://local.mailbots.com/api/v1/trigger/926ddb3fee490c06fc33910ec5ec74b4/","created":1544566940,"trigger_time":2175718940,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2266","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":151,"hash":"e2ffe90bcb96134a54ead5f817db29fc","trigger_url":"http://local.mailbots.com/api/v1/trigger/e2ffe90bcb96134a54ead5f817db29fc/","created":1544566940,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"546","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":152,"hash":"fe35a619051e0225cc9021ce8cf96e64","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe35a619051e0225cc9021ce8cf96e64/","created":1544566940,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:20 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"desc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":149,"hash":"fe35a619051e0225cc9021ce8cf96e64","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe35a619051e0225cc9021ce8cf96e64/","created":1544566940,"trigger_time":1544570540,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":22,"hash":"e81f28ce67d8d30ea9e7aebf89f92180","trigger_url":"http://local.mailbots.com/api/v1/trigger/e81f28ce67d8d30ea9e7aebf89f92180/","created":1544566821,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":152,"hash":"fe35a619051e0225cc9021ce8cf96e64","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe35a619051e0225cc9021ce8cf96e64/","created":1544566940,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5860',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .get('/api/v1/tasks')
  .query({"extension":"test-extension-1","order_by":"due","order_dir":"asc","search":"TEST"})
  .reply(200, {"status":"success","tasks":[{"id":149,"hash":"fe35a619051e0225cc9021ce8cf96e64","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe35a619051e0225cc9021ce8cf96e64/","created":1544566940,"trigger_time":1544570540,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":22,"hash":"e81f28ce67d8d30ea9e7aebf89f92180","trigger_url":"http://local.mailbots.com/api/v1/trigger/e81f28ce67d8d30ea9e7aebf89f92180/","created":1544566821,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":152,"hash":"fe35a619051e0225cc9021ce8cf96e64","trigger_url":"http://local.mailbots.com/api/v1/trigger/fe35a619051e0225cc9021ce8cf96e64/","created":1544566940,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},{"id":102,"hash":"29485530b92e28ba66376c09a12d7a0e","trigger_url":"http://local.mailbots.com/api/v1/trigger/29485530b92e28ba66376c09a12d7a0e/","created":1544566915,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["test@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"","html":"","text":"","attachments":[]},"command":"test@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2267","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '5860',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/152')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/150')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/151')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/149')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:21 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":153,"hash":"4b161e1007f99cc02532364ed34772d7","trigger_url":"http://local.mailbots.com/api/v1/trigger/4b161e1007f99cc02532364ed34772d7/","created":1544566942,"trigger_time":1544570542,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2268","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":154,"hash":"c245f5c07aa8519390ea003d21fdd39b","trigger_url":"http://local.mailbots.com/api/v1/trigger/c245f5c07aa8519390ea003d21fdd39b/","created":1544566942,"trigger_time":2175718942,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2269","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":155,"hash":"c489ff4269b9602c116f3cdc3842a01e","trigger_url":"http://local.mailbots.com/api/v1/trigger/c489ff4269b9602c116f3cdc3842a01e/","created":1544566942,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"547","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:22 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":156,"hash":"cb54f6ec8e9bf400a0570f8f3d714eb9","trigger_url":"http://local.mailbots.com/api/v1/trigger/cb54f6ec8e9bf400a0570f8f3d714eb9/","created":1544566943,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2270","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .query({"extension":"test-extension-1","page":"1","per_page":"1"})
  .reply(200, {"status":"success","tasks":[{"id":154,"hash":"c245f5c07aa8519390ea003d21fdd39b","trigger_url":"http://local.mailbots.com/api/v1/trigger/c245f5c07aa8519390ea003d21fdd39b/","created":1544566942,"trigger_time":2175718942,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2270","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1484',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/156')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/153')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/154')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/155')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Subject 1"},"trigger_timeformat":"1hour"}})
  .reply(201, {"status":"success","task":{"id":157,"hash":"cb54f6ec8e9bf400a0570f8f3d714eb9","trigger_url":"http://local.mailbots.com/api/v1/trigger/cb54f6ec8e9bf400a0570f8f3d714eb9/","created":1544566943,"trigger_time":1544570544,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2271","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"1","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:23 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"Space Ships!","to":["joe@example.com"]},"trigger_timeformat":"20years"}})
  .reply(201, {"status":"success","task":{"id":158,"hash":"56d7993d27e4d4966a5a24ddbbe8c0d2","trigger_url":"http://local.mailbots.com/api/v1/trigger/56d7993d27e4d4966a5a24ddbbe8c0d2/","created":1544566944,"trigger_time":2175718944,"trigger_timeformat":"20years","completed":false,"completed_on":null,"reference_email":{"to":["joe@example.com"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Space Ships!","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2272","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"2","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-2.gopher.email","reference_email":{"subject":"TEST: Subject 2"},"trigger_timeformat":"tomorrow"}})
  .reply(201, {"status":"success","task":{"id":159,"hash":"fa78e98191a30268b4e619b34b820f92","trigger_url":"http://local.mailbots.com/api/v1/trigger/fa78e98191a30268b4e619b34b820f92/","created":1544566944,"trigger_time":1544623200,"trigger_timeformat":"tomorrow","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-2.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Subject 2","html":"","text":"","attachments":[]},"command":"example@test-extension-2.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"548","email_outbound_last_at":"2018-12-11 14:08:07","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 2","subdomain":"test-extension-2","stored_data":[],"id":118,"icon":"https://cdn3.iconfinder.com/data/icons/product-management-color/64/absorbing-absorb-digest-message-imbibe-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '1592',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .post('/api/v1/tasks/', {"suppress_webhook":true,"task":{"command":"example@test-extension-1.gopher.email","reference_email":{"subject":"TEST: Null due date"}}})
  .reply(201, {"status":"success","task":{"id":160,"hash":"a22b0de64761a15662fb971ce2d8200e","trigger_url":"http://local.mailbots.com/api/v1/trigger/a22b0de64761a15662fb971ce2d8200e/","created":1544566945,"trigger_time":null,"trigger_timeformat":"","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"TEST: Null due date","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2273","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}},"messages":[],"webhook":{"status":"suppressed","message":"The extension was not contacted"}}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:24 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .reply(200, {"status":"success","tasks":[{"id":157,"hash":"cb54f6ec8e9bf400a0570f8f3d714eb9","trigger_url":"http://local.mailbots.com/api/v1/trigger/cb54f6ec8e9bf400a0570f8f3d714eb9/","created":1544566943,"trigger_time":1544570544,"trigger_timeformat":"1hour","completed":false,"completed_on":null,"reference_email":{"to":["example@test-extension-1.gopher.email"],"cc":[],"bcc":[],"from":"esweetland@gmail.com","reply_to":"","subject":"Subject 1","html":"","text":"","attachments":[]},"command":"example@test-extension-1.gopher.email","stored_data":null,"relationships":{"user":{"userid":"2","email_outbound_deferred_monthly":null,"email_outbound_bounced_monthly":null,"email_outbound_sent_monthly":null,"email_outbound_monthly":null,"task_created_monthly":"2273","email_outbound_last_at":"2018-12-11 22:21:55","task_pending":"3","id":2,"name":"Joe Schmoe","primary_email":"esweetland@gmail.com","emails":["reilly@isimple.net","ersweetland@icloud.com","esweetland@gmail.com"],"is_validated":true,"timezone":"America/Los_Angeles","preferred_date_format":"D, F jS Y g:ia T","preferred_date_format_js":"ddd, D MMM 'YY [at] h:mma z","postpone_times":"8h,1d,3d","flagged":0,"validate_sender_email":false,"send_dev_errors":false,"accepted_terms":false},"extension":{"name":"Test Extension 1","subdomain":"test-extension-1","stored_data":[],"id":117,"icon":"https://cdn3.iconfinder.com/data/icons/free-mix/128/business_office_seo_finance_work_coffee_pause_management-10-128.png","description":""}}}]}, [ 'Date',
  'Tue, 11 Dec 2018 22:22:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  .delete('/api/v1/tasks/159')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/158')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/157')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
  'Access-Control-Allow-Methods',
  'GET, POST, PUT ,DELETE, OPTIONS',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Content-Type',
  'application/json' ]);

nock('http://local.mailbots.com:80', {"encodedQueryParams":true})
  .delete('/api/v1/tasks/160')
  .query({"permanent":"1"})
  .reply(200, [], [ 'Date',
  'Tue, 11 Dec 2018 22:22:25 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Cache-Control',
  'no-cache',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Headers',
  'authorization, Content-Type, cache-control, postman-token',
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
  'Tue, 11 Dec 2018 22:22:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Tue, 11 Dec 2018 22:22:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Tue, 11 Dec 2018 22:22:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Tue, 11 Dec 2018 22:22:26 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
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
  'Tue, 11 Dec 2018 22:22:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=8c7s3uu0b3berld4s2nprgkm26; path=/',
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
  'Tue, 11 Dec 2018 22:22:27 GMT',
  'Server',
  'Apache/2.4.10 (Debian)',
  'Set-Cookie',
  'PHPSESSID=n4q9bt8glt84iaj42h7ieejvj3; path=/',
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
