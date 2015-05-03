/**
 * A class that represents a playing card
 *
 * Author: D. Blossom
 */
var BJ;
(function (BJ) {
    var Card = (function () {
        function Card(suit, value) {
            this.suit = suit;
            this.value = value;
            /**
             * variables needed to represent
             * Ace, Jack, Queen, King
             * seems 'const' does not compile?
             */
            this.ACE = 1;
            this.JACK = 11;
            this.QUEEN = 12;
            this.KING = 13;
        }
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
