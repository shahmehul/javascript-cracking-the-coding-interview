/**
 * Created by mshah on 3/3/17.
 */

'use strict';
function exampleTask(done) {
	setTimeout(done, 2000);
}

class Runner {
	constructor(num){
		this.maxNum = num;//3
		this.counter = 0;
		this.queue = [];
	}

	push(callbackFn){
		this.queue.push(callbackFn);
	}

	run(){
		var self = this;
		if(this.queue.length > 0 && this.counter < this.maxNum){
			// how many tasks can we run?
			setTimeout(() => {
				this.counter++;
				let task = this.queue.shift();
				var done = function(){
					self.counter--;
					console.log(`number at this moment:${self.counter}`)
					self.run();
				}
				task.call(this,done); // when does the task finish?
			},0);
		}
	}

}

var r = new Runner(3);
r.push(exampleTask) // run
r.push(exampleTask) // run
r.push(exampleTask) // run
r.push(exampleTask) // wait
r.run();
