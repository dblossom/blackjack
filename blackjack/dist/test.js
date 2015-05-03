var BJ;
(function (BJ) {
    var Test = (function () {
        function Test() {
        }
        Test.simptest = function () {
            var s = BJ.Suit.Hearts;
            var n = 13;
            var c = new BJ.Card(s, n);
            var canvas = document.getElementById('display');
            var context = canvas.getContext('2d');
            context.font = "bold 20px Arial";
            context.fillText(c.value.toString(), 0, 25);
            context.fillText(" of ", 15, 25);
            context.fillText(BJ.Suit[c.suit].toString(), 55, 25);
        };
        return Test;
    })();
    BJ.Test = Test;
})(BJ || (BJ = {}));