var BJ;
(function (BJ) {
    var Game = (function () {
        function Game() {
        }
        Game.prototype.init = function () {
            // players hand
            this.phand = new BJ.Hand();
            // dealers hand
            this.dhand = new BJ.Hand();
            // our strategy
            this.strategy = new BJ.BasicStrategy();
            this.turn = 0; // dealers turn
            // cardlocations
            this.playerCardX = 160;
            this.playerCardY = 380;
            this.dealerCardX = 160;
            this.dealerCardY = 20;
            this.yInc = 20;
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
            // Load up the canvas clear any previous stuff.
            this.canvas = document.getElementById('display');
            this.context = this.canvas.getContext('2d');
            this.context.font = "bold 12px Arial";
            this.context.clearRect(0, 0, 500, 500);
            // put any labels and stuff on the canvas
            this.context.fillText("Dealer Stands on ANY 17", 150, 140);
            this.redrawPlayerScore();
        };
        /**
         * This will deal the inital cards - 1 dealer card will be face down
         */
        Game.prototype.dealButton = function (btn) {
        };
        /**
         * This will keep the score updated
         */
        Game.prototype.redrawPlayerScore = function () {
            this.context.fillText("Players score: " + this.phand.value(), 2, 490);
        };
        /**
         * This will keep the strategy updated
         */
        Game.prototype.redrawStrategy = function () {
        };
        /**
         * This will load a card image and print to screen
         */
        Game.prototype.loadCardImage = function () {
        };
        return Game;
    })();
    BJ.Game = Game;
})(BJ || (BJ = {}));
