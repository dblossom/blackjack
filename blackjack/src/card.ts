///<reference path="suit.ts" />

module BJ{
	
	export class Card{
		
		constructor(public suit:Suit, public value:number){

		}
		
		public static simptest(){
			
			var s = Suit.Diamonds;
			var n:number = 5; 
			
			var c = new BJ.Card(s,n);
			
		    var canvas = <HTMLCanvasElement>document.getElementById('display');
		    var context = canvas.getContext('2d');
		    context.font = "bold 20px Arial";
		    
		    context.fillText(c.value.toString(), 0, 25);
	        
	        context.fillText(" of ", 15, 25);
	        
	        context.fillText(Suit[c.suit].toString(), 55, 25);
	
		}
	}
}