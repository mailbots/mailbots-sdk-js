import {
   getMailBotsClient,
} from "./testUtils/mbTestUtils";
import MailBotsClient from "../src/mailbots-sdk.js"; //TODO test browser + node versions separately
import "./testUtils/nockMocks";
import { expect } from "chai";
import timestamp from "unix-timestamp";
import _ from "lodash";

const debug = require("debug")("mailbots-sdk");
timestamp.round = true;

const mbClient =  getMailBotsClient();

describe("Auth", function() {
  it("should build a login URL", () => {
    expect (mbClient.getAuthorizationUri().uri).to.be.a("string");
  });

  it("should instantiate using fromBot factory method", (done) => {
    const requestJson = {mailbot: { stored_data: { access_token: "secure"}}}
  
    const botMock = { 
      config: {
        clientId: "foo",
        clientSecret: "bar"
      },
      get: function(path) {
        return _.get(this, path)
      }.bind(requestJson)
    }
    
    const mbClient = MailBotsClient.fromBot(botMock);
    console.log(mbClient);
  
    done();
  })
});
