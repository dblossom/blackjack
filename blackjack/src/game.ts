module BJ{
	export class Game{
		
		/**
		 * All global variables for the game will be here
		 */
		public deck;
		public shuffled;
		public phand;
		public dhand;
		public canvas;
		public context;
		private playerCardX;
		private playerCardY;
		private dealerCardX;
		private dealerCardY;
		private yInc;
		private strategy;
		private upcard;
		// 0 is dealer, 1 is player
		private turn;
		private cardBack;
		
		constructor(){}
		
		private init(){
			// players hand
			this.phand = new Hand();
			// dealers hand
			this.dhand = new Hand();
			// our strategy
			this.strategy = new BasicStrategy();
			this.turn = 0; // dealers turn
			// cardlocations
			this.playerCardX = 160;
			this.playerCardY = 380;
			this.dealerCardX = 160;
			this.dealerCardY = 20;
			this.yInc = 20;
		}
		
		/**
		 * This is the entry point, or "load" for the game
		 * set up and variables or whatever here
		 */
		public load(){
			// should load be in a different class, because I am about to call
			// this glass - I guess we can just consider this main and static like?
			// anywho - this will load any variables we need "globally"
			this.init();
			
			// Load up the canvas clear any previous stuff.
			this.canvas = <HTMLCanvasElement>document.getElementById('display');
		    this.context = this.canvas.getContext('2d');
		    this.context.font = "bold 12px Arial";
		    this.context.clearRect(0,0,500,500);

		    // put any labels and stuff on the canvas
            this.context.fillText("Dealer Stands on ANY 17",150, 140);
            this.redrawPlayerScore();

		}
		
		/**
		 * This will deal the inital cards - 1 dealer card will be face down
		 */
		public dealButton(btn){
			
		}
		
		/**
		 * This will keep the score updated
		 */
		private redrawPlayerScore(){
			this.context.fillText("Players score: " + this.phand.value(),2,490);
		}
		
		/**
		 * This will keep the strategy updated
		 */
		private redrawStrategy(){
			
		}
		
		/**
		 * This will load a card image and print to screen
		 */
		private loadCardImage(){
			
			
			
		}
		
	}
}