var mocha = require('mocha');
var expect = require('chai').expect;
var request = require('request');
var nock = require('nock');
var futTestUtils = require('./futTestUtils');
var Fut = require('../fut');
var futClient = {};

// Test these endpoints against an instance of the FUT core API by:
//  1. Modifying this URL point to an install of FUT Core.
//  2. Login and copy the value of fut_token from your cookie.
//  3. Flip the NOCK_OFF switch below.
//  4. Optoinally turn on the nock recorder mock the request
// (Note that this will actually modify whichever account is registered)
// This can also be used to update this test lib when if / when the API changes
var mockedApiHost = 'http://local.followupthen.com';
var accessToken = 'cb273cbcfd1dbbbda9967e66db34a8de97abf396';
// process.env.NOCK_OFF = true;
// nock.recorder.rec();

var verifyRequest = {
  reqheaders: {
    authorization: function(header) {
      return (header === "Bearer " + accessToken);
    }
  }
}

function getFutClient() {
  var futClient = new Fut(
    {
      clientId: 'ext_03112dd8e958113b7be1b406916feb6c',
      clientSecret: '56d277ebce1ec1e834a1bc8a2acf5d53bda591bf00d4cec4faa2bfd45e8a6a98',
      redirectUri:'http://localhost:3002/callback',
      scope: 'get_user_info extension_manage_self manage_reminders read_reminders',
      apiHost: mockedApiHost,
      tokenHost: mockedApiHost,
      tokenPath: mockedApiHost + '/api/v1/oauth2/access_token',
      authorizePath: mockedApiHost + '/settings/oauth2_authorize'
  });
  futClient.setAccessToken(accessToken);
  // futClient.setAccessToken('7297f3ee08fb6f6b8c509844f90de7f0820de7fa');
  return futClient;
}

