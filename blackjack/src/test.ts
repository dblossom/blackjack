module BJ{
	
	export class Test{
		
		constructor(){}
			
			public static simptest(){
			
			var s = Suit.Hearts;
			var n:number = 13; 
			
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