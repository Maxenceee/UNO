/*!






 __  __                                                  ____                             
|  \/  |   __ _  __  __   ___   _ __     ___    ___     / ___|   __ _   _ __ ___     __ _ 
| |\/| |  / _` | \ \/ /  / _ \ | '_ \   / __|  / _ \   | |  _   / _` | | '_ ` _ \   / _` |
| |  | | | (_| |  >  <  |  __/ | | | | | (__  |  __/   | |_| | | (_| | | | | | | | | (_| |
|_|  |_|  \__,_| /_/\_\  \___| |_| |_|  \___|  \___|    \____|  \__,_| |_| |_| |_|  \__,_|
    





*/

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
},
Bf = function() {
    return 589824 < window.innerHeight * window.innerWidth
},
je = function(a) {
    return "string" == typeof a
}

var Me = function(a, b, c) {
    return Le(document, arguments)
},
Le = function(a, b) {
    var c = String(b[0]),
        d = b[1],
        e = b[2] || null;
    c = a.createElement(c);
    if (e && e.in) c.innerHTML = e.in;

    b && (d && typeof e !== "object" && !je(d) ? Ne(c, d, e) : (e && e.type ? c.setAttribute(e.type, d) : d && (c.className = d)));
    return c
},
Ne = function(b, c, d) {
    function e(h, i) {
        b.setAttribute(h, i);
    }
    for (var i = 0; i < Math.min(c.length, d.length); i++) {
        e(c[i], d[i]);
    }
},
Mc = function(a, b) {
    a.classList.add(b);
},
Mr = function(a, b) {
    a.classList.remove(b);
},
Ms = function(a, b, c) {
    je(b) ? a.setAttribute(b, c !== undefined ? c : "") : Ne(a, b, c)
},
Md = function(a, b) {
    (b.length > 1) ? dj(a, b) : a.appendChild(b);
    return a
},
Mg = function(a, b) {
    return a.getElementsByClassName(b)
},
Mqa = function(a, b) {
    return a.querySelectorAll(b)
},
Mq = function(a, b) {
    return a.querySelector(b)
},
dj = function(a, b) {
    for(var i = 0; i < b.length; i++) 
        a.appendChild(b[i]);
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
Fa = function(a, b) {
    return r(b) ? a.getElementsByClassName(b)[0] : b
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
        filename: "images/UNO_cards.svg",
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
    // console.log(a.left <= this.left, "&&", a.left + a.width >= this.left, "||", a.left <= this.left + this.width, "&&", a.left <= this.left + this.width, ")&&(", a.top <= this.top, "&&", a.top + a.height >= this.top, "||", a.top <= this.top + this.height, "&&", a.top <= this.top + this.height);
    return (a.left <= this.left && a.left + a.width >= this.left || a.left >= this.left && a.left <= this.left + this.width) && (a.top <= this.top && a.top + a.height >= this.top || a.top >= this.top && a.top <= this.top + this.height)
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


var CardEvents = function(a, c) {
    this.event = null;
    this.caller = null;
    a && this.dispatchEvent(...arguments);
}
var ce = CardEvents.prototype;
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
var jdf = function(a, b, c, d) {
    a.push(new CardEvents(b, c, d));
},
jdg = function(a, b) {
    for(var i = 0; i < a.length; i++) {
        let d = a[i];
        jdf(b, d[0], d[1], d[2]);
    }
},
dkf = function(a) {
    return typeof a === "object"
}

var Card = function(a, b, c) {
    this.left = null || a.left;
    this.top = null || a.top;
    this.card = this.I("DIV", (a && r(a)) || b || "card", this.I("CANVAS", "card-canvas"));
    (a && dkf(a)) && this.moveTo();
    this.width = c ? c.width : S;
    this.height = c ? c.height : T;
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
    this.card.style.transition = "left 500ms, top 500ms, rotate 500ms";
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
    if (!this.gameParent.canPlay) return
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    this.dragging = true;
    this.deltaX = (d.clientX - this.left);
    this.deltaY = (d.clientY - this.top);
    this.lt = this.left;
    this.tp = this.top;
    this.card.style.transition = "";
    this.tzIdx = this.card.style.zIndex;
    this.card.style.zIndex = "10001";
};
c.dragMove = function(a) {
    a.preventDefault();
    if (!this.gameParent.canPlay) return
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    // console.log(this.deltaX, d.clientX);
    this.moveTo(new O(d.clientX-this.deltaX, d.clientY-this.deltaY));
};
c.dragMoveEnd = function(a) {
    if (!this.gameParent.canPlay) return
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null),
        e = this;
    e.dragging = false;
    e.card.style.transition = "left 500ms, top 500ms, rotate 500ms";
    e.card.style.zIndex = e.tzIdx
    // window.setTimeout(() => , 500)
    e.emit('dragend', function(a, b, c) {
        let n = new O(d.clientX-e.deltaX, d.clientY-e.deltaY, e.width, e.height),
            m = a.sqrt().inter(n) || (e.lt == e.left && e.tp == e.top),
            o = m && iscompatible(a.gtp().cardCode, e.cardCode);
        e.moveTo(o ? a.sqrt() : new O(e.lt, e.tp));
        o && b(m, e, c);
    })
};
c.clickEnd = function(a) {
    if (!this.gameParent.canPlay) return
    let e = this;
    e.emit('dragend', function(a, b, c) {
        let o = iscompatible(a.gtp().cardCode, e.cardCode);
        o && e.moveTo(a.sqrt());
        o && b(m, e, c);
    })
};
c.initEvents = function() {
    this.event = [];
    this.bc = new O(NaN, NaN, NaN, NaN);
    let d = this;

    jdg([[["mousedown"], d.card, d.dragMoveStart.bind(d)], [["mousemove"], document, function(a) {d.dragging && d.dragMove(a)}], [["touchend", "mouseup"], d.card, d.dragMoveEnd.bind(d)]], d.event)
    // this.event.push(new CardEvents(["click"], this.card, function() {
    //     console.log('click event');
    // }));
};
c.delete = function() {
    this.canv().remove();
    delete this;
}
defineCode = function(a, b) {
    a.cardCode = b;
};


var Pile = function(a, b, c, d, e) {
    this.pile = new Card(a, d, e);
    this.pile.drawcard(c, b);
    this.pile.canv().style.zIndex = "10001";
    return this
};
mergeProto(Pile, CallBack);
var p = Pile.prototype;
p.gtc = function() {
    return this.pile
};
p.listen = function() {
    this.clickEvent = new CardEvents(["click"], this.pile.canv(), function(a) {
        if(!this.gameParent.canPlay) return
        this.gameParent.canPlay = false;
        this.emit('create');
    }.bind(this));
};
p.rmlisten = function() {
    this.clickEvent.removeEvent();
};
p.delete = function() {
    this.gtc().delete();
    delete this;
}

var Pack = function(a, b) {
    this.pack = new Card(a, b);
    this.pack.canv().style.zIndex = -1;
};
var p = Pack.prototype;
p.gtp = function() {
    return this.pack
};
p.sqrt = function() {
    let b = this.pack;
    return new O(b.left, b.top, b.width, b.height)
};
p.update = function(a) {
    this.pack.createCardPatern(codeToCoord(a));
    this.pack.redrawcard();
};
p.delete = function() {
    this.gtp().delete();
    delete this;
};

randomInt = function(mn, mx) {
    if (!mx) mx = mn, mn = 0
    return Math.floor(Math.random() * (mx - mn) + mn);
};

var Loader = function() {
    let a = Me("DIV", "box-loader");
    a.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/></svg></div>';
    this.loader = a
};
Loader.prototype.create = function(a) {
    Pe(a, this.loader);
    return this.loader
};
Loader.prototype.remove = function() {
    this.loader.remove();   
};

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
            if (msg.isConnected) {
                this.loader.remove();
                console.log(msg);
                let d = this.deck = msg.deck,
                    f = this.full = msg.full;
                this.emit('connection', d, f);
            }
            if (msg.setId) {
                this.gameid = msg.setId.id;
            }
            if (msg.begin) {
                this.emit('gamebegin', msg.startCard, msg.full, msg.player, msg.turn, msg.canPlay);
            }
            if (msg.currentPlayer) {
                if (this.gameid !== msg.playerid) this.emit('updatecurrentplayer', msg.currentPlayer);
            }
            if (msg.canPlay) {
                this.emit('canplay', msg.canPlay);
            }
            if(msg.update) {
                console.log(this.gameid, msg.update.playerid);
                if (this.gameid !== msg.update.playerid) this.emit('update', msg.update);
            }
            if (msg.USER_DISCONNECTED) {
                this.emit('userdisconnetion');
            }
        } catch (error) {
            console.log(error);
        }
    }

    this.socket.onclose = () => {
        console.log("connection closed");
        this.emit('close');
    }
};
mergeProto(Socket, CallBack);
var s = Socket.prototype;
s.j = function(a) {
    return JSON.stringify(a);
};
s.p = function(a) {
    return JSON.parse(a);
};
s.begin = function(a) {
    let m = this.j({ready: a, username: this.gameParent.unsername}); 
    this.socket.send(m);
};
s.sendUpdate = function(a, b, c) {
    console.log(a, b, c);
    let m = this.j({update: {playerid: this.gameid, card: a, deckSize: b, ...c}});
    console.log(m);
    this.socket.send(m);
};
s.end = function() {
    this.socket.send(this.j({USER_DISCONNECTION: true, connectionEnd: true}));
    delete this;
};

