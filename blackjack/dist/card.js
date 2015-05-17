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
        /**
         * I am going to try and not use the methods outlined below
         * seems redundent to what I have above...
         */
        Card.prototype.isAce = function () {
            return (this.value == this.ACE);
        };
        Card.prototype.isKing = function () {
            return (this.value == this.KING);
        };
        Card.prototype.isQueen = function () {
            return (this.value == this.QUEEN);
        };
        Card.prototype.isJack = function () {
            return (this.value == this.JACK);
        };
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
