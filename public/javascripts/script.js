var g,
    aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    },
    ba = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    },
    ca = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    },
    da;
if ("function" == typeof Object.setPrototypeOf)
    da = Object.setPrototypeOf;
else {
    var ea;
    a:
    {
        var fa = {
                Zd: !0
            },
            ha = {};
        try {
            ha.__proto__ = fa;
            ea = ha.Zd;
            break a
        } catch (a) {}
        ea = !1
    }da = ea ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var ia = da,
ca = "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
}
Bf = function() {
    return 589824 < window.innerHeight * window.innerWidth
}

var Me = function(a, b) {
    let e = document.createElement(a);
    e.classList.add(b);
    return e
},
ba = function(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    }
},
oa = function(a) {
    a.Ec = void 0;
    a.ja = function() {
        return a.Ec ? a.Ec : a.Ec = new a
    }
},
t = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Z = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.bf = function(d, e, f) {
        for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
            h[k - 2] = arguments[k];
        return b.prototype[e].apply(d, h)
    }
},
ie = function(a, b) {
    this.vb = [];
    this.Dc = [];
    b = ba(b);
    for (var c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        c = new qd(a + d.filename);
        d = d.size;
        this.vb.push(c);
        this.Dc.push(d)
    }
},
je = function(a) {
    return ma(a) ? a : a[0]
};
g = ie.prototype;
g.xb = function() {
    return this.vb[je(void 0)].xb()
};
g.preload = function(a, b) {
    var c = this.vb[je(a)];
    return (new Promise(function(d) {
        c.Tb ? d() : c.Ad.push(d);
        c.preload()
    })).then(function() {
        return b && b()
    })
};
g.xb = function() {
    return this.vb[je(void 0)].xb()
};
g.Ta = function(a) {
    return a[3]
};
g.tb = function(a) {
    return a[4]
};
g.Ac = function(a) {
    return {
        width: a[3],
        height: a[4]
    }
};
g.drawImage = function(a, b, c, d, e, f, h, k, p, q) {
    var u = b[1],
        E = b[2],
        D = b[3],
        M = b[4];
    if (void 0 == e) {
        var Q = u;
        var R = E;
        var ua = D;
        var va = M;
        e = D;
        f = M
    } else
        void 0 == h ? (Q = u, R = E, ua = D, va = M) : (Q = u + c, R = E + d, ua = e, va = f, c = h, d = k, e = p, f = q);
    Q < u && (q = u - Q, Q = u, ua -= q, c += q, e -= q);
    R < E && (q = E - R, R = E, va -= q, d += q, f -= q);
    Q + ua > u + D && (u = Q + ua - (u + D), ua -= u, e -= u);
    R + va > E + M && (E = R + va - (E + M), va -= E, f -= E);
    b = this.vb[je(b)];
    if (!b.xb())
        throw Error("Spritesheet is not loaded, can't draw.");
    0 < ua && 0 < va && a.drawImage(b.image, Q, R, ua, va, c, d, e, f)
};
g.ta = function(a, b, c, d) {
    var e = void 0 === e ? 1 : e;
    var f = void 0 === f ? !1 : f;
    var h = void 0 === h ? !1 : h;
    var k = void 0 === k ? !1 : k;
    var p = this.Ta(a),
        q = this.tb(a);
    b.save();
    b.translate(c, d);
    b.scale(h ? -e : e, k ? -e : e);
    this.drawImage(b, a, 0, 0, p, q, -p * (f ? .5 : h ? 1 : 0), -q * (f ? .5 : k ? 1 : 0), p, q);
    b.restore()
};

