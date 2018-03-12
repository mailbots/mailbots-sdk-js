import {
  getGopherClient,
  signWebhook,
  getExampleTask,
  beforeEachTest,
  testConfig,
  getRandomString
} from "./testUtils/gopherTestUtils";

import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import timestamp from "unix-timestamp";
import { _ } from "lodash";

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

  it("creates a task with suppressesed webhook and verbose output", async function() {
    let res = await gopherClient.createTask({
      verbose: 1,
      suppress_webhook: true,
      task: {
        command: process.env.EXAMPLE_COMMAND,
        reference_email: {
          server_recipient: process.env.EXAMPLE_COMMAND,
          to: [process.env.EXAMPLE_COMMAND],
          cc: [],
          bcc: [],
          from: "test@example.com",
          subject: "Test1",
          html: "Test1",
          text: "Test1",
          attachments: []
        },
        private_data: {
          privatedata1: "Value1"
        },
        reminder_time: 1520319928,
        reminder_timeformat: "3days",
        completed: false
      },
      response: [
        {
          type: "email",
          subject: "A test email message",
          to: "test@example.com",
          body: [
            {
              type: "html",
              text: "<h1>This is a test</h1>"
            }
          ]
        }
      ]
    });
    expect(res).to.be.an("object");
    expect(res.messages).to.be.instanceof(Array);
    expect(res.messages[0].to[0]).to.equal("test@example.com"); // Responds with email content
    expect(res.statusCode).to.equal(201);
  });

  it("should get a list of tasks with async/await", async () => {
    let res = await gopherClient.getTasks();
    expect(res.statusCode).to.equal(200);
    expect(res.tasks).to.be.an("array");
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

  it("should update reminder_timeformat for a task", done => {
    if (!exampleTask.hasOwnProperty("id")) {
      done(new Error("Example Task doens't exist"), exampleTask);
    }
    gopherClient
      .updateTask({
        task: {
          id: exampleTask.id,
          reminder_timeformat: "1day"
        }
      })
      .then(res => {
        expect(res).to.be.an("object");
        expect(res.task.reminder_timeformat).to.equal("1day");
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it("should fail to update an unsupported reminder_timeformat for a task", done => {
    if (!exampleTask.hasOwnProperty("id")) {
      done(new Error("Example Task doens't exist"), exampleTask);
    }
    gopherClient
      .updateTask({
        task: {
          id: exampleTask.id,
          reminder_timeformat: "invalid_jibberish"
        }
      })
      .then(res => {
        expect(res).to.be.instanceOf(Error);
        done();
      })
      .catch(err => {
        console.log(err);
        done(err);
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

  it("should create a task with verbose output", done => {
    gopherClient.createTask(
      {
        verbose: 1,
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
        expect(res.messages[0].type).to.equal("email");
        done();
      }
    );
  });

  it("should trigger a task", async () => {
    let task = await getExampleTask();
    let res = await gopherClient.triggerTask({
      trigger_url: task.trigger_url
    });
    expect(res).to.be.ok;
  });

  it("should trigger an extension", async () => {
    let exampleTask = await getExampleTask();
    let res = await gopherClient.triggerExtension({
      trigger_url: exampleTask.trigger_url
    });
    expect(res).to.be.ok;
  });
});

/**
 * Archiving and Deleting Tasks
 */

describe("Archiving and Deleting Tasks", function() {
  let task = null;

  before(async function() {
    let res = await gopherClient.createTask({
      suppress_webhook: true,
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
    task = res.task;
  });

  it("Should archive a task", async function() {
    let resCompleted = await gopherClient.archiveTask({
      task: { id: task.id }
    });
  });

  it("Should delete the archived task", async function() {
    let resDeleted = await gopherClient.deleteTask({
      task: { id: task.id }
    });
  });

  it("Should fail to delete the same task", async function() {
    let resDeleted = await gopherClient.deleteTask({
      task: { id: task.id }
    });
    expect(resDeleted).to.be.instanceof(Error);
  });
});

/**
 * Filtering Tasks
 * This set up multiple extensions, installs them, creates
 * tasks for each extension with various attributes, then
 * validates that the filters are properly filtering.
 */
describe("Filter Tasks", function() {
  let testExtension1 = null;
  let testExtension2 = null;
  let testTasks = []; //for cleanup

  before("create test extensions", async () => {
    /**
     * Delete all test extensions
     */
    let res1 = await gopherClient.getExtensions({
      owner: "self"
    });
    let testExtensions = _.filter(res1.extensions, extension => {
      return extension.subdomain && extension.subdomain.indexOf("test-") !== -1;
    });
    for (let ext of testExtensions) {
      let deleteRes = await gopherClient.deleteExtension({
        extensionid: ext.id
      });
    }

    /**
     * Create new test extensions
     */

    let res = await gopherClient.createExtension({
      extension: {
        name: "Test Extension 1",
        subdomain: "test-extension-1",
        enabled: true
      }
    });
    testExtension1 = res.extension;
    if (res instanceof Error) throw res;

    res = await gopherClient.createExtension({
      extension: {
        name: "Test Extension 2",
        subdomain: "test-extension-2",
        enabled: true
      }
    });
    testExtension2 = res.extension;
    if (res instanceof Error) throw res;

    // Install test extensions (must use ACCESS_TOKEN with admin-level access)
    res = await gopherClient.installExtension({
      extensionid: testExtension2.id
    });

    res = await gopherClient.installExtension({
      extensionid: testExtension1.id
    });
  });

  it("Creates a task due in 3 days from extension1", async () => {
    let res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: "example@test-extension-1.gopher.email",
        reference_email: {
          server_recipient: "example@test-extension-1.gopher.email",
          subject: "Subject 1"
        },
        reminder_timeformat: "3days"
      }
    });
    testTasks.push(res.task);
  });

  it("Create a task due tomorrow from extension2", async () => {
    let res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: "example@test-extension-2.gopher.email",
        reference_email: {
          server_recipient: "example@test-extension-2.gopher.email",
          subject: "Subject 2"
        },
        reminder_timeformat: "tomorrow"
      }
    });
    testTasks.push(res.task);
  });

  it("Gets only the task for only extension1", async () => {
    let res = await gopherClient.getTasks({
      extension: "test-extension-1"
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks[0].reference_email.subject).to.equal("Subject 1");
  });

  describe("Search", function() {
    it("Creates an task from Joe", async () => {
      let res = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: "example@test-extension-2.gopher.email",
          reference_email: {
            server_recipient: "example@test-extension-2.gopher.email",
            to: "Joe<joe@example.com>",
            subject: "Hi Joe"
          }
        }
      });
      testTasks.push(res.task);
    });

    it("Creates an task with subect 'zuki'", async () => {
      let res = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: "example@test-extension-2.gopher.email",
          reference_email: {
            server_recipient: "example@test-extension-2.gopher.email",
            to: "joe@example.com",
            subject: "Zuki"
          }
        }
      });
      testTasks.push(res.task);
    });

    it("Search for tasks with Zuki in subject", async () => {
      let res = await gopherClient.getTasks({
        search: "Zuki"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Zuki");
    });

    it("Search for tasks from Joe", async () => {
      let res = await gopherClient.getTasks({
        search: "Joe"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.to[0]).to.contain("joe@example.com");
    });
  });

  it("Creates another, later task for extension1", async () => {
    let res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: "example@test-extension-1.gopher.email",
        reference_email: {
          server_recipient: "example@test-extension-1.gopher.email",
          subject: "Subject 1 Month"
        },
        reminder_timeformat: "1month"
      }
    });
    testTasks.push(res.task);
  });

  it("Orders search results by due date desc", async () => {
    let res = await gopherClient.getTasks({
      extension: "test-extension-1",
      order_by: "due",
      order_dir: "desc"
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks[0].reference_email.subject).to.equal("Subject 1 Month");
  });

  it("Orders search results by due date asc", async () => {
    let res = await gopherClient.getTasks({
      extension: "test-extension-1",
      order_by: "due",
      order_dir: "asc"
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks[0].reference_email.subject).to.equal("Subject 1");
  });

  it("Gets only the later task using due_after", async () => {
    let sevenDays = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; //7 days
    let res = await gopherClient.getTasks({
      extension: "test-extension-1",
      due_after: sevenDays
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks[0].reference_email.subject).to.equal("Subject 1 Month");
  });

  it("Filters tasks using due_before", async () => {
    let addRes = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: "example@test-extension-1.gopher.email",
        reference_email: {
          server_recipient: "example@test-extension-1.gopher.email",
          subject: "TEST: One Hour"
        },
        reminder_timeformat: "1hour"
      }
    });
    testTasks.push(addRes.task);

    let twoHours = Math.floor(Date.now() / 1000) + 60 * 60 * 2; //2 hours
    let res = await gopherClient.getTasks({
      extension: "test-extension-1",
      due_before: twoHours
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks[0].reference_email.subject).to.equal("TEST: One Hour");
  });

  it("Limits results using per_page param", async () => {
    let res = await gopherClient.getTasks({
      extension: "test-extension-1",
      per_page: 1
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks).to.have.length(1);
  });

  it("Paginates results using per_page and page param", async () => {
    let res = await gopherClient.getTasks({
      extension: "test-extension-1",
      per_page: 1,
      page: 1
    });
    if (res instanceof Error) throw res;
    expect(res.tasks).to.be.instanceof(Array);
    expect(res.tasks).to.have.length(1);
  });

  it("should limit to 1 task retrieved", async () => {
    let res = await gopherClient.getTasks({ limit: 1 });
    expect(res.statusCode).to.equal(200);
    expect(res.tasks).to.be.an("array");
    expect(res.tasks.length).to.equal(1);
    expect(res.tasks[0]).to.have.property("reference_email");
    exampleTask = res.tasks[0];
  });

  after(async function() {
    let deleteRes = await gopherClient.deleteExtension({
      extensionid: testExtension1.id
    });

    deleteRes = await gopherClient.deleteExtension({
      extensionid: testExtension2.id
    });

    testTasks.map(async testTask => {
      let deleteTestTasks = await gopherClient.deleteTask({
        task: { id: testTask.id }
      });
    });
  });
});
