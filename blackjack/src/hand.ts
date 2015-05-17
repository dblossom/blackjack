/**
 * A simple class to represent a two card hand
 *
 * Author: D.Blossom
 */
module BJ{
	
	export class Hand{
		
		private handArray: Array<Card>;
		
		constructor(cardOne:Card, cardTwo:Card){
		    this.handArray = new Array<Card>();
		    this.handArray.push(cardOne);
		    this.handArray.push(cardTwo);
		}
		
		public isPair(): boolean{
			
			if((this.handArray.length == 2) && (this.handArray[0].value == this.handArray[1].value)){
				return true;
			}
			return false;
		}
		
		public seeCard(location:number):Card{
			return this.handArray[location];
		}
			
		public size(): number{
			return this.handArray.length;
		}
		
	}
}