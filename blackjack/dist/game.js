var BJ;
(function (BJ) {
    var Game = (function () {
        function Game() {
        }
        Game.prototype.init = function () {
            this.turn = 0; // dealers turn
            this.initalXYCards();
        };
        /**
         * This is the entry point, or "load" for the game
         * set up and variables or whatever here
         */
        Game.prototype.load = function () {
            // should load be in a different class, because I am about to call
            // this glass - I guess we can just consider this main and static like?
            // anywho - this will load any variables we need "globally"
            this.init();
            // draw inital screen
            this.redrawOpeningScreen();
        };
        /**
         * This will deal the inital cards - 1 dealer card will be face down
         */
        Game.prototype.dealButton = function (btn) {
            if (this.turn != 0) {
            }
            else {
                // start with new screen
                this.redrawOpeningScreen();
                this.initalXYCards();
                // players hand
                this.phand = new BJ.Hand();
                // dealers hand
                this.dhand = new BJ.Hand();
                // our deck
                this.deck = new BJ.Deck();
                this.deck.shuffleDeck();
                // give out our cards to players and dealer
                // TODO: modularize this, but for now...
                // player1 gets first card
                this.phand.hit(this.deck.deal());
                // dealer gets next card
                this.dhand.hit(this.deck.deal());
                // player1 gets second card
                this.phand.hit(this.deck.deal());
                // dealer gets his/her second card
                this.dhand.hit(this.deck.deal());
                // put all players into an array
                // TODO: not the place for this - just saying
                var players = [];
                players.push(this.phand);
                // first deal
                this.firstDeal(players);
                // redraw the score to the screen
                this.redrawPlayerScore();
                // redraw the strategy to the screen
                this.redrawStrategy();
                // give control to the first player
                this.turn = 1;
            }
        };
        /**
         * This is what will happen when the player "hits"
         */
        Game.prototype.hitButton = function (btn) {
            if (this.turn === 0) {
            }
            else {
                var card = this.deck.deal();
                this.phand.hit(card);
                this.loadCardImage(card);
                if (this.phand.isBroke()) {
                    //this.context.fillText("You bust...", 0, 480);
                    this.turn = 0;
                    this.redrawPlayerScore();
                    this.redrawStrategy();
                    this.endGame();
                    this.flipBurnCard(); // now - with more players no
                }
                else {
                    this.redrawPlayerScore();
                    this.redrawStrategy();
                }
            }
        };
        /**
         * End of game clean up stuff
         */
        Game.prototype.endGame = function () {
            if (this.dhand.isBroke() && !this.phand.isBroke()) {
                this.context.fillText("You win!", 250, 250);
            }
            else if (this.phand.isBroke()) {
                this.context.fillText("You lose!", 250, 250);
            }
            else if (this.phand.value() > this.dhand.value()) {
                this.context.fillText("You win!", 250, 250);
            }
            else {
                this.context.fillText("You lose!", 250, 250);
            }
            // control back to dealer
            this.turn = 0;
        };
        /**
         * This is what happens when a player stands
         */
        Game.prototype.standButton = function (btn) {
            this.turn = 0; // turn to dealer
            this.dealersPlay();
        };
        /**
         * This is for the "first deal" to have the cards deal out slow
         */
        Game.prototype.firstDeal = function (players) {
            // There are 2 rounds of dealing...
            var round_two = false;
            // need to do something better
            this.turn = 1;
            // dealer to all the players first
            for (var i = 0; i < players.length; i++) {
                var that = this;
                var timeout = i * 1000;
                setTimeout(function () {
                    that.loadCardImage(players[0].seeCard(0));
                }, 1000, that, players, i);
            }
            // now get to the dealer
            setTimeout(function () {
                that.loadHoleCard();
            }, 1500, that);
            // do not need this variable but
            round_two = true;
            // dealer the players second card
            for (var i = 0; i < players.length; i++) {
                var that = this;
                var timeout = i * 2000;
                setTimeout(function () {
                    that.loadCardImage(players[0].seeCard(1));
                }, 2000, that, players, i);
            }
            // dealers up card
            // first off we need to figure out how long the
            // other waits are ...
            // add a second for good measure
            var fullTO = ((players.length * 1000) + (players.length * 2000));
            setTimeout(function () {
                that.turn = 0;
                that.loadCardImage(that.dhand.seeCard(1));
            }, fullTO, that);
            setTimeout(function () {
                that.turn = 1;
            }, fullTO + 500, that);
        };
        /**
         * This is what happens when it's the dealers turn
         */
        Game.prototype.dealersPlay = function () {
            if (this.turn != 0) {
            }
            else {
                // we need to "flip" the hole card
                this.flipBurnCard();
                while (!this.dhand.isBroke() && this.dhand.value() < 18) {
                    var card = this.deck.deal();
                    this.dhand.hit(card);
                    this.loadCardImage(card);
                }
            }
            this.endGame();
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
            this.context.fillText("Players score: " + this.phand.value(), 2, 490);
        };
        /**
         * This will keep the strategy updated
         */
        Game.prototype.redrawStrategy = function () {
            this.context.clearRect(310, 450, 500, 500);
            var bs = new BJ.BasicStrategy();
            this.context.fillText("The player should: " + BJ.Play[bs.advice(this.phand, this.dhand.seeCard(1))].toString(), 310, 490);
        };
        /**
         * This will load a card image and print to screen
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
        };
        return Game;
    })();
    BJ.Game = Game;
})(BJ || (BJ = {}));
