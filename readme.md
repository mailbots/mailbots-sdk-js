# Gopher API JS Client (Preview Release)

JavaScript client (for both Node.js and browser) to interact with the [Gopher Email API](https://www.gopher.email).

## Usage

Quick example:

```
npm install gopherhq-node
```

```javascript
var Gopher = require('gopherhq-node');

// initialize (see below)
var gopherClient = new Gopher({clientId: 'your-extensions-client-id'});
gopherClient.setAccessToken('your-oauth2-access-token');

// create a task
var task = {
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
let res = await gopherClient.createTask(task);

// along with async/await magic, of course ✨
let res = await gopherClient.createTask(task); //in async function
```

## Examples

* See the `test` directory for usage examples.
* [gopher-express](https://github.com/gopherhq/gopher-express)
* [remix Gopher Express on Glitch](https://glitch.com/edit/#!/gopher-express) to start prototyping right away.

## License

MIT

## Contributions

Contributions are welcome. Feel free to [connect with us on Slack](https://slackin.gopheremail.com) or just create a PR.
