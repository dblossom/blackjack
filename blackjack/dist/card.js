///<reference path="suit.ts" />
var BJ;
(function (BJ) {
    var Card = (function () {
        function Card(suit, value) {
            this.suit = suit;
            this.value = value;
        }
        Card.simptest = function () {
            var s = BJ.Suit.Diamonds;
            var n = 5;
            var c = new BJ.Card(s, n);
            var canvas = document.getElementById('display');
            var context = canvas.getContext('2d');
            context.font = "bold 20px Arial";
            context.fillText(c.value.toString(), 0, 25);
            context.fillText(" of ", 15, 25);
            context.fillText(BJ.Suit[c.suit].toString(), 55, 25);
        };
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
