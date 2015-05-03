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
