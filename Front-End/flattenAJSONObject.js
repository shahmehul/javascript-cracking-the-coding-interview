/**
 * Created by mshah on 3/4/17.
 * Implement a method to flatten a json like input object. {x:1, y:1, z:{a:1,b:2}} flattens to {x:1, y:1, z.a:1, z.b: 2}
 */
"use strict";
class flattenAJSONObject{
	constructor(){
		this.res = {};
	}
	flatten(obj){
		if(typeof obj === 'undefined'){
			return 'Please pass Object';
		}
		this.helper(obj,"");
		return this.res;
	}
	helper(obj,parent){
		for(var prop in obj){
			if(obj.hasOwnProperty(prop)){
				let val = obj[prop];
				let property = parent ? `${parent}.${prop}` : prop;

				if(typeof val === 'object'){
					this.helper(val, property);
				}else {
					this.res[property] = val;
				}
			}
		}
	}
}

var clzz = new flattenAJSONObject();
console.log(clzz.flatten({x:1, y:1, z:{a:1,b:{c:11,e:{f:22}}}}));
