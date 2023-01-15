var uuid = require('node-uuid');

let rdelay = ((min, max) => Math.floor(Math.random() * (max - min)) + min)(800, 1200)

class UNOPlayer {
	constructor(a, b, c, d) {
		this.id = uuid.v4();
		this.isAI = true;
	}
	
	initPlayer(pool) {
		this.pool = pool;
		this.ready = true;
		this.customColor = null;
		this.pool.playerReady++;
		this.pool.defUsername("[AI]", this);
		// console.log(this);
	}

	send(a) {
		setTimeout(() => {
			let arg = JSON.parse(a),
				v;
			// console.log(arg);
			if (arg.IS_CONNECTED) {
				this.deck = arg.deck;
			}
			if (v = arg.SET_GAME_POO_ID) {
				this.gameid = v.id;
			}
			if (v = arg.BEGIN) {
				this.currentCard = v.startCard;
				this.full = v.full;
				this.canPlay = v.canPlay;
				setTimeout(() => {
					this.pool.sendAll({alertinfo: "Please note that this program is still under development and may behave strangely."});
				}, 2500);
			}
			if (v = arg.UPDATE) {
				// console.log(v);
				this.canPlay = v.canPlay;
				// console.log("can play", this.canPlay);
				if (this.id !== v.playerid) this.onUpdate(v);
			}
			if (v = arg.canPlay) {
				this.canPlay = v;
				// console.log(this);
				// console.log("can play", this.canPlay);
				if (this.canPlay == true) {
					setTimeout(() => this.playCard(), rdelay);
				}
			}
			// console.log(this);
			// console.log(arguments);
		}, 100);
	}

	sendGameUpdate(a, b) {
		let newColor = null;
		this.canPlay = false;
		if (this.deck.length && a && (a[1] == "Z" && (a[0] == "W" || a[0] == "X"))) {
			newColor = ["R", "G", "B", "Y"][Math.floor(Math.random() * 4)];
		}
		let update = {UPDATE: {playerid: this.gameid, card: a || null, deckSize: this.deck.length, ...b, newColor: newColor}}
		console.info("\n--------------------");
        console.info("\x1b[0;36mreceived update\x1b[0m", update);
		if (!this.pool.gameEnded) this.pool.update(update);
		if (this.deck.length === 0) {
			this.end();
		}
	}

	onUpdate(a) {
		if (this.full.length == 0 || this.full.length < a.pileChanges.length)
			return this.end(false);

		this.customColor = a.newColor;
		if (a.fromPile) {
			for(var i = 0; i < a.pileChanges.length; i++) {
				let id = this.full.findIndex(function (obj) {
					return obj == a.pileChanges[i];
				});
				this.full.splice(id, 1);
			}
		}
		if (a.played) {
			this.currentCard = a.card;
			this.playCardEffects(a.card);
		}
	}

	playCard() {
		let p = ((a) => {
			for (let c of a) {
				console.log(this.currentCard, c, this.iscompatible(c, this.currentCard, this.customColor));
				if (this.iscompatible(c, this.currentCard, this.customColor))
					return (c);
			}
		})(this.deck);
		if (!p) {
			this.takeCardFromPile();
		} else {
			let id = this.deck.findIndex(function (obj) {
				return obj == p;
			});
			-1 !== id && (this.deck.splice(id, 1))
			this.sendGameUpdate(p, {played: true, fromPile: false, pileChanges: [], changedColor: (p[0] == "W" && p[1] == "Z"), isDrawCards: false});
		}
	}

	takeCardFromPile() {
		if (!this.full.length) return this.end(false);
		let b = [],
			d = this.full.shift(),
			l = false;
		b.push(d);
		if (this.iscompatible(d, this.currentCard, this.customColor))
			l = true;
		else
			this.deck.push(d);
		this.sendGameUpdate((l ? d : null), {played: l, fromPile: true, pileChanges: b, changedColor: l && (d[0] == "W" && d[1] == "Z"), isDrawCards: false});
	}

	playCardEffects(a) {
		let u = 2,
			l = 4;
		if (a[1] == "V" && this.full.length >= u) {
			(a[1] == "V") && this.addCardsToDeck(u);
		} else if ((a[1] == "Z" && a[0] == "X") && this.full.length >= l) {
			(a[1] == "Z" && a[0] == "X") && this.addCardsToDeck(l);
		} else if (a[1] == "V" || (a[1] == "Z" && a[0] == "X")) {
			return this.end(false);
		}
	};

	addCardsToDeck(a) {
		let b = [];
		for(var i = 0; i < a; i++) {
			let d = this.full.shift();
			b.push(d);
			this.deck.push(d)
		}
		setTimeout(() => {
			this.sendGameUpdate(null, {played: false, fromPile: true, pileChanges: b, changedColor: false, isDrawCards: true});
		}, rdelay);
	}

	iscompatible(a, b, c) {
		return a[0] == b[0] || a[1] == b[1] || (a[1] == "Z" && c == b[0]) || b[1] == "Z"
	}

	end(a) {
		console.log("end");
		this.canPlay = false;
		this.pool.finish({GAME_FINISHED: true, closeconnection: true, id: this.id, winning: void 0 !== a ? a : true}, this.username);
	}
}

module.exports = UNOPlayer;