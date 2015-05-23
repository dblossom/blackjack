/**
 * A simple class to represent a two card hand
 *
 * Author: D.Blossom
 */
var BJ;
(function (BJ) {
    var Hand = (function () {
        function Hand() {
            this.handArray = [];
            /**
             * soft value element 0
             * hard value element 1
             */
            this.values = [0, 0];
        }
        Hand.prototype.isPair = function () {
            if ((this.handArray.length == 2) && (this.handArray[0].value == this.handArray[1].value)) {
                return true;
            }
            return false;
        };
        Hand.prototype.isBroke = function () {
            return this.value() > 21;
        };
        Hand.prototype.isBlackjack = function () {
            if (this.size() != 2) {
                return false;
            }
            if (!this.handArray[0].isAce || !this.handArray[1].isAce) {
                return false;
            }
            if (this.values[0] === 21) {
                return true;
            }
            else {
                return false;
            }
        };
        Hand.prototype.hit = function (card) {
            this.handArray.push(card);
            this.addValue(card);
        };
        Hand.prototype.addValue = function (card) {
            this.values[0] += card.value();
            this.values[1] += card.value();
            if (card.isAce() && (this.values[0] + 10) < 22) {
                this.values[0] += 10;
            }
        };
        Hand.prototype.getSoftValue = function () {
            return this.values[0];
        };
        Hand.prototype.getHardValue = function () {
            return this.values[1];
        };
        Hand.prototype.value = function () {
            return this.values[0] < 22 ? this.values[0] : this.values[1];
        };
        Hand.prototype.seeCard = function (location) {
            return this.handArray[location];
        };
        Hand.prototype.size = function () {
            return this.handArray.length;
        };
        return Hand;
    })();
    BJ.Hand = Hand;
})(BJ || (BJ = {}));
