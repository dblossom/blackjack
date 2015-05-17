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
        return BasicStrategy;
    })();
    BJ.BasicStrategy = BasicStrategy;
})(BJ || (BJ = {}));
