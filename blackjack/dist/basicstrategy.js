/**
 * A class to represent a basic strategy
 *
 * (Idea ported from BasicStrategy.java from Senior Capping course)
 *
 * @author: D. Blossom
 */
var BJ;
(function (BJ) {
    var BasicStrategy = (function () {
        function BasicStrategy() {
            this.PAIR = [
                [BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Stand, BJ.Play.Split, BJ.Play.Split, BJ.Play.Stand, BJ.Play.Stand],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand],
                [BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split, BJ.Play.Split] //AA,88
            ];
            this.ACE = [
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand] // A, (8-10)
            ];
            this.HARD = [
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Double, BJ.Play.Hit],
                [BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit, BJ.Play.Hit],
                [BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand, BJ.Play.Stand] // 17+
            ];
        }
        BasicStrategy.prototype.advice = function (hand, upCard) {
            var play = null;
            var column = (upCard.isAce()) ? 9 : (upCard.value() - 2);
            if (hand.isPair()) {
                //alert("isPair()");
                play = this.pairLookup(hand, column);
            }
            else if (hand.size() == 2 && this.hasAce(hand)) {
                //alert("isAce()");
                play = this.aceLookup(hand, column);
            }
            else {
                //alert("isHard()");
                play = this.hardLookup(hand, column);
            }
            return play;
        };
        BasicStrategy.prototype.hasAce = function (hand) {
            for (var i = 0; i < hand.size(); i++) {
                if (hand.seeCard(i).isAce()) {
                    return true;
                }
            }
            return false;
        };
        BasicStrategy.prototype.pairLookup = function (hand, column) {
            var row = hand.seeCard(0).value();
            if (row > 1 && row < 8) {
                return this.PAIR[row - 2][column];
            }
            else if (row === 8 || row === 1) {
                return this.PAIR[8][column];
            }
            else if (row === 9) {
                return this.PAIR[6][column];
            }
            else {
                return this.PAIR[7][column];
            }
        };
        BasicStrategy.prototype.aceLookup = function (hand, column) {
            // we want the "non-ace" card for the lookup table
            var row = hand.seeCard(0).isAce() ? hand.seeCard(1).value() : hand.seeCard(0).value();
            if (row > 1 && row < 8) {
                return this.ACE[row - 2][column];
            }
            else {
                return this.ACE[6][column];
            }
        };
        BasicStrategy.prototype.hardLookup = function (hand, column) {
            var row = hand.value();
            if (row > 4 && row < 9) {
                return this.HARD[0][column];
            }
            else if (row > 8 && row < 17) {
                return this.HARD[row - 8][column];
            }
            else {
                return this.HARD[9][column];
            }
        };
        return BasicStrategy;
    })();
    BJ.BasicStrategy = BasicStrategy;
})(BJ || (BJ = {}));
