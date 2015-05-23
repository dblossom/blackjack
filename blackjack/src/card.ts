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
		private val = 0;
		
		constructor(public suit:Suits, value:number){
            this.val = value;
		}
		
		public isAce(): boolean{
			return (this.val == this.ACE);
		}
		
		public isKing():boolean{
			return (this.val == this.KING);
		}
		
		public isQueen():boolean{
			return (this.val == this.QUEEN);
		}
		
		public isJack():boolean{
			return (this.val == this.JACK);
		}
		
		public isFace():boolean{
			return this.isJack()  || 
			       this.isQueen() ||
			       this.isKing();
		}
		
		public value():number{
			if(this.isFace()){
				return 10;
			}else{
				return this.val;
			}
		}
		
	}
}