/**
 * A class to represent a deck of cards
 *
 * Author: D.Blossom
 */
module BJ{
	
	export class Deck{
		// this is our unshuffled deck
		public unshuffled = new Array<Card>();
		
		constructor(){
		    	
		}
		
		/**
		 * Misleading title, for now - makes an unshuffled deck
		 */
		public unshuffledDeck():void{
			
		    for(var suit in Suits){
		    	// ugh - so, this will loop over both the
		    	// numberic value and the "named" value
		    	// so this will prevent the numeric value
		    	if(isNaN(suit)){
		    	
		            for(var i:number = 1; i < 14; i++){
		        	
		        	    this.unshuffled.push(new Card(suit, i));
		        	
		            }
		        }
		    }
		}
	}
}