describe('FollowUpThen REST API', () => {
  beforeEach(() => {
    futClient = getFutClient();
  });


  it('should get a list of followups with a callback', (done) => {
    nock(mockedApiHost)
      .get(/\/api\/v1\/reminders\/.*/)
      .reply(200, [{
          "id": "1080",
          "status": "parsed",
          "due": "Sun, June 25th 2017 2:17pm PDT",
          "tags": [],
          "friendly_tags": "",
          "due_timestamp": 1498425449,
          "created_timestamp": 1497820649,
          "friendly_due": "Sun, June 25th 2017 2:17pm PDT",
          "twenty_four_hour_time": "",
          "completed_on_timestamp": "",
          "friendly_completed": "",
          "invalid_format": 0,
          "subject": "Feed the Fish",
          "content": "Yay",
          "prepend": "",
          "short_content": "Yay",
          "description": "This will send you an email followup \u003Cspan class=\u0022when\u0022\u003E on \u003Cstrong\u003E Sun, June 25th 2017 2:17pm PDT\u003C\/strong\u003E\u003C\/span\u003E.",
          "email_summary": "On Sun, June 25th 2017 2:17pm PDT, this email was sent to 1week-c@followupthen.com",
          "multiple_recipients": "0",
          "method": "to",
          "to": "",
          "is_completed": "0",
          "original_time_format": "1week-c",
          "applied_services": {
              "sf": 0,
              "r": 0,
              "t": 0,
              "sms": 0,
              "c": 1,
              "recurring": 0
          },
          "recurring": false,
          "recipients": ["someone@gmail.com"],
          "sms": false,
          "task": false,
          "events": [{
              "eventid": 25460,
              "type": "created",
              "created": 1497820650,
              "data": {
                  "to": "",
                  "cc": "",
                  "bcc": "",
                  "format": "1week-c",
                  "due": 1498425449,
                  "timezone": "America\/Los_Angeles",
                  "message-id": null
              }
          }],
          "due_group": "This Week"
      }, {
          "id": "1081",
          "status": "parsed",
          "due": "Sun, July 9th 2017 2:17pm PDT",
          "tags": [],
          "friendly_tags": "",
          "due_timestamp": 1499635072,
          "created_timestamp": 1497820672,
          "friendly_due": "Sun, July 9th 2017 2:17pm PDT",
          "twenty_four_hour_time": "",
          "completed_on_timestamp": "",
          "friendly_completed": "",
          "invalid_format": 0,
          "subject": "Taco Mania Proposal",
          "content": "Followup with Roberto",
          "prepend": "",
          "short_content": "Followup with Roberto",
          "description": "This will send you an email followup \u003Cspan class=\u0022when\u0022\u003E on \u003Cstrong\u003E Sun, July 9th 2017 2:17pm PDT\u003C\/strong\u003E\u003C\/span\u003E.",
          "email_summary": "On Sun, July 9th 2017 2:17pm PDT, this email was sent to 3weeks-c@followupthen.com",
          "multiple_recipients": "0",
          "method": "to",
          "to": "",
          "is_completed": "0",
          "original_time_format": "3weeks-c",
          "applied_services": {
              "sf": 0,
              "r": 0,
              "t": 0,
              "sms": 0,
              "c": 1,
              "recurring": 0
          },
          "recurring": false,
          "recipients": ["someone@gmail.com"],
          "sms": false,
          "task": false,
          "events": [{
              "eventid": 25478,
              "type": "created",
              "created": 1497820673,
              "data": {
                  "to": "",
                  "cc": "",
                  "bcc": "",
                  "format": "3weeks-c",
                  "due": 1499635072,
                  "timezone": "America\/Los_Angeles",
                  "message-id": null
              }
          }],
          "due_group": "Future"
      }])

    futClient.getFuts({limit: 1}, (err, res) => {
      if(err) done(err);
      expect(res).to.be.an('array');
      expect(res[0]).to.have.property('subject');
      expect(res[0].id).to.equal('1080');
      expect(res[1].id).to.equal('1081');
      done();
    })
  })


  it('should get a list of followups with a promise', (done) => {
    nock(mockedApiHost)
      .get(/\/api\/v1\/reminders\/.*/)
      .reply(200, [{
          "id": "1080",
          "status": "parsed",
          "due": "Sun, June 25th 2017 2:17pm PDT",
          "tags": [],
          "friendly_tags": "",
          "due_timestamp": 1498425449,
          "created_timestamp": 1497820649,
          "friendly_due": "Sun, June 25th 2017 2:17pm PDT",
          "twenty_four_hour_time": "",
          "completed_on_timestamp": "",
          "friendly_completed": "",
          "invalid_format": 0,
          "subject": "Feed the Fish",
          "content": "Yay",
          "prepend": "",
          "short_content": "Yay",
          "description": "This will send you an email followup \u003Cspan class=\u0022when\u0022\u003E on \u003Cstrong\u003E Sun, June 25th 2017 2:17pm PDT\u003C\/strong\u003E\u003C\/span\u003E.",
          "email_summary": "On Sun, June 25th 2017 2:17pm PDT, this email was sent to 1week-c@followupthen.com",
          "multiple_recipients": "0",
          "method": "to",
          "to": "",
          "is_completed": "0",
          "original_time_format": "1week-c",
          "applied_services": {
              "sf": 0,
              "r": 0,
              "t": 0,
              "sms": 0,
              "c": 1,
              "recurring": 0
          },
          "recurring": false,
          "recipients": ["someone@gmail.com"],
          "sms": false,
          "task": false,
          "events": [{
              "eventid": 25460,
              "type": "created",
              "created": 1497820650,
              "data": {
                  "to": "",
                  "cc": "",
                  "bcc": "",
                  "format": "1week-c",
                  "due": 1498425449,
                  "timezone": "America\/Los_Angeles",
                  "message-id": null
              }
          }],
          "due_group": "This Week"
      }, {
          "id": "1081",
          "status": "parsed",
          "due": "Sun, July 9th 2017 2:17pm PDT",
          "tags": [],
          "friendly_tags": "",
          "due_timestamp": 1499635072,
          "created_timestamp": 1497820672,
          "friendly_due": "Sun, July 9th 2017 2:17pm PDT",
          "twenty_four_hour_time": "",
          "completed_on_timestamp": "",
          "friendly_completed": "",
          "invalid_format": 0,
          "subject": "Taco Mania Proposal",
          "content": "Followup with Roberto",
          "prepend": "",
          "short_content": "Followup with Roberto",
          "description": "This will send you an email followup \u003Cspan class=\u0022when\u0022\u003E on \u003Cstrong\u003E Sun, July 9th 2017 2:17pm PDT\u003C\/strong\u003E\u003C\/span\u003E.",
          "email_summary": "On Sun, July 9th 2017 2:17pm PDT, this email was sent to 3weeks-c@followupthen.com",
          "multiple_recipients": "0",
          "method": "to",
          "to": "",
          "is_completed": "0",
          "original_time_format": "3weeks-c",
          "applied_services": {
              "sf": 0,
              "r": 0,
              "t": 0,
              "sms": 0,
              "c": 1,
              "recurring": 0
          },
          "recurring": false,
          "recipients": ["someone@gmail.com"],
          "sms": false,
          "task": false,
          "events": [{
              "eventid": 25478,
              "type": "created",
              "created": 1497820673,
              "data": {
                  "to": "",
                  "cc": "",
                  "bcc": "",
                  "format": "3weeks-c",
                  "due": 1499635072,
                  "timezone": "America\/Los_Angeles",
                  "message-id": null
              }
          }],
          "due_group": "Future"
      }])

      futClient.getFuts({limit: 1}).then((res) => {
        expect(res).to.be.an('array');
        expect(res[0]).to.have.property('subject');
        expect(res[0].id).to.equal('1080');
        expect(res[1].id).to.equal('1081');
        done();
      })
  })


  // it('should throw an error when it cannot get a list of followups', (done) => {
  //   nock(mockedApiHost)
  //     .get(/\/api\/v1\/reminders\/.*/)
  //     .reply(403, "Error: Permission Denied")
  //
  //     futClient.getFuts({limit: 1}).then((res) => {
  //     }).catch((err) => {
  //       console.log(err);
  //       expect(err).to.be.a('string');
  //       done();
  //     })
  // })


  it('should get a fut', (done) => {
      nock(mockedApiHost)
        .get(/\/api\/v1\/reminders\/[0-9]+.*/)
        .reply(200, {
            "id": "917",
            "status": "parsed",
            "due": "Thu, December 1st 2016 6:00am PST",
            "tags": [],
            "friendly_tags": "",
            "due_timestamp": 1480600800,
            "created_timestamp": 1476982899,
            "friendly_due": "Thu, December 1st 2016 6:00am PST",
            "twenty_four_hour_time": "",
            "completed_on_timestamp": 1497655340,
            "friendly_completed": "Fri, June 16th 2017 4:22pm PDT",
            "invalid_format": 0,
            "subject": "Testing blackhole address again",
            "content": "\u003Cdiv dir=\u0022ltr\u0022\u003E\u003Cbr \/\u003E\u003C\/div\u003E\n",
            "prepend": "",
            "short_content": "   \n",
            "description": "This will send you an email followup \u003Cspan class=\u0022when\u0022\u003E on \u003Cstrong\u003E Thu, December 1st 2016 6:00am PST\u003C\/strong\u003E\u003C\/span\u003E.",
            "email_summary": "On Thu, December 1st 2016 6:00am PST, this email was sent to dec1st@followupthen.com",
            "multiple_recipients": "0",
            "method": "to",
            "to": "",
            "is_completed": "1",
            "original_time_format": "dec1st",
            "applied_services": {
                "sf": 0,
                "r": 0,
                "t": 0,
                "sms": 0,
                "c": 0,
                "recurring": 0
            },
            "recurring": false,
            "recipients": ["someone@gmail.com"],
            "sms": false,
            "task": false,
            "events": [{
                "eventid": 25107,
                "type": "reminder-sent",
                "created": 1497655340,
                "data": {
                    "recipients": {
                        "someone@gmail.com": null
                    }
                }
            }],
            "due_group": "Recently Completed"
        }
      );

      futClient.getFut(917, (err, res) => {
      expect(res).to.be.an('object')
      expect(res.subject).to.equal('Testing blackhole address again')
      done()
      })
  })

  it('should update a fut', (done) => {
    nock(mockedApiHost, verifyRequest)
      .put(/\/api\/v1\/reminders\/[0-9]+.*/)
      .reply(200, {"id":"917","status":"parsed","due":"Thu, December 1st 2016 6:00am PST","tags":[],"friendly_tags":"","due_timestamp":1480600800,"created_timestamp":1476982899,"friendly_due":"Thu, December 1st 2016 6:00am PST","twenty_four_hour_time":"","completed_on_timestamp":1497655340,"friendly_completed":"Fri, June 16th 2017 4:22pm PDT","invalid_format":0,"subject":"Testing blackhole address again","content":"something else new","prepend":"","short_content":"something else new","description":"This will send you an email followup \u003Cspan class=\u0022when\u0022\u003E on \u003Cstrong\u003E Thu, December 1st 2016 6:00am PST\u003C\/strong\u003E\u003C\/span\u003E.","email_summary":"On Thu, December 1st 2016 6:00am PST, this email was sent to dec1st@followupthen.com","multiple_recipients":"0","method":"to","to":"","is_completed":"1","original_time_format":"dec1st","applied_services":{"sf":0,"r":0,"t":0,"sms":0,"c":0,"recurring":0},"recurring":false,"recipients":["someone@gmail.com"],"sms":false,"task":false,"events":[{"eventid":25107,"type":"reminder-sent","created":1497655340,"data":{"recipients":{"someone@gmail.com":null}}},{"eventid":25480,"type":"edited","created":1497939025,"data":{"format":"dec1st","due":1480600800,"timezone":"America\/Los_Angeles"}}],"due_group":"Recently Completed"})

      futClient.updateFut(917, {
        content: 'something else new'
      }, (err, res) => {
      expect(res).to.be.an('object')
      expect(res.id).to.equal('917')
      done()
      })
  })

  it('should let an extension save data', (done) => {
    nock(mockedApiHost)
      .post(/\/api\/v1\/extensions\/self\/users\/self\/data\//)
      .reply(200,
          {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"someone@gmail.com","timezone":"America/Los_Angeles"}}
        );

    futClient.saveExtData({three:'more'}, (err, res) => {
      expect(res).to.be.an('object')
      expect(res.data.three).to.equal('more')
      done()
    })
  })

  it('should let an extension get data', (done) => {
    nock(mockedApiHost)
      .get(/\/api\/v1\/extensions\/self\/users\/self\/data\//)
      .reply(200, {"data":{"three":"more"},"user":{"name":"Reilly Sweetland","email":"someone@gmail.com","timezone":"America/Los_Angeles"}});

      futClient.getExtData((err, res) => {
        expect(res).to.be.an('object')
        expect(res.data.three).to.equal('more')
        done()
      })
  })

  it('should create a fut', (done) => {
    nock(mockedApiHost, verifyRequest)
      .post(/\/api\/v2\/reminders\//)
      .reply(201, {"status":"success","type":"reminder_created","data":{"cancelled_reminder":"8f26af8d0a90ff0e8e618f8d81f3e465","cancel_message":"Followup Cancelled"},"followup":{"valid":true,"created":1497939723,"timezone":"America\/Los_Angeles","created_friendly":"Mon, June 19th 2017 11:22pm PDT","due":1498026123,"due_friendly":"Tue, June 20th 2017 11:22pm PDT","format":"1day-c","completed":false,"completed_on":"","completed_on_friendly":"","tags":[],"suffix_flags":["c"],"extensions":{"sms":false,"task":false,"recurring":false,"response_detection":false},"user_date_format":"12h","followup_id":1085,"source":{"type":"email","subject":"A new reminder from API","body":"This is a new reminder","body_text":"This is a new reminder","from":"someone@gmail.com","external_recipients":[],"related_contacts":[],"email_method":"to"}}})

    futClient.createFut({
      // simulation: 1, //you would leave this off to actually create the FUT
      source: {
        subject: "A new reminder from API",
        body: "This is a new reminder",
        recipient_server: '1day@followupthen.com',
        recipients_to: '1day@followupthen.com',
        type: "email",
      },
      subject: "Create a reminder from the API",
      timezone: "America/Los_Angeles"
      }, (err, res) => {
        if(err) done(err)
        expect(res).to.be.an('object')
        expect(res.status).to.equal('success')
        done()
    })
  }).timeout(5000)


 it('should create a to-method fut', (done) => {
    nock('http://local.followupthen.com:80', {"encodedQueryParams":true})
      .post('/api/v2/reminders/', "source%5Bsubject%5D=A%20new%20reminder%20from%20API&source%5Bbody%5D=This%20is%20a%20new%20reminder&source%5Brecipient_server%5D=1day%40followupthen.com&source%5Brecipients_to%5D=1day%40followupthen.com&source%5Btype%5D=email&subject=Create%20a%20reminder%20from%20the%20API&timezone=America%2FLos_Angeles")
      .reply(201, {"status":"success","type":"reminder_created","followup":{"valid":true,"created":1501275660,"timezone":"America/Los_Angeles","created_friendly":"Fri, July 28th 2017 2:01pm PDT","due":1501362060,"due_friendly":"Sat, July 29th 2017 2:01pm PDT","format":"1day","completed":false,"completed_on":"","completed_on_friendly":"","tags":[],"suffix_flags":[],"extensions":{"sms":false,"task":false,"recurring":false,"response_detection":false},"user_date_format":"12h","followup_id":1753,"source":{"type":"email","subject":"A new reminder from API","body":"This is a new reminder","body_text":"This is a new reminder","from":"esweetland@gmail.com","external_recipients":[],"related_contacts":[],"email_method":"to"}}}, [ 'Date',
      'Fri, 28 Jul 2017 21:01:00 GMT',
      'Server',
      'Apache/2.4.10 (Debian)',
      'Cache-Control',
      'no-cache',
      'Content-Length',
      '708',
      'Connection',
      'close',
      'Content-Type',
      'application/json' ]);

    futClient.createFut({
      // simulation: 1, //you would leave this off to actually create the FUT
      source: {
        subject: "A new reminder from API",
        body: "This is a new reminder",
        recipient_server: '1day@followupthen.com',
        recipients_to: '1day@followupthen.com',
        type: "email",
      },
      subject: "Create a reminder from the API",
      timezone: "America/Los_Angeles"
      }, (err, res) => {
        if(err) done(err)
        expect(res).to.be.an('object')
        expect(res.status).to.equal('success')
        expect(res.followup.source.email_method).to.equal('to')
        done()
    })
  }).timeout(5000)

 it('should create a cc-method fut', (done) => {
    nock('http://local.followupthen.com:80', {"encodedQueryParams":true})
      .post('/api/v2/reminders/', "source%5Bsubject%5D=A%20new%20reminder%20from%20API&source%5Bbody%5D=This%20is%20a%20new%20reminder&source%5Brecipient_server%5D=1day%40followupthen.com&source%5Brecipients_to%5D=someoneElse%40gmailll.com&source%5Brecipients_cc%5D=1day%40followupthen.com&source%5Btype%5D=email&subject=Create%20a%20reminder%20from%20the%20API&timezone=America%2FLos_Angeles")
      .reply(201, {"status":"success","type":"reminder_created","followup":{"valid":true,"created":1501274442,"timezone":"America/Los_Angeles","created_friendly":"Fri, July 28th 2017 1:40pm PDT","due":1501360842,"due_friendly":"Sat, July 29th 2017 1:40pm PDT","format":"1day","completed":false,"completed_on":"","completed_on_friendly":"","tags":[],"suffix_flags":[],"extensions":{"sms":false,"task":false,"recurring":false,"response_detection":false},"user_date_format":"12h","followup_id":1742,"source":{"type":"email","subject":"A new reminder from API","body":"This is a new reminder","body_text":"This is a new reminder","from":"esweetland@gmail.com","external_recipients":["someoneelse@gmailll.com"],"related_contacts":[],"email_method":"cc"}}}, [ 'Date',
      'Fri, 28 Jul 2017 20:40:42 GMT',
      'Server',
      'Apache/2.4.10 (Debian)',
      'Cache-Control',
      'no-cache',
      'Content-Length',
      '733',
      'Connection',
      'close',
      'Content-Type',
      'application/json' ]);

    futClient.createFut({
      // simulation: 1, //you would leave this off to actually create the FUT
      source: {
        subject: "A new reminder from API",
        body: "This is a new reminder",
        recipient_server: '1day@followupthen.com',
        recipients_to: 'someoneElse@gmailll.com',
        recipients_cc: '1day@followupthen.com',
        type: "email",
      },
      subject: "Create a reminder from the API",
      timezone: "America/Los_Angeles"
      }, (err, res) => {
        if(err) done(err)
        expect(res).to.be.an('object')
        expect(res.status).to.equal('success')
        expect(res.followup.source.email_method).to.equal('cc')
        done()
    })
  }).timeout(5000) 

 it('should create a bcc-method fut', (done) => {
    nock('http://local.followupthen.com:80', {"encodedQueryParams":true})
      .post('/api/v2/reminders/', "source%5Bsubject%5D=A%20new%20reminder%20from%20API&source%5Bbody%5D=This%20is%20a%20new%20reminder&source%5Brecipient_server%5D=1day%40followupthen.com&source%5Brecipients_to%5D=someoneElse%40gmailll.com&source%5Btype%5D=email&subject=Create%20a%20reminder%20from%20the%20API&timezone=America%2FLos_Angeles")
      .reply(201, {"status":"success","type":"reminder_created","followup":{"valid":true,"created":1501274916,"timezone":"America/Los_Angeles","created_friendly":"Fri, July 28th 2017 1:48pm PDT","due":1501361316,"due_friendly":"Sat, July 29th 2017 1:48pm PDT","format":"1day","completed":false,"completed_on":"","completed_on_friendly":"","tags":[],"suffix_flags":[],"extensions":{"sms":false,"task":false,"recurring":false,"response_detection":false},"user_date_format":"12h","followup_id":1745,"source":{"type":"email","subject":"A new reminder from API","body":"This is a new reminder","body_text":"This is a new reminder","from":"esweetland@gmail.com","external_recipients":["someoneelse@gmailll.com"],"related_contacts":[],"email_method":"bcc"}}}, [ 'Date',
      'Fri, 28 Jul 2017 20:48:36 GMT',
      'Server',
      'Apache/2.4.10 (Debian)',
      'Cache-Control',
      'no-cache',
      'Content-Length',
      '734',
      'Connection',
      'close',
      'Content-Type',
      'application/json' ]);

    futClient.createFut({
      // simulation: 1, //you would leave this off to actually create the FUT
      source: {
        subject: "A new reminder from API",
        body: "This is a new reminder",
        recipient_server: '1day@followupthen.com',
        recipients_to: 'someoneElse@gmailll.com',
        type: "email",
      },
      subject: "Create a reminder from the API",
      timezone: "America/Los_Angeles"
      }, (err, res) => {
        if(err) done(err)
        expect(res).to.be.an('object')
        expect(res.status).to.equal('success')
        expect(res.followup.source.email_method).to.equal('bcc')
        done()
    })
  }).timeout(5000)

  it('should complete a followup', (done) => {
    //TODO: DRY
    nock(mockedApiHost, verifyRequest)
      .post(/\/api\/v2\/reminders\//)
      .reply(201, {"status":"success","type":"reminder_created","data":{"cancelled_reminder":"8f26af8d0a90ff0e8e618f8d81f3e465","cancel_message":"Followup Cancelled"},"followup":{"valid":true,"created":1497939723,"timezone":"America\/Los_Angeles","created_friendly":"Mon, June 19th 2017 11:22pm PDT","due":1498026123,"due_friendly":"Tue, June 20th 2017 11:22pm PDT","format":"1day-c","completed":false,"completed_on":"","completed_on_friendly":"","tags":[],"suffix_flags":["c"],"extensions":{"sms":false,"task":false,"recurring":false,"response_detection":false},"user_date_format":"12h","followup_id":1085,"source":{"type":"email","subject":"A new reminder from API","body":"This is a new reminder","body_text":"This is a new reminder","from":"someone@gmail.com","external_recipients":[],"related_contacts":[],"email_method":"to"}}})

    nock(mockedApiHost, verifyRequest)
      .delete(/\/api\/v1\/reminders\/.*/)
      .reply(204)


    futClient.createFut({
      // simulation: 1, //you would leave this off to actually create the FUT
      source: {
        subject: "A new reminder from API",
        body: "This is a new reminder",
        recipient_server: '1day@followupthen.com',
        recipients_to: '1day@followupthen.com',
        type: "email",
      },
      subject: "Create a reminder from the API",
      timezone: "America/Los_Angeles"
      }, (err, res) => {
        if(err) {
          done(err);
        }
        // console.log(res.followup.followup_id);
        futClient.completeFut(res.followup.followup_id, (err, res) => {
          expect(err).to.be.null;
          done()
        })
    })
  })


  it('should delete a followup', (done) => {
    // process.env.NOCK_OFF=true;
    nock(mockedApiHost, verifyRequest)
      .post(/\/api\/v2\/reminders\//)
      .reply(201, {"status":"success","type":"reminder_created","data":{"cancelled_reminder":"8f26af8d0a90ff0e8e618f8d81f3e465","cancel_message":"Followup Cancelled"},"followup":{"valid":true,"created":1497939723,"timezone":"America\/Los_Angeles","created_friendly":"Mon, June 19th 2017 11:22pm PDT","due":1498026123,"due_friendly":"Tue, June 20th 2017 11:22pm PDT","format":"1day-c","completed":false,"completed_on":"","completed_on_friendly":"","tags":[],"suffix_flags":["c"],"extensions":{"sms":false,"task":false,"recurring":false,"response_detection":false},"user_date_format":"12h","followup_id":1085,"source":{"type":"email","subject":"A new reminder from API","body":"This is a new reminder","body_text":"This is a new reminder","from":"someone@gmail.com","external_recipients":[],"related_contacts":[],"email_method":"to"}}})

    nock(mockedApiHost, verifyRequest)
      .delete(/\/api\/v1\/reminders\/.*/)
      .reply(204)

      futClient.createFut({
        // simulation: 1, //you would leave this off to actually create the FUT
        source: {
          subject: "A new reminder from API",
          body: "This is a new reminder",
          recipient_server: '1day@followupthen.com',
          recipients_to: '1day@followupthen.com',
          type: "email",
        },
        subject: "Create a reminder from the API",
        timezone: "America/Los_Angeles"
        }, (err, res) => {
          if(err) {
            done(err)
        }
        futClient.deleteFut({futId: res.followup.followup_id}, (err, res) => {
          expect(err).to.be.null;
          done()
        })
      })
  })

  it('should simulate a fut', (done) => {
    // process.env.NOCK_OFF=true
    nock(mockedApiHost, verifyRequest)
      .post(/\/api\/v2\/reminders\//)
      .reply(201, { status: 'success',
  type: 'reminder_created',
  followup:
   { valid: true,
     created: 1497991598,
     timezone: 'America/Los_Angeles',
     created_friendly: 'Tue, June 20th 2017 1:46pm PDT',
     due: 1498077998,
     due_friendly: 'Wed, June 21st 2017 1:46pm PDT',
     format: '1day-c',
     completed: false,
     completed_on: '',
     completed_on_friendly: '',
     tags: [],
     suffix_flags: [ 'c' ],
     extensions:
      { sms: false,
        task: false,
        recurring: false,
        response_detection: false },
     user_date_format: '12h',
     followup_id: 1143,
     source:
      { type: 'email',
        subject: 'Create another new reminder from API',
        body: 'This is a new reminder',
        body_text: 'This is a new reminder',
        from: 'someone@gmail.com',
        external_recipients: [],
        related_contacts: [],
        email_method: 'to' } } })

    futClient.simulateFut({
      source: {
        subject: "Create another new reminder from API",
        body: "This is a new reminder",
        recipient_server: '1day@followupthen.com',
        recipients_to: '1day@followupthen.com',
        type: "email",
      },
      subject: "Create a reminder from the API",
      timezone: "America/Los_Angeles"
      }, (err, res) => {
      // console.log(err || res)
      done()
    })
  }).timeout(5000)

});
