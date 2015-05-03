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
		
        public ACE:number = 1;
		public JACK:number = 11;
		public QUEEN:number = 12;
		public KING:number = 13;
		
		constructor(public suit:Suits, public value:number){

		}

	}
}