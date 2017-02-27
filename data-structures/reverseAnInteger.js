/**
 * Created by mshah on 2/25/17.
 */
'use strict'
var reverse = function(x) {
	let resultArr = [],negative = false,reminder;
	if(x < 0){
		negative = true;
		x = x * -1;
	} if(x > 0 && x < 10) {
		return x;
	} if(x == 10) {
		return 1;
	} if (x == -10) {
		return -1;
	}

	while (x > 10) {
		reminder = x % 10;
		resultArr.push(reminder);
		x = Math.floor(x / 10);
	}
	if(x > 0 && x < 10){
		resultArr.push(x);
	}
	x = resultArr.join('');
	if(negative){
		x = x * -1;
	}
	return x;
};

console.log(reverse(10));
