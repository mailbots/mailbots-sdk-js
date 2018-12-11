//auto-generated file
    
var nock = require('nock');
    
//pass through unhandled requests
    
nock("http://local.gopher.email:80", { allowUnmocked: true }).get("/fdsa").reply(200, 'ok');