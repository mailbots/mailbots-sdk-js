import {
  getGopherClient,
  getExampleTask,
  beforeEachTest,
  testConfig
} from "./testUtils/gopherTestUtils";
import "./testUtils/nockMocks";
import mocha from "mocha";
import { expect } from "chai";
import Gopher from "../src/gopherhq";
import timestamp from "unix-timestamp";
import { read } from "fs";

const debug = require("debug")("gopherhq");
timestamp.round = true;

let gopherClient = getGopherClient();
let testTasks = [];

describe("Logs", function () {

  let task;
  before(async function() {
    this.timeout(15000);
    // create various task failure scenarios to poulate log table

    // reset testTasks array to zero 
    testTasks = [];

    // create successful task
    let res = await gopherClient.createTask({
      task: {
        command: `example@${process.env.EXAMPLE_EXTENSION_SUBDOMAIN_1}.gopher.email`,
        reference_email: {
          subject: "Successful task"
        },
        trigger_timeformat: "1hour"
      }
    });
    
    // This first task is each example task
    task = res.task;

    // create a task which has submit_failed status
    res = await gopherClient.createTask({
      webhook: true, // <--- attempt webhook
      task: {
        command: `example@${process.env.EXAMPLE_EXTENSION_SUBDOMAIN_1}.gopher.email`,
        reference_email: {
          subject: "Unsuccessful webhook"
        },
        trigger_timeformat: "1hour"
      }
    });
    // Test tasks are deleted after each test
    testTasks.push(res.task);

    // create submit-failed webhook
    try {
      res = await gopherClient.createTask({
        // webhook: true, // <--- attempt webhook
        task: {
          command: `example@$wrong.gopher.email`,
          reference_email: {
            subject: "Unsuccessful submission"
          },
          trigger_timeformat: "1hour"
        }
      });
    } catch (e) {
      // this is supposed to fail no task created
    }
  });

  after(async function() {
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
  })

  testConfig.call(this);
  beforeEach(beforeEachTest);

  it("returns default logs with no options", async () => {
    let res = await gopherClient.getLogs({num: 1});
    expect(res.logs).to.be.an("array");
  });

  it('filters for submit_failed user logs', async () => {
    let res = await gopherClient.getLogs({ type: ["submit_failed"] });
    expect(res.logs).to.be.an("array");
    expect(res.logs[0].type).to.equal('submit_failed');
    let checkAllResults = res.logs.every((log) => (log.type == "submit_failed"));
    expect(checkAllResults).to.be.true;
  });

  it('filters for api and submit_failed user logs', async () => {
    let res = await gopherClient.getLogs({ type: ["submit_failed", "api"] });
    expect(res.logs).to.be.an("array");
    let checkAllResults = res.logs.every((log) => (log.type == "submit_failed" || log.type == "api"));
    expect(checkAllResults).to.be.true;
  });

  it('limits numbers logs ', async () => {
    let res = await gopherClient.getLogs({ num: 1 });
    expect(res.logs).to.be.an("array");
    expect(res.logs.length).to.equal(1);
  });

  it('only gets recent logs', async function () {
    // Dynamic date breaks mocked network requests
    if (!process.env.NOCK_OFF) {
      this.skip();
    }
    let since = Math.round(Date.now() / 1000 - (60 * 60 * 24 * 60));
    let res = await gopherClient.getLogs({ since });
    expect(res.logs).to.be.an("array");
    let allDates = res.logs.map(log => new Date(log.date).getTime());
    let checkResults = allDates.every((date) => date > since * 1000)
    expect(checkResults).to.be.true;
  }); 

  it("should get user logs of various types", async () => {
    let res = await gopherClient.getLogs({
      type: ["api", "webhook", "submit_failed"]
    });
    expect(res.logs).to.be.an("array");
  });

  it("should get only api type logs", async () => {
    let res = await gopherClient.getLogs;
  });
});
