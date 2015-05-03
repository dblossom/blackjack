///<reference path="suit.ts" />
var BJ;
(function (BJ) {
    var Card = (function () {
        function Card(suit, value) {
            this.suit = suit;
            this.value = value;
        }
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
