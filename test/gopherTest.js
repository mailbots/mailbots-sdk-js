var mocha = require('mocha');
var expect = require('chai').expect;
var request = require('request');
var nock = require('nock');
var futTestUtils = require('./gopherTestUtils');
var debug = require('debug')('gopherhq-node:tests');
var Gopher = require('../gopherhq-node');
var gopherClient = {};


// Test against an instance of the Gopher core API by:
//  1. Modifying this URL point to an install of Gopher Core.
//  2. Login and copy the value of gopherToken from your cookie.
//  3. Flip the NOCK_OFF switch below.
//  4. Throttle API calls
//  4. Optionally uncomment the nock recorder to cache / mock the network requests to nockMock.js
// (Note that this will actually modify whichever account is registered)

var exampleTask = {};
var throttleTests = false;

// futTestUtils.recordNockMocks(); // regenerate tests/nockMocks.js
// process.env.NOCK_OFF = true; //uncomment to hit a live API
// throttleTests = true; // uncomment if you're hitting the live API


function getGopherClient() {
  return futTestUtils.getGopherClient();
}

function getExampleTask() {
  if (exampleTask.hasOwnProperty('id')) {
    return Promise.resolve(exampleTask); 
  }
  
  return gopherClient.createTask({
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

describe('Tasks', function () {
  this.timeout(5000);

  beforeEach(async () => {
      if (throttleTests) await futTestUtils.sleep(1000);
      gopherClient = getGopherClient();
      await getExampleTask();
  });

  it('should create a Gopher Task', (done) => {
    //TODO: This creates a successful Gopher Task despite the Extension endpoint failing.
    gopherClient.createTask({
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

  it('should get a list of followups with async/await', async () => {
      let res = await gopherClient.getTasks({limit: 1}); 
      expect(res.status).to.equal('success');
      expect(res.tasks).to.be.an('array');
      expect(res.tasks[0]).to.have.property('reference_email');
      exampleTask = res.tasks[0];
    });

  it('should get a list of followups with a cb', (done) => {
    gopherClient.getTasks({limit: 1}, (err, res) => {
      if(err) done(err);
      expect(res.tasks).to.be.an('array');
      expect(res.tasks[0]).to.have.property('reference_email');
      done();
    })
  })

  it('should get a list of followups with a promise', (done) => {
      gopherClient.getTasks({limit: 1}).then((res) => {
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
      gopherClient.getTask(exampleTask.id, (err, res) => {
      done()
      })
  })

  it('should update a fut', (done) => {
      if(!exampleTask.hasOwnProperty('id'))  {
        done("Example Task doens't exist", exampleTask);
      }
      gopherClient.updateTask(exampleTask.id, {
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
    gopherClient.saveExtData({three:'more'}, (err, res) => {
      expect(res).to.be.an('object')
      expect(res.data.three).to.equal('more')
      done()
    })
  })

  it('should let an extension get data', (done) => {
      gopherClient.getExtData((err, res) => {
        expect(res).to.be.an('object')
        expect(res.data.three).to.equal('more')
        done()
      })
  })

  it('should resolve a natural language timeformat', async () => {
    let format = {
      format: '1day',
      method: 'bcc',
      timezone: 'America/Los_Angeles'
    };

    res = await gopherClient.naturalTime(format);
    debug(res);
    expect(res.valid).to.be.true;
    expect(res.recurring).to.be.false;
  })

  it('should send an invite from an authorized user', async () => {
    res = await gopherClient.invite("test@example.com");
    expect(res).to.be.ok;
  })

  it('should send an invite from an anonymous user', async () => {
    gopherClient._accessToken = null;
    res = await gopherClient.invite("test@example.com");
    expect(res).to.be.ok;
  })

  it('should send invites to an array of users', async () => {
    res = await gopherClient.invite(["blackhole@example.com", "blackhole@example.com"]);
    expect(res).to.be.ok;
  })

  it('test should not create an example task if one has been loaded', (done) => {
    getExampleTask().then((res) => {     // exampleTask called newly in beforeEach()
      expect(res.id).to.equal(exampleTask.id);
      done();
    }).catch((err) => {
      done(new Error("Error getting example task"));
    })
  })

  it('should return 400 when a Gopher command is invoked that does not exist', (done) => {
    gopherClient.createTask({
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
  });
  // TODO: Fix after proper errr cases are accounted for.
  xit('should create a task with verbose output', (done) => {
    gopherClient.createTask({
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
      let res = await gopherClient.createTask({
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

      let resCompleted = await gopherClient.deleteFut(task.id);
      
    } catch (error) {
      return Promise.resolve(error);
    }
  });

  it('should be able to trigger a Gopher task', async () => {
    let res = await gopherClient.triggerTask({trigger_url: exampleTask.trigger_url});
    expect(res).to.be.ok;
  });

});
