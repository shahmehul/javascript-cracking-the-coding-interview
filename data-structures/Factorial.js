/**
 * Created by mshah on 1/6/17.
 */
'use strict';
// solution 1
var factorial = function(n) {
	let fact = n, i = n;
	while(i > 1){
		fact = fact * (i -1);
		i--;
	}
	return fact;
}

//console.log(factorial(21));



// solution 2 recursive approch
function fact(num){
	if(num<=1){
		return 1;
	}else{
		return num * fact(num-1);
	}
}

var ans = fact(5);
console.log("Ans: "+ans);