# MailBots API JS Client (Beta)

JavaScript client for interacting with the [MailBots Email API](https://www.mailbots.com). Works in the browser and node.js.

**Note: MailBots is currently in private beta. Enter your email on the [MailBots Home Page](https://www.mailbots.com) to request an invitation**

## Usage

Quick example:

```
npm install mailbots-sdk
```

```javascript
const var MailBotsClient = require('mailbots-sdk');

// initialize
const mbClient = new MailBotsClient({clientId: 'YOUR_MAILBOT_CLIENT_ID'});
mbClient.setAccessToken('YOUR_OAUTH2_ACCESS_TOKEN');

// create a task
const task = {
        task: {
          reference_email: {
            server_recipient: 'command@your-bot.eml.bot',
            to: ['you@example.com'],
            subject: "Test1",
            html: "Test1",
          }
        }
      }

// create a task with a callback
mbClient.createTask(task, function(err, res) { console.log(err || res)});

// promises work, too.
const res = mbClient.createTask(task)
	.then(function(res) {
		console.log(res);
	})
	.catch(function(err) {
		console.log(err);
	});

// along with async/await of course ✨
const res = await mbClient.createTask(task); //in async function
```

- `YOUR_MAILBOT_CLIENT_ID` – Find this in the developer portal.
- `YOUR_OAUTH2_ACCESS_TOKEN` - Authenticate your bot and copy your bot's `access_token` from webhook requests (it is sent with every request).

## References and Examples

- [Reference docs](https://mailbots-sdk-js.mailbots.com/)
- See the `test` directory for usage examples.

## Tests
`cp .env.example .env`
`npm t`

We use [nock](https://github.com/nock/nock) for mocking network requests. The mocked requests / responses match the values in .env.example.

To run against the live API, you'll need to setup a couple test MailBots, copy their values into .env and run "test:live"


## Debugging

Set the env variable `DEBUG=mailbots-sdk` to log debugging information.

## Contributions

Contributions are welcome. Feel free to send us an email help+mailbots@humans.fut.io or create a PR. A few notes:

- `npm t` will watch for changes and re-run tests on save, letting you make rapid progress.
- See package.json and `mbTestUtils.js` about mocking network requests.
- Make sure to run `npm run build` to rebuild the lib.
- Try to follow [MailBot naming conventions](https://github.com/mailbots/mailbots#use-of-mailbot-mailbot-mailbots-and-bots)

## License

MIT
