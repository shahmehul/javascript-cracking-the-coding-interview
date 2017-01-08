/**
 * Created by mshah on 1/6/17.
 */
'use strict';
var factorial = function(n) {
	//var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);

	let fact = n, i = n;
	while(i > 1){
		fact = fact * (i -1);
		i--;
	}
	return fact;
}

console.log(factorial(21));