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
      [this[currentIndex], this[randomIndex]] = [
        this[randomIndex], this[currentIndex]];
    }
}

/**
 * WebSocket Server
 */

let wss = new WebSocket.Server({ port:'8081' });

wss.on('connection', async function(ws) {
    ws.id = uuid.v4();

    ws.on('message', async function(message) {
        let msg = p(message);
        if (msg.ready) {
            let tk = takeCard(ws.fullDeck);
            ws.send(j({begin: true, player: 0, turn: 0, startCard: tk.c, full: tk.f}))
        }
    });

    ws.on('close', async function(message) {
        console.log(ws.id, "disconnected");
    });

    setTimeout(() => {
        ws.send(JSON.stringify({isConnected: true, deck: createPlayerDeck(ws)}))
    }, 200);
});

createPlayerDeck = function(ws) {
    var fullDeck = [],
        player = [],
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
    for(var j = 0; j < 7; j++) {
        let e = random(0, fullDeck.length);
        player.push(fullDeck[e])
        fullDeck.splice(e, 1);
    }
    console.log(fullDeck, player);
    fullDeck.shuffle();
    ws.fullDeck = fullDeck;
    ws.player = player;
    return {player: player, full: fullDeck}
};

takeCard = function(fullDeck) {
    let c = fullDeck.shift(),
        f = fullDeck;
    console.log(c, f);
    while (c[0] == "Z") {
        f.push(c);
        c = f.shift();
    }
    console.log(c, f);
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