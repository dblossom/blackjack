/**
 * A class to represent a deck of cards
 *
 * Author: D.Blossom
 */
var BJ;
(function (BJ) {
    var Deck = (function () {
        function Deck() {
            // this is our unshuffled deck
            this.unshuffledDeck = new Array();
        }
        /**
         * Misleading title, for now - makes an unshuffled deck
         */
        Deck.prototype.buildDeck = function () {
            for (var suit in BJ.Suits) {
                // ugh - so, this will loop over both the
                // numberic value and the "named" value
                // so this will prevent the numeric value
                if (isNaN(suit)) {
                    for (var i = 1; i < 14; i++) {
                        this.unshuffledDeck.push(new BJ.Card(suit, i));
                    }
                }
            }
        };
        return Deck;
    })();
    BJ.Deck = Deck;
})(BJ || (BJ = {}));
