# UNO

Multiplayer UNO fully in Vanilla Javascript and running on Node.JS server.

You can use this project on localhost or on a Node.js server to use it online.

[Try it here!](https://uno.maxencegama.dev)

## Usage

Clone this project and open current directory into a terminal, then install dependencies by running:

```sh
npm install
```

After installing the dependencies, start the project by running:

```sh
npm start
```

App will be available on localhost at specified port in the bin/www file (> defaultPort) or you can specify it in an environment file `.env`.

## Multiplayer

Multiplayer WebSocket server will automaticaly start on port 8081 nothing more is required.

Multiple games can be played in the same time, players are automatically matched.

## Play online

### Example configuration of a Node.js Apache server

An easy way to do is to enable ProxyPass on virtual host and configure the server as follow.

To serve the Node application:

```sh
<VirtualHost *:80 *:443 >

	...

    ProxyPass / http://localhost:[app-port]/
    ProxyPassReverse / http://localhost:[app-port]/
</VirtualHost>
```

To serve the WebSocket:

```sh
<VirtualHost *:80 *:443 >

	...

    ProxyPass / ws://localhost:[socket-port]/
    ProxyPassReverse / ws://localhost:[socket-port]/
</VirtualHost>
```

## Notes

For the moment game can be played with only two players and UNO button is not working.
