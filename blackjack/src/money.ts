/**
 * A class to represent a money system
 */
module BJ{
	export class Money{
		private onHand;
		constructor(startingAmt:number){
			this.onHand = startingAmt;
		}
		
		public win(amt:number):number{
			return (this.onHand =+ amt);
		}
		
		public lose(amt:number):number{
			return (this.onHand =- amt);
		}
		
		public bankRoll():number{
			return this.onHand;
		}
		
		public addMoney(amt:number){
			this.onHand =+ amt;
		}
		
	}
}