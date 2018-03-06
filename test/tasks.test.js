import {
  getGopherClient,
  signWebhook,
  getExampleTask,
  beforeEachTest,
  testConfig
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
  testConfig.call(this);
  beforeEach(beforeEachTest);

  it("should create a task", done => {
    let taskPayload = {
      task: {
        command: process.env.EXAMPLE_COMMAND,
        reminder_timeformat: "15min",
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
    };
    //TODO: This creates a successful Gopher Task despite the Extension endpoint failing.
    gopherClient.createTask(taskPayload, (err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.statusCode).to.equal(201);
      done();
    });
  }).timeout(50000);

  it("should get a list of tasks with async/await", async () => {
    let res = await gopherClient.getTasks();
    expect(res.statusCode).to.equal(200);
    expect(res.tasks).to.be.an("array");
    expect(res.tasks[0]).to.have.property("reference_email");
    exampleTask = res.tasks[0];
  });

  it("should get a filtered list of tasks", async () => {
    let res = await gopherClient.getTasks({ limit: 1 });
    expect(res.statusCode).to.equal(200);
    expect(res.tasks).to.be.an("array");
    expect(res.tasks.length).to.equal(1);
    expect(res.tasks[0]).to.have.property("reference_email");
    exampleTask = res.tasks[0];
  });

  it("should get a list of tasks with a cb", done => {
    gopherClient.getTasks({ limit: 1 }, (err, res) => {
      if (err) done(err);
      expect(res.tasks).to.be.an("array");
      expect(res.tasks[0]).to.have.property("reference_email");
      done();
    });
  });

  it("should get a list of tasks with a promise", done => {
    gopherClient
      .getTasks({ limit: 1 })
      .then(res => {
        expect(res.statusCode).to.equal(200);
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
      return done("Example task does not exist. Run as part of the suite");
    gopherClient.getTask({ id: exampleTask.id }, (err, res) => {
      if (err) done(err);
      done();
    });
  });

  it("should update a task", done => {
    if (!exampleTask.hasOwnProperty("id")) {
      done("Example Task doens't exist", exampleTask);
    }
    gopherClient
      .updateTask({
        task: {
          id: exampleTask.id,
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
        done(err);
      });
  });

  it("should let an extension save data", done => {
    gopherClient.saveExtensionData({ three: "more" }, (err, res) => {
      if (err) done(err);
      expect(res).to.be.an("object");
      expect(res.data.three).to.equal("more");
      done();
    });
  });

  it("should let an extension get data", done => {
    gopherClient.getExtensionData((err, res) => {
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
    expect(res.statusCode).to.equal(200);
  });

  it("should send an invite from an anonymous user", async () => {
    gopherClient._accessToken = null;
    let res = await gopherClient.invite("test@example.com");
    expect(res.statusCode).to.equal(200);
  });

  it("should send invites to an array of users", async () => {
    let res = await gopherClient.invite([
      "blackhole@example.com",
      "blackhole2@example.com"
    ]);
    expect(res.statusCode).to.equal(200);
  });

  xit("test should not create an example task if one has been loaded", done => {
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

  xit("should let admin app send a simulated email", async () => {
    let res = await gopherClient.devSendAction({
      action: {
        format:
          "a+notifications.off+t.1960+gopher-express-local+c39a2e@followupthen.com"
      },
      reference_email: {
        method: "",
        server_recipient:
          "a+notifications.off+t.1960+gopher-express-local+c39a2e@followupthen.com",
        to: [
          "a+notifications.off+t.1960+gopher-express-local+c39a2e@followupthen.com"
        ],
        cc: [],
        bcc: [],
        from: "esweetland@gmail.com",
        subject: "Email Action Subject",
        html: "Email Action Body HTML",
        text: "Email Action Body Text",
        attachments: []
      }
    });

    expect(res.status).to.equal("error");
  });
});
