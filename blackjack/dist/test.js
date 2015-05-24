var BJ;
(function (BJ) {
    var Test = (function () {
        function Test() {
        }
        Test.prototype.load = function () {
        };
        Test.prototype.dealCard = function (btn) {
            this.deck = new BJ.Deck();
            this.deck.shuffleDeck();
            var pcard1 = this.deck.deal();
            var hole = this.deck.deal();
            var pcard2 = this.deck.deal();
            var upcard = this.deck.deal();
            var phand = new BJ.Hand();
            phand.hit(pcard1);
            phand.hit(pcard2);
            // gets the canvas, sets font, clears remaining
            var canvas = document.getElementById('display');
            var context = canvas.getContext('2d');
            context.font = "bold 20px Arial";
            context.clearRect(0, 0, 500, 500);
            // the dealers card
            context.fillText(upcard.rank(), 0, 25);
            context.fillText("  of  ", 15, 25);
            context.fillText(upcard.suit.toString(), 55, 25);
            context.fillText("       <--- dealers up card!", 150, 25);
            // pcard1
            context.fillText(pcard1.rank(), 0, 50);
            context.fillText("  of  ", 15, 50);
            context.fillText(pcard1.suit.toString(), 55, 50);
            context.fillText("       <--- player card 1!", 150, 50);
            // pcard2
            context.fillText(pcard2.rank(), 0, 75);
            context.fillText("  of  ", 15, 75);
            context.fillText(pcard2.suit.toString(), 55, 75);
            context.fillText("       <--- player card 2!", 150, 75);
            var bs = new BJ.BasicStrategy();
            // advice
            context.fillText("The Player should..." + BJ.Play[bs.advice(phand, upcard)].toString(), 0, 100);
        };
        return Test;
    })();
    BJ.Test = Test;
})(BJ || (BJ = {}));
