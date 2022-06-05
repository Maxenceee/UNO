var WebSocket = require('ws');
var uuid = require('node-uuid');

Array.prototype.shuffle = function() {
    let currentIndex = this.length,
        randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
    }
}

/**
 * WebSocket Server
 */

let wss = new WebSocket.Server({ port:'8081' }),
    CLIENTS=[],
    WAITINGPLAYERS = [];

wss.on('connection', async function(ws) {
    ws.id = uuid.v4();

    ws.send(JSON.stringify({CONNECTION_ACCEPTED: true, IS_AVAILABLE_OPPONENT: WAITINGPLAYERS.length > 0}));

    ws.on('message', async function(message) {
        let msg = p(message);
        let op = await getOpponent(ws);

        if (msg.update) {
            console.log("received update", msg.update);
            op.send(j({update: {...msg.update, canPlay: true}}));
        }
        if (msg.ready) {
            ws.ready = true;
            console.log(ws.id, "is ready");
            if (ws.ready && op.ready) {
                let tk = takeCard(ws.fullDeck);
                setTimeout(() => {
                    ws.send(j({begin: true, player: 1, turn: 0, startCard: tk.c, full: tk.f, canPlay: false}));
                    op.send(j({begin: true, player: 0, turn: 0, startCard: tk.c, full: tk.f, canPlay: true}));
                }, 1500);
            }
        }
    });

    ws.on('close', async function(message) {
        console.log(ws.id, "disconnected");

        removeClient(ws.id, CLIENTS);
        removeClient(ws.id, WAITINGPLAYERS);
        console.log("number of client", CLIENTS.length);
        let op = await clientByOpponent(ws.id);
        if (op && op != 0) {
            op.send(JSON.stringify({USER_DISCONNECTED: ws.id}));
            WAITINGPLAYERS.push(op);
        }
    });

    clientConnection(ws);
});

function clientConnection(a) {
    WAITINGPLAYERS.push(a);
    console.log("new waiting", a.id);
    CLIENTS.push(a);
    console.log("number of client", CLIENTS.length);
    if (WAITINGPLAYERS.length == 2) {
        initGame(WAITINGPLAYERS);
        WAITINGPLAYERS = [];
    }
}

function initGame(CL) {
    console.log("init game for", CL[0].id, CL[1].id);
    let c = createPlayerDeck();
    CL[0].opponent = CL[1].id;
    CL[1].opponent = CL[0].id;
    CL[0].fullDeck = CL[1].fullDeck = c.full;
    CL[0].send(JSON.stringify({isConnected: true, deck: c.player1}));
    CL[1].send(JSON.stringify({isConnected: true, deck: c.player2}));
}

async function getOpponent(a) {
    try {
        let response = await new Promise((resolve, reject) => {
            var foundId = CLIENTS.findIndex(function (obj) {
                return obj.id == a.opponent;
            });
            if (foundId >= 0) {
                resolve(CLIENTS[foundId]);
            } else {
                reject(null);
            }
        });

        return response
    } catch (error) {
        console.info(error);
    }
}

async function clientByOpponent(a) {
    try {
        let response = await new Promise((resolve, reject) => {
            var foundId = CLIENTS.findIndex(function (obj) {
                return obj.opponent == a;
            });
        
            if (foundId >= 0) {
                resolve(CLIENTS[foundId]);
            } else {
                reject(null);
            }
        });

        return response
    } catch (error) {
        console.info(error);
    }
}

async function removeClient(id, l) {
    try {
        let response = await new Promise((resolve, reject) => {
            var foundId = l.findIndex(function (obj) {
                return obj.id == id;
            });
        
            if (foundId >= 0) {
                l.splice(foundId, 1);
                PLAYERSREADY = [];
                resolve(1);
            } else {
                reject(0);
            }
        });

        return response === 1 ? true : false
    } catch (error) {
        console.info(error);
    }
}

createPlayerDeck = function() {
    var fullDeck = [],
        player = [],
        pall = [],
        ncard = 13,
        specials = ["D", "P", "V"],
        bonus = ["Z", "Z"],
        colors = ["G", "B", "Y", "R"];

    for(var j of colors) {
        for(var i = 0; i < ncard; i++) {
            if (i > 9) {
                let l = i-10;
                fullDeck.push(...[j+specials[l], j+specials[l]]);
            } else {
                fullDeck.push(j+i);
                if (i > 0) fullDeck.push(j+i);
            }
        }
        fullDeck.push(...[bonus[0]+"0", bonus[1]+"1"]);
    }
    for(var k = 0; k < 2; k++) {
        player = [];
        for(var j = 0; j < 7; j++) {
            let e = random(0, fullDeck.length);
            player.push(fullDeck[e])
            fullDeck.splice(e, 1);
        }
        pall.push(player)
    }
    fullDeck.shuffle();
    return {player1: pall[0], player2: pall[1], full: fullDeck}
};

takeCard = function(fullDeck) {
    let c = fullDeck.shift(),
        f = fullDeck;
    while (c[0] == "Z") {
        f.push(c);
        c = f.shift();
    }
    return {c: c, f: f};
}

p = function(a) {
    return JSON.parse(a);
}
j = function(a) {
    return JSON.stringify(a);
}

random = function(mn, mx) {
    return Math.floor(Math.random() * (mx - mn) + mn);
};

module.exports = wss;