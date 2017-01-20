/**
 * Created by mshah on 1/10/17.
 */

function isPermutation(s, t) {

	var sLength = s.length;
	var tLength = t.length;

	if (sLength !== tLength) {
		return false;
	}

	var s_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);

	for (var i = 0; i < sLength; i++) {
		s_array[s[i].charCodeAt(0)]++;
	}

	for (var i = 0; i < tLength; i++) {
		if (--s_array[t[i].charCodeAt(0)] < 0){
			return false;
		}
	}
	return true;
}


function permutator(str) {
	var inputArr = str.split('');
	var results = [];

	function permute(arr, memo) {
		var cur, memo = memo || [];

		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
				results.push(memo.concat(cur));
			}
				permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);
}

console.log(isPermutation('abc','cba'));
console.log(permutator('abc'));
