# UNO

Multiplayer UNO in full vanilla javascript running on node.js server.

You can use this project on localhost or on a node.js server to use it online.

## Usage

Clone this project and open current directory into a terminal, then install dependencies by running :

```sh
npm install
```

After installing the dependencies, start the project by running :

```sh
npm start
```

App will be available on localhost at specified port in the bin/www file (> defaultPort)

### Node.js Apache server Configuration

An easy way to do is to enable ProxyPass on virtual host and configure server as follow.


To serve node application :

```sh
<VirtualHost *:80 *:443>

	...

    ProxyPass / http://localhost:[app-port]/
    ProxyPassReverse / http://localhost:[app-port]/
</VirtualHost>
```

To serve WebSocket :

```sh
<VirtualHost *:80 *:443>

	...

    ProxyPass / ws://localhost:[socket-port]/
    ProxyPassReverse / ws://localhost:[socket-port]/
</VirtualHost>
```

## Multiplayer

Multiplayer WebSocket server will automaticaly start on port 8081 nothing more is required.

Multiple games can be played in the same time, players are automatically matched.

### Note

For the moment game can be played with only two players.
