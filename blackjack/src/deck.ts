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
		    this.unshuffledDeck();  	
		}
		
		/**
		 * Creates an unshuffled deck
		 */
		private unshuffledDeck():void{
			
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
		
		/**
		 * Creates a shuffled deck
		 *
		 * @param toShuffle - the unshuffled card array
		 */
		 public shuffleDeck(toShuffle: Array<Card>): Array<Card>{
		     // the shuffled array to return
		     var shuffled = new Array<Card>();
		     
		     // loop over the unshuffled array randomly removing elements
		     while(toShuffle.length > 0){
		     	// our random number / card to pull
		     	var randomCard = Math.floor(Math.random() * toShuffle.length);
		     	// the card we just removed from the array
		     	var card = toShuffle.splice(randomCard, 1);
		     	// put the new card in the array - note to self here ...
		     	// everything in javascript is an object, as such, card gets
		     	// returned as an array of elements
		     	shuffled.push(new Card(card[0].suit, card[0].value));
		     }   
		     // the returned shuffled array
		     return shuffled;	
		 }
	}
}