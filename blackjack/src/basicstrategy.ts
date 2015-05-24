/**
 * A class to represent a basic strategy
 *
 * (Idea ported from BasicStrategy.java from Senior Capping course)
 *
 * @author: D. Blossom
 */
 
module BJ{
	export class BasicStrategy{
		
		private PAIR: Play[][] = [
		    [Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Hit,Play.Hit,Play.Hit,Play.Hit], //2,2
		    [Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Hit,Play.Hit,Play.Hit,Play.Hit], //3,3
		    [Play.Hit,Play.Hit,Play.Hit,Play.Split,Play.Split,Play.Split,Play.Hit,Play.Hit,Play.Hit,Play.Hit], //4,4
		    [Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Hit,Play.Hit], //5,5
		    [Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], //6,6
		    [Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Hit,Play.Hit,Play.Hit,Play.Hit], //7,7
		    [Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Stand,Play.Split,Play.Split,Play.Stand,Play.Stand], //9,9
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand], //10,10
		    [Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split,Play.Split] //AA,88
		];
		
		private ACE: Play[][] = [
		    [Play.Hit,Play.Hit,Play.Hit,Play.Double,Play.Double,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // A,2
		    [Play.Hit,Play.Hit,Play.Hit,Play.Double,Play.Double,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // A,3
		    [Play.Hit,Play.Hit,Play.Double,Play.Double,Play.Double,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // A,4
		    [Play.Hit,Play.Hit,Play.Double,Play.Double,Play.Double,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // A,5
		    [Play.Hit,Play.Double,Play.Double,Play.Double,Play.Double,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // A,6
		    [Play.Stand,Play.Double,Play.Double,Play.Double,Play.Double,Play.Stand,Play.Stand,Play.Hit,Play.Hit], // A,7
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand] // A, (8-10)
		];
		
		private HARD: Play[][] = [
		    [Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 5-8
		    [Play.Hit,Play.Double,Play.Double,Play.Double,Play.Double,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 9
		    [Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Hit,Play.Hit], // 10
		    [Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Double,Play.Hit], // 11
		    [Play.Hit,Play.Hit,Play.Stand,Play.Stand,Play.Stand,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 12
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 13
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 14
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 15
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Hit,Play.Hit,Play.Hit,Play.Hit,Play.Hit], // 16
		    [Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand,Play.Stand] // 17+
		];
		
		constructor(){}
			
		
		public advice(hand: Hand, upCard: Card): Play{
			
			var play: Play = null;
			
		    var column:number = (upCard.isAce()) ? 9 : (upCard.value() - 2); 
		    
		    if(hand.isPair()){
		    	//alert("isPair()");
		    	play = this.pairLookup(hand, column);
		    }else if(hand.size() == 2 && this.hasAce(hand)){
		    	//alert("isAce()");
		    	play = this.aceLookup(hand, column);
		    }else{
		    	//alert("isHard()");
		    	play = this.hardLookup(hand, column);
		    }
			return play;
		}
		
		private hasAce(hand:Hand):boolean{
			for(var i:number = 0; i < hand.size(); i++){
				if(hand.seeCard(i).isAce()){
					return true;
				}
			}
			return false;
		}
		
		private pairLookup(hand:Hand, column:number):Play{
			
			var row = hand.seeCard(0).value();
			
			if(row > 1 && row < 8){
				return this.PAIR[row-2][column];
			}else if(row === 8 || row === 1){
				return this.PAIR[8][column];
			}else if (row === 9){
				return this.PAIR[6][column];
			}else{
				return this.PAIR[7][column];
			}
		}
		
		private aceLookup(hand:Hand, column:number):Play{
			
			// we want the "non-ace" card for the lookup table
			var row = hand.seeCard(0).isAce() ? hand.seeCard(1).value() : hand.seeCard(0).value();
			
			if(row > 1 && row < 8){
				return this.ACE[row-2][column];
			}else{
				return this.ACE[6][column];
			}
		}
		
		private hardLookup(hand:Hand, column:number):Play{
			
			var row = hand.value();
			
			if(row > 4 && row < 9){
				return this.HARD[0][column];
			}else if(row > 8 && row < 17){
				return this.HARD[row - 8][column];
			}else{
				return this.HARD[9][column];
			}
		}
	    
	}
}