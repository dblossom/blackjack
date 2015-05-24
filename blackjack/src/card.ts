/**
 * A class that represents a playing card
 *
 * Author: D. Blossom
 */
module BJ{
	
	export class Card{
		
	    /**
		 * variables needed to represent
		 * Ace, Jack, Queen, King
		 * seems 'const' does not compile? 
		 */
		
        private ACE:number = 1;
		private JACK:number = 11;
		private QUEEN:number = 12;
		private KING:number = 13;
		
		// the true value of the card 1 - 13 (A = 1; J = 11; Q = 12; K = 13)
		public trueValue = 0;
		
		constructor(public suit:Suits, val:number){
            this.trueValue = val;
		}
		
		public isAce(): boolean{
			return (this.trueValue == this.ACE);
		}
		
		public isKing():boolean{
			return (this.trueValue == this.KING);
		}
		
		public isQueen():boolean{
			return (this.trueValue == this.QUEEN);
		}
		
		public isJack():boolean{
			return (this.trueValue == this.JACK);
		}
		
		public isFace():boolean{
			return this.isJack()  || 
			       this.isQueen() ||
			       this.isKing();
		}
		
		/**
		 * converts from its "true" value to BJ value
		 */
		public value():number{
			if(this.isFace()){
				return 10;
			}else{
				return this.trueValue;
			}
		}
		
		/**
		 * converts its true value to its "rank"
		 */
		public rank():string{
			//alert("in rank()");
			if(!this.isFace() && !this.isAce()){
				return ""+this.trueValue;
			}else if(this.isAce()){
				return "A";
			}else if(this.isKing()){
				return "K";
			}else if(this.isQueen()){
				return "Q";
			}else if(this.isJack()){
				return "J";
			}else{
				return "?";
			}
		}
	}
}