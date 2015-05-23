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
        Deck.prototype.shuffleDeck = function () {
            // the shuffled array to return
            this.shuffled = [];
            // loop over the unshuffled array randomly removing elements
            while (this.unshuffled.length > 0) {
                // our random number / card to pull
                var randomCard = Math.floor(Math.random() * this.unshuffled.length);
                // the card we just removed from the array
                var card = this.unshuffled.splice(randomCard, 1);
                // put the new card in the array - note to self here ...
                // everything in javascript is an object, as such, card gets
                // returned as an array of elements
                this.shuffled.push(new BJ.Card(card[0].suit, card[0].value()));
            }
        };
        Deck.prototype.deal = function () {
            if (this.shuffled.length === 0) {
                if (this.unshuffled.length != 0) {
                    return this.unshuffled.shift();
                }
                return null;
            }
            return this.shuffled.shift();
        };
        return Deck;
    })();
    BJ.Deck = Deck;
})(BJ || (BJ = {}));
