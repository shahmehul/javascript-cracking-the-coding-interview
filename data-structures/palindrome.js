/**
 * Created by mshah on 1/10/17.
 */
// Checks if a string is a permutation of a palindrome
// Solution #4 from the book. Assumes ascii character set
// @param {String} str - Word or phrase
// @retuns {Boolean} - true if a permutation of palindrome exists, false if it does not
//Input: Tact Coa
//Output: True (permutations: "taco cat", "atco eta", etc.)
'use strict'
function palindromePermutation(str){
	var distinct = 0;
	var s_array = [];
	s_array.length = 256;
	s_array.fill(0);

	str = str.toLowerCase();
	for(var i = 0; i < str.length; i++){
		if(str[i] == ' '){
			continue;
		}
		s_array[str.charCodeAt(i)]++;
		if(s_array[str.charCodeAt(i)] % 2){
			distinct++;
		}else{
			distinct--;
		}
	}
	return (distinct < 2);
}


function oneAway(first, second) {

	var skip = true;
	var s1 = first.length > second.length ? first : second;
	var s2 = first.length > second.length ? second : first;
	var diff = s1.length - s2.length;
	var i1 = 0,
		i2 = 0;

	if (diff > 1) {
		return false;
	}
	while (i1 < s2.length) {
		var i2 = i1 + (!skip ? diff : 0);
		if (s1.charCodeAt(i2) !== s2.charCodeAt(i1)) {
			if (skip) {
				i1 = i1 - diff;
				skip = false;
			} else {
				return false;
			}
		}
		i1++;
	}
	return true;
}
/* find the divisior first for example 12321 the divisor will be 10000 that is done is first while loop.
*  now divide the number by devisor and get left value.
*  use number modulo by 10 and get the right value.
*  if left and right are not same then exit.
*  if they are same then continue get new number without left and right. get new divisor devide by 100
* */

function isNumberAPalindrome(x) {
	if (x < 0) return false;
	let div = 1;
	while (x / div >= 10) {
		div *= 10;
	}
	while (x != 0) {
		let l = Math.floor(x / div);
		let r = x % 10;
		if (l != r) return false;
		x = (x % div) / 10;
		x = Math.floor(x);
		div /= 100;
	}
	return true;
}

console.log(isNumberAPalindrome(12321));

//console.log(oneAway('ake', 'bake'));

//console.log(palindromePermutation('mad    a   m '));