var mocha = require('mocha');
var expect = require('chai').expect;
var request = require('request');
var nock = require('nock');
var futTestUtils = require('./futTestUtils');
var debug = require('debug')('gopher-node');
var Gopher = require('../gopher-node');
var futClient = {};

// Test these endpoints against an instance of the Gopher core API by:
//  1. Modifying this URL point to an install of Gopher Core.
//  2. Login and copy the value of fut_token from your cookie.
//  3. Flip the NOCK_OFF switch below.
//  4. Optoinally turn on the nock recorder mock the request
// (Note that this will actually modify whichever account is registered)
// This can also be used to update this test lib when if / when the API changes
var mockedApiHost = 'http://local.gopher.email';
var accessToken = '4f2988981ad2bca644f9fe336357492574a320a2';
var exampleTask = {};

process.env.NOCK_OFF = true;
// nock.recorder.rec();

var verifyRequest = {
  reqheaders: {
    authorization: function(header) {
      return (header === "Bearer " + accessToken);
    }
  }
}

function getFutClient() {
  var futClient = new Gopher(
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

function getExampleTask() {
  if (exampleTask.hasOwnProperty('id')) {
    return Promise.resolve(exampleTask); 
  }
  
  return futClient.createFut({
      "task": {
      "command": "{{example_email_cmd}}",
      "reminder_timeformat": "1sec",
      "reference_email": {
        "server_recipient": "{{example_email_cmd}}",
        "to": ["{{example_email_cmd}}"],
        "cc": [],
        "bcc": [],
        "from": "bar@bar.email",
        "subject": "Test1",
        "html": "Test1",
        "text": "Test1",
        "attachments": []
      },
      "private_data": {
          "privatedata1": "Value1"
      }
    }
  }).then((res) => {
    exampleTask = res.task;
    return res;
  }).catch((err) => {
    return new Error("error creating example task")
  })

}

describe('Tasks', () => {
  
  beforeEach(async () => {
    futClient = getFutClient();
    await getExampleTask();
  });

  it('test should not create an example task if one has been loaded', (done) => {
    // exampleTask loaded because it's called in beforeEach 
    getExampleTask().then((res) => {
      expect(res.id).to.equal(exampleTask.id);
      done();
    }).catch((err) => {
      done(new Error("Error getting example task"));
    })
  })

  it('should create a Gopher Task', (done) => {
    //TODO: This creates a successful Gopher Task despite the Extension endpoint failing.
    futClient.createFut({
      "task": {
      "command": "{{example_email_cmd}}",
      "reminder_timeformat": "1sec",
      "reference_email": {
        "server_recipient": "{{example_email_cmd}}",
        "to": ["{{example_email_cmd}}"],
        "cc": [],
        "bcc": [],
        "from": "bar@bar.email",
        "subject": "Test1",
        "html": "Test1",
        "text": "Test1",
        "attachments": []
      },
      "private_data": {
          "privatedata1": "Value1"
      }
    }
    }, (err, res) => {
      if(err) done(err)
      expect(res).to.be.an('object')
      expect(res.status).to.equal('success')
      done()
    })
  }).timeout(5000)  

  it('should return 400 when a Gopher command is invoked that does not exist', (done) => {
    futClient.createFut({
      "task": {
      "command": "foo32rfadf",
      "reminder_timeformat": "1sec",
      "reference_email": {
        "server_recipient": "foo32rfadf@foo32rfadf.gopher.email",
        "to": ["foo@ffoo32rfadfoo.gopher.email"],
        "cc": [],
        "bcc": [],
        "from": "bar@bar.email",
        "subject": "Test1",
        "html": "Test1",
        "text": "Test1",
        "attachments": []
      },
        "private_data": {
            "privatedata1": "Value1"
        }
      }
    }).then((res) => {
        done(new Error('Incorrectly returned successful response'));
    }).catch((err) => {
        expect(err.statusCode).to.equal(400);
        expect(err.response.body.type).to.equal('gopher_command_not_found');
        done();
    });
  }).timeout(5000)

  it('should get a list of followups with a cb', (done) => {
    futClient.getTasks({limit: 1}, (err, res) => {
      if(err) done(err);
      expect(res.tasks).to.be.an('array');
      expect(res.tasks[0]).to.have.property('reference_email');
      done();
    })
  })

  it('should get a list of followups with a promise', (done) => {
      futClient.getTasks({limit: 1}).then((res) => {
        expect(res.status).to.equal('success');
        expect(res.tasks).to.be.an('array');
        expect(res.tasks[0]).to.have.property('reference_email');
        exampleTask = res.tasks[0];
        done();
      }).catch((err) => {
        done(err);
      })
  })

  it('should get a single task', (done) => {
      if(!exampleTask) return done(new Error("This test needs to be run as part of the suite."));
      futClient.getTask(exampleTask.id, (err, res) => {
      done()
      })
  })

  it('should update a fut', (done) => {
      if(!exampleTask.hasOwnProperty('id'))  {
        done("Example Task doens't exist", exampleTask);
      }
      futClient.updateTask(exampleTask.id, {
          task: {
            reference_email: {
              body: 'something else new'
          }
        }
      }).then((res) => {
        expect(res).to.be.an('object');
        done();
      }).catch((err) => {
        done(new Error("Error updating followup", err));
      })
  }).timeout(5000);

  it('should let an extension save data', (done) => {
    futClient.saveExtData({three:'more'}, (err, res) => {
      expect(res).to.be.an('object')
      expect(res.data.three).to.equal('more')
      done()
    })
  })

  it('should let an extension get data', (done) => {
      futClient.getExtData((err, res) => {
        expect(res).to.be.an('object')
        expect(res.data.three).to.equal('more')
        done()
      })
  })

  it('should resolve a natural language timeformat', async () => {
    let format = {
      format: '1day', 
      method: 'bcc',
      timezone: 'Amierca/Los_Angeles'
    };

    res = await futClient.naturalTime(format);
    expect(res.valid).to.be.true;
    expect(res.recurring).to.be.false;
  })

  // TODO: Fix after proper errr cases are accounted for.
  xit('should create a task with verbose output', (done) => {
    futClient.createFut({
      "verbose": 1,
      "task": {
        "command": "{{example_email_cmd}}",
        "reminder_timeformat": "1sec",
        "reference_email": {
          "server_recipient": "{{example_email_cmd}}",
          "to": ["{{example_email_cmd}}"],
          "cc": [],
          "bcc": [],
          "from": "bar@bar.email",
          "subject": "Test1",
          "html": "Test1",
          "text": "Test1",
          "attachments": []
        },
        "private_data": {
            "privatedata1": "Value1"
        }
      }
      }, (err, res) => {
          if(err) done(err)
          expect(res).to.be.an('object')
          expect(res.status).to.equal('success')
          expect(res.followup.source.email_method).to.equal('to')
          done()
      })
    });


  xit('should archive a Gopher Task', async () => {
    try {
      let res = await futClient.createFut({
        "task": {
          "command": "{{example_email_cmd}}",
          "reminder_timeformat": "1sec",
          "reference_email": {
            "server_recipient": "{{example_email_cmd}}",
            "to": ["{{example_email_cmd}}"],
            "cc": [],
            "bcc": [],
            "from": "bar@bar.email",
            "subject": "Test1",
            "html": "Test1",
            "text": "Test1",
            "attachments": []
          },
          "private_data": {
              "privatedata1": "Value1"
          }
        }
      });
        
      let task = res.task;

      let resCompleted = await futClient.deleteFut(task.id);
      
    } catch (error) {
      return Promise.resolve(error);
    }
  });

});
