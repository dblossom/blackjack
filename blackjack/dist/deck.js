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
            this.unshuffled = new Array();
            this.unshuffledDeck();
        }
        /**
         * Creates an unshuffled deck
         */
        Deck.prototype.unshuffledDeck = function () {
            for (var suit in BJ.Suits) {
                // ugh - so, this will loop over both the
                // numberic value and the "named" value
                // so this will prevent the numeric value
                if (isNaN(suit)) {
                    for (var i = 1; i < 14; i++) {
                        this.unshuffled.push(new BJ.Card(suit, i));
                    }
                }
            }
        };
        /**
         * Creates a shuffled deck
         *
         * @param toShuffle - the unshuffled card array
         */
        Deck.prototype.shuffleDeck = function (toShuffle) {
            // the shuffled array to return
            var shuffled = new Array();
            // loop over the unshuffled array randomly removing elements
            while (toShuffle.length > 0) {
                // our random number / card to pull
                var randomCard = Math.floor(Math.random() * toShuffle.length);
                // the card we just removed from the array
                var card = toShuffle.splice(randomCard, 1);
                // put the new card in the array - note to self here ...
                // everything in javascript is an object, as such, card gets
                // returned as an array of elements
                shuffled.push(new BJ.Card(card[0].suit, card[0].value));
            }
            // the returned shuffled array
            return shuffled;
        };
        return Deck;
    })();
    BJ.Deck = Deck;
})(BJ || (BJ = {}));
