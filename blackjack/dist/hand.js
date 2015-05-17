/**
 * A simple class to represent a two card hand
 *
 * Author: D.Blossom
 */
var BJ;
(function (BJ) {
    var Hand = (function () {
        function Hand(cardOne, cardTwo) {
            this.handArray = new Array();
            this.handArray.push(cardOne);
            this.handArray.push(cardTwo);
        }
        Hand.prototype.isPair = function () {
            if ((this.handArray.length == 2) && (this.handArray[0].value == this.handArray[1].value)) {
                return true;
            }
            return false;
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