var Game = function() {}
var g = Game.prototype;
g.start = function(a) {
    this.unsername = a.length ? a : null
    this.connectionCreated = false;
    this.canPlay = false;
    this.deckContainer = Fe(document, "game-root");
    this.closeGame();

    var gameSocket = this.gameSocket = new Socket;
    console.log(gameSocket);
    kfg(this, gameSocket);

    gameSocket.on('connection', function(a, b) {
        console.log('connection starting game', a, b);
        this.connectionCreated = true;
        setTimeout(() => {
            this.drawDeck(a, b);
            this.createOpponentDeck();
        }, 500);
    }.bind(this));

    gameSocket.on('gamebegin', function(a, b, c, d, e) {
        console.log('game begin');
        console.log(a, b, c, d);
        this.full = b;
        this.player = c;
        this.canPlay = e;
        this.createPack(a);
    }.bind(this));

    gameSocket.on('canplay', function(a) {
        this.canPlay = a;
    }.bind(this));

    gameSocket.on('close', function() {
        console.log('received close');
        this.stop();
    }.bind(this));

    gameSocket.on('update', function(a) {
        console.log("update", a);
        this.canPlay = a.canPlay;
        if (a.fromPile == true) {
            for(var i = 0; i < a.pileChanges.length; i++) {
                let id = this.full.findIndex(function (obj) {
                    return obj == a.pileChanges[i];
                });
                this.full.splice(id, 1);
            }
        }
        if (a.played == true) 
            this.gamepack.gtp().cardCode = a.card,
            this.gamepack.update(a.card),
            this.playCardEffects(a.card);
        
        this.updateOpponentDeck(a.deckSize);
    }.bind(this));

    gameSocket.on('updatecurrentplayer', function(a) {
        this.updateCurrentPlayer(a);
    }.bind(this));

    gameSocket.on('userdisconnetion', function() {
        this.stop();
    }.bind(this));
};
g.stop = function() {
    this.connectionCreated = false;
    this.canPlay = false;
    this.gameSocket.end();
    var ld = new Loader;
    ld.create(Fe(document, "solitaire-mode-dialog-close"));
    Fe(document, "close-btn").classList.add("-show");
    this.reset();
    setTimeout(() => {
        ld.remove();
    }, 1000);
    
};
g.reset = function() {
    var cnt = Fe(document, "dialog-container");
    cnt.classList.remove('-hide-dialog');
    this.gamepack.delete();
    this.cards.forEach(e => {
        e.delete();
    })
    this.oppn.forEach(e => {
        e.delete();
    })
    this.pile.delete();
};
g.closeGame = function() {
    let t = this,
        v = Fe(document, "close-btn");
    v.classList.add("-show");
    v.onclick = () => {
        let mess = "You are going to leave the game. There is no way back.";
        new AlertPopup(mess, "Leave", function() {
            t.stop();
        }, "Stay here");
    }
};
g.drawDeck = function(a, b) {
    this.deck = a;
    this.full = b;
    this.cards = [];
    this.pileCoords = new O(window.innerWidth - 200, window.innerHeight/2-T)
    let pile = this.pile = new Pile(new O(0, 0), qe, this.deckContainer, "pile");
    pile.gtc().moveTo(this.pileCoords);
    pile.listen();
    kfg(this, pile);
    this.pileEvent(pile);

    this.deck && this.deck.forEach((e, i) => {
        this.crtCrad(e);
    });
    this.placeDeck();
    setTimeout(() => {
        this.gameSocket.begin(true);
    }, 1000);
};
g.crtCrad = function(a) {
    let ncard = new Card(this.pileCoords),
        p = this;
    ncard.createCardPatern(codeToCoord(a));
    defineCode(ncard, a);
    ncard.drawcard(this.deckContainer);
    ncard.initEvents();
    kfg(this, ncard);
    ncard.on('dragend', function(n) {
        this.canPlay = false;
        n(p.gamepack, p.playCard, p);
    });
    this.cards.push(ncard);
};
g.createPack = function(a) {
    this.packCoords = new O(window.innerWidth/2-S/2, window.innerHeight/2-T/2);
    this.gamepack = new Pack(this.pileCoords, "gamepack");
    console.log(this.gamepack);
    var b = this.gamepack;
    b.gtp().createCardPatern(codeToCoord(a));
    defineCode(b.gtp(), a);
    b.gtp().drawcard(this.deckContainer);
    
    window.setTimeout(() => {
        b.gtp().moveTo(this.packCoords);
    }, 500);
};
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
    console.log(a, b, c);
    let n,
        m;
    if (a) {
        let id = c.cards.findIndex(function (obj) {
            return obj.cardCode == b.cardCode;
        });
        window.setTimeout(() => {
            c.gamepack.update(b.cardCode);
            b.delete();
        }, 500);
        c.gamepack.gtp().cardCode = b.cardCode;
        console.log(c.gamepack);
        id !== -1 && (n = c.cards.splice(id, 1), m = c.deck.splice(id, 1))
        c.placeDeck();
    }
    if (c.cards.length === 0) console.log("game, end"), c.stop();
    c.sendGameUpdate(b.cardCode, {played: true, fromPile: false, pileChanges: [], changedColor: false});
};
g.pileEvent = function(a) {
    var n = this;
    a.on('create', function() {
        let b = [],
            d = n.full.shift();
        b.push(d);
        n.deck.push(d), n.crtCrad(d);
        window.setTimeout(() => {
            n.placeDeck();
        }, 50);
        n.sendGameUpdate(null, {played: false, fromPile: true, pileChanges: b, changedColor: false});
    });
};
g.sendGameUpdate = function(a, b) {
    this.canPlay = false;
    this.gameSocket.sendUpdate(a, this.deck.length, b);
};
g.createOpponentDeck = function() {
    this.oppn = this.oppn || []
    for(var i = 0; i < 7; i++) {
        let oc = new Pile(new O(0, 0), qe, this.deckContainer, "opponent", {width: 80, height: 120});
        oc.gtc().canv().style.zIndex = 0;
        oc.gtc().moveTo(this.pileCoords);
        this.oppn.push(oc);
    }
    this.placeOpponentDeck();
};
g.updateOpponentDeck = function(a) {
    console.log(a, this.oppn.length);
    if (a == this.oppn.length) return
    if (a > this.oppn.length) {
        for(var i = 0; i < a; i++) {
            if (!this.oppn[i]) {
                let oc = new Pile(new O(0, 0), qe, this.deckContainer, "opponent", {width: 80, height: 120});
                oc.gtc().canv().style.zIndex = 0;
                oc.gtc().moveTo(this.pileCoords);
                this.oppn.push(oc);
            }
        }
    } else if (a < this.oppn.length) {
        for(var i = 0; i <= this.oppn.length-a; i++) {
            this.oppn[a].delete();
            this.oppn.splice(a, 1);
        }
    }
    this.placeOpponentDeck();
};
g.placeOpponentDeck = function() {
    let n = window.innerWidth,
        o = this.oppn.length,
        p = (n-(S/4)*o)/2,
        q = ((n-p*2)/o),
        r = 0,
        s = o%2,
        g = o-s,
        f = 50,
        e = 80,
        c = [],
        d = this.oppn;
    // console.log(n, p, e, q, n/e, d);
    for(var j = 0; j < o; j++) {
        let t = (p+q*j).toFixed(3),
            l = f/(g/2),
            u = 20 + (j >= g/2 ? (s > 0 ? (j == (g/2)+s-1 ? l*(g-j-1) : l*(g-j)) : l*(o-j-1)) : l*j),
            v = d[j],
            h = (j < g/2 ? (g-j)-g/2 : -(j-g/2))*(e/2)/(g/2);
        c.push([v, t, u, j, h]);
    }
    var w = window.setInterval(() => {
        if (r == o) return clearInterval(w);
        let d = c[o-r-1];

        d[0].gtc().moveTo(new O(d[1], d[2]));
        d[0].gtc().canv().style.zIndex = d[3];
        rtcp(d[0], d[4]);
        r++;
    }, 50);
};
g.playCardEffects = function(a) {
    console.log(a);
    // (a[1] == "V") && this.addCardsToDeck(2);
    // (a[0] == "Z") && this.addCardsToDeck(4);
    (a[1] == "V") ? this.addCardsToDeck(2) : (a[0] == "Z" && a[1] == "1") ? this.addCardsToDeck(4) : console.log("no effect");
};
g.addCardsToDeck = function(a) {
    console.log(a);
    let b = [];
    for(var i = 0; i < a; i++) {
        let d = this.full.shift();
        b.push(d);
        this.deck.push(d), this.crtCrad(d);
    }
    window.setTimeout(() => {
        this.placeDeck();
    }, 50);
    this.sendGameUpdate(null, {played: false, fromPile: true, pileChanges: b, changedColor: false});
};
p.updateCurrentPlayer = function(a) {

    let n = Fa(document, "display") || Md(Me("div", "display"), Md(Me("div", "display-inner"), Md(Me("h1", "", {in: a+" is playing"}), Me("div", "dot-typing"))))
    Md(document.body, n);
};

