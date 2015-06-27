/**
 * A class to represent a money system
 */
var BJ;
(function (BJ) {
    var Money = (function () {
        function Money(startingAmt) {
            this.onHand = startingAmt;
        }
        Money.prototype.win = function (amt) {
            return (this.onHand = +amt);
        };
        Money.prototype.lose = function (amt) {
            return (this.onHand = -amt);
        };
        Money.prototype.bankRoll = function () {
            return this.onHand;
        };
        Money.prototype.addMoney = function (amt) {
            this.onHand = +amt;
        };
        return Money;
    })();
    BJ.Money = Money;
})(BJ || (BJ = {}));
