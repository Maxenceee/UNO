var WebSocket = require('ws');
var uuid = require('node-uuid');
var UNO = require('../resources/algo/uno');

Array.prototype.shuffle = function() {
    let currentIndex = this.length,
        randomIndex;
  
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
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

wss.on('connection', async function(ws, req) {
    ws.id = uuid.v4();
    console.log("request url for", ws.id, req.url);

    ws.send(j({CONNECTION_ACCEPTED: true, IS_AVAILABLE_OPPONENT: WAITINGPLAYERS.length > 0}));

    ws.on('message', async function(message) {
        console.log("msg", message);
        let msg = p(message),
            pool = await getPoolById(ws.poolId);

        if (msg.NO_OPONENT) {
            ws.NO_OPONENT = true;
        }

        if (!pool)
            return ;

        if (msg.UPDATE) {
            console.info("\n--------------------");
            console.info("\033[0;36mreceived update\033[0m", msg.UPDATE);
            if (!pool.gameEnded) pool.update(msg);
        }
        if (msg.ready) {
            ws.ready = true;
            pool.playerReady++;
            pool.defUsername(msg.username, ws);
            console.info("player\033[0;32m", ws.id, "\033[0;37mis ready");
            if (pool.playersAllReady()) {
                pool.beginGame();
            }
        }
        if (msg.TIMEOUT_RECEIVED) {
            pool.passPlayerOnTimeOut();
        }
        if (msg.GAME_FINISHED) {
            console.info("\033[0;36mGame finished");
            pool.finish(msg, ws.username);
        }
        if (msg.USER_DISCONNECTION) {
            // console.log("\033[0;31m"+ws.id, "disconnected");
            // removeClient(ws.id, CLIENTS);
            // removeClient(ws.id, WAITINGPLAYERS);
            ws.close();
        }
        if (msg.PING) {
            let ps = new Date().getTime();
            ws.send(j({PING: ps}));
        }
    });

    ws.on('close', async function() {
        console.info("\033[0;31m"+ws.id, "disconnected");

        let pool = await getPoolById(ws.poolId);
        pool && pool.disconnected(ws.id);

        removeClient(ws.id, CLIENTS);
        removeClient(ws.id, WAITINGPLAYERS);
        console.info("\033[0;33mtotal of client players", CLIENTS.length);
    });

    clientConnection(ws, req.url);
});

function clientConnection(a, url) {
    let u = new URLSearchParams(url.replace("/", ""));
    if (u.has('no_op')) {
        let UNOPlayer = new UNO;
        let pool = new Pool([a, UNOPlayer]);
        
        GAME_POOL.push(pool);
        pool.initGame();
        return ;
    }
    WAITINGPLAYERS.push(a);
    console.info("\033[0;32mnew player waiting\033[0;37m", a.id);
    CLIENTS.push(a);
    console.info("\033[0;33mtotal of client players", CLIENTS.length);
    if (WAITINGPLAYERS.length >= GAME_POOL_SIZE) {
        let pool = new Pool(WAITINGPLAYERS.splice(0, 2));
        
        GAME_POOL.push(pool);
        pool.initGame();
        WAITINGPLAYERS = WAITINGPLAYERS.splice(2);
    }
}

var Pool = function(a) {
    this.players = a,
    this.playersUsername = [],
    this.poolSize = a.length,
    this.direction = true,
    this.currentPlaying = 0,
    this.playerReady = 0,
    this.poolId = uuid.v4();
    this.playersId();
    console.info("\033[0;32mcreating new pool with id :\033[0;37m", this.poolId, "with", this.players.map((e) => {return e.id}));
}
var p = Pool.prototype;
p.initGame = function() {
    let c = createPlayerDeck(this.poolSize);
    this.setPropety("poolId", this.poolId);
    this.fullDeck = c.full;
    this.sendDeck(c.decks);
};
p.beginGame = function() {
    console.info("\033[0;36mbegin game for pool :\033[0;37m", this.poolId);
    let tk = takeCard(this.fullDeck);
    this.sendId();
    this.sendAll({BEGIN: {startCard: tk.c, full: tk.f, canPlay: false, players: this.playersUsername}});
    this.players[this.currentPlaying].send(j({canPlay: true}));
    this.sendAll({CURRENT_PLAYER: {username: this.players[this.currentPlaying].username, id: this.players[this.currentPlaying].id}});
    // this.playingTimeOut();
};
p.setPropety = function(a, b) {
    for (var i = 0; i < this.players.length; i++) {
        this.players[i][a] = b;
    }
};
p.update = function(a) {
    let eff = a && cardAsEffects(a.UPDATE.card) || null;
    console.info("played card effect", eff);
    a ?
    this.sendAll({UPDATE: {...a.UPDATE, canPlay: false}})
    :
    this.sendAll({UPDATE: {canPlay: false}});

    (a && a.UPDATE.isDrawCards) && this.sendAll({info: this.players[this.currentPlaying].username+" draws "+a.UPDATE.pileChanges.length+" cards!"})

    if (eff && eff.reverse == true) this.direction = !this.direction, this.sendAll({info: "New game direction."});
    let nplayer = newPlayerFromDirection(this.currentPlaying, this.direction, this.poolSize, eff),
        isSame = newPlayerFromDirection(nplayer, !this.direction, this.poolSize, eff) == nplayer;

    console.info("same player", isSame);
    this.currentPlaying = nplayer;
    console.log("currentPlaying: ", this.currentPlaying);
    this.playingTimeOut();
    console.info("next player", this.currentPlaying, "direction -> clockwise", this.direction);
    if (!this.mustPassTurn(a.UPDATE)) {
        console.log("not mustPassTurn");
        this.sendAll({CURRENT_PLAYER: {username: this.players[this.currentPlaying].username, id:  this.players[this.currentPlaying].id}});
        this.players[this.currentPlaying].send(j({canPlay: true, isSame: isSame}));
    }
};
p.playersAllReady = function() {
    return (this.playerReady == this.poolSize);
};
p.sendId = function() {
    for (var i = 0; i < this.players.length; i++) {
        this.players[i].send(j({SET_GAME_POO_ID: {id: this.players[i].id, poolPlayersId: this.playersIdm}}));
    }
};
p.sendDeck = function(a) {
    for (var i = 0; i < this.players.length; i++) {
        this.players[i].send(j({IS_CONNECTED: true, deck: a[i]}));
    }
};
p.sendAllExcept = function(a, m) {
    var foundId = GAME_POOL.findIndex(function (obj) {
        return (obj.poolId == a);
    });
    if (foundId == -1) return ;
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
        if (this.players[i].isAI) {
            this.players[i].initPlayer(this);
        }
        this.playersIdm.push(this.players[i].id);
    }
};
p.defUsername = function(a, b) {
    if (a) b.username = a;
    else {
        var foundId = this.players.findIndex(function (obj) {
            return (obj.id == b.id);
        });
        foundId !== -1 && (b.username = "Player "+foundId)
    }
    this.playersUsername.push({username: b.username, id: b.id})
};
p.removePool = function() {
    var foundId = GAME_POOL.findIndex(function (obj) {
        return (obj.poolId == this.poolId);
    });
    foundId !== -1 && GAME_POOL.splice(foundId, 1);
    if (this.playingTimeout)
        clearTimeout(this.playingTimeout);
    delete this
};
p.finish = function(a, b) {
    this.gameEnded = true;
    this.sendAll({...a, player: b});
    this.removePool();
};
p.disconnected = function(a) {
    if (a) {
        var foundId = this.players.findIndex(function (obj) {
            return (obj.id == a);
        });
        foundId !== -1 && this.players.splice(foundId, 1);
    }
    this.sendAll({USER_DISCONNECTED: a || true});
    WAITINGPLAYERS = [...WAITINGPLAYERS, ...this.players]
    this.removePool();
};
p.mustPassTurn = function(u) {
    if (u.played) {
        let a = u.card;
        if (a[1] == "V") {
            return true
        } else if ((a[1] == "Z" && a[0] == "X")) {
            return true
        } else if (a[1] == "V" || (a[1] == "Z" && a[0] == "X")) {
            return false;
        }
    }
};
p.sendTimeOutAlert = function() {
    this.players[this.currentPlaying].send(j({TIMEOUT_PLAYING_ALERT: {delay: 15}}));
};
p.passPlayerOnTimeOut = function() {
    if (this.playingTimeout)
        clearTimeout(this.playingTimeout);
    this.playingTimeout = setTimeout(() => {
        this.sendAll({info: this.players[this.currentPlaying].username+" took too long to play, he misses his turn."});
        this.update();
    }, 20 * 1000);
};
p.playingTimeOut = function() {
    if (this.playingTimeout)
        clearTimeout(this.playingTimeout);
    this.playingTimeout = setTimeout(() => {
        this.sendTimeOutAlert();
    }, 10 * 1000);
};

