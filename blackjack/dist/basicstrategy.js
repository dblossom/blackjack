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
        BasicStrategy.prototype.Advice = function (hand, upCard) {
            var play = null;
            var column = (upCard.isAce()) ? 9 : (upCard.value - 2);
            if (hand.isPair()) {
                play = this.pairLookup(hand, column);
            }
            else if (hand.size() == 2 && this.hasAce(hand)) {
                play = this.aceLookup(hand, column);
            }
            else {
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
        BasicStrategy.prototype.pairLookup = function (hand, upCard) {
            var row = hand.seeCard(0).value;
            if (row > 1 && row < 8) {
                return this.PAIR[row - 2][upCard];
            }
            else if (row === 8 || row === 1) {
                return this.PAIR[8][upCard];
            }
            else if (row === 9) {
                return this.PAIR[6][upCard];
            }
            else {
                return this.PAIR[7][upCard];
            }
        };
        BasicStrategy.prototype.aceLookup = function (hand, column) {
            return BJ.Play.Hit;
        };
        BasicStrategy.prototype.hardLookup = function (hand, column) {
            return BJ.Play.Hit;
        };
        return BasicStrategy;
    })();
    BJ.BasicStrategy = BasicStrategy;
})(BJ || (BJ = {}));
