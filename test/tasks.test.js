import { getGopherClient, getExampleTask } from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
import Gopher from "../src/gopherhq";

const debug = require("debug")("gopherhq");

let gopherClient = getGopherClient();
let exampleTask = {};
let testTasks = [];
let testExtension1 = null;
let testExtension2 = null;

/**
 * Create and install test extensions. If you work at Gopher (or want to join us!)
 * run `npm run sample-data:create-extensions`. in the React Admin UI. Otherwise,
 * you'll have to create a couple test extensions and add their subdomains (ids) in .env.
 */
let extensionSubdomain1 =
  process.env.EXAMPLE_EXTENSION_SUBDOMAIN_1 || "test-extension-1";
let extensionSubdomain2 =
  process.env.EXAMPLE_EXTENSION_SUBDOMAIN_2 || "test-extension-2";

describe("Tasks", function() {
  /**
   *
   * Setup For all "Task" Tests.
   * Create a couple fake extensions, install them.
   * Describe blocks may do additional setup.
   *
   */
  before(async function() {
    /**
     * Set Up Tasks for Testing
     */
    let res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          server_recipient: `example@${extensionSubdomain1}.gopher.email`,
          subject: "Subject 1"
        },
        reminder_timeformat: "1hour"
      }
    });
    testTasks.push(res.task);

    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          server_recipient: `example@${extensionSubdomain1}.gopher.email`,
          subject: "Space Ships!"
        },
        reminder_timeformat: "20years"
      }
    });
    testTasks.push(res.task);

    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain2}.gopher.email`,
        reference_email: {
          server_recipient: `example@${extensionSubdomain2}.gopher.email`,
          subject: "Subject 2"
        },
        reminder_timeformat: "tomorrow"
      }
    });
    testTasks.push(res.task);

    //null due date
    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          server_recipient: `example@${extensionSubdomain1}.gopher.email`,
          subject: "TEST: Null due date"
        }
      }
    });
    testTasks.push(res.task);
  });

  after(async function() {
    /**
     * Delete test tasks
     */
    testTasks.map(async testTask => {
      let deleteTestTasks = await gopherClient.deleteTask({
        task: { id: testTask.id }
      });
    });
  });

  describe("Creating, Editing and Deleting", function() {
    this.timeout(20000);

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
      //TODO: Test successful Gopher Task creation even if the Extension endpoint fails.
      gopherClient.createTask(taskPayload, (err, res) => {
        if (err) done(err);
        expect(res).to.be.an("object");
        expect(res.statusCode).to.equal(201);
        testTasks.push(res.task);
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
      testTasks.push(res.task);
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

    it("should fail to update an unsupported reminder_timeformat", done => {
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
      this.timeout(5000);
      let res = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: process.env.EXAMPLE_COMMAND,
          reminder_timeformat: "1month",
          reference_email: {
            server_recipient: process.env.EXAMPLE_COMMAND,
            to: [process.env.EXAMPLE_COMMAND],
            cc: [],
            bcc: [],
            from: "bar@bar.email",
            subject: "Archived Task",
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
      testTasks.push(task);

      res = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: process.env.EXAMPLE_COMMAND,
          reminder_timeformat: "1month",
          reference_email: {
            server_recipient: process.env.EXAMPLE_COMMAND,
            to: [process.env.EXAMPLE_COMMAND],
            cc: [],
            bcc: [],
            from: "bar@bar.email",
            subject: "Non Archived Task",
            html: "Test1",
            text: "Test1",
            attachments: []
          },
          private_data: {
            privatedata1: "Value1"
          }
        }
      });

      testTasks.push(res.task);
    });

    it("Should archive a task", async function() {
      let resCompleted = await gopherClient.archiveTask({
        task: { id: task.id }
      });
    });

    it("Should still find the archived task", async function() {
      let foundTask = await gopherClient.getTask({
        id: task.id
      });
      expect(foundTask.task.id).to.equal(task.id);
    });

    it("Should be able to search for it with archive search", async function() {
      let searchRes = await gopherClient.getTasks({
        status: "archived"
        // search: "Archived"
      });
      expect(searchRes.tasks[0].reference_email.subject).to.equal(
        "Archived Task"
      );
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
   */
  describe("Filtering & Searching", function() {
    it("Gets only the task for extension1", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Subject 1");
    });

    it("Creates a task from Joe", async () => {
      let res = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: `example@${extensionSubdomain2}.gopher.email`,
          reference_email: {
            server_recipient: `example@${extensionSubdomain2}.gopher.email`,
            to: "Joe<joe@example.com>",
            subject: "Hi Joe"
          }
        }
      });
      testTasks.push(res.task);
    });

    it("Creates a task with subect 'Zuki'", async () => {
      let res = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: `example@${extensionSubdomain2}.gopher.email`,
          reference_email: {
            server_recipient: `example@${extensionSubdomain2}.gopher.email`,
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

    it("Orders search results by due date desc", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        order_by: "due",
        order_dir: "desc"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Space Ships!");
    });

    it("Orders search results by due date asc", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        order_by: "due",
        order_dir: "asc"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Subject 1");
    });

    it("Gets only the later task using due_after", async () => {
      let tenYears = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365 * 10;
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        due_after: tenYears
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Space Ships!");
    });

    it("Filters tasks using due_before", async () => {
      let addRes = await gopherClient.createTask({
        suppress_webhook: true,
        task: {
          command: `example@${extensionSubdomain1}.gopher.email`,
          reference_email: {
            server_recipient: `example@${extensionSubdomain1}.gopher.email`,
            subject: "Twenty Minutes"
          },
          reminder_timeformat: "20min"
        }
      });
      testTasks.push(addRes.task);

      let thirtyMinutes = Math.floor(Date.now() / 1000) + 60 * 30; //30 min
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        due_before: thirtyMinutes
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Twenty Minutes");
    });

    it("Limits results using per_page param", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        per_page: 1
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks).to.have.length(1);
    });

    it("Always the tasks with null due dates last", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        order_by: "due",
        order_dir: "desc"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      let finalTask = res.tasks.pop();
      expect(finalTask.reference_email.subject).to.equal("TEST: Null due date");

      res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        order_by: "due",
        order_dir: "asc"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      finalTask = res.tasks.pop();
      expect(finalTask.reference_email.subject).to.equal("TEST: Null due date");
    });

    it("Paginates results using per_page and page param", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
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
  });
});