iscompatible = function(a, b) {
    return a[0] == b[0] || a[1] == b[1] || (a[0] == "Z" || b[0] == "Z")
},
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
            default: return null
        }
    }
    let b = e(a.slice(0, 1)),
        c = e(a.slice(1)) || parseInt(a.slice(1));
    return {x: c, y: b}
},
kfg = function(a, b) {
    b.gameParent = a;
},
rtcp = function(a, b) {
    a.gtc().canv().style.transform = "rotateZ("+b+"deg)"
}

var AlertPopup = function(t, a, b, c, d) {
    let l = Me("div", "ad-error-pn-c");
    Md(document.body, l);
    if (!b) {
        l.innerHTML = '<div class="ad-error-panel"><div class="ad-err"><p>'+t+'</p></div><div id="ad-err-close-btn" class="ad-err-close">Fermer</div></div>';
    } else {
        if (c) {
            l.innerHTML = '<div class="ad-error-panel"><div class="ad-err"><p>'+t+'</p></div><div class="ad-btn"><div id="ad-err-reset-btn" class="ad-err-close ad-demi ad-demi-sup">'+a+'</div><div id="ad-err-close-btn" class="ad-err-close ad-demi">'+c+'</div></div></div>';
            Fe(document, 'ad-err-reset-btn').addEventListener("click", b);
            Fe(document, 'ad-err-reset-btn').addEventListener("click", function() {l.remove()});
        } else {
            l.innerHTML = '<div class="ad-error-panel"><div class="ad-err"><p>'+t+'</p></div><div id="ad-err-close-btn" class="ad-err-close">'+a+'</div></div>';
            Fe(document, 'ad-err-close-btn').addEventListener("click", b);
        }
    }
    if (d) {
        Fe(document, 'ad-err-close-btn').addEventListener("click", d);
    }
    Fe(document, 'ad-err-close-btn').addEventListener("click", function() {l.remove()});
    return l
}

var UsernamePopup = function(t, a) {
    let l = Me("div", "ad-error-pn-c");
    Md(document.body, l);
    l.innerHTML = '<div class="ad-error-panel grow-anim"><div class="ad-err"><p style="min-height: auto;">'+t+'</p><div class="fr-text-field"><input autofocus required maxlength="15" type="text" id="on-user-input" class="SIU-tf"><label for="name" class="label-name"><span class="content-name">Username</span></label></div></div><div id="ad-err-close-btn" class="ad-err-close">Save</div></div>';
    var pp = () => {
        let str = Fe(document, 'on-user-input').value;
        if (!/\s/.test(str)) {
            a(str);
            document.body.removeChild(l);
        } else {
            Fe(document, 'on-user-input').classList.add('wrong-enter-r');
        }
    };
    Fe(document, 'ad-err-close-btn').addEventListener("click", pp);
    window.onkeyup = (key) => {
        key.keyCode === 13 && pp()
    }
    return l
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
        started = new Game;
        cnt.classList.add('-hide-dialog');
        setTimeout(() => {
            new UsernamePopup("Choose your username", function(a) {
                started.start(a);
            });
        }, 100);
    }
}());