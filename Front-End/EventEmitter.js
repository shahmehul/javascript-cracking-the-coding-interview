/**
 * Created by mshah on 1/21/17.
 * // https://nodejs.org/api/events.html#events_class_eventemitter
 * var e = new EventEmitter();
 e.on('hungry', function eat() {
    console.log('Eat food!');
});
 e.on('hungry', function drink() {
    console.log('Drink water!');
});
 */
'use strict'
class EventEmitter {
	constructor() {
		this.map = {};
	}

	on(eventName, fn) {
		const self = this;
		if (!eventName) {
			return;
		}
		if (!this.map[`${eventName}`]) {
			this.map[`${eventName}`] = [fn];
		} else if (this.map[`${eventName}`]) {
			let fnArray = this.map[`${eventName}`];
			fnArray.push(fn);
		}
	}

	emit(eventName) {
		const self = this;
		if (self.map[`${eventName}`]) {
			let fnArray = self.map[`${eventName}`];
			fnArray.forEach(function (fn, index) {
				fn.call();
			});
		}
	}
}

var e = new EventEmitter();
e.on('hungry', function eat() {
	console.log('Eat food!');
});
e.on('hungry', function drink() {
	console.log('Drink water!');
});

e.emit('hungry');

