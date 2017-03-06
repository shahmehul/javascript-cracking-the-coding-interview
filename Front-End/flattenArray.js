/**
 * Created by mshah on 3/4/17.
 */
"use strict";
class flattenAnArray{
	constructor(){
		this.res = [];
	}
	flatten(arr){
		if(typeof arr === 'undefined'){
			return 'Please pass Array';
		}
		this.helper(arr);
		return this.res;
	}
	helper(arr){
		arr.forEach((val,index)=>{
			if(Array.isArray(val)){
				this.helper(val);
			}else {
				this.res.push(val);
			}
		})
	}
}

var clzz = new flattenAnArray();
console.log(clzz.flatten([2, 1, [3, [4, 5], 6], 7, [8]]));