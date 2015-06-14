/**
 * A simple class to represent a two card hand
 *
 * Author: D.Blossom
 */
module BJ{
	
	export class Hand{
		
		private handArray: Array<Card> = [];
		
		/**
		 * soft value element 0
		 * hard value element 1
		 */
		private values: number[] = [0,0];
		
		constructor(){
		}
		
		public isPair(): boolean{
			
			if((this.handArray.length == 2) && (this.handArray[0].value() === this.handArray[1].value())){
				return true;
			}
			return false;
		}
		
		public isBroke(): boolean{
			return this.value() > 21;
		}
		
		public isBlackjack(): boolean{
			if(this.size() != 2){ return false; }
			if(!this.handArray[0].isAce || !this.handArray[1].isAce){
				return false;
			}
			if(this.values[0] === 21){
				return true;
			}else{
				return false;
			}
		}
		
		public hit(card:Card):void{
			this.handArray.push(card);
			this.addValue(card);
		}
		
		private addValue(card: Card){
			this.values[0] += card.value();
			this.values[1] += card.value();
			
			if(card.isAce() && (this.values[0] + 10) < 22){
				this.values[0] += 10;
			}
		}
		
		public getSoftValue():number{
			return this.values[0];
		}
		
		public getHardValue():number{
			return this.values[1];
		}
		
		public value(): number{
			return this.values[0] < 22 ? this.values[0] : this.values[1];
		}
		
		public seeCard(location:number):Card{
			return this.handArray[location];
		}
			
		public size(): number{
			return this.handArray.length;
		}
	}
}