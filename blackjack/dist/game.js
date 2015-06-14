var BJ;
(function (BJ) {
    var Game = (function () {
        function Game() {
        }
        /**
         * This is the entry point, or "load" for the game
         * set up and variables or whatever here
         */
        Game.prototype.load = function () {
            // -- determine what does / doesnot need to be here
            this.turn = 0;
            this.initalXYCards();
            this.redrawOpeningScreen();
        };
        /**
         * This will deal the inital cards - 1 dealer card will be face down
         */
        Game.prototype.dealButton = function (btn) {
            // consider - enable / disable buttons vs errors
            if (this.turn != 0) {
            }
            else {
                // disable this button from rest of game
                btn.disabled = true;
                // enabled the "play" buttons
                this.setPlayButtons();
                // holecard not flipped
                this.holeCardFlipped = false;
                // destroy the players array...
                this.players = [];
                // start with new screen
                this.redrawOpeningScreen();
                // reset xy card positions
                this.initalXYCards();
                // how many players
                this.numPlayers = 1;
                // load players into array
                this.initPlayers();
                // reset dealers hand
                this.dhand = new BJ.Hand();
                // our deck - TODO: array of decks
                this.deck = new BJ.Deck();
                // shuffle
                this.deck.shuffleDeck();
                // load the cards in arrays
                this.initalDeal(this.players);
                // first deal - to screen
                this.firstDeal(this.players);
                // give control to the first player
                this.turn = 1;
            }
        };
        /**
         * This is what will happen when the player "hits"
         */
        Game.prototype.hitButton = function (btn) {
            // HMM -- 
            if (this.turn === 0) {
            }
            else {
                var phand = this.players[this.turn - 1];
                var card = this.deck.deal();
                phand.hit(card);
                this.loadCardImage(card);
                if (phand.isBroke()) {
                    this.redrawPlayerScore();
                    this.turn++;
                    this.context.fillText("BUST!", 200, 350);
                    if (this.turn > this.numPlayers) {
                        this.turn = 0;
                        this.dealersPlay();
                    }
                    else if (this.turn > 1) {
                        this.botPlayer();
                    }
                }
                else {
                    this.redrawPlayerScore();
                    this.redrawStrategy();
                }
            }
        };
        /**
         * This is what happens when a player stands
         */
        Game.prototype.standButton = function (btn) {
            this.turn++;
            if (this.turn > 1 && this.turn < this.numPlayers) {
                this.botPlayer();
            }
            else {
                this.turn = 0;
                this.dealersPlay();
            }
        };
        /**
         * This is what happens when a player doubles
         */
        Game.prototype.doubleButton = function (btn) {
            // take one card and move on ...
            this.hitButton(btn);
            this.standButton(btn);
        };
        /**
         * This is what happens when a player splits
         */
        Game.prototype.splitButton = function (btn) {
            alert("Not implemented, just fucking hit or something");
        };
        Game.prototype.setPlayButtons = function () {
            // just need to check one ...
            if (document.getElementById("hit").disabled === true) {
                document.getElementById("hit").disabled = false;
                document.getElementById("stand").disabled = false;
                document.getElementById("double").disabled = false;
                document.getElementById("split").disabled = false;
            }
            else {
                document.getElementById("hit").disabled = true;
                document.getElementById("stand").disabled = true;
                document.getElementById("double").disabled = true;
                document.getElementById("split").disabled = true;
            }
        };
        Game.prototype.redrawDealerScore = function () {
            if (!this.holeCardFlipped) {
                this.context.fillText("Dealers score: " + this.dhand.seeCard(1).value(), 2, 25);
            }
            else {
                this.context.clearRect(0, 0, 150, 50);
                this.context.fillText("Dealers score: " + this.dhand.value(), 2, 25);
            }
        };
        /**
         * A bot player
         */
        Game.prototype.botPlayer = function () {
            // just make a loop doing whatever
            // the strat says to do ...
        };
        /**
         * End of game clean up stuff
         */
        Game.prototype.endGame = function () {
            // SO -- since any other players will be "bots"
            // and will make moves on the basic strat -- 
            // let us just show the score for player one...
            var phand = this.players[0];
            if (this.dhand.isBroke() && !phand.isBroke()) {
                this.context.fillText("You WIN!", 200, 250);
            }
            else if (phand.isBroke()) {
                this.context.fillText("FUCK - YOU LOST!", 200, 250);
            }
            else if (phand.value() > this.dhand.value()) {
                this.context.fillText("You WIN!", 200, 250);
            }
            else if (phand.value() === this.dhand.value()) {
                this.context.fillText("It's a PUSH!", 200, 250);
            }
            else {
                this.context.fillText("FUCK - YOU LOST!", 200, 250);
            }
            // control back to dealer
            this.turn = 0;
            this.setPlayButtons();
            document.getElementById("deal").disabled = false;
        };
        /**
         * loads the arrays of hands with cards for the inital
         * game load
         */
        Game.prototype.initalDeal = function (players) {
            // round one
            for (var i = 0; i < players.length; i++) {
                players[i].hit(this.deck.deal());
            }
            // dealers hole card
            this.dhand.hit(this.deck.deal());
            // round two
            for (var i = 0; i < players.length; i++) {
                players[i].hit(this.deck.deal());
            }
            // dealers up card
            this.dhand.hit(this.deck.deal());
        };
        /**
         * Initalize the players - load array
         */
        Game.prototype.initPlayers = function () {
            for (var i = 0; i < this.numPlayers; i++) {
                this.players.push(new BJ.Hand());
            }
        };
        /**
         * This is for the "first deal" to have the cards deal out slow
         */
        Game.prototype.firstDeal = function (players) {
            // need to do something better
            // maybe set turn each time using "i"
            // oh boy that sounds like a mess 
            this.turn = 1;
            // deal to all the players first
            for (var i = 0; i < players.length; i++) {
                var that = this;
                // i think this will break too...
                var timeout = (i + 1) * 1000;
                setTimeout(function () {
                    that.loadCardImage(players[i - 1].seeCard(0));
                }, timeout, that, players, i);
            }
            // now get to the dealer
            setTimeout(function () {
                that.loadHoleCard();
            }, ((players.length * 1000) + 500), that);
            // deal the players second card
            for (var i = 0; i < players.length; i++) {
                var that = this;
                var timeout = (i + 1) * 2000;
                setTimeout(function () {
                    that.loadCardImage(players[i - 1].seeCard(1));
                    that.redrawPlayerScore();
                    that.redrawStrategy();
                }, timeout, that, players, i);
            }
            // dealers up card
            // first off we need to figure out how long the
            // other waits are ...
            // add a second for good measure
            var fullTO = ((players.length * 1000) + (players.length * 2000));
            setTimeout(function () {
                that.turn = 0;
                that.loadCardImage(that.dhand.seeCard(1));
                that.redrawDealerScore();
            }, fullTO, that);
            setTimeout(function () {
                that.turn = 1; // back to one lol
            }, fullTO + 500, that);
        };
        /**
         * This is what happens when it's the dealers turn
         */
        Game.prototype.dealersPlay = function () {
            if (this.turn != 0) {
            }
            else {
                this.flipBurnCard();
                this.redrawDealerScore();
                // first we need to check if any player is still standing
                if (!this.playersLeft()) {
                }
                else {
                    // first let us build the hand
                    while (!this.dhand.isBroke() && this.dhand.value() < 17) {
                        var card = this.deck.deal();
                        this.dhand.hit(card);
                    }
                    // now let us print the score to the screen and alert player
                    var cPrint = 2;
                    for (var i = 0; (i + 2) < this.dhand.size(); i++) {
                        var that = this;
                        var timeout = (i + 1) * 1000;
                        setTimeout(function () {
                            that.loadCardImage(that.dhand.seeCard(cPrint++));
                            that.redrawDealerScore();
                        }, timeout, that, cPrint);
                    }
                }
            }
            this.endGame();
        };
        /**
         * This will check if any players are still in the game
         */
        Game.prototype.playersLeft = function () {
            for (var i = 0; i < this.numPlayers; i++) {
                if (!this.players[i].isBroke()) {
                    return true;
                }
            }
            return false;
        };
        /**
         * This will draw the screen
         */
        Game.prototype.redrawOpeningScreen = function () {
            // Load up the canvas clear any previous stuff.
            this.canvas = document.getElementById('display');
            this.context = this.canvas.getContext('2d');
            this.context.font = "bold 12px Arial";
            this.context.clearRect(0, 0, 500, 500);
            // put any labels and stuff on the canvas
            this.context.fillText("Dealer Stands on ANY 17", 150, 140);
        };
        /**
         * starting x / y position for card layout
         */
        Game.prototype.initalXYCards = function () {
            this.playerCardX = 160;
            this.playerCardY = 380;
            this.dealerCardX = 160;
            this.dealerCardY = 20;
            this.xInc = 20;
        };
        /**
         * This will keep the score updated
         */
        Game.prototype.redrawPlayerScore = function () {
            this.context.clearRect(2, 450, 150, 500);
            this.context.fillText("Players score: " + this.players[this.turn - 1].value(), 2, 490);
        };
        /**
         * This will keep the strategy updated
         */
        Game.prototype.redrawStrategy = function () {
            this.context.clearRect(310, 450, 500, 500);
            var bs = new BJ.BasicStrategy();
            this.context.fillText("The player should: " + BJ.Play[bs.advice(this.players[this.turn - 1], this.dhand.seeCard(1))].toString(), 310, 490);
        };
        /**
         * This will load a card image and print to screen
         * TODO: make this good for the bot players too ...
         *       this is going to be a PITA to fix up!!!
         * @param card: the card to load
         */
        Game.prototype.loadCardImage = function (card) {
            var locX;
            var locY;
            if (this.turn === 0) {
                this.dealerCardX = this.dealerCardX + this.xInc;
                locY = this.dealerCardY;
                locX = this.dealerCardX;
            }
            else {
                this.playerCardX = this.playerCardX + this.xInc;
                locY = this.playerCardY;
                locX = this.playerCardX;
            }
            var img = new Image();
            img.onload = function () {
                Game.prototype.context.drawImage(img, locX, locY);
            };
            var imgLoc;
            imgLoc = card.rank() + card.suit.toString().charAt(0);
            img.src = "images/cards/front/" + imgLoc + ".png";
        };
        /**
         * This loads the hole card
         */
        Game.prototype.loadHoleCard = function () {
            this.dealerCardX = this.dealerCardX + this.xInc;
            var locX = this.dealerCardX;
            var locY = this.dealerCardY;
            var img = new Image();
            img.onload = function () {
                Game.prototype.context.drawImage(img, locX, locY);
            };
            img.src = "images/cards/back/b1fv.png";
        };
        /**
         * This will flip the hole card
         */
        Game.prototype.flipBurnCard = function () {
            var locX = this.dealerCardX;
            var locY = this.dealerCardY;
            var hole = new Image();
            var up = new Image();
            hole.onload = function () {
                Game.prototype.context.drawImage(hole, locX - 20, locY);
                Game.prototype.context.drawImage(up, locX, locY);
            };
            var holeLoc = this.dhand.seeCard(0).rank() + this.dhand.seeCard(0).suit.toString().charAt(0);
            var upLoc = this.dhand.seeCard(1).rank() + this.dhand.seeCard(1).suit.toString().charAt(0);
            hole.src = "images/cards/front/" + holeLoc + ".png";
            up.src = "images/cards/front/" + upLoc + ".png";
            this.holeCardFlipped = true;
        };
        return Game;
    })();
    BJ.Game = Game;
})(BJ || (BJ = {}));
