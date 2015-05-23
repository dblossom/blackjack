module BJ{
	
	export class Test{
		
		public deck;
		public shuffled;
		
		constructor(){}
			
		public load(){
			this.deck = new Deck();
            this.deck.shuffleDeck();
		}
		
		public dealCard(btn){
			
		    var card = this.deck.deal();
		    
		    if(typeof card === 'undefined'){
		    //	this.deck = new Deck();
		    //	this.shuffled = this.deck.shuffleDeck();
		    //	card = this.shuffled.pop();
		    }
		    
		    var canvas = <HTMLCanvasElement>document.getElementById('display');
		    var context = canvas.getContext('2d');
		    context.font = "bold 20px Arial";
		    context.clearRect(0,0,500,50);
		    context.fillText(card.value().toString(), 0, 25);
	        context.fillText("  of  ", 15, 25);
	        context.fillText(card.suit.toString(), 55, 25);
		    
		}
	}
}