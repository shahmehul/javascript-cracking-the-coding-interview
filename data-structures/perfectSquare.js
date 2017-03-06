/**
 * Created by mshah on 3/4/17.
 * Write a function that takes an integer as input and returns true if it's a perfect square else false.
 ex: Perfect squares = 16 (4x4), 25 (5x5) etc
 */

function isPerfectSquare(num){
	"use strict";
	if(num < 1){
		return false;
	}
	for(let i=1;i*i<=num;i++){
		if(i*i === num){
			return true;
		}
	}
	return false;
}

console.log(isPerfectSquare(15));