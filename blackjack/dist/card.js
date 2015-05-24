/**
 * A class that represents a playing card
 *
 * Author: D. Blossom
 */
var BJ;
(function (BJ) {
    var Card = (function () {
        function Card(suit, val) {
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
            // the true value of the card 1 - 13 (A = 1; J = 11; Q = 12; K = 13)
            this.trueValue = 0;
            this.trueValue = val;
        }
        Card.prototype.isAce = function () {
            return (this.trueValue == this.ACE);
        };
        Card.prototype.isKing = function () {
            return (this.trueValue == this.KING);
        };
        Card.prototype.isQueen = function () {
            return (this.trueValue == this.QUEEN);
        };
        Card.prototype.isJack = function () {
            return (this.trueValue == this.JACK);
        };
        Card.prototype.isFace = function () {
            return this.isJack() ||
                this.isQueen() ||
                this.isKing();
        };
        /**
         * converts from its "true" value to BJ value
         */
        Card.prototype.value = function () {
            if (this.isFace()) {
                return 10;
            }
            else {
                return this.trueValue;
            }
        };
        /**
         * converts its true value to its "rank"
         */
        Card.prototype.rank = function () {
            //alert("in rank()");
            if (!this.isFace() && !this.isAce()) {
                return "" + this.trueValue;
            }
            else if (this.isAce()) {
                return "A";
            }
            else if (this.isKing()) {
                return "K";
            }
            else if (this.isQueen()) {
                return "Q";
            }
            else if (this.isJack()) {
                return "J";
            }
            else {
                return "?";
            }
        };
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
