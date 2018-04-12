# Gopher API JS Client (Preview)

JavaScript client for interacting with the [Gopher Email API](https://www.gopher.email). Works in the browser and node.js.

**Note: Gopher is currently in private beta. Enter your email on the [Gopher Home Page](https://www.gopher.email) to request an invitation**

## Usage

Quick example:

```
npm install gopherhq
```

```javascript
const var Gopher = require('gopherhq');

// initialize
const gopherClient = new Gopher({clientId: 'YOUR_EXTENSIONS_CLIENT_ID'});
gopherClient.setAccessToken('YOUR_OAUTH2_ACCESS_TOKEN');

// create a task
const task = {
        task: {
          reference_email: {
            server_recipient: 'command@your-extension.gopher.email',
            to: ['you@example.com'],
            subject: "Test1",
            html: "Test1",
          }
        }
      }

// create a task with a callback
gopherClient.createTask(task, function(err, res) { console.log(err || res)});

// promises work, too.
const res = gopherClient.createTask(task)
	.then(function(res) {
		console.log(res);
	})
	.catch(function(err) {
		console.log(err);
	});

// along with async/await magic, of course ✨
const res = await gopherClient.createTask(task); //in async function
```

* `YOUR_EXTENSIONS_CLIENT_ID` – Find this in the developer portal.
* `YOUR_OAUTH2_ACCESS_TOKEN` - Log in to your extension and copy the value from the `gopherToken` cookie using something like [EditThisCookie](http://www.editthiscookie.com/) or the Chrome dev tools.

## Examples

* See the `test` directory for usage examples.
* [gopher-express](https://github.com/gopherhq/gopher-express), an open source Gopher Extension
* Create a new extension and [remix Gopher Express on Glitch](https://glitch.com/edit/#!/gopher-express) to start prototyping right away.

## Debugging

Set the env variable `DEBUG=gopherhq` to log debugging information.

## Contributions

Contributions are welcome. Feel free to send us an email help+gopher@humans.fut.io or create a PR. A few notes:

* `npm t` will watch for changes and re-run tests on save, letting you make rapid progress.
* See comment in `gopherTestUtils.js` about mocking network requests.
* Make sure to run `npm run build` to rebuild the lib.

## License

MIT
