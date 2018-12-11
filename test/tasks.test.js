import { 
  getGopherClient, 
  getExampleTask,
  recordNockMocks  } from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import _ from "lodash";
import nock from "nock";

const debug = require("debug")("gopherhq");

const gopherClient = getGopherClient();
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
  this.timeout(15000);

  /**
   * Tasks tests all have access to a global example "task"  that 
   * is set up newly for each test.
   */
  let task;
  beforeEach(async function() {
  
    // reset testTasks array to zero 
    testTasks = [];

    let res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          subject: "Subject 1"
        },
        trigger_timeformat: "1hour"
      }
    });
    
    // This first task is each example task
    task = res.task;

    // Test tasks are deleted after each test
    testTasks.push(res.task);

    // More taest tasks to test sorting, filtering and things
    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          subject: "Space Ships!",
          to: ["joe@example.com"]
        },
        trigger_timeformat: "20years"
      }
    });
    testTasks.push(res.task);

    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain2}.gopher.email`,
        reference_email: {
          subject: "TEST: Subject 2"
        },
        trigger_timeformat: "tomorrow"
      }
    });
    testTasks.push(res.task);

    //null due date
    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          subject: "TEST: Null due date"
        }
      }
    });
    testTasks.push(res.task);

    //mutable example task
    res = await gopherClient.createTask({
      suppress_webhook: true,
      task: {
        command: `example@${extensionSubdomain1}.gopher.email`,
        reference_email: {
          subject: "TEST: Null due date"
        }
      }
    });
    exampleTask = res.task;
    testTasks.push(res.task);
  });

  /**
   * Tear down test context after every test
   */
  afterEach(async function() {
    // delete test tasks
    try {
      const uniqueTestTasks = [...new Set(testTasks)]; // efficient way of de-duplicating array
      let deletePromises = uniqueTestTasks.map(testTask => {
        if (testTask && testTask.id) {
          return gopherClient.deleteTask({
            task: { id: testTask.id }
          });
        } else return true;
      });
      let res = await Promise.all(deletePromises);
    } catch (e) {
      // Uncomment to debug
      // console.log(e);
      // console.log("Suppressed an error in mocha after() method");
    }
    
    testTasks = [];
  });

  describe("Creating, Editing and Deleting", function() {
    this.timeout(20000);

    it("should create a task", done => {
      let taskPayload = {
        task: {
          command: process.env.EXAMPLE_COMMAND,
          trigger_timeformat: "15min",
          reference_email: {
            cc: [],
            bcc: [],
            from: "bar@bar.email",
            subject: "Test1",
            html: "Test1",
            text: "Test1",
            attachments: []
          },
          stored_data: {
            privatedata1: "Value1"
          }
        }
      };
      //TODO: Test successful Gopher Task creation even if the Extension endpoint fails.
      let res = gopherClient.createTask(taskPayload, (err, res) => {
        if (err) done(err);
        expect(res).to.be.an("object");
        expect(res.statusCode).to.equal(201);
        testTasks.push(res.task);
        done();
      });
      testTasks.push(res.task);
    }).timeout(50000);

    it("creates a task with suppressesed webhook and verbose output", async function() {
      let res = await gopherClient.createTask({
        verbose: 1,
        suppress_webhook: true,
        task: {
          command: process.env.EXAMPLE_COMMAND,
          reference_email: {
            to: [process.env.EXAMPLE_COMMAND],
            cc: [],
            bcc: [],
            from: "test@example.com",
            subject: "Test1",
            html: "Test1",
            text: "Test1",
            attachments: []
          },
          stored_data: {
            privatedata1: "Value1"
          },
          trigger_time: 1520319928,
          trigger_timeformat: "3days",
          completed: false
        },
        send_messages: [
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

    it("sendEmail helper creates an email and task with html", async function() {
      const res = await gopherClient.sendEmail({
        command: process.env.EXAMPLE_COMMAND,
        to: "test@exampletask.com",
        cc: [],
        bcc: [],
        from: "test@example.com",
        subject: "Test1",
        body: `<h1>This is a test</h1>`,
        verbose: 1 // useful for testing only (probably)
      });
      expect(res).to.be.an("object");
      expect(res.task.completed).to.be.true;
      expect(res.messages).to.be.instanceof(Array);
      expect(res.messages[0].to[0]).to.equal("test@exampletask.com");
      expect(res.messages[0].html).to.contain("This is a test");
      expect(res.task.reference_email.to[0]).to.equal("test@exampletask.com");
      expect(res.task.reference_email.html).to.contain("This is a test");
      expect(res.statusCode).to.equal(201);
      testTasks.push(res.task);
    });

    it("sendEmail helper uses object body data", async function() {
      const res = await gopherClient.sendEmail({
        command: process.env.EXAMPLE_COMMAND,
        to: "test@exampletask.com",
        cc: [],
        bcc: [],
        from: "test@example.com",
        subject: "Test1",
        body: [
          {
            type: "html",
            text: `<h1>This is a test</h1>`
          }
        ],
        verbose: 1 // useful for testing only (probably)
      });
      expect(res).to.be.an("object");
      expect(res.task.completed).to.be.true;
      expect(res.messages).to.be.instanceof(Array);
      expect(res.messages[0].to[0]).to.equal("test@exampletask.com");
      expect(res.messages[0].html).to.contain("This is a test");
      expect(res.task.reference_email.to[0]).to.equal("test@exampletask.com");
      // expect(res.task.reference_email.html).to.contain("This is a test");
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
          suppress_webhook: true,
          task: {
            id: exampleTask.id,
            reference_email: {
              html: "something else new"
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

    it("should update trigger_timeformat for a task", done => {
      if (!exampleTask.hasOwnProperty("id")) {
        done(new Error("Example Task doesn't exist"), exampleTask);
      }
      gopherClient
        .updateTask({
          suppress_webhook: true,
          task: {
            id: exampleTask.id,
            trigger_timeformat: "1day"
          }
        })
        .then(res => {
          expect(res).to.be.an("object");
          expect(res.task.trigger_timeformat).to.equal("1day");
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it("should fail to update an unsupported trigger_timeformat", done => {
      if (!exampleTask.hasOwnProperty("id")) {
        done(new Error("Example Task doens't exist"), exampleTask);
      }
      gopherClient
        .updateTask({
          task: {
            id: exampleTask.id,
            trigger_timeformat: "invalid_jibberish"
          }
        })
        .then(res => {
          done("Should have thrown exception");
        })
        .catch(err => {
          expect(err).to.be.instanceOf(Error);
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

    it("should create a task with verbose output", done => {
      gopherClient.createTask(
        {
          verbose: 1,
          task: {
            command: process.env.EXAMPLE_COMMAND,
            trigger_timeformat: "1sec",
            reference_email: {
              to: [process.env.EXAMPLE_COMMAND],
              cc: [],
              bcc: [],
              from: "bar@bar.email",
              subject: "Test1",
              html: "Test1",
              text: "Test1",
              attachments: []
            },
            stored_data: {
              privatedata1: "Value1"
            }
          }
        },
        (err, res) => {
          if (err) done(err);
          testTasks.push(res.task);
          expect(res).to.be.an("object");
          expect(res.status).to.equal("success");
          expect(res.messages).to.exist;
          expect(res.messages).to.be.an("array");
          done();
        }
      );
    });

    it("should create a minal task that only sends an email", done => {
      let res = gopherClient.createTask(
        {
          suppress_webhook: true,
          verbose: 1,
          task: {
            command: process.env.EXAMPLE_COMMAND
          },
          send_messages: [
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
        },
        (err, res) => {
          if (err) done(err);
          testTasks.push(res.task);
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
  });

  /**
   * Archiving and Deleting Tasks
   */
  describe.only("Archiving and Deleting Tasks", function() {
    this.timeout(5000);

    it("Should archive a task", async function() {
      const resCompleted = await gopherClient.completeTask({
        task: { id: task.id }
      });
      const foundTask = await gopherClient.getTask({
        id: task.id
      });
      expect(foundTask.task.id).to.equal(task.id);
    });

    it("Should be able to find an it with archive search", async function() {
      const subject = task.reference_email.subject; 
      const resCompleted = await gopherClient.completeTask({
        task: { id: task.id }
      });

      let searchRes = await gopherClient.getTasks({
        status: "completed",
        search: subject
      });
      const hasProperSubject = task =>
        task.reference_email.subject === subject;
      expect(searchRes.tasks.some(hasProperSubject)).to.be.true;
    });

    it("Should delete the archived task", async function() {
      const resDeleted = await gopherClient.deleteTask({
        task: { id: task.id }
      });
      try {
      const foundTask = await gopherClient.getTask({
        id: task.id
      });} catch (e) {
        expect(e.message).to.eq("task_not_found");
      }
    });
  });

  /**
   * Filtering Tasks
   */
  describe("Filtering & Searching", function() {
    it("Gets only the task for extension1", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        search: "Subject"
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
            to: "joe@example.com",
            subject: "Zuki"
          }
        }
      });
      testTasks.push(res.task);
    });

    it("Search for tasks with Zuki in subject", async () => {
      let res = await gopherClient.getTasks({
        search: "Space Ships!"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Space Ships!");
    });

    it("Search for tasks from Joe", async () => {
      let res = await gopherClient.getTasks({
        search: "joe@example.com"
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
    
    it("Gets only the later task using due_after", async function () {
      // Skip if we're mocking network requests
      if (!process.env.NOCK_OFF) {
        this.skip();
      }
      let tenYears = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365 * 10;
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        due_after: tenYears
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      expect(res.tasks[0].reference_email.subject).to.equal("Space Ships!");
    });

    
    it("Filters tasks using due_before", async function () {
      // Skip if we're mocking network requests
        if(!process.env.NOCK_OFF) {
          this.skip();
        }
        let addRes = await gopherClient.createTask({
          suppress_webhook: true,
          task: {
            command: `example@${extensionSubdomain1}.gopher.email`,
            reference_email: {
              subject: "Twenty Minutes"
            },
            trigger_timeformat: "20min"
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

    it("Always sorts the tasks with null due dates last", async () => {
      let res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        order_by: "due",
        order_dir: "desc",
        search: "TEST"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      let indexOfNullDueTask = res.tasks.findIndex(
        task => task.reference_email.subject === "TEST: Null due date"
      );
      let indexOfOtherTask = res.tasks.findIndex(
        task => task.reference_email.subject === "TEST: Subject 2"
      );
      expect(indexOfNullDueTask).to.be.greaterThan(indexOfOtherTask);

      res = await gopherClient.getTasks({
        extension: extensionSubdomain1,
        order_by: "due",
        order_dir: "asc",
        search: "TEST"
      });
      if (res instanceof Error) throw res;
      expect(res.tasks).to.be.instanceof(Array);
      indexOfNullDueTask = res.tasks.findIndex(
        task => task.reference_email.subject === "TEST: Null due date"
      );
      indexOfOtherTask = res.tasks.findIndex(
        task => task.reference_email.subject === "TEST: Subject 2"
      );
      expect(indexOfNullDueTask).to.be.greaterThan(indexOfOtherTask);
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
