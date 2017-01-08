/**
 * Created by mshah on 1/6/17.
 */
var isUnique = function(str) {
	//var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
	var char_set = {};
	for (var i = 0; i < str.length; i++) {
		if(char_set[str[i]]){
			return false;
		}else {
			char_set[str[i]] = true;
		}
	}
	return true;
}

console.log(isUnique('abcdefghijklmnopqrstuvu'));