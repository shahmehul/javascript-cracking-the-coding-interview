/**
 * Created by mshah on 1/10/17.
 */
// Generate URL freindly strings of a specified length
// Solution #3 from the book.
// @param {String} s - Standard string with potential trailing whitespace
// @param {Number} l - The "true" length of the string
// @retuns {String} - A URL freindly string of the specified length
function URLify(s, l) {
	var newString = '';
	l = s.length;
	for (var i = 0; i < l; i++) {
		if (s.charAt(i) === ' '){
			newString += '%20';
		}else{
			newString += s.charAt(i);
		}
	}
	return newString;
}

console.log(URLify('Mr John Smith  '))