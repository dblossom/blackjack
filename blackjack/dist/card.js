var BJ;
(function (BJ) {
    var Card = (function () {
        function Card(suit, value) {
            this.suit = suit;
            this.value = value;
        }
        Card.simptest = function () {
            var s = "S";
            var n = "5";
            var c = new BJ.Card(s, n);
            var canvas = document.getElementById('display');
            var context = canvas.getContext('2d');
            context.font = "bold 20px Arial";
            //context.clearRect(0,0,canvas.width, canvas.height);
            context.fillText(c.suit, 0, 25);
            context.fillText(c.value, 15, 25);
        };
        return Card;
    })();
    BJ.Card = Card;
})(BJ || (BJ = {}));