var newPlayerFromDirection = function(a, b, c, d) {
    let v = d && d.pass ? 2 : 1,
        s = !b ? a - v : a + v;
    s > c - 1 && (s = s - c)
    s < 0 && (s = c + s)
    return (s);
},
cardAsEffects = function(a) {
    return (a && {pass: a[1] == "D", reverse: a[1] == "P"});
}

async function getPoolById(a) {
    try {
        return await new Promise((resolve, reject) => {
            var foundId = GAME_POOL.findIndex(function (obj) {
                return (obj.poolId == a);
            });
            if (foundId > -1) {
                resolve(GAME_POOL[foundId]);
            } else {
                reject(null);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

async function removeClient(id, l) {
    try {
        return await new Promise((resolve, reject) => {
            var foundId = l.findIndex(function (obj) {
                return (obj.id == id);
            });
        
            if (foundId > -1) {
                l.splice(foundId, 1);
                resolve(true);
            } else {
                reject(false);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

var createPlayerDeck = function(a, b) {
    var fullDeck = [],
        player = [],
        pall = [],
        ncard = 13,
        specials = ["D", "P", "V"],
        bonus = ["X", "W"],
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
        fullDeck.push(...[bonus[0]+"Z", bonus[1]+"Z"]);
    }
    for(var k = 0; k < a; k++) {
        player = [];
        for(var j = 0; j < (b || 7); j++) {
            let e = random(0, fullDeck.length);
            player.push(fullDeck[e])
            fullDeck.splice(e, 1);
        }
        pall.push(player)
    }
    fullDeck.shuffle();
    fullDeck.shuffle();
    /*
    *   Tests purpose
    */
    // fullDeck.splice(10);
    // pall = tts();
    /*
    *
    */
    return ({decks: pall, full: fullDeck});
},
takeCard = function(fullDeck) {
    let c = fullDeck.shift(),
        f = fullDeck;
    while (c[1] == "Z" || idf(c[1])) {
        f.push(c);
        c = f.shift();
    }
    return ({c: c, f: f});
},
idf = function(a) {
    switch(a) {
        case "D":
        case "P":
        case "V": return (true);
        default: return (false);
    }
}

var p = function(a) {
    return (JSON.parse(a));
},
j = function(a) {
    return (JSON.stringify(a));
},
random = function(mn, mx) {
    return (Math.floor(Math.random() * (mx - mn) + mn));
};

let tts = function() {
    // return [["WZ", "XZ", "G0", "GD", "BD", "YD", "RD"], ["WZ", "XZ", "G1", "GD", "BD", "YD", "RD"]]
    return [["WZ", "XZ", "G0"], ["WZ", "XZ", "G0"]]
}

module.exports = wss;
