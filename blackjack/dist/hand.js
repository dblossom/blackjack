/**
 * A simple class to represent a two card hand
 *
 * Author: D.Blossom
 */
var BJ;
(function (BJ) {
    var Hand = (function () {
        function Hand(cardOne, cardTwo) {
            this.cardOne = cardOne;
            this.cardTwo = cardTwo;
        }
        return Hand;
    })();
    BJ.Hand = Hand;
})(BJ || (BJ = {}));
