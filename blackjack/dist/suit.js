var BJ;
(function (BJ) {
    (function (Suit) {
        Suit[Suit["Diamonds"] = 0] = "Diamonds";
        Suit[Suit["Hearts"] = 1] = "Hearts";
        Suit[Suit["Spades"] = 2] = "Spades";
        Suit[Suit["Clubs"] = 3] = "Clubs";
    })(BJ.Suit || (BJ.Suit = {}));
    var Suit = BJ.Suit;
})(BJ || (BJ = {}));
