var WebSocket = require('ws');
var uuid = require('node-uuid');

/**
 * WebSocket Server
 */

let wss = new WebSocket.Server({ port:'8081' });

wss.on('connection', async function(ws) {
    ws.id = uuid.v4();

    ws.on('message', async function(message) {
        console.log('received: %s', message);
    });

    ws.on('close', async function(message) {
        console.log(ws.id, "disconnected");
    });

    setTimeout(() => {
        ws.send(JSON.stringify({isConnected: true, deck: createPlayerDeck()}))
    }, 200);
});

createPlayerDeck = function() {
    let fullDeck = [],
        player = [],
        ncard = 13,
        specials = ["D", "P", "V"],
        bonus = ["C", "F"],
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
    return player
};

random = function(mn, mx) {
    return Math.floor(Math.random() * (mx - mn) + mn);
};

module.exports = wss;