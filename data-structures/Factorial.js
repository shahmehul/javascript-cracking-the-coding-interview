/**
 * Created by mshah on 1/6/17.
 */
'use strict';
var factorial = function(n) {
	let fact = n, i = n;
	while(i > 1){
		fact = fact * (i -1);
		i--;
	}
	return fact;
}

console.log(factorial(21));