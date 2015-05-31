var BJ;
(function (BJ) {
    var Test = (function () {
        function Test() {
        }
        Test.prototype.load = function () {
            // gets the canvas, sets font, clears remaining
            this.canvas = document.getElementById('display');
            this.context = this.canvas.getContext('2d');
            this.context.font = "bold 12px Arial";
            this.context.clearRect(0, 0, 500, 500);
            var img = new Image();
            var img1 = new Image();
            img.onload = function () {
                Test.prototype.context.drawImage(img, 160, 380);
                Test.prototype.context.drawImage(img1, 180, 380);
                Test.prototype.context.drawImage(img1, 200, 380);
                Test.prototype.context.drawImage(img1, 220, 380);
                Test.prototype.context.drawImage(img1, 240, 380);
                Test.prototype.context.drawImage(img1, 260, 380);
                Test.prototype.context.drawImage(img1, 280, 380);
            };
            img.src = "images/cards/front/10C.png";
            img1.src = "images/cards/front/AC.png";
            var imgA = new Image();
            imgA.onload = function () {
                Test.prototype.context.drawImage(imgA, 50, 50);
            };
            imgA.src = "images/cards/front/2C.png";
            var img2 = new Image();
            var img3 = new Image();
            img2.onload = function () {
                Test.prototype.context.drawImage(img2, 160, 20);
                Test.prototype.context.drawImage(img3, 180, 20);
                Test.prototype.context.drawImage(img3, 200, 20);
                Test.prototype.context.drawImage(img3, 220, 20);
                Test.prototype.context.drawImage(img2, 240, 20);
                Test.prototype.context.drawImage(img2, 260, 20);
                Test.prototype.context.drawImage(img2, 280, 20);
            };
            img2.src = "images/cards/front/8H.png";
            img3.src = "images/cards/front/9D.png";
            this.context.fillText("Dealer Stands on ANY 17", 150, 140);
            this.bs = new BJ.BasicStrategy();
            this.control = 0; // dealer is dealing - his control
        };
        Test.prototype.dealCard = function (btn) {
            this.deck = new BJ.Deck();
            this.deck.shuffleDeck();
            var pcard1 = this.deck.deal();
            var hole = this.deck.deal();
            var pcard2 = this.deck.deal();
            this.upcard = this.deck.deal();
            this.control = 1; // cards are dealt, players control
            this.phand = new BJ.Hand();
            this.phand.hit(pcard1);
            this.phand.hit(pcard2);
            this.dhand = new BJ.Hand();
            this.dhand.hit(hole);
            this.dhand.hit(this.upcard);
            this.context.clearRect(0, 0, 500, 500);
            // the dealers upcard
            this.context.fillText(this.upcard.rank(), 0, 25);
            this.context.fillText("  of  ", 15, 25);
            this.context.fillText(this.upcard.suit.toString(), 55, 25);
            this.context.fillText("       <--- dealers up card!", 150, 25);
            // the dealers hole card
            this.context.fillText(hole.rank(), 0, 50);
            this.context.fillText("  of  ", 15, 50);
            this.context.fillText(hole.suit.toString(), 55, 50);
            this.context.fillText("       <--- dealers hole card!", 150, 50);
            this.lastCardLocationDealer = 50;
            // pcard1
            this.context.fillText(pcard1.rank(), 0, 200);
            this.context.fillText("  of  ", 15, 200);
            this.context.fillText(pcard1.suit.toString(), 55, 200);
            this.context.fillText("       <--- player card 1!", 150, 200);
            this.lastCardLocation = 200;
            // pcard2
            this.context.fillText(pcard2.rank(), 0, 225);
            this.context.fillText("  of  ", 15, 225);
            this.context.fillText(pcard2.suit.toString(), 55, 225);
            this.context.fillText("       <--- player card 2!", 150, 225);
            this.lastCardLocation = 225;
            var bs = new BJ.BasicStrategy();
            // advice
            this.context.fillText("The Player should..." + BJ.Play[this.bs.advice(this.phand, this.upcard)].toString(), 0, 480);
        };
        Test.prototype.hitCard = function (btn) {
            if (this.control === 0) {
            }
            else {
                var pcard = this.deck.deal();
                this.phand.hit(pcard);
                this.lastCardLocation = this.lastCardLocation + 25;
                this.context.fillText(pcard.rank(), 0, this.lastCardLocation);
                this.context.fillText("  of  ", 15, this.lastCardLocation);
                this.context.fillText(pcard.suit.toString(), 55, this.lastCardLocation);
                this.context.fillText("       <--- player card " + this.phand.size() + "!", 150, this.lastCardLocation);
                this.context.clearRect(0, 450, 500, 500);
                if (this.phand.isBroke()) {
                    this.context.fillText("You bust...", 0, 480);
                    this.control = 0;
                    this.endGame();
                }
                else {
                    this.context.fillText("The Player should..." + BJ.Play[this.bs.advice(this.phand, this.upcard)].toString(), 0, 480);
                }
            }
        };
        Test.prototype.standButton = function (btn) {
            this.control = 0; // give control to dealer
            this.dealersPlay();
        };
        Test.prototype.dealersPlay = function () {
            if (this.control != 0) {
            }
            else {
                while (!this.dhand.isBroke() && this.dhand.value() < 18) {
                    var dcard = this.deck.deal();
                    this.dhand.hit(dcard);
                    this.lastCardLocationDealer = this.lastCardLocationDealer + 25;
                    this.context.fillText(dcard.rank(), 0, this.lastCardLocationDealer);
                    this.context.fillText("  of  ", 15, this.lastCardLocationDealer);
                    this.context.fillText(dcard.suit.toString(), 55, this.lastCardLocationDealer);
                    this.context.fillText("       <--- dealers card " + this.dhand.size() + "!", 150, this.lastCardLocationDealer);
                }
            }
            this.endGame();
        };
        Test.prototype.endGame = function () {
            if (this.dhand.isBroke() && !this.phand.isBroke()) {
                this.context.fillText("You win!", 0, 450);
            }
            else if (this.phand.isBroke()) {
                this.context.fillText("You lose!", 0, 450);
            }
            else if (this.phand.value() > this.dhand.value()) {
                this.context.fillText("You win!", 0, 450);
            }
            else {
                this.context.fillText("You lose!", 0, 450);
            }
            // vars to end game
        };
        Test.prototype.doubleButton = function (btn) {
            var img = new Image();
            img.onload = function () {
                Test.prototype.context.drawImage(img, 160, 20);
                Test.prototype.context.drawImage(img, 180, 20);
                Test.prototype.context.drawImage(img, 200, 20);
                Test.prototype.context.drawImage(img, 220, 20);
                Test.prototype.context.drawImage(img, 240, 20);
                Test.prototype.context.drawImage(img, 260, 20);
                Test.prototype.context.drawImage(img, 280, 20);
            };
            img.src = "images/cards/front/7S.png";
        };
        return Test;
    })();
    BJ.Test = Test;
})(BJ || (BJ = {}));
