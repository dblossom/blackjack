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
                // players first card
                this.turn = 1; // hack
                var card = this.deck.deal();
                this.phand.hit(card);
                this.loadCardImage(card);
                // dealers down card
                card = this.deck.deal();
                this.dhand.hit(card);
                // we do not show the first card
                this.loadBurnCard();
                // players second card
                card = this.deck.deal();
                this.phand.hit(card);
                this.loadCardImage(card);
                this.turn = 0; // hack
                // dealers up card
                card = this.deck.deal();
                this.dhand.hit(card);
                this.loadCardImage(card);
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
         * This loads a card back
         */
        Game.prototype.loadBurnCard = function () {
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
