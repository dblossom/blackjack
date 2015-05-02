

module BJ{
	
	export class Card{
		
		public suit:string;
		public value:string;
		
		constructor(suit:string, value:string){
			this.suit = suit;
			this.value = value;
		}
		
		public static simptest(){
			
			var s:string = "S";
			var n:string = "5"; 
			
			var c = new BJ.Card(s,n);
			
		    var canvas = <HTMLCanvasElement>document.getElementById('display');
		    var context = canvas.getContext('2d');
		    context.font = "bold 20px Arial";
	
            //context.clearRect(0,0,canvas.width, canvas.height);
	        context.fillText(c.suit, 0, 25);
	        context.fillText(c.value, 15, 25);	
		}
		
	}
}