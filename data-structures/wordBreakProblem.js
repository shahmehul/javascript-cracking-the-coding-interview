/**
 * Created by mshah on 2/28/17.
 */
'use strict'

class wordBreakProblem{
	constructor(){
		this.dictionary = [ 'i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice',
			'cream', 'icecream', 'man', 'go', 'mango'];
	}

	wordBreak(str) {

		let size = str.length;
		if(str.length === 0) return true;
		if(this.dictionary.indexOf(str) !== -1) return true;
		for(let i = 1; i < size; i++){
			if(this.dictionary.indexOf(str.substr(0,i)) !== -1 && this.wordBreak(str.substr(i,size - 1))){
				return true;
			}
		}
		return false;
	}


}

var instance = new wordBreakProblem();
console.log(instance.wordBreak('ilikesamsung'));



