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
	    
		
	}
}