/**
 * Created by mshah on 4/22/17.
 */
"use strict";
function findSqrt(num){
	if(num == 0 || num == 1)
		return num;

	var i = 1;
	var result = 1;
	while(result <= num)
	{
		if(result == num)
			return i;

		++i;
		result = i * i;
	}
	return i-1;
}

console.log(findSqrtBinary(82));