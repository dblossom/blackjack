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
		
		constructor(public suit:Suits, public value:number){

		}
		
		/**
		 * I am going to try and not use the methods outlined below
		 * seems redundent to what I have above...
		 */
		
		public isAce(): boolean{
			return (this.value == this.ACE);
		}
		
		public isKing():boolean{
			return (this.value == this.KING);
		}
		
		public isQueen():boolean{
			return (this.value == this.QUEEN);
		}
		
		public isJack():boolean{
			return (this.value == this.JACK);
		}

	}
}