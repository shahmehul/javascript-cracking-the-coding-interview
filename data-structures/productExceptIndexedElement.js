/**
 * Created by mshah on 2/20/17.
 * You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.
 * input :   [1, 7, 3, 4]
 * output:   [84, 12, 28, 21]
 */
'use strict'

function get_products_of_all_ints_except_at_index_dp(arr){
	var front = [];
	front[0] = 1;
	for(var i = 1; i < arr.length; i++){
		front[i] = front[i-1] * arr[i-1];
	}

	//build back
	var temp = 1;
	for(var i = arr.length-1; i >= 0; i--){
		front[i] = front[i]*temp;
		temp = temp*arr[i];
	}

	return front;
}

console.log(get_products_of_all_ints_except_at_index_dp([1, 7, 3, 4]));
