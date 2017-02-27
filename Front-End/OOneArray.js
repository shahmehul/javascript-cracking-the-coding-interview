/**
 * Created by mshah on 2/10/17.
 */
'use strict';
class MyDS {
	constructor() {
		this.map = {};
		this.array = [];
	}

	insert(val) {
		if(!this.map[val]){
			var index = this.array.push(val);
			this.map[val] = index - 1;
		}
	}

	search(val) {
		return this.array[this.map[val]];
	}

	remove(val) {
		if (this.map[val]) {
			var index = this.map[val];
			this.map[val] = undefined;
			var tmp = this.array[index];
			this.array[index] = this.array[index-1];
			this.array[index - 1] = tmp;
			this.array.pop();
		}
	}

	getRandom() {
		var random = Math.floor(Math.random() * this.array.length);
		return this.array[random];
	}
}

var ds = new MyDS();
ds.insert(10);
ds.insert(20);
ds.insert(30);
ds.insert(40);
console.log(ds.search(30));
ds.remove(20);
ds.insert(50);
console.log(ds.search(50));
console.log(ds.getRandom());