var qd = function(a) {
    od.call(this, a);
    this.image = new Image
}
var od = function(a) {
    this.gd = a;
    this.Tb = !1;
    this.Ad = []
};
od.prototype.xb = function() {
    return this.Tb
};
pd = function(a) {
    if (!a.Tb) {
        a.Tb = !0;
        for (var b = 0, c; c = a.Ad[b]; b++) {
            c()
        }
    }
};
t(qd, od);
qd.prototype.preload = function() {
    if (!this.image.src) {
        var a = this;
        this.image.onload = function() {
            pd(a)
        };
        this.image.src = this.gd;
        (this.image.complete || "complete" == this.image.readyState) && pd(this)
    }
};
Pe = function(a, b) {
    a.appendChild(b)
},
n = function(a) {
    return void 0 !== a
},
r = function(a) {
    return "string" == typeof a
},
ma = function(a) {
    return "number" == typeof a
},
Fe = function(a, b) {
    return r(b) ? a.getElementById(b) : b
},
l = function(a, b) {
    a.prototype = ca(b.prototype);
    a.prototype.constructor = a;
    if (ia)
        ia(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else
                    a[c] = b[c];
    a.Z = b.prototype
},
jf = function(a, b, c) {
    if (b instanceof Be)
        c = b.height,
        b = b.width;
    else if (void 0 == c)
        throw Error("missing height argument");
    a.style.width = gf(b, !0);
    a.style.height = gf(c, !0)
},
gf = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
,
hf = function(a, b, c) {
    if (b instanceof Ae) {
        var d = b.x;
        b = b.y
    } else
        d = b,
        b = c;
    a.style.left = gf(d, !1);
    a.style.top = gf(b, !1)
},
Le = function(a, b) {
    var c = String(b[0]),
        d = b[1];
    c = a.createElement(c);
    d && (r(d) ? c.className = d : c.className = d.join(" "));
    2 < b.length && Ne(a, c, b, 2);
    return c
},
Ne = function(a, b, c, d) {
    function e(h) {
        h && b.appendChild(r(h) ?
        a.createTextNode(h) : h)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        e(f);
    }
},
uf = function() {
    return me.ja().Ac(ne)
}

var me = function() { 
    ie.call(this, "/", le)
};
l(me, ie);
var le = [{
        filename: "images/UNO_cards_deck.svg",
        // filename: "images/card-sprite.2.png",
        size: [3360, 893]
    }],
    ne = [0, 0, 0, 240, 360],
    oe = [0, 0, 1440, 240, 360],
    pe = [0, 240, 1440, 240, 360],
    qe = [0, 480, 1440, 240, 360];
oa(me);

var Cf = function(a, b, e) {
    var c = me.ja(),
        d = Me("CANVAS", e || "card-canvas");
    Pe(Fe(document, a), d);
    d.width = b[3];
    d.height = b[4];
    c.drawImage(d.getContext("2d"), b, 0, 0);
    return d
}
var S = Math.round(uf().width * (Bf() ? .55 : .33)),
    T = Math.round(uf().height * (Bf() ? .55 : .33)); 

var Qf = function(a) {
    this.wa = a;
    this.rb = a.getContext("2d");
    this.Kd = me.ja();
    this.width = a.width;
    this.height = a.height
};
Qf.prototype.clear = function() {
    this.rb.clearRect(0, 0, this.wa.width, this.wa.height)
};
Qf.prototype.ta = function(a, b, c) {
    this.Kd.ta(a, this.rb, b, c)
};

var O = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
g = O.prototype;
g.clone = function() {
    return new O(this.left, this.top, this.width, this.height)
};
g.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
g.contains = function(a) {
    return this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
g.inter = function(a) {
    return (this.left <= a.left && this.left + this.width >= a.left || this.left >= a.left && this.left + this.width >= a.left + a.width) && (this.top <= a.top && this.top + this.height >= a.top || this.top >= a.top && this.top + this.height >= a.top + a.height)
};
g.Ac = function() {
    return new Be(this.width, this.height)
};
g.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Be = function(a, b) {
    this.width = a;
    this.height = b
};
g = Be.prototype;
g.clone = function() {
    return new Be(this.width, this.height)
};
g.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
g.aspectRatio = function() {
    return this.width / this.height
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    b = ma(b) ? b : a;
    this.width *= a;
    this.height *= b;
    return this
};
var mergeProto = function(a, b) {
    return function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(a, b)
}


var moveEffect = function() {
    console.log();
}
Jf = function(a, b) {
    var c = a.bc;
    a = isNaN(c.left) ? null : c.left;
    c = isNaN(c.width) ? 0 : c.width;
    return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
},
Kf = function(a, b) {
    var c = a.bc;
    a = isNaN(c.top) ? null : c.top;
    c = isNaN(c.height) ? 0 : c.height;
    return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
};
Lf = function(a, b) {
    var c = a-b
    console.log(a, b, c);
    return a-c
};

var CallBack = function() {}
CallBack.prototype.on = function(t, e) {
    this.listeners = this.listeners || {}
    this.listeners[t] || (this.listeners[t] = []),
    this.listeners[t].push(e);
}
CallBack.prototype.emit = function(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
        n[o - 1] = arguments[o];
    var i = this.listeners[t];
    i && i.length && i.forEach(function(t) {
        return t.apply(void 0, n)
    })
}


var cardEvents = function(a, c) {
    this.event = null;
    this.caller = null;
    a && this.dispatchEvent(...arguments);
}
var ce = cardEvents.prototype;
ce.dispatchEvent = function(a, b, c) {
    let d = this.event;
    if (d) {
        throw Error("Event already exist");
    }
    this.caller = b;
    this.event = c;
    this.name = a;
    for(var i = 0; i < a.length; i++)
        b.addEventListener(a[i], this.event, {passive: true});
};
ce.removeEvent = function() {
    for(var i = 0; i < a.length; i++)
        this.caller.removeEventListener(this.name[i], this.event);
};

var Card = function(a, b) {
    this.left = null || a.left;
    this.top = null || a.top;
    this.card = this.I("DIV", (a && r(a)) || b || "card", this.I("CANVAS", "card-canvas"));
    (a && typeof a == "object") && this.moveTo();
    this.width = S;
    this.height = T;
};
mergeProto(Card, CallBack);
var c = Card.prototype;
c.drawcard = function(a, b, c) {
    let patern = this.patern ? this.patern : !ma(b) ? b : [0, 240*b, 360*c, 240, 360]
    this.wa = this.zc("card-canvas", this.card);
    this.wa.width = uf().width;
    this.wa.height = uf().height;

    this.d = new Qf(this.wa);
    jf(this.card, this.width, this.height);
    a.appendChild(this.card);
    this.d.ta(patern, 0, 0);
    this.card.style.transition = "left 500ms, top 500ms";
};
c.createCardPatern = function(a, b) {
    this.patern = !ma(a) ? [0, 240*a.x, 360*a.y, 240, 360] : [0, 240*a, 360*b, 240, 360]
};
c.redrawcard = function(b, c) {
    let patern = this.patern ? this.patern : !ma(b) ? b : [0, 240*b, 360*c, 240, 360]
    this.d.ta(patern, 0, 0);
}
c.moveTo = function(a) {
    a && (this.left = a.left, this.top = a.top)
    // console.log("m->", this.left, this.top);
    this.card.style.left = this.left+"px";
    this.card.style.top = this.top+"px";
    // console.log(this.card);
},
c.I = function(a, b, c) {
    return Le(document, arguments)
};
c.canv = function() {
    return this.card
};
c.zc = function(a, b) {
    var c = b || document;
    if (c.getElementsByClassName)
        a = c.getElementsByClassName(a)[0];
    return a || null
};
c.dragMoveStart = function(a) {
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    this.dragging = true;
    this.deltaX = (d.clientX - this.left);
    this.deltaY = (d.clientY - this.top);
    this.lt = this.left;
    this.tp = this.top;
    this.card.style.transition = "";
    this.tzIdx = this.card.style.zIndex;
    this.card.style.zIndex = "10001";
}
c.dragMove = function(a) {
    a.preventDefault();
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    // console.log(this.deltaX, d.clientX);
    this.moveTo(new O(d.clientX-this.deltaX, d.clientY-this.deltaY));
}
c.dragMoveEnd = function(a) {
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null),
        e = this;
    console.log(d.clientX, d.clientY);
    e.dragging = false;
    e.card.style.transition = "left 500ms, top 500ms";
    e.card.style.zIndex = e.tzIdx
    // window.setTimeout(() => , 500)
    e.emit('dragend', function(a, b, c) {
        let n = new O(d.clientX-e.deltaX, d.clientY-e.deltaY, e.width, e.height),
            m = a.sqrt().inter(n),
            o = m && iscompatible(a.gtp().cardCode, e.cardCode);
        e.moveTo(o ? a.sqrt() : new O(e.lt, e.tp));
        o && b(m, e, c);
    })
}
c.initEvents = function() {
    this.event = [];
    this.bc = new O(NaN, NaN, NaN, NaN);
    let d = this;
    this.event.push(new cardEvents(["touchstart", "mousedown"], this.card, function(a) {
        d.dragMoveStart(a);
    }));
    this.event.push(new cardEvents(["touchmove", "mousemove"], document, function(a) {
        d.dragging && d.dragMove(a);
    }));
    this.event.push(new cardEvents(["touchend", "mouseup"], this.card, function(a) {
        d.dragMoveEnd(a);
    }));
    // this.event.push(new cardEvents(["click"], this.card, function() {
    //     console.log('click event');
    // }));
};
c.delete = function() {
    this.canv().remove();
    delete this;
}
defineCode = function(a, b) {
    a.cardCode = b;
    console.log(a.cardCode);
};


var Pile = function(a, b, c, d) {
    this.pile = new Card(a, d);
    this.pile.drawcard(c, b);
    this.pile.canv().style.zIndex = "10001";
    this.listen();
    return this
};
mergeProto(Pile, CallBack);
var p = Pile.prototype;
p.gtc = function() {
    return this.pile
};
p.listen = function() {
    this.clickEvent = new cardEvents(["click"], this.pile.canv(), function(a) {
        this.emit('create');
    }.bind(this));
};
p.rmlisten = function() {
    this.clickEvent.removeEvent();
};

var Pack = function(a, b) {
    this.pack = new Card(a, b);
    this.pack.canv().style.zIndex = -1;
};
var p = Pack.prototype;
p.gtp = function() {
    return this.pack
};
p.sqrt = function() {
    let b = this.pack
    return new O(b.left, b.top, b.width, b.height)
};
p.update = function(a) {
    this.pack.createCardPatern(codeToCoord(a));
    this.pack.redrawcard();
};

randomInt = function(mn, mx) {
    if (!mx) mx = mn, mn = 0
    return Math.floor(Math.random() * (mx - mn) + mn);
};

var Loader = function() {
    let a = Me("DIV", "box-loader");
    a.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/></svg></div>';
    this.loader = a
}
Loader.prototype.create = function(a) {
    Pe(a, this.loader);
    return this.loader
}
Loader.prototype.remove = function() {
    this.loader.remove();   
}

var Socket = function() {
    this.socket = new WebSocket("ws://"+location.hostname+":8081");
    this.deck = null;

    var ld = new Loader
    this.loader = ld.create(Fe(document, "solitaire-mode-dialog-close"));

    this.socket.onopen = () => {
        console.log("connection opened");
    };

    this.socket.onmessage = (message) => {
        try {
            let msg = this.p(message.data);
            console.log(msg);
            if (msg.isConnected) {
                this.loader.remove();
                this.deck = msg.deck.player;
                this.full = msg.deck.full;
                this.emit('connection', this.deck, this.full);
            }
            if (msg.begin) {
                this.emit('gamebegin', msg.startCard, msg.full, msg.player, msg.turn)
            }
        } catch (error) {
            console.log(error);
        }
    }

    this.socket.onclose = () => {
        console.log("connection closed");
        this.emit('close');
    }
}
mergeProto(Socket, CallBack);
var s = Socket.prototype;
s.j = function(a) {
    return JSON.stringify(a);
}
s.p = function(a) {
    return JSON.parse(a);
}
s.begin = function(a) {
    let m = this.j({ready: a}); 
    this.socket.send(m);
}

var Game = function() {}
var g = Game.prototype;
g.start = function() {
    this.connectionCreated = false;
    this.canPlay = false;
    this.deckContainer = Fe(document, "game-root");

    var gameSocket = this.gameSocket = new Socket;
    console.log(gameSocket);

    gameSocket.on('connection', function(a, b) {
        console.log('connection starting game', a);
        this.connectionCreated = true;
        this.drawDeck(a, b);
    }.bind(this));

    gameSocket.on('gamebegin', function(a, b, c, d) {
        console.log('game begin');
        console.log(a, b, c, d);
        this.full = b;
        this.player = c;
        this.canPlay = c == d;
        this.createPack(a);
    }.bind(this));

    gameSocket.on('close', function() {
        console.log('received close');
    }.bind(this));
};
g.drawDeck = function(a, b) {
    this.deck = a;
    this.full = b;
    this.cards = [];
    this.pileCoords = new O(window.innerWidth - 200, window.innerHeight/2-T)
    let pile = new Pile(new O(0, 0), qe, this.deckContainer, "pile");
    pile.gtc().moveTo(this.pileCoords);
    this.pileEvent(pile);

    this.deck && this.deck.forEach((e, i) => {
        this.crtCrad(e);
    });
    this.placeDeck();
    window.setTimeout(() => {
        this.gameSocket.begin(true);
    }, 500);
};
g.crtCrad = function(a) {
    let ncard = new Card(this.pileCoords),
        p = this;
    ncard.createCardPatern(codeToCoord(a));
    defineCode(ncard, a);
    ncard.drawcard(this.deckContainer);
    ncard.initEvents();
    ncard.on('dragend', function(n) {
        n(p.gamepack, p.playCard, p);
    });
    this.cards.push(ncard);
}
g.createPack = function(a) {
    this.packCoords = new O(window.innerWidth/2-S/2, window.innerHeight/2-T);
    this.gamepack = new Pack(this.pileCoords, "pile");
    console.log(this.gamepack);
    var b = this.gamepack;
    b.gtp().createCardPatern(codeToCoord(a));
    defineCode(b.gtp(), a);
    b.gtp().drawcard(this.deckContainer);
    window.setTimeout(() => {
        b.gtp().moveTo(this.packCoords);
    }, 500);
}
g.updateDeck = function() {};
g.placeDeck = function() {
    let n = window.innerWidth,
        o = this.deck.length,
        p = (n-S*o)/2,
        e = o >= 10 ? 10 : 6,
        q = p < n/e ? (p = n/e, ((n-(n/e)*2)/o)) : S+10,
        r = 0,
        s = 0,
        c = [],
        d = this.cards.sort(function(a, b) {
            return a.cardCode >= b.cardCode;
        });

    // console.log(n, p, e, q, n/e, d);
    for(var j = 0; j < o; j++) {
        let t = (p+q*j).toFixed(3),
            u = window.innerHeight-250-s,
            v = d[j];

        c.push([v, t, u, j]);
    }
    var w = window.setInterval(() => {
        if (r == o) return clearInterval(w);
        let d = c[r];

        d[0].moveTo(new O(d[1], d[2]));
        d[0].canv().style.zIndex = d[3];
        r++;
    }, 50);
};
g.playCard = function(a, b, c) {
    if (a) {
        let id = c.cards.findIndex(function (obj) {
            return obj.cardCode == b.cardCode;
        });
        window.setTimeout(() => {
            c.gamepack.update(b.cardCode);
            b.delete();
        }, 500);
        c.gamepack.gtp().cardCode = b.cardCode
        console.log(c.gamepack);
        id !== -1 && (c.cards.splice(id, 1), c.deck.splice(id, 1))
        c.placeDeck();
    }
}
g.pileEvent = function(a) {
    var n = this;
    a.on('create', function() {
        let b = n.full.shift();
        n.deck.push(b), n.crtCrad(b);
        window.setTimeout(() => {
            n.placeDeck();
        }, 50);
    });
}
iscompatible = function(a, b) {
    console.log(a, b);
    return a[0] == b[0] || a[1] == b[1] || (a[0] == "Z" || b[0] == "Z")
}
codeToCoord = function(a) {
    function e(h) {
        switch (h) {
            case "R": return 0
            case "Y": return 1
            case "G": return 2
            case "B": return 3
            case "F":
            case "C":
            case "Z": return 4
            case "D": return 10
            case "P": return 11
            case "V": return 12
            default: return undefined
        }
    }
    let b = e(a.slice(0, 1)),
        c = e(a.slice(1)) || parseInt(a.slice(1));
    return {x: c, y: b}
};

var Hh = function() {
    var started = null;
    if(!started) {
        me.ja().preload(0, function() {
            // started = new game;
            // started.start();

            // for(var y = 0; y < 4; y++) {
            //     for(var x = 0; x < 13; x++) {
            //         drawcard("solitaire-mode-dialog-close", x, y);
            //     }
            // }
            // drawcard("solitaire-mode-dialog-close", oe);
            // drawcard("solitaire-mode-dialog-close", pe);
        });
    }
}

(function(){
    var started = null;
    var cnt = Fe(document, "dialog-container");
    cnt.classList.remove('-hide-dialog');

    Fe(document, "start-easy-btn").onclick = () => {
        cnt.classList.add('-hide-dialog');
        started = new Game;
        started.start();
    }
}());