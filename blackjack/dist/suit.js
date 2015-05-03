/**
 * An enum to represent a playing cards suit
 *
 * Author: D. Blossom
 */
var BJ;
(function (BJ) {
    (function (Suits) {
        Suits[Suits["Diamonds"] = 0] = "Diamonds";
        Suits[Suits["Hearts"] = 1] = "Hearts";
        Suits[Suits["Spades"] = 2] = "Spades";
        Suits[Suits["Clubs"] = 3] = "Clubs";
    })(BJ.Suits || (BJ.Suits = {}));
    var Suits = BJ.Suits;
})(BJ || (BJ = {}));
