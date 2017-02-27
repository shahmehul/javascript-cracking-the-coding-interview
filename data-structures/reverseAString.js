/**
 * Created by mshah on 2/25/17.
 * Input : e.g this is blue sky
 * Output: sky blue is this
 */

function reverseAString(str){
	var strArr = str.split(' ');
	strArr.reverse();
	str = strArr.join(' ');
	console.log(str);
}

reverseAString("this is blue sky");
