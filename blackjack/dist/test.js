var BJ;
(function (BJ) {
    var Test = (function () {
        function Test() {
        }
        Test.prototype.load = function () {
            this.deck = new BJ.Deck();
            this.deck.shuffleDeck();
        };
        Test.prototype.dealCard = function (btn) {
            var card = this.deck.deal();
            if (typeof card === 'undefined') {
            }
            var canvas = document.getElementById('display');
            var context = canvas.getContext('2d');
            context.font = "bold 20px Arial";
            context.clearRect(0, 0, 500, 50);
            context.fillText(card.value().toString(), 0, 25);
            context.fillText("  of  ", 15, 25);
            context.fillText(card.suit.toString(), 55, 25);
        };
        return Test;
    })();
    BJ.Test = Test;
})(BJ || (BJ = {}));
