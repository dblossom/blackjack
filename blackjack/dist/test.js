var BJ;
(function (BJ) {
    var Test = (function () {
        function Test() {
        }
        Test.prototype.load = function () {
            // gets the canvas, sets font, clears remaining
            this.canvas = document.getElementById('display');
            this.context = this.canvas.getContext('2d');
            this.context.font = "bold 20px Arial";
            this.context.clearRect(0, 0, 500, 500);
            this.bs = new BJ.BasicStrategy();
        };
        Test.prototype.dealCard = function (btn) {
            this.deck = new BJ.Deck();
            this.deck.shuffleDeck();
            var pcard1 = this.deck.deal();
            var hole = this.deck.deal();
            var pcard2 = this.deck.deal();
            this.upcard = this.deck.deal();
            this.phand = new BJ.Hand();
            this.phand.hit(pcard1);
            this.phand.hit(pcard2);
            this.context.clearRect(0, 0, 500, 500);
            // the dealers upcard
            this.context.fillText(this.upcard.rank(), 0, 25);
            this.context.fillText("  of  ", 15, 25);
            this.context.fillText(this.upcard.suit.toString(), 55, 25);
            this.context.fillText("       <--- dealers up card!", 150, 25);
            // the dealers hole card
            this.context.fillText(hole.rank(), 0, 50);
            this.context.fillText("  of  ", 15, 50);
            this.context.fillText(hole.suit.toString(), 55, 50);
            this.context.fillText("       <--- dealers hole card!", 150, 50);
            // pcard1
            this.context.fillText(pcard1.rank(), 0, 200);
            this.context.fillText("  of  ", 15, 200);
            this.context.fillText(pcard1.suit.toString(), 55, 200);
            this.context.fillText("       <--- player card 1!", 150, 200);
            this.lastCardLocation = 200;
            // pcard2
            this.context.fillText(pcard2.rank(), 0, 225);
            this.context.fillText("  of  ", 15, 225);
            this.context.fillText(pcard2.suit.toString(), 55, 225);
            this.context.fillText("       <--- player card 2!", 150, 225);
            this.lastCardLocation = 225;
            var bs = new BJ.BasicStrategy();
            // advice
            this.context.fillText("The Player should..." + BJ.Play[this.bs.advice(this.phand, this.upcard)].toString(), 0, 480);
        };
        Test.prototype.hitCard = function (btn) {
            var pcard = this.deck.deal();
            this.phand.hit(pcard);
            this.lastCardLocation = this.lastCardLocation + 25;
            this.context.fillText(pcard.rank(), 0, this.lastCardLocation);
            this.context.fillText("  of  ", 15, this.lastCardLocation);
            this.context.fillText(pcard.suit.toString(), 55, this.lastCardLocation);
            this.context.fillText("       <--- player card " + this.phand.size() + "!", 150, this.lastCardLocation);
            this.context.clearRect(0, 450, 500, 500);
            this.context.fillText("The Player should..." + BJ.Play[this.bs.advice(this.phand, this.upcard)].toString(), 0, 480);
        };
        return Test;
    })();
    BJ.Test = Test;
})(BJ || (BJ = {}));
