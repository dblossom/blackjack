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
            /**
             * variables needed to represent
             * Ace, Jack, Queen, King
             * seems 'const' does not compile?
             */
            this.ACE = 1;
            this.JACK = 11;
            this.QUEEN = 12;
            this.KING = 13;
            this.val = 0;
            this.val = value;
        }
        Card.prototype.isAce = function () {
            return (this.val == this.ACE);
        };
        Card.prototype.isKing = function () {
            return (this.val == this.KING);
        };
        Card.prototype.isQueen = function () {
            return (this.val == this.QUEEN);
        };
        Card.prototype.isJack = function () {
            return (this.val == this.JACK);
        };
        Card.prototype.isFace = function () {
            return this.isJack() ||
                this.isQueen() ||
                this.isKing();
        };
        Card.prototype.value = function () {
            if (this.isFace()) {
                return 10;
            }
            else {
                return this.val;
            }
        };
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
