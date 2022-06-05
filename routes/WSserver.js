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
    GAME_POOL_SIZE = 2,
    GAME_POOL = [],
    WAITINGPLAYERS = [];

wss.on('connection', async function(ws) {
    ws.id = uuid.v4();

    ws.send(j({CONNECTION_ACCEPTED: true, IS_AVAILABLE_OPPONENT: WAITINGPLAYERS.length > 0}));

    ws.on('message', async function(message) {
        let msg = p(message),
            pool = await getPoolById(ws.poolId);

        if (msg.update) {
            console.log("received update", msg.update);
            pool.update(msg);
        }
        if (msg.ready) {
            ws.ready = true;
            pool.playerReady++;
            pool.defUsername(msg.username, ws);
            console.log(ws.id, "is ready");
            if (pool.playersAllReady()) {
                pool.beginGame();
            }
        }
        if (msg.USER_DISCONNECTION) {
            console.log(ws.id, "disconnected");
            pool.disconnected(ws.id);
            removeClient(ws.id, CLIENTS);
            removeClient(ws.id, WAITINGPLAYERS);
            ws.close();
        }
    });

    ws.on('close', async function() {
        console.log(ws.id, "disconnected");

        console.log("number of client", CLIENTS.length);
        let pool = await getPoolById(ws.poolId);
        pool.disconnected(ws.id);
        removeClient(ws.id, CLIENTS);
        removeClient(ws.id, WAITINGPLAYERS);
    });

    clientConnection(ws);
});

function clientConnection(a) {
    WAITINGPLAYERS.push(a);
    console.log("new waiting", a.id);
    CLIENTS.push(a);
    console.log("number of client", CLIENTS.length);
    if (WAITINGPLAYERS.length == GAME_POOL_SIZE) {
        // initGame(WAITINGPLAYERS);
        let pool = new Pool(WAITINGPLAYERS);
        GAME_POOL.push(pool);
        pool.initGame();
        WAITINGPLAYERS = [];
    }
}

var Pool = function(a) {
    this.players = a,
    this.poolSize = a.length,
    this.direction = true,
    this.currentPlaying = 0,
    this.playerReady = 0,
    this.poolId = uuid.v4();
    this.playersId();
    console.log("new pool id :", this.poolId);
}
var p = Pool.prototype;
p.initGame = function() {
    let c = createPlayerDeck(this.poolSize);
    this.setPropety("poolId", this.poolId);
    this.fullDeck = c.full;
    this.sendDeck(c.decks);
};
p.beginGame = function() {
    console.log("begin game for pool:", this.poolId);
    let tk = takeCard(this.fullDeck);
    this.sendId();
    this.sendAll({begin: true, player: 1, turn: 0, startCard: tk.c, full: tk.f, canPlay: false});
    this.players[this.currentPlaying].send(j({canPlay: true}));
    this.sendAll({currentPlayer: this.players[this.currentPlaying].username, id: this.players[this.currentPlaying].id});
};
p.setPropety = function(a, b) {
    for (var i=0; i < this.players.length; i++) {
        this.players[i][a] = b;
    }
};
p.update = function(a) {
    let eff = cardAsEffects(a.update.card);
    console.log("played effect", eff);
    this.sendAll({update: {...a.update, canPlay: false}});

    if (eff && eff.reverse == true) this.direction = !this.direction;
    this.currentPlaying = newPlayerFromDirection(this.currentPlaying, this.direction, this.poolSize, eff);
    this.players[this.currentPlaying].send(j({canPlay: true}));
    this.sendAll({currentPlayer: this.players[this.currentPlaying].username, id: a.update.playerid});
};
p.playersAllReady = function() {
    return this.playerReady == this.poolSize
};
p.sendId = function() {
    for (var i = 0; i < this.players.length; i++) {
        this.players[i].send(j({setId: {id: this.players[i].id, poolPlayersid: this.playersIdm}}));
    }
};
p.sendDeck = function(a) {
    for (var i = 0; i < this.players.length; i++) {
        this.players[i].send(j({isConnected: true, deck: a[i]}));
    }
};
p.sendAllExcept = function(a, m) {
    var foundId = GAME_POOL.findIndex(function (obj) {
        return obj.poolId == a;
    });
    if (foundId == -1) return
    for (var i = 0; i < this.players.length; i++) {
        if (i !== foundId) this.players[i].send(j(m));
    }
};
p.sendAll = function(m) {
    for (var i = 0; i < this.players.length; i++) {
        this.players[i].send(j(m));
    }
};
p.playersId = function() {
    this.playersIdm = [];
    for (var i = 0; i < this.players.length; i++) {
        this.playersIdm.push(this.players[i].id);
    }
};
p.defUsername = function(a, b) {
    if (a) b.username = a;
    else {
        var foundId = this.players.findIndex(function (obj) {
            return obj.id == b.id;
        });
        foundId !== -1 && (b.username = "Player "+foundId)
    }
};
p.removePool = function() {
    var foundId = GAME_POOL.findIndex(function (obj) {
        return obj.poolId == this.poolId;
    });
    foundId !== -1 && GAME_POOL.splice(foundId, 1);
    delete this
};
p.disconnected = function(a) {
    var foundId = this.players.findIndex(function (obj) {
        return obj.id == a;
    });
    foundId !== -1 && this.players.splice(foundId, 1);
    this.sendAll({USER_DISCONNECTED: a});
    WAITINGPLAYERS = [...WAITINGPLAYERS, ...this.players]
    this.removePool();
};

var newPlayerFromDirection = function(a, b, c, d) {
    let v = d && d.pass ? 2 : 1,
        s = !b ? a-v : a+v;
    s > c-1 && (s = 0)
    s < 0 && (s = c-1)
    return s
},
cardAsEffects = function(a) {
    return a && {pass: a[1] == "D", reverse: a[1] == "P"}
}

async function getPoolById(a) {
    try {
        let response = await new Promise((resolve, reject) => {
            var foundId = GAME_POOL.findIndex(function (obj) {
                return obj.poolId == a;
            });
            if (foundId >= 0) {
                resolve(GAME_POOL[foundId]);
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

var createPlayerDeck = function(a) {
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
    for(var k = 0; k < a; k++) {
        player = [];
        for(var j = 0; j < 7; j++) {
            let e = random(0, fullDeck.length);
            player.push(fullDeck[e])
            fullDeck.splice(e, 1);
        }
        pall.push(player)
    }
    fullDeck.shuffle();
    return {decks: pall, full: fullDeck}
},
takeCard = function(fullDeck) {
    let c = fullDeck.shift(),
        f = fullDeck;
    while (c[0] == "Z") {
        f.push(c);
        c = f.shift();
    }
    return {c: c, f: f};
}

var p = function(a) {
    return JSON.parse(a);
},
j = function(a) {
    return JSON.stringify(a);
}

random = function(mn, mx) {
    return Math.floor(Math.random() * (mx - mn) + mn);
};

module.exports = wss;