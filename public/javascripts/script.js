/*!





  _   _   _   _    ___  
 | | | | | \ | |  / _ \ 
 | | | | |  \| | | | | |
 | |_| | | |\  | | |_| |
  \___/  |_| \_|  \___/ 
                        





 __  __                                                  ____                             
|  \/  |   __ _  __  __   ___   _ __     ___    ___     / ___|   __ _   _ __ ___     __ _ 
| |\/| |  / _` | \ \/ /  / _ \ | '_ \   / __|  / _ \   | |  _   / _` | | '_ ` _ \   / _` |
| |  | | | (_| |  >  <  |  __/ | | | | | (__  |  __/   | |_| | | (_| | | | | | | | | (_| |
|_|  |_|  \__,_| /_/\_\  \___| |_| |_|  \___|  \___|    \____|  \__,_| |_| |_| |_|  \__,_|
    





*/
/*!
*   @license © Copyright 2022, All rights reserved.
*   @author: Maxence Gama, maxence.gama@gmail.com, @maxencegama
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
    }
    da = ea ? function(a, b) {
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
    c = (["svg", "path", "circle", "text"].includes(c.toLowerCase()) ? a.createElementNS("http://www.w3.org/2000/svg", c) : a.createElement(c));
    // c = a.createElement(c);
    if (e && e.in) c.innerHTML = e.in;
    if (e && e.style) c.style = e.style;

    b && (d && typeof e !== "object" && !je(d) ? Na(c, d, e) : (e && e.type ? c.setAttribute(e.type, d) : d && (c.className = d)));
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
    return a
},
Md = function(a, b) {
    (b instanceof Node) ? a.appendChild(b) : dj(a, b)
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
        (a && b[i]) && a.appendChild(b[i]);
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
            console.info("Image set loaded");
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
La = function(a, b) {
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
    T = Math.round(uf().height * (Bf() ? .55 : .33)),
    L = 500;

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
    this.parent = null;
    a && this.dispatchEvent(...arguments);
}
var ce = Events.prototype;
ce.dispatchEvent = function(a, b, c, e) {
    let d = this.event;
    if (d) {
        throw Error("Event already exist");
    }
    this.parent = b;
    this.event = c;
    this.name = a;
    for(var i = 0; i < a.length; i++) 
        b.addEventListener(a[i], this.event, e || {passive: true});
};
ce.removeEvent = function() {
    for(var i = 0; i < this.name.length; i++)
        this.parent.removeEventListener(this.name[i], this.event);
};
var jdf = function(a, b, c, d, e) {
    a.push(new Events(b, c, d, e));
},
jdg = function(a, b) {
    for(var i = 0; i < a.length; i++) {
        let d = a[i];
        jdf(b, d[0], d[1], d[2], d[3]);
    }
},
mdg = function(a) {
    if (!a) return
    for(var i = 0; i < a.length; i++) {
        let d = a[i];
        d.removeEvent();
    }
},
dkf = function(a) {
    return typeof a === "object"
}

var setTransformProprety = function(a, b, c) {
    let l = "";
    undefined !== c && (l += " scale("+c+") ")
    l += "rotate("+b+"deg)";
    a.style.transform = l;
}
var bindPort = function(a, b) {
	if (!isNaN(parseInt(b))) {
		return ("//"+a+':'+b);
	}
	return ("//"+b+'.'+a);
}

var genRandomId = function(a) {
    a.id = makeId(5)+"-"+makeId(5)+"-"+makeId(5);
},
makeId = function(l) {
    var res = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < l; i++ ) {
        res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return res
}

var Card = function(a, b, c) {
    this.left = a.left || null;
    this.top = a.top || null;
    this.card = this.I("DIV", (a && r(a)) || b || "card", this.I("CANVAS", "card-canvas"));
    (a && dkf(a)) && this.moveTo();
    this.width = c ? c.width : S;
    this.height = c ? c.height : T;
    genRandomId(this);
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
    this.card.style.transition = "left "+L+"ms ease, top "+L+"ms ease, transform "+L+"ms ease";
    return this
};
c.createCardPatern = function(a, b) {
    // console.log(a, b);
    this.patern = [0, 240*(a.x + (b || 0)), 360*a.y, 240, 360]
    // console.log(this.patern);
    return this
};
c.redrawcard = function(b, c) {
    let patern = this.patern ? this.patern : !ma(b) ? b : [0, 240*b, 360*c, 240, 360]
    this.d.ta(patern, 0, 0);
    return this
}
c.moveTo = function(a, b) {
    a && (this.left = a.left, this.top = a.top)
    // console.log("m->", this.left, this.top);
    this.card.style.left = this.left+"px";
    this.card.style.top = this.top+"px";
    undefined !== b && (this.card.style.transform = "rotate("+b+"deg)");
    // console.log(this.card);
    return this
},
c.I = function(a, b, c) {
    return La(document, arguments)
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
c.placeZ = function(a) {
    this.card.style.zIndex = a
    return this
};
c.resize = function(a, b) {
    this.width = a;
    this.height = b;
    this.card.classList.add('grow-transition');
    jf(this.card, this.width, this.height);
    // this.card.classList.remove('grow-transition');
    return this
};
c.flip = function(a, b, c, d) {
    let n = this.I("CANVAS", "card-canvas backface"),
        l = codeToCoord(a),
        m = [0, 240 * (l.x + (hjr(b) || 0)), 360 * l.y, 240, 360],
        p = new Qf(n);
    n.width = uf().width;
    n.height = uf().height;
    this.card.appendChild(n);
    p.ta(m, 0, 0);

    window.setTimeout(() => {
        this.zc("gamepack").style.opacity = 0;
        this.card.style.transform += "rotateY(180deg)";
        window.setTimeout(() => {
            this.zc("gamepack").style.opacity = 1;
            d && d();
        }, L);
    }, c);
};
c.dragMoveStart = function(a) {
    if (this.dragging) return this.dragCancel();
    if (!this.gameParent.canPlay) return
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    this.clicked = true;
    this.dragging = true;
    this.deltaX = (d.clientX - this.left);
    this.deltaY = (d.clientY - this.top);
    this.lt = this.left;
    this.tp = this.top;
    this.tzIdx = this.card.style.zIndex;
    // this.trotate = this.card.style.transform;
};
c.onClick = function(e) {
    if (this.dragging) this.dragCancel();
    e.preventDefault();
};
c.dragMove = function(a) {
    if (!this.gameParent.canPlay) return
    this.clicked = false;
    this.card.style.transition = "";
    this.placeZ("10001");
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null);
    if (!d) return this.dragCancel();
    // console.log(this.deltaX, d.clientX, this.deltaY, d.clientY);
    // console.log(new O(d.clientX-this.deltaX, d.clientY-this.deltaY));
    this.moveTo(new O(d.clientX-this.deltaX, d.clientY-this.deltaY), 0);
};
c.dragMoveEnd = function(a) {
    let d = (a.clientX && a) || (a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null),
    e = this;
    if (!d) return this.dragCancel();
    
    e.dragging = false;
    if (!this.gameParent.canPlay) return

    e.placeZ(e.tzIdx);
    e.card.style.transition = "left "+L+"ms ease, top "+L+"ms ease, transform "+L+"ms ease";

    e.emit('dragend', function(a, b, c) {
        let n = new O(d.clientX-e.deltaX, d.clientY-e.deltaY, e.width, e.height),
            m = a.sqrt().inter(n) || e.clicked,
            o = m && iscompatible(a.gtp().cardCode, e.cardCode, a.customColor);
        o && e.placeZ(1001);
        e.moveTo(o ? a.sqrt() : new O(e.lt, e.tp), !o ? e.trotate : 0);
        // (e.card.style.transform = !o ? e.trotate : "rotate(0deg)");
        (o && m) && b(e, c);
    });
};
c.dragCancel = function(e) {
    let t = this;
    t.dragging = false;
    
    t.placeZ(t.tzIdx);
    t.card.style.transition = "left "+L+"ms ease, top "+L+"ms ease, transform "+L+"ms ease";

    t.emit('dragend', function(a, b, c) {
        t.moveTo(new O(t.lt, t.tp), t.trotate);
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

    // document.documentElement.setCapture(!0);
    var dragTarget = d.card.setCapture ? d.card : document;
    // dragTarget.setCapture(!1);
    jdg([
        [["touchstart", "mousedown"], d.card, d.dragMoveStart.bind(d)],
        [["touchmove", "mousemove"], dragTarget, function(a) {d.dragging && d.dragMove(a)}, {
            capture: !0,
            passive: !1
        }],
        [["losecapture"], d.card, d.dragCancel.bind(d)],
        [["click"], document, d.onClick.bind(d), {passive: false}],
        [["touchend", "mouseup"], d.card, d.dragMoveEnd.bind(d)]
    ], d.event);
    return this
};
c.delete = function() {
    this.canv().remove();
    mdg(this.event);
    delete this;
}
defineCode = function(a, b) {
    a.cardCode = b;
};

var Pile = function(a, b, c, d, e) {
    this.pile = new Card(a, d, e);
    this.pile.drawcard(c, b);
    this.pile.placeZ(1001);
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
};

var Pack = function(a, b) {
    this.pack = new Card(a, b);
    this.pack.placeZ(0);
};
var p = Pack.prototype;
p.gtp = function() {
    return this.pack
};
p.sqrt = function() {
    let b = this.pack;
    return new O(b.left, b.top, b.width, b.height)
};
p.flipPack = function(a) {
    let n = Me("CANVAS", "card-canvas backface"),
        m = qe,
        p = new Qf(n);
    n.width = uf().width;
    n.height = uf().height;
    this.pack.canv().appendChild(n);
    p.ta(m, 0, 0);

    window.setTimeout(() => {
        this.pack.canv().style.transform += "rotateY(180deg)";
        window.setTimeout(() => {
            a && a();
        }, L);
    }, c);
};
p.update = function(a, b) {
    this.customColor = b || null;
    this.pack
        .createCardPatern(codeToCoord(a), hjr(b))
        .redrawcard();
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
        // b = Me("DIV", "loader"),
        // c = Ms(Me("SVG", "circular"), ["xmlns", "viewBox"], ["http://www.w3.org/2000/svg", "25 25 50 50"]),
        // d = Ms(Me("CIRCLE", "path"), ["cx", "cy", "r", "fill", "stroke-width", "stroke-miterlimit"], ["50", "50", "20", "none", "5", "10"])
    a.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/></svg></div>';
    // this.loader = Md(a, Md(b, Md(c, d)));
    
    this.loader = a;
    return this
};
Loader.prototype.create = function(a) {
    Md(a, this.loader);
    return this
};
Loader.prototype.delete = function() {
    this.loader.remove();   
};

var Socket = function(g) {
	kfg(g, this);
	try {
		let sp = "8081",
			sd = "uno-ws",
			hr = ["localhost", "maxencegama.dev"];
		let WSProtocol = (location.protocol === 'https:') ? 'wss:' : 'ws:',
			WSHost = (location.hostname === 'localhost') ? bindPort(hr[0], sp) : bindPort(hr[1], sd);
		this.socket = new WebSocket(WSProtocol + WSHost);
	} catch (error) {
		return this.gameParent.codeError(2);
	}
    this.deck = null;

    var ld = new Loader
    this.loader = ld.create(Fe(document, "dialog-close"));
	this.initPing();

    this.socket.onopen = () => {
        console.info("Connection opened");
    };

    this.socket.onmessage = (message) => {
        try {
            let msg = this.p(message.data);
            // console.log(msg);
            if (msg.IS_CONNECTED) {
                this.loader.delete();
                let d = this.deck = msg.deck,
                    f = this.full = msg.full;
                this.pingServer();
                this.emit('connection', d, f);
            }
            if (msg.SET_GAME_POO_ID) {
                this.gameid = msg.SET_GAME_POO_ID.id;
            }
            if (msg.BEGIN) {
                this.emit('gamebegin', msg.BEGIN.startCard, msg.BEGIN.full, msg.BEGIN.canPlay, msg.BEGIN.players);
            }
            if (msg.CURRENT_PLAYER) {
                this.emit('updatecurrentplayer', msg.CURRENT_PLAYER, this.gameid == msg.CURRENT_PLAYER.id);
            }
            if (msg.canPlay) {
                this.emit('canplay', msg);
            }
            if (msg.info) {
                this.emit('info', msg.info);
            }
            if(msg.UPDATE) {
                this.gameParent.canPlay = msg.UPDATE.canPlay;
                if (this.gameid !== msg.UPDATE.playerid) this.emit('update', msg.UPDATE);
            }
            if (msg.GAME_FINISHED) {
                this.emit('gamefinished', msg);
            }
            if (msg.USER_DISCONNECTED) {
                this.emit('userdisconnetion');
            }
            if (msg.PING) {
                this.emit("server-ping");
            }
        } catch (error) {
            this.gameParent.codeError(1);
            console.error(error);
        }
    }

    this.socket.onclose = () => {
        console.info('Connection closed');
        ld && ld.delete();
        this.emit('close');
    }

    this.offlineEvent = new Events(["offline"], window, function() {
        console.info('Oops you are offline :\\');
		this.offline = true;

		let offl = () => {
			console.info('Happy to see you back :)');
			clearTimeout(re);
			this.offline = false;
			this.gameParent.onReconnection();
		}
		
		let re = setTimeout(() => {
			window.removeEventListener('online', offl);
			if (this.offline) {
				this.gameParent.stop();
			}
		}, 15 * 1000);

		this.gameParent.connectionLoss();
		
		window.addEventListener('online', offl);
    }.bind(this));
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
    let m = this.j({ready: a, username: this.gameParent.username}); 
    this.socket.send(m);
};
s.sendUpdate = function(a, b, c, d) {
    let m = this.j({UPDATE: {playerid: this.gameid, card: a || null, deckSize: b, ...c, newColor: d}});
    this.socket.send(m);
	this.pingServer();
};
s.finish = function(a) {
    this.socket.send(this.j({GAME_FINISHED: true, closeconnection: true, id: this.gameid, winning: a}));
};
s.end = function() {
    this.socket.send(this.j({USER_DISCONNECTION: true, endconnection: true}));
    this.delete();
};
s.send = function(a) {
    this.socket.send(this.j(a));
};
s.initPing = function() {
	let pe,
		p,
		ul;
	this.on('server-ping', () => {
        pe = Date.now();
        p = pe - this.ps;
        ul = this.formatServerPing(p);
        console.info("Server ping status: %dms %s", p, ul == 0 ? "good :)" : ul == 1 ? "slow :\\" : "poor :(");
        this.serverDelayAlert(ul);
    });
};
s.pingServer = function() {
	this.ps = Date.now();
	if (this.lastPing && this.ps - this.lastPing < 1 * 60 * 1000) return
	this.lastPing = this.ps;
    this.socket.send(this.j({PING: this.ps}));
};
s.formatServerPing = function(a) {
    if (a > 100 && a < 150)
        return (1);
    else if (a > 150)
        return (2);
    else
        return (0);
};
s.serverDelayAlert = function(a) {
    if (a == 0)
        return ;
    let m,
        u,
        sg,
        pt,
        pth,
        tts;
    if (a == 1)
        m = "You have a slow connection, you may experiment some delay.";
    else if (a == 2)
        m = "You have a very poor connection, you should check your connection.";
    else
        return ;
    sg = Ms(Me("svg"), ["width", "height", "fill", "xmlns"], ["28", "28", "none", "http://www.w3.org/2000/svg"]);
    pt = Ms(Me("path"), "d", "M5.32789 25.4892H23.4434C25.4884 25.4892 26.7692 24.0199 26.7692 22.1784C26.7692 21.6108 26.6073 21.0197 26.3037 20.4851L17.2332 4.67086C16.5964 3.55805 15.5091 3 14.3867 3C13.2622 3 12.159 3.56227 11.536 4.67086L2.46547 20.4872C2.14484 21.0293 2 21.6108 2 22.1784C2 24.0199 3.28086 25.4892 5.32789 25.4892ZM5.52733 23.2823C4.78928 23.2823 4.3435 22.7107 4.3435 22.0634C4.3435 21.866 4.38404 21.6101 4.49819 21.3893L13.3693 5.88631C13.588 5.49701 13.9953 5.33061 14.3867 5.33061C14.776 5.33061 15.1695 5.49912 15.3903 5.88842L24.2635 21.4052C24.3777 21.6239 24.4278 21.8681 24.4278 22.0634C24.4278 22.7107 23.9628 23.2823 23.2344 23.2823H5.52733Z");
    pth = Ms(Me("path"), "d", "M14.3888 17.3883C15.023 17.3883 15.3934 17.0243 15.4135 16.3474L15.586 10.6567C15.6083 9.97682 15.0889 9.48511 14.3771 9.48511C13.6557 9.48511 13.1555 9.96721 13.1778 10.6471L13.3407 16.3516C13.3609 17.0147 13.7333 17.3883 14.3888 17.3883ZM14.3888 21.2707C15.1402 21.2707 15.7599 20.7232 15.7599 19.9845C15.7599 19.2382 15.1498 18.6982 14.3888 18.6982C13.6278 18.6982 13.0156 19.2457 13.0156 19.9845C13.0156 20.7136 13.6374 21.2707 14.3888 21.2707Z");
    tts = Me("div", "progression", {style: "width: 100%;"})
    u = Md(Me("div", "ws-server-p"),[Md(Me("div"), Md(sg, [pt, pth])), Me("p", "", {in: m}), tts]);

    let tm = 5000/100,
        k = 0,
        x = window.setInterval(() => {
            k++;
            if (k >= 100) clearInterval(x), u.remove();
            tts.style.width = 100 - k + "%";
        }, tm);
    Md(document.body, u);
};
s.delete = function() {
    this.loader && this.loader.delete();
    this.socket.close();
    this.offlineEvent.removeEvent();
    delete this
}

var Game = function() {}
var g = Game.prototype;
g.start = function(a) {
    this.username = a.length ? a : null
    this.connectionCreated = false;
    this.canPlay = false;
    this.gameStarted = true;
    this.circleDeck = true;
    this.deckContainer = Fe(document, "game-root");
    this.overlay = null;
	this.waitingUpdate = [];
    this.initCloseGame();

    this.socketBuilder(new Socket(this));
    this.connectionTimeout();

    this.resizeEvents();
    deckToggle(this);
    gameInfo(this);
};
g.connectionTimeout = function() {
    this.tm = setTimeout(() => {
        if (!this.connectionCreated) {
            this.gameSocket.delete();
            this.alert = new AlertPopup("Cannot find any opponent.\n\nWe're sorry, it seems there is no one to play with you.", "Leave", function() {
                this.stop();
            }.bind(this), "Try again", function() {
                this.socketBuilder(new Socket(this));
                this.connectionTimeout();
            }.bind(this));
        }
    }, 10 * 1000);
};
g.socketBuilder = function(s) {
    var gameSocket = this.gameSocket = s;
    // console.log(gameSocket, this);

    gameSocket.on('connection', function(a, b) {
        this.connectionCreated = true;
		clearTimeout(this.tm);
        setTimeout(() => {
            this.drawDeck(a, b);
            this.createOpponentDeck(a.length);
        }, L);
    }.bind(this));

    gameSocket.on('gamebegin', function(a, b, c, d) {
        let t = this,
            u = d.findIndex(function (obj) {
            	return obj.id == t.gameSocket.gameid;
			});
        d.splice(u, 1);
        t.overlay = t.overlay || Md(Me("div", "display"), Md(Me("div", "display-inner"), [Me("h1", "display-inner-p"), Me("div", "dot-typing")]))
        Md(document.body, t.overlay);
        t.full = b;
        t.canPlay = c;
		t.starting = true;
        t.unobutton = new UNOButton(t.deckContainer);
        let msg = "You play against "+hko(d);
        new AlertPopup(msg, false, function() {
			t.starting = false;
            new InfoMessage(t.overlay, "Game is starting!")
            t.createPack(a);
            Fe(document, "deck-toggle").classList.add("-show");
            Fe(document, "game-info").classList.add("-show");
        }, 2000);
    }.bind(this));

    gameSocket.on('canplay', function(a) {
        this.canPlay = a.canPlay;
		
		if (this.starting)
			this.waitingUpdate.push(a);

        a.isSame && new InfoMessage(this.overlay, "It's your turn again !")
		if (this.deck.length <= 2)
			this.unobutton.activate();
		else
			this.unobutton.deactivate();
    }.bind(this));

    gameSocket.on('info', function(a) {
        new InfoMessage(this.overlay, a);
    }.bind(this));

    gameSocket.on('close', function() {
        console.info('The server closed the connetion');
        let n = this;
        let y = function() {
            new AlertPopup("The game ended because the server closed the connection.", "Leave", function() {
                this.reset();
            }.bind(n));
        }
        if (n.connectionCreated) n.stop(y);
        else clearTimeout(this.tm), n.codeError(3);
    }.bind(this));

    gameSocket.on('update', this.onUpdate.bind(this));

    gameSocket.on('updatecurrentplayer', function(a, b) {
        !b &&  new InfoMessage(this.overlay, "It's  up to "+a.username+" to play.");
        this.updateCurrentPlayer(a, b, this);
    }.bind(this));

    gameSocket.on('gamefinished', function(a) {
        console.info('Game finished');
        this.onFinish(a);
    }.bind(this));

    gameSocket.on('userdisconnetion', function() {
        console.info('User disconnetion');
        let n = this;
        if (!n.gameStarted)
            return ;
        let y = function() {
            new AlertPopup("Game ended due to opponent disconnection.", "Leave", function() {
                this.reset();
            }.bind(n));
        }
        if (n.connectionCreated) n.stop(y);
    }.bind(this));
};
g.stop = function(a) {
    a && a();
    this.connectionCreated = false;
    this.canPlay = false;
    this.gameSocket.end();
	this.alert && this.alert.remove();
    this.unobutton && this.unobutton.remove();
    if (!a) {
        var ld = new Loader;
        ld.create(Fe(document, "dialog-close"));
        window.setTimeout(() => {
            ld.delete();
            this.reset();
        }, 1000);
    }
};
g.end = function(a) {
    this.canPlay = false;
    this.gameSocket.finish(undefined !== a ? a : true);
};
g.onFinish = function(a) {
    let t = this,
        y = function() {
            let u = a.winning ? (a.id == t.gameSocket.gameid ? "You win the game." : (a.player+" win the game."))+" Well played!" : "Game is over, you ran out of cards!";
            new AlertPopup(u, "Leave", function() {
                t.reset();
            });
        }
        u = () => {
            t.gamepack.gtp().moveTo(t.pileCoords);
            window.setTimeout(() => {
                t.gamepack.delete();
                t.pile.gtc().moveTo(t.packCoords, -90);
                window.setTimeout(() => {
                    if (t.connectionCreated) t.stop(y);
                }, L + 100);
            }, L + 50);
        }
    window.setTimeout(() => {
        this.gameStarted = false;
        t.gamepack.gtp()
            .placeZ(10001);

        t.cards.forEach(e => e.moveTo(t.packCoords, 0));
        t.oppn.forEach(e => e.gtc().moveTo(t.pileCoords, 0));

        window.setTimeout(() => {
            t.cards.forEach(e => e.delete());
            t.oppn.forEach(e => e.delete());
            t.gamepack.flipPack(u);
        }, L + 100);
    }, this.gameStarted ? L : 0);
};
g.reset = function() {
    var cnt = Fe(document, "dialog-container");
    cnt.classList.remove('-hide-dialog');

    let t = this;

    let cv = () => {
        Mc(cnt,'-hide-dialog');
        setTimeout(() => {
            // console.log("restart on reset");
            new UsernamePopup("Choose your username", function(a) {
                t.start(a);
            });
        }, 100);
    }

    jh(Fe(document, "start-easy-btn"), cv);
    Fe(document, "close-btn").classList.remove("-show");
    Fe(document, "deck-toggle").classList.remove("-show");
    Fe(document, "game-info").classList.remove("-show");

    // this.gamepack && this.gamepack.delete();
    // Fe(document, "pie-container") && Fe(document, "pie-container").remove();
    document.querySelectorAll(".card, .pile, .gamepack, .opponent, .display, .display, .ad-pn-c").forEach(e => {
        e.remove();
    }); 
    // this.cards && this.cards.forEach(e => {
    //     e.delete();
    // });
    // this.oppn && this.oppn.forEach(e => {
    //     e.delete();
    // })
    this.oppn = this.cards = [];
    // this.pile && this.pile.delete();
    // Fa(document, "display") && Fa(document, "display").remove();
};
g.initCloseGame = function() {
    let t = this,
        v = Fe(document, "close-btn");
    v.classList.add("-show");
    v.onclick = () => {
        let mess = "You are about to leave the game. Game will end, there is no way back.";
        this.alert = new AlertPopup(mess, "Leave", function() {
            t.stop();
        }, "Stay here");
    }
};
g.codeError = function(a) {
	let m;
	switch (a) {
		case 1:
			m = "Houston we have a connection problem!\nCheck your internet connection and try again.";
			break;
		case 2:
			m = "Houston we have a problem!\nGame ended because something went wrong.";
			break;
		case 3:
			m = "Houston we have a problem!\nSomething went wrong, the server closed the connection.";
			break;
		default:
			break;
	}
    this.alert = new AlertPopup(m, "Leave", function() {
        this.stop();
    }.bind(this));
};
g.connectionLoss = function() {
	let m;
	m = "Houston we have a connection problem!\nCheck your internet connection, we're trying to reconnect you.";
    this.alert = new AlertPopup(m);
};
g.onReconnection = function() {
	this.alert.remove();
	new InfoMessage(this.overlay, "Happy to see you back here!");
};
g.onUpdate = function(a) {
	this.canPlay = a.canPlay;
	if (!this.gameStarted || !a.playerid) return

	if (this.starting) return this.waitingUpdate.push(a);

	if (this.full.length == 0 || this.full.length < a.pileChanges.length)
		return this.end(false);

	if (a.fromPile) {
		for(var i = 0; i < a.pileChanges.length; i++) {
			let id = this.full.findIndex(function (obj) {
				return obj == a.pileChanges[i];
			});
			this.full.splice(id, 1);
		}
	}
	if (a.played)
		this.gamepack.gtp().cardCode = a.card,
		this.playCardEffects(a.card);

	this.updateOpponentDeckAndGamepack(a);
};
g.resizeEvents = function() {
    let t = this;
    window.onresize = function() {
        t.placeDeck(), t.placeOpponentDeck(), replacePileAndPackOnResize(t)
    }
};
g.drawDeck = function(a, b) {
    this.deck = a;
    this.full = b;
    this.cards = [];
    this.pileCoords = new O(window.innerWidth - 200, window.innerHeight/ 2 - T / 1.5)
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
    ncard
        .drawcard(this.deckContainer)
        .initEvents();
    kfg(this, ncard);
    !b && ncard.on('dragend', function(n) {
        n(p.gamepack, p.playCard, p);
    });
    !b && this.cards.push(ncard);
    return ncard
};
g.createPack = function(a) {
    this.packCoords = new O(window.innerWidth/ 2 - S / 2, window.innerHeight / 2 - T / 1.5);
    this.gamepack = new Pack(this.pileCoords, "gamepack");
    var b = this.gamepack;
    b.gtp().createCardPatern(codeToCoord(a));
    defineCode(b.gtp(), a);
    b.gtp().drawcard(this.deckContainer);
    
    window.setTimeout(() => {
        b.gtp().moveTo(this.packCoords);

		if (this.waitingUpdate.length) {
			this.waitingUpdate.forEach((e, i) => {
				window.setTimeout(() => {
					this.onUpdate(e);
				}, L * (i + 1) * 2);
			});
		}
    }, L);
};
g.updateDeck = function() {};
g.placeDeck = function() {
    let n = window.innerWidth,
        x = this.circleDeck,
        o = this.deck.length,
        p = (n - (S + 10) * o) / 2,
        a = o >= 10 ? 6 : 4,
        lm = ((n - 200) / o),
        y = (50) * o >= n - 200 ? lm : 50,
        q = x ? y : p < n / a ? (p = n / a, (n - n / a * 2)) / o : S + 10,
        m = x ? (n - (o * y + S - y )) / 2 : p,
        r = 0,
        s = o % 2,
        g = (o - s) || 1,
        f = o > 4 ? 30 : 15,
        e = (S - 50) * o >= n - 100 ? 45 : o > 2 ? o > 4 ? 80 : 60 : 45,
        c = [],
        z = window.innerHeight,
        b = o > 20 ? 10 : 20,
        k = o > 10 ? b / o * 10 : 40,
        d = this.cards.length > 1 ? this.cards.sort(function(a, b) {
            return (a.cardCode[1] >= b.cardCode[1])
        }) : this.cards;

    for(var j = 0; j < o; j++) {
        let t = (m + q * j).toFixed(3),
            l = f / (g / 2),
            u = z - 250 + (x ? -(j >= g / 2 ? (s > 0 ? l * (g - j) : l * (o - j - 1)) : l * j) : 0),
            v = d[j],
            h = x ? o > 1 ? (j < g / 2 ? (g - j) - g / 2 : (s > 0 ? 0 : -1) - (j - g / 2)) * -(e / 2) / (g / 2) : 0 : 0;
        
        c.push([v, t, u, j+1, h]);
    }
    for(var i = o - 1; i >= 0; i--) {
        let d = c[i];
        d[0].placeZ(d[3]);
    }
    var w = window.setInterval(() => {
        if (r === o) return clearInterval(w);
        let d = c[r];

        d[0].moveTo(new O(d[1], d[2]), d[4]);
        d[0].trotate = x ? d[4] : 0;
        r++;
    }, k);
};
g.playCard = function(b, c, p) {
    let n,
        m;
    let id = c.cards.findIndex(function (obj) {
        return obj.id == b.id;
    });
    window.setTimeout(() => {
        c.gamepack.update(b.cardCode);
        b.delete();
        if (c.cards.length === 0) c.end();
    }, 600);
    c.gamepack.gtp().cardCode = b.cardCode;
    -1 !== id && (n = c.cards.splice(id, 1), m = c.deck.splice(id, 1))
    window.setTimeout(() => {
        c.placeDeck();
    }, 50);
    !p && c.sendGameUpdate(b.cardCode, {played: true, fromPile: false, pileChanges: [], changedColor: (b.cardCode[0] == "W" && b.cardCode[1] == "Z"), isDrawCards: false});
};
g.pileEvent = function(a) {
    var n = this;
    a.on('create', function() {
        if (!n.full.length) return n.end(false);
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
        n.sendGameUpdate((l ? d : null), {played: l, fromPile: true, pileChanges: b, changedColor: l && (d[0] == "W" && d[1] == "Z"), isDrawCards: false});
    });
};
g.sendGameUpdate = async function(a, b) {
    this.canPlay = false;
    let newColor = null;
    if (this.cards.length && a && (a[1] == "Z" && (a[0] == "W" || a[0] == "X"))) {
        newColor = await this.chooseNewColor();
        if (!newColor)
        	return this.codeError(2);
    }
    new InfoMessage(this.overlay, "Waiting for next player...");
    if (newColor) this.gamepack.update(this.gamepack.gtp().cardCode, newColor);
    window.setTimeout(() => {
        this.gameSocket.sendUpdate(a, this.deck.length, b, newColor);
		if (this.deck > 1)
			this.unobutton.deactivate();
    }, newColor ? 700 : 0);
};
g.createOpponentDeck = function(a) {
    this.oppn = this.oppn || []
    for(var i = 0; i < (a || 7); i++) {
        let oc = new Pile(new O(0, 0), qe, this.deckContainer, "opponent", {width: Bf() ? S / 1.65 : 60, height: Bf() ? T / 1.65 : 90});
        oc.gtc()
            .placeZ(0)
            .moveTo(this.pileCoords);
        this.oppn.push(oc);
    }
    this.placeOpponentDeck();
};
g.updateOpponentDeckAndGamepack = function(a) {
    if (a.fromPile && a.played) {
        let oc = new Card(this.pileCoords, "card rinverted");
        oc.drawcard(this.deckContainer, qe);
        let u = () => {
            this.gamepack.update(a.card, a.newColor);
            oc.delete();
        }
        window.setTimeout(() => {
            oc.placeZ(1)
                .moveTo(this.packCoords)
                .flip(a.card, a.newColor, 550, u);
        }, 10)
    }
    if (a.deckSize == this.oppn.length) return
    if (a.deckSize > this.oppn.length) {
        for(var i = 0; i < a.deckSize; i++) {
            if (!this.oppn[i]) {
                let oc = new Pile(new O(0, 0), qe, this.deckContainer, "opponent", {width: Bf() ? S / 1.65 : 60, height: Bf() ? T / 1.65 : 90});
                oc.gtc()
                    .placeZ(0)
                    .moveTo(this.pileCoords);
                this.oppn.push(oc);
            }
        }
    } else if (a.deckSize < this.oppn.length) {
        for(var i = 0; i <= this.oppn.length-a.deckSize; i++) {
            let del = this.oppn[a.deckSize];
            this.oppn.splice(a.deckSize, 1);
            let u = () => {
                this.gamepack.update(a.card, a.newColor);
                del.delete();
            }
            del.gtc()
                .resize(S, T)
                .placeZ(1)
                .moveTo(this.packCoords, 0)
                .flip(a.card, a.newColor, 550, u);
        }
    }
    this.placeOpponentDeck();
};
g.placeOpponentDeck = function() {
    let n = window.innerWidth,
        o = this.oppn.length,
        p = Bf() ? n / 3 : 200,
        lm = (p / o),
        y = (50) * o >= p ? lm : 50,
        q = y,
        m = (n - (o * y + S - y )) / 2,
        r = 0,
        s = o % 2,
        g = (o - s) || 1,
        f = 50,
        e = o > 2 ? 80 : 45,
        c = [],
        b = o > 20 ? 10 : 20,
        k = o > 10 ? b / o * 10 : 40,
        d = this.oppn;

    for(var j = 0; j < o; j++) {
        let t = (m + q * j).toFixed(3),
            l = f / (g / 2),
            u = 20 + (j >= g / 2 ? (s > 0 ? (j == (g / 2) + s - 1 ? l * (g - j - 1) : l * (g - j)) : l * (o - j - 1)) : l * j),
            v = d[j],
            h = o > 1 ? (j < g / 2 ? (g - j) - g / 2 : (s > 0 ? 0 : -1) - (j - g / 2)) * (e / 2) / (g / 2) : 0;

        c.unshift([v, t, u, j + 1, h + 180]);
    }
    for(var i = o-1; i >= 0; i--) {
        let d = c[i];
        d[0].gtc().placeZ(d[3]);
    }
    var w = window.setInterval(() => {
        if (r == o) return clearInterval(w);
        let d = c[o-r-1];

        d[0].gtc().moveTo(new O(d[1], d[2]), d[4]);
        r++;
    }, k);
};
g.playCardEffects = function(a) {
    let u = 2,
        l = 4,
        n = this;
    window.setTimeout(() => {
        if (a[1] == "V" && this.full.length >= u) {
            (a[1] == "V") && this.addCardsToDeck(u);
        } else if ((a[1] == "Z" && a[0] == "X") && this.full.length >= l) {
            (a[1] == "Z" && a[0] == "X") && this.addCardsToDeck(l);
        } else if (a[1] == "V" || (a[1] == "Z" && a[0] == "X")) {
            return n.end(false);
        }
    }, L + 150);
};
g.chooseNewColor = async function() {
    try {
        return await new Promise((resolve, reject) => {
            window.setTimeout(() => {
                new PiePopup(function(a) {
                    resolve(a);
                });
            }, 500);
        });
    } catch (error) {
        if (error) {
            console.error(error);
			return null;
        }
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
            case "Z":
            case "R": return 0
            case "Y": return 1
            case "G": return 2
            case "B": return 3
            case "W": return 4
            case "X": return 5
            case "D": return 10
            case "P": return 11
            case "V": return 12
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
    a.gtc().canv().style.transform = "rotate("+b+"deg)"
},
btcp = function(a, b) {
    a.canv().style.transform = "rotate("+b+"deg)"
},
deckToggle = function(a) {
    Fe(document, "deck-toggle").onclick = function() {
        a.circleDeck = !a.circleDeck;
        a.cards.forEach(e => {
            e.moveTo(a.pileCoords, 0);
        });
        setTimeout(() => a.placeDeck(), L);
    }
},
gameInfo = function(a) {
    Fe(document, "game-info").onclick = function() {
        console.info("Game Info\n");
    }
},
replacePileAndPackOnResize = function(a) {
    a.pileCoords = new O(window.innerWidth - 200, window.innerHeight / 2 - T / 1.5);
    a.pile.gtc().moveTo(a.pileCoords);
    a.packCoords = new O(window.innerWidth / 2 - S / 2, window.innerHeight / 2 - T / 1.5);
    a.gamepack.gtp().moveTo(a.packCoords);
},
jh = function(a, b) {
    let o = false;
    a.onclick = () => {
        if (o) return
        o = true, b();
    };
    window.addEventListener("keyup", function(key) {
        if (key.keyCode === 13 && !o) {
            o = true;
            b();
        }
    });
},
hko = function(a) {
    let u = "",
        l = a.length
    for (var i = 0; i < l; i++) {
        u += ((i > 0 && i < l - 1) ? ", " : i == l - 1 && l > 1 ? " and " : "") + a[i].username
    }
    return u
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
        // n = document.createElementNS(ur, "svg"),
        // r = document.createElementNS(ur, "text"),
        n = Ms(Me("svg"), ["class", "xmlns", "viewBox"], ["pie", ur, "0 0 180 180"]),
        r = Ms(Me("text"), ["y", "dx", "dominant-baseline", "text-anchor"], ["-30", "50%", "middle", "middle"]),
        k = ["R", "Y", "G", "B"],
        t = this,
        h = [];
    r.textContent = "Choose your new color";
    Md(n, r);
    for (var i = 0; i < 4; i++) {
        let m = Me("path"),
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

var UNOButton = function(a) {
	this.b = Md(Me("div", "ovr-uno-button-container"), Md(Me("div", "ovr-uno-button"), Me("div", "ovr-uno-button-logo")));
	this.width = T * 1.5;
	this.height = T * 1.5;
	this.root = a;
	this.buttonCoords = new O(0, window.innerHeight / 3);
	this.placeButton(this.buttonCoords);
	this.b.classList.add("reduced");
	Md(this.root, this.b);
	this.disabled = true;
	this.initPartucles();
	return (this);
};
var u = UNOButton.prototype;
u.activate = function() {
	this.disabled = false;
	this.b.classList.remove("reduced");
	this.b.onclick = () => {
		this.disabled = true;
		this.b.classList.add("clicked");
	}
};
u.deactivate = function() {
	this.disabled = true;
	this.b.classList.add("reduced");
	this.b.onclick = null;
};
u.placeButton = function(a) {
	a && (this.left = a.left, this.top = a.top)
	this.b.style.width = this.width+"px";
	this.b.style.height = this.height+"px";
	this.b.style.left = this.left+"px";
	this.b.style.top = this.top+"px";
	return (this);
};
u.remove = function() {
	this.b.remove();
	delete this;
};
u.initPartucles = function() {
	let t = this,
        i;
	t.canvas = Me("canvas");
	t.innerBtn = t.b.querySelector(".ovr-uno-button");
	Md(t.b, t.canvas);
	t.ctx = t.canvas.getContext("2d");
	t.hoverFlag = false;
	t.dots=[];
	t.clickFlag = false;
	let w = t.ctx.canvas.width = t.width,
		h = t.ctx.canvas.height = t.height,
		emitter,
		particlesSettings = {
			name: "Vortex",
			maxDots: 100,
			maxSpeed: 2,
			minSpeed: -2,
			emitRate: 20,
			emitNum: 5,
			radius: 3,
			trail: 1,
			maxTime: 3000,
			minTime: 1500,
			glow: 10,
			hueMin: 0,
			hueMax: 94,
			satMin: 100,
			satMax: 94,
		};

	let emitDots = function() {
		if (t.dots.length < particlesSettings.maxDots) {
            i = -1;
			while (++i < particlesSettings.emitNum) {
				var hue = Math.random() * (particlesSettings.hueMax - particlesSettings.hueMin) + particlesSettings.hueMin,
					sat = Math.random() * (particlesSettings.satMax - particlesSettings.satMin) + particlesSettings.satMin,
					sp = t.hoverFlag ? Math.random() * (particlesSettings.maxSpeed - particlesSettings.minSpeed) + particlesSettings.minSpeed : 20;
				t.dots.push({
					x: w / 2,
					y: h / 2,
					v: sp,
					d: Math.random() * 360,
					c: Math.random() * (5 - (-5)) + (-5),
					h: hue,
					s: sat,
					st: Date.now(),
					lt: Math.random() * (particlesSettings.maxTime - particlesSettings.minTime) + particlesSettings.minTime
				});
			}
		}
	},
    draw = function() {
		t.ctx.clearRect(0, 0, w, h);
		if (t.disabled) return
		t.dots.forEach((_, i) => {
			var pct = (Date.now() - t.dots[i].st) / t.dots[i].lt;
			t.ctx.save();
			t.ctx.beginPath();
			t.ctx.translate(w / 2, h / 2);
			t.ctx.rotate(t.dots[i].d * Math.PI / 180);
			t.ctx.fillStyle = "hsla(" + t.dots[i].h + ", " + t.dots[i].s + "%, 50%, " + (pct) + ")";
			t.ctx.shadowColor = "hsla(" + t.dots[i].h + ", " + t.dots[i].s + "%, 50%, 1)";
			t.ctx.shadowBlur = particlesSettings.glow;
			t.ctx.arc(t.dots[i].x, t.dots[i].y, particlesSettings.radius, 0, Math.PI * 2);
			t.ctx.fill();
			t.ctx.closePath();
			t.ctx.restore();

			t.dots[i].x += t.dots[i].v;
			t.dots[i].y += t.dots[i].v;
			if(t.clickFlag)
				t.dots[i].v = 3;

			if(t.dots[i].x > w || t.dots[i].x < 0 || t.dots[i].y > h || t.dots[i].y < 0 || t.dots[i].st + t.dots[i].lt < Date.now())
				t.dots.splice(i,1);
		});
		anim = requestAnimationFrame(draw);
	}

	t.innerBtn.onmouseover = function() {
		if (t.disabled) return
		t.hoverFlag = true;
		t.timeout && clearTimeout(t.timeout);
		emitter = setInterval(emitDots, particlesSettings.emitRate);
		anim = requestAnimationFrame(draw);
	}

	t.innerBtn.onmouseout = function() {
		t.hoverFlag = false;
		clearInterval(emitter);
		t.timeout = setTimeout(() => {
			if (t.hoverFlag == true) return
			cancelAnimationFrame(anim);
			t.ctx.clearRect(0, 0, w, h);
			t.dots = [];
		}, 0);
	}

	t.innerBtn.onmousedown = function() {
		t.clickFlag = true;
	}

	t.innerBtn.onmouseup = function() {
		t.clickFlag = false;
	}
};

var AlertPopup = function(t, a, b, c, d) {
    Fa(document, "ad-pn-c") && Fa(document, "ad-pn-c").remove();
    let l = Me("div", "ad-pn-c"),
        u,
        v,
        w,
        k = 0,
        r = [];
    Md(document.body, l);
    if (t.includes("\n")) t = t.replaceAll(/\n/g, "<br/>");
    if (c && a != false) {
        let n = Ms(Md(Me("div", "ad-err-close ad-demi ad-demi-sup left"), Me("p", "", {in: a})), "id", "ad-err-reset-btn"),
            m = Ms(Md(Me("div", "ad-err-close ad-demi right"), Me("p", "", {in: c})), "id", "ad-err-close-btn");
        u = Md(Me("div", "ad-btn"), [n, m])
        n.addEventListener("click", b);
        r.push(...[n, m]);
        d && m.addEventListener("click", d);
    } else {
		if (undefined != a) {
			if (a == false) w = Me("div", "progress-el", {style: "width: 0%;"}), v = Md(Me("div", "progress-bar"), Md(Me("div", "progress-body"), w));
	
			u = Md(Me("div", "ad-btn"), v || Ms(Md(Me("div", "ad-err-close"), Me("p", "", {in: a || "Close"})), "id", "ad-err-close-btn"));
			if (a && a != false) {
				b && u.addEventListener("click", b);
				r.push(u);
			}
		} else {
			u = Md(Me("div", "lds-ellipsis"), [Me("div"), Me("div"), Me("div"), Me("div")]);
		}
    }
    Md(l, Md(Me("div", "ad-panel grow-anim"), [Md(Me("div", "ad-err"), Me("p", "", {in: t})), u]));
    r.map(e => e.addEventListener("click", function() {l.remove()}));
    if (a == false) {
        let tm = c/100,
            x = window.setInterval(() => {
                k++;
                if (k >= 100) clearInterval(x), l.remove(), b();
                w.style.width = 100 - k + "%";
            }, tm);
    }
    return l
}

var UsernamePopup = function(t, a) {
    let o = false,
        p = Ms(Md(Me("div", "ad-err-close"), Me("p", "", {in: "Search for opponent"})), "id", "ad-err-close-btn"),
        m = Me("label", "f0n8F"),
        n = Ms(Me("input", "_2hvTZ pexuQ zyHYP"), ["autocomplete", "autocorrect", "autocapitalize", "autofocus", "required", "maxlength", "type", "aria-required", "name", "id", "value"], ["off", "off", "off", "", "", "15", "text", "true", "username", "on-user-input", ""]),
        j = Md(Me("div", "ttpo"), Md(m, [Me("span", "_9nyy2", {in: "Username"}), n])),
        l = Md(Me("div", "ad-pn-c"), Md(Me("div", "ad-panel grow-anim"), [Md(Me("div", "ad-err"), [Me("p", "", {style: "min-height: auto;", in: t}), j]), Md(Me("div", "ad-btn"), p)]));
    let y = function(a) {
        if (n.value.length)
            m.classList.add("FATdn");
        else
            m.classList.remove("FATdn");
    }; 
    m.onkeyup = y;
    m.onkeypress = y;
    Md(document.body, l);
    var pp = () => {
        let str = n.value;
        if (str.length && !/\s/.test(str))
            o = true,
            a(str),
            l.remove();
        else
            j.classList.add('wrong-enter-r');
    };
    p.addEventListener("click", pp);
    window.addEventListener("keyup", function(key) {
        if (key.keyCode === 13 && !o) {
            pp();    
        }
    });
    return (l);
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
            //
        });
    }
}

(function(){
    var started = null;
    var cnt = Fe(document, "dialog-container");
    Mr(cnt, '-hide-dialog');
    let cv = () => {
        if (started) return
        started = new Game;
        Mc(cnt,'-hide-dialog');
        setTimeout(() => {
            new UsernamePopup("Choose your username", function(a) {
                started.start(a);
            });
        }, 100);
    }

    jh(Fe(document, "start-easy-btn"), cv);
}());

/*
 * 
 ** Improvements **
 * 
 * Add an animation manager :
 * 
 * - create an animation stack to store all incoming animations
 * - so we can put delay between animations or stop animation propagation or even delay all incomes
 * -> on each update receive, add update to the stack and if everything is good an nothing has to be done first, run stack content
 * -> if not wait for work to finish
 * - stack could be usefull for end game animation to wait for player action to end before ending
 * - can be acheived by adding transition end so we can detect when transitions terminates
 * 
 * 
 * 
 */