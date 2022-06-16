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
Na = function(b, c, d) {
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
jl = function(a) {
    return "string" == typeof a
},
Ms = function(a, b, c) {
    jl(b) ? a.setAttribute(b, c !== undefined ? c : "") : Na(a, b, c)
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
    qe = [0, 0, 2160, 240, 360];
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


var Events = function(a, c) {
    this.event = null;
    this.caller = null;
    a && this.dispatchEvent(...arguments);
}
var ce = Events.prototype;
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
    a.push(new Events(b, c, d));
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
    this.card.style.transition = "left 500ms ease, top 500ms ease, rotate 500ms ease";
};
c.createCardPatern = function(a, b) {
    console.log(a, b);
    this.patern = [0, 240*(a.x + (b || 0)), 360*a.y, 240, 360]
    console.log(this.patern);
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
    this.tzIdx = this.card.style.zIndex;
    this.trotate = this.card.style.transform;
};
c.dragMove = function(a) {
    a.preventDefault();
    if (!this.gameParent.canPlay) return
    this.card.style.transform = "rotate(0deg)";
    this.card.style.transition = "";
    this.card.style.zIndex = "10001";
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    // console.log(this.deltaX, d.clientX);
    this.moveTo(new O(d.clientX-this.deltaX, d.clientY-this.deltaY));
};
c.dragMoveEnd = function(a) {
    if (!this.gameParent.canPlay) return
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null),
        e = this;

    e.dragging = false;
    e.card.style.zIndex = e.tzIdx;
    e.card.style.transition = "left 500ms ease, top 500ms ease, rotate 500ms ease";

    e.emit('dragend', function(a, b, c) {
        let n = new O(d.clientX-e.deltaX, d.clientY-e.deltaY, e.width, e.height),
            m = a.sqrt().inter(n) || (e.lt == e.left && e.tp == e.top),
            o = m && iscompatible(a.gtp().cardCode, e.cardCode, a.customColor);
        e.moveTo(o ? a.sqrt() : new O(e.lt, e.tp));
        (e.card.style.transform = !o ? e.trotate : "rotate(0deg)");
        (o && m) && b(e, c);
    });
};
c.clickEnd = function(a) {
    if (!this.gameParent.canPlay) return
    let e = this;
    e.emit('dragend', function(a, b, c) {
        let o = iscompatible(a.gtp().cardCode, e.cardCode, a.customColor);
        o && e.moveTo(a.sqrt());
        o && b(m, e, c);
    })
};
c.initEvents = function() {
    this.event = [];
    this.bc = new O(NaN, NaN, NaN, NaN);
    let d = this;

    jdg([[["mousedown"], d.card, d.dragMoveStart.bind(d)], [["mousemove"], document, function(a) {d.dragging && d.dragMove(a)}], [["touchend", "mouseup"], d.card, d.dragMoveEnd.bind(d)]], d.event)
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
    this.clickEvent = new Events(["click"], this.pile.canv(), function(a) {
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
p.update = function(a, b) {
    this.customColor = b || null;
    this.pack.createCardPatern(codeToCoord(a), hjr(b));
    this.pack.redrawcard();
};
p.delete = function() {
    this.gtp().delete();
    delete this;
};

var hjr = function(a) {
    return function(a) {
        switch(a) {
            case "R": return 1
            case "Y": return 2
            case "G": return 3
            case "B": return 4
            default: null
        }
    }(a);
},
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
            console.log(msg);
            if (msg.isConnected) {
                this.loader.remove();
                // console.log(msg);
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
                this.emit('updatecurrentplayer', msg.currentPlayer, this.gameid == msg.currentPlayer.id);
            }
            if (msg.canPlay) {
                this.emit('canplay', msg);
            }
            if (msg.info) {
                this.emit('info', msg.info);
            }
            if(msg.update) {
                console.log(this.gameid, msg.update.playerid, "same", this.gameid == msg.update.playerid);
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
        ld && ld.remove();
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
s.sendUpdate = function(a, b, c, d) {
    console.log("send update", a, b, c, d);
    let m = this.j({update: {playerid: this.gameid, card: a || null, deckSize: b, ...c, newColor: d}});
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
    this.circleDeck = true;
    this.deckContainer = Fe(document, "game-root");
    this.overlay = null;
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
        console.log('game begin', a, b, c, d);
        this.overlay = this.overlay || Md(Me("div", "display"), Md(Me("div", "display-inner"), [Me("h1", "display-inner-p"), Me("div", "dot-typing")]))
        Md(document.body, this.overlay);
        new InfoMessage(this.overlay, "Game is starting!")
        this.full = b;
        this.player = c;
        this.canPlay = e;
        this.createPack(a);
    }.bind(this));

    gameSocket.on('canplay', function(a) {
        this.canPlay = a.canPlay;
        a.isSame && new InfoMessage(this.overlay, "It's your turn again !")
    }.bind(this));

    gameSocket.on('info', function(a) {
        new InfoMessage(this.overlay, a)
    }.bind(this));

    gameSocket.on('close', function() {
        console.log('received close');
        this.stop();
    }.bind(this));

    gameSocket.on('update', function(a) {
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
            this.gamepack.update(a.card, a.newColor),
            this.playCardEffects(a.card);
        
        this.updateOpponentDeck(a.deckSize);
    }.bind(this));

    gameSocket.on('updatecurrentplayer', function(a, b) {
        this.updateCurrentPlayer(a, b, this);
    }.bind(this));

    gameSocket.on('userdisconnetion', function() {
        this.stop();
    }.bind(this));

    this.resizeEvents();
    deckToggle(this);
};
g.stop = function() {
    this.connectionCreated = false;
    this.canPlay = false;
    this.gameSocket.end();
    var ld = new Loader;
    ld.create(Fe(document, "solitaire-mode-dialog-close"));
    Fe(document, "close-btn").classList.remove("-show");
    Fe(document, "deck-toggle").classList.remove("-show");
    window.setTimeout(() => {
        ld.remove();
        this.reset();
    }, 1000);
    
};
g.reset = function() {
    this.alert && this.alert.remove();
    var cnt = Fe(document, "dialog-container");
    cnt.classList.remove('-hide-dialog');
    this.gamepack && this.gamepack.delete();
    Fe(document, "pie-container") && Fe(document, "pie-container").remove();
    this.cards && this.cards.forEach(e => {
        e.delete();
    })
    this.oppn && this.oppn.forEach(e => {
        e.delete();
    })
    this.pile && this.pile.delete();
    Fa(document, "display").remove();
};
g.closeGame = function() {
    let t = this,
        v = Fe(document, "close-btn");
    v.classList.add("-show");
    Fe(document, "deck-toggle").classList.add("-show");
    v.onclick = () => {
        let mess = "You are going to leave the game. There is no way back.";
        this.alert = new AlertPopup(mess, "Leave", function() {
            t.stop();
        }, "Stay here");
    }
};
g.resizeEvents = function() {
    let t = this;
    window.onresize = function() {
        t.placeDeck(), t.placeOpponentDeck();
    }
};
g.drawDeck = function(a, b) {
    this.deck = a;
    this.full = b;
    this.cards = [];
    this.pileCoords = new O(window.innerWidth - 200, window.innerHeight/2-T/1.5)
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
g.crtCrad = function(a, b) {
    let ncard = new Card(this.pileCoords),
        p = this;
    ncard.createCardPatern(codeToCoord(a));
    defineCode(ncard, a);
    ncard.drawcard(this.deckContainer);
    ncard.initEvents();
    kfg(this, ncard);
    !b && ncard.on('dragend', function(n) {
        n(p.gamepack, p.playCard, p);
    });
    !b && this.cards.push(ncard);
    return ncard
};
g.createPack = function(a) {
    this.packCoords = new O(window.innerWidth/2-S/2, window.innerHeight/2-T/1.5);
    this.gamepack = new Pack(this.pileCoords, "gamepack");
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
        x = this.circleDeck,
        o = this.deck.length,
        p = (n-(S+10)*o)/2,
        a = o >= 10 ? 6 : 4,
        y = 50,
        q = x ? y : p < n/a ? (p = n/a, (n-n/a*2))/o : S+10,
        m = x ? (n-(o*y+S-y))/2 : p,
        r = 0,
        s = o%2,
        g = o-s,
        f = 30,
        e = 80,
        c = [],
        d = this.cards.sort(function(a, b) {
            return (a.cardCode[1] >= b.cardCode[1])
        });

    // console.log(n, p, e, q, n/e, d);
    for(var j = 0; j < o; j++) {
        let t = (m+q*j).toFixed(3),
            l = f/(g/2),
            u = window.innerHeight-250 + (x ? -(j >= g/2 ? (s > 0 ? l*(g-j) : l*(o-j-1)) : l*j) : 0),
            v = d[j],
            h = o > 1 ? (j < g/2 ? (g-j)-g/2 : (s > 0 ? 0 : -1)-(j-g/2))*-(e/2)/(g/2) : 0;

        c.push([v, t, u, j, h]);
    }
    for(var i = o-1; i >= 0; i--) {
        let d = c[i];
        d[0].canv().style.zIndex = d[3];
    }
    var w = window.setInterval(() => {
        if (r == o) return clearInterval(w);
        let d = c[r];

        d[0].moveTo(new O(d[1], d[2]));
        btcp(d[0], x ? d[4] : 0);
        r++;
    }, o > 10 ? 20 : 40);
};
g.playCard = function(b, c, p) {
    let n,
        m;
    let id = c.cards.findIndex(function (obj) {
        return obj.cardCode == b.cardCode;
    });
    window.setTimeout(() => {
        c.gamepack.update(b.cardCode);
        b.delete();
    }, 500);
    c.gamepack.gtp().cardCode = b.cardCode;
    id !== -1 && (n = c.cards.splice(id, 1), m = c.deck.splice(id, 1))
    c.placeDeck();
    if (c.cards.length === 0) console.log("game, end"), c.stop();
    !p && c.sendGameUpdate(b.cardCode, {played: true, fromPile: false, pileChanges: [], changedColor: (b.cardCode[0] == "W" && b.cardCode[1] == "Z"), isDrawCards: false});
};
g.pileEvent = function(a) {
    var n = this;
    a.on('create', function() {
        let b = [],
            d = n.full.shift(),
            l = false;
        b.push(d);
        if (iscompatible(n.gamepack.gtp().cardCode, d, n.gamepack.customColor)) {
            l = true;
            let j = n.crtCrad(d, true);
            window.setTimeout(() => {
                j.moveTo(n.gamepack.sqrt());
                n.playCard(j, n, true);
            }, 50);
        } else {
            n.deck.push(d), n.crtCrad(d);
            window.setTimeout(() => {
                n.placeDeck();
            }, 50);
        }
        n.sendGameUpdate((l ? d : null), {played: l, fromPile: true, pileChanges: b, changedColor: l && (d[0] == "W"  && d[1] == "Z"), isDrawCards: false});
    });
};
g.sendGameUpdate = async function(a, b) {
    this.canPlay = false;
    let newColor = null;
    if (a && (a[1] == "Z" && (a[0] == "W" || a[0] == "X"))) newColor = await this.chooseNewColor();
    new InfoMessage(this.overlay, "Waiting for next player...");
    if (newColor) this.gamepack.update(this.gamepack.gtp().cardCode, newColor)
    window.setTimeout(() => {
        this.gameSocket.sendUpdate(a, this.deck.length, b, newColor);
    }, newColor ? 700 : 0)
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
            h = o > 1 ? (j < g/2 ? (g-j)-g/2 : -(j-g/2))*(e/2)/(g/2) : 0;

        c.unshift([v, t, u, j, h]);
    }
    for(var i = o-1; i >= 0; i--) {
        let d = c[i];
        d[0].gtc().canv().style.zIndex = d[3];
    }
    var w = window.setInterval(() => {
        if (r == o) return clearInterval(w);
        let d = c[o-r-1];

        d[0].gtc().moveTo(new O(d[1], d[2]));
        rtcp(d[0], d[4]+180);
        r++;
    }, o > 10 ? 20 : 40);
};
g.playCardEffects = function(a) {
    // (a[1] == "V") && this.addCardsToDeck(2);
    // (a[0] == "Z") && this.addCardsToDeck(4);
    (a[1] == "V") ? this.addCardsToDeck(2) : (a[1] == "Z" && a[0] == "X") ? this.addCardsToDeck(4) : console.log("no effect");
};
g.chooseNewColor = async function() {
    try {
        return await new Promise((resolve, reject) => {
            console.log("new promise");
            new PiePopup(function(a) {
                resolve(a);
            });
        });
    } catch (error) {
        console.log(error);
    }
};
g.addCardsToDeck = function(a) {
    let b = [];
    for(var i = 0; i < a; i++) {
        let d = this.full.shift();
        b.push(d);
        this.deck.push(d), this.crtCrad(d);
    }
    window.setTimeout(() => {
        this.placeDeck();
    }, 50);
    this.sendGameUpdate(null, {played: false, fromPile: true, pileChanges: b, changedColor: false, isDrawCards: true});
};
g.updateCurrentPlayer = function(a, b, c) {
    Fa(c.overlay, "display-inner-p").innerText = (!b ? a.username+" is playing" : "It's your turn")
};

var iscompatible = function(a, b, c) {
    return a[0] == b[0] || a[1] == b[1] || (a[1] == "Z" && c == b[0]) || b[1] == "Z"
},
codeToCoord = function(a) {
    function e(h) {
        switch (h.toUpperCase()) {
            case "R": return 0
            case "Y": return 1
            case "G": return 2
            case "B": return 3
            case "D": return 10
            case "P": return 11
            case "V": return 12
            case "W": return 4
            case "X": return 5
            case "Z": return 0
            default: return null
        }
    }
    let b = e(a.slice(0, 1)),
        d = e(a.slice(1)),
        c = d !== null ? d : parseInt(a.slice(1));
    return {x: c, y: b}
},
kfg = function(a, b) {
    b.gameParent = a;
},
rtcp = function(a, b) {
    a.gtc().canv().style.transform = "rotateZ("+b+"deg)"
},
btcp = function(a, b) {
    a.canv().style.transform = "rotateZ("+b+"deg)"
},
deckToggle = function(a) {
    Fe(document, "deck-toggle").onclick = function() {
        a.circleDeck = !a.circleDeck;
        a.cards.forEach(e => {
            e.moveTo(a.pileCoords);
            btcp(e, 0);
        }) ;
        setTimeout(() => a.placeDeck(), 500);
    }
}

var PiePopup = function(a) {
    this.callBack = a;
    let m = Me("div", "color-pie ad-status-panel"),
        n = this.n = Md(Me("div", "pie-container ad-pn-c"), m);
    this.colors = ["#ff5555", "#ffaa00", "#55aa55", "#5555ff"],
    this.canSelect = false;
    this.generate(m);
    Md(document.body, n);
};
var p = PiePopup.prototype;
p.generate = function(a) {
    let ur = "http://www.w3.org/2000/svg",
        n = document.createElementNS(ur, "svg"),
        r = document.createElementNS(ur, "text"),
        k = ["R", "Y", "G", "G"],
        t = this,
        h = [];
    Ms(n, ["class", "xmlns", "viewBox"], ["pie", ur, "0 0 180 180"]);
    Ms(r, ["y", "dx", "dominant-baseline", "text-anchor"], ["-30", "50%", "middle", "middle"]);
    r.textContent = "Choose your new color";
    Md(n, r);
    for (var i = 0; i < 4; i++) {
        let m = document.createElementNS(ur, "path"),
            o = (i == 0 || i == 2) ? "90" : i == 1 ? "180" : "0",
            p = (i == 1 || i == 3) ? "90" : i == 2 ? "180" : "0",
            q = (i == 1 || i == 3) ? "90" : i == 0 ? "180" : "0",
            c = t.colors[i],
            j = k[i],
            d = "M" + o + "," + p + " A90,90 0 0 1 " + q + "," + o + " L90,90 A0,0 0 0 0 90,90 Z"
        Ms(m, ["id", "fill", "d"], [i, c, d]);
        new Events(["click"], m, function() {
            if (!t.canSelect) return
            t.canSelect = false;
            t.callBack(j);
            t.delete();
        });
        h.push(m);
        Md(n, m);
    }
    Mc(t.n, 'adding');
    Md(a, n);
    setTimeout(() => {
        h.forEach((e) => {
            e.style.transform = "scale(1)";
        });
        setTimeout(() => {
            Mr(t.n, 'adding');
            t.canSelect = true;
        }, 100);
    }, 1000);
};
p.delete = function() {
    Mc(this.n, 'remove');
    setTimeout(() => {
        this.n.remove();
        delete this;
    }, 1000);
};

var AlertPopup = function(t, a, b, c, d) {
    let l = Me("div", "ad-pn-c");
    Md(document.body, l);
    if (!b) {
        l.innerHTML = '<div class="ad-panel"><div class="ad-err"><p>'+t+'</p></div><div id="ad-err-close-btn" class="ad-err-close">Fermer</div></div>';
    } else {
        if (c) {
            l.innerHTML = '<div class="ad-panel"><div class="ad-err"><p>'+t+'</p></div><div class="ad-btn"><div id="ad-err-reset-btn" class="ad-err-close ad-demi ad-demi-sup">'+a+'</div><div id="ad-err-close-btn" class="ad-err-close ad-demi">'+c+'</div></div></div>';
            Fe(document, 'ad-err-reset-btn').addEventListener("click", b);
            Fe(document, 'ad-err-reset-btn').addEventListener("click", function() {l.remove()});
        } else {
            l.innerHTML = '<div class="ad-panel"><div class="ad-err"><p>'+t+'</p></div><div id="ad-err-close-btn" class="ad-err-close">'+a+'</div></div>';
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
    let l = Me("div", "ad-pn-c");
    Md(document.body, l);
    l.innerHTML = '<div class="ad-panel grow-anim"><div class="ad-err"><p style="min-height: auto;">'+t+'</p><div class="fr-text-field"><input autofocus required maxlength="15" type="text" id="on-user-input" class="SIU-tf"><label for="name" class="label-name"><span class="content-name">Username</span></label></div></div><div id="ad-err-close-btn" class="ad-err-close">Save</div></div>';
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
    window.addEventListener("keyup", function(key) {
        console.log(key);
        key.keyCode === 13 && pp();
    }, {once: true})
    return l
};

var InfoMessage = function(a, b) {
    let n = Me("h1", "display-inner-p"),
        m = this.message = Md(Me("div", "display-inner txt-only"), n)
    n.innerText = b;
    Md(a, m);
    window.setTimeout(() => {
        this.delete();
    }, 3000);
};
var i = InfoMessage.prototype;
i.delete = function() {
    this.message.remove();
    delete this
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
    let cv = () => {
        started = new Game;
        cnt.classList.add('-hide-dialog');
        setTimeout(() => {
            new UsernamePopup("Choose your username", function(a) {
                started.start(a);
            });
        }, 100);
    }

    window.addEventListener("keyup", function(key) {
        key.keyCode === 13 && cv()
    }, {once: true})
    Fe(document, "start-easy-btn").onclick = cv;
}());