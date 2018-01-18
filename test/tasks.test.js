import {
  getGopherClient,
  sleep,
  signWebhook,
  getExampleTask
} from "./testUtils/gopherTestUtils";

import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import timestamp from "unix-timestamp";

timestamp.round = true;
const debug = require("debug")("gopherhq");

let gopherClient = getGopherClient();
let exampleTask = {};

describe("Tasks", function() {
  beforeEach(async () => {
    if (process.env.BUILD_MOCKS) await sleep(1000);
    exampleTask = await getExampleTask();
  });

  it("should create a Gopher Task", done => {
    //TODO: This creates a successful Gopher Task despite the Extension endpoint failing.
    gopherClient.createTask(
      {
        task: {
          command: process.env.EXAMPLE_COMMAND,
          reminder_timeformat: "1sec",
          reference_email: {
            server_recipient: process.env.EXAMPLE_COMMAND,
            to: [process.env.EXAMPLE_COMMAND],
            cc: [],
            bcc: [],
            from: "bar@bar.email",
            subject: "Test1",
            html: "Test1",
            text: "Test1",
            attachments: []
          },
          private_data: {
            privatedata1: "Value1"
          }
        }
      },
      (err, res) => {
        if (err) done(err);
        expect(res).to.be.an("object");
        expect(res.status).to.equal("success");
        done();
      }
    );
  }).timeout(5000);

  it("should get a list of followups with async/await", async () => {
    let res = await gopherClient.getTasks({ limit: 1 });
    expect(res.status).to.equal("success");
    expect(res.tasks).to.be.an("array");
    expect(res.tasks[0]).to.have.property("reference_email");
    exampleTask = res.tasks[0];
  });

  it("should get a list of followups with a cb", done => {
    gopherClient.getTasks({ limit: 1 }, (err, res) => {
      if (err) done(err);
      expect(res.tasks).to.be.an("array");
      expect(res.tasks[0]).to.have.property("reference_email");
      done();
    });
  });

  it("should get a list of followups with a promise", done => {
    gopherClient
      .getTasks({ limit: 1 })
      .then(res => {
        expect(res.status).to.equal("success");
        expect(res.tasks).to.be.an("array");
        expect(res.tasks[0]).to.have.property("reference_email");
        exampleTask = res.tasks[0];
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it("should get a single task", done => {
    if (!exampleTask)
      return done(new Error("This test needs to be run as part of the suite."));
    gopherClient.getTask(exampleTask.id, (err, res) => {
      done();
    });
  });

  it("should update a task", done => {
    if (!exampleTask.hasOwnProperty("id")) {
      done("Example Task doens't exist", exampleTask);
    }
    gopherClient
      .updateTask(exampleTask.id, {
        task: {
          reference_email: {
            body: "something else new"
          }
        }
      })
      .then(res => {
        expect(res).to.be.an("object");
        done();
      })
      .catch(err => {
        done(new Error(err));
      });
  }).timeout(5000);

  it("should let an extension save data", done => {
    gopherClient.saveUserData({ three: "more" }, (err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });

  it("should let an extension get data", done => {
    gopherClient.getUserData((err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });

  it("should resolve a natural language timeformat", async () => {
    let format = {
      format: "1day",
      method: "bcc",
      timezone: "America/Los_Angeles"
    };

    let res = await gopherClient.naturalTime(format);
    debug(res);
    expect(res.valid).to.be.true;
    expect(res.recurring).to.be.false;
  });

  it("should send an invite from an authorized user", async () => {
    let res = await gopherClient.invite("test@example.com");
    expect(res.status).to.equal("success");
  });

  it("should send an invite from an anonymous user", async () => {
    gopherClient._accessToken = null;
    let res = await gopherClient.invite("test@example.com");
    expect(res.status).to.equal("success");
  });

  it("should send invites to an array of users", async () => {
    let res = await gopherClient.invite([
      "blackhole@example.com",
      "blackhole2@example.com"
    ]);
    expect(res.status).to.equal("success");
  });

  it("test should not create an example task if one has been loaded", done => {
    getExampleTask()
      .then(res => {
        // exampleTask called newly in beforeEach()
        expect(res.id).to.equal(exampleTask.id);
        done();
      })
      .catch(err => {
        done(new Error(err));
      });
  });

  // TODO: Fix after proper error cases are accounted for.
  // xit("should create a task with verbose output", done => {
  //   gopherClient.createTask(
  //     {
  //       verbose: 1,
  //       task: {
  //         command: process.env.EXAMPLE_COMMAND,
  //         reminder_timeformat: "1sec",
  //         reference_email: {
  //           server_recipient: process.env.EXAMPLE_COMMAND,
  //           to: [process.env.EXAMPLE_COMMAND],
  //           cc: [],
  //           bcc: [],
  //           from: "bar@bar.email",
  //           subject: "Test1",
  //           html: "Test1",
  //           text: "Test1",
  //           attachments: []
  //         },
  //         private_data: {
  //           privatedata1: "Value1"
  //         }
  //       }
  //     },
  //     (err, res) => {
  //       if (err) done(err);
  //       expect(res).to.be.an("object");
  //       expect(res.status).to.equal(200);
  //       expect.res.messages[0].type.to.equal("email");
  //       done();
  //     }
  //   );
  // });

  it("should archive a task", async () => {
    try {
      let res = await gopherClient.createTask({
        task: {
          command: process.env.EXAMPLE_COMMAND,
          reminder_timeformat: "1sec",
          reference_email: {
            server_recipient: process.env.EXAMPLE_COMMAND,
            to: [process.env.EXAMPLE_COMMAND],
            cc: [],
            bcc: [],
            from: "bar@bar.email",
            subject: "Test1",
            html: "Test1",
            text: "Test1",
            attachments: []
          },
          private_data: {
            privatedata1: "Value1"
          }
        }
      });

      let task = res.task;

      let resCompleted = await gopherClient.deleteFut(task.id);
    } catch (error) {
      return Promise.resolve(error);
    }
  });

  xit("should trigger a task", async done => {
    try {
      let res = await gopherClient.triggerTask({
        trigger_url: exampleTask.trigger_url
      });
    } catch (e) {
      done(e);
    }
    expect(res).to.be.ok;
  });

  xit("should trigger an extension", async () => {
    let res = await gopherClient.triggerExtension({
      trigger_url: exampleTask.trigger_url
    });
    expect(res).to.be.ok;
  });

  it("should build a login URL", () => {
    expect(gopherClient.getAuthorizationUri().uri).to.be.a("string");
  });
});
