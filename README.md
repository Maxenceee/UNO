# UNO

Multiplayer UNO in full vanilla javascript running on node.js server.

You can use this project on localhost or on a node.js server to use it online

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

## Multiplayer

Multiplayer WebSocket server will automaticaly start on port 8080

Multiple games can be played in the same time, players are automatically matched.

For the moment game can be played with only two players.