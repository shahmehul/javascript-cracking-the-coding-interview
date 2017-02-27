/**
 * Created by mshah on 2/21/17.
 */
'use strict'
const a = [
	{id: 1, name: 'David'},
	{id: 2, name: 'John'},
	{id: 3, name: 'Matt'},
	{id: 4, name: 'Greg'}
];

const b = [
	{id: 2, position: 'Leader'},
	{id: 3, position: 'Captain'},
	{id: 4, position: 'VP'},
	{id: 5, position: 'Pawn'}
];

//OUTPUT
//[
//  {id:1, name: 'David', position: null},
//  {id:2, name: 'John', position: 'Leader'},
//  {id:3, name: 'Matt', position: 'Captain'},
//  {id:4, name: 'Greg', position: 'VP'},
//  {id:5, name: null, position: 'Pawn'}
//]

function dothework() {
	let ids = [], results = [];

	a.forEach((val, index) => {
		let found = b.find(function (ele) {
			return ele.id == val.id;
		});

	if (!found) {
		found = {position: null, name: null};
	}

	results.push({
		'id': val.id,
		'name': val.name || found.name,
		'position': found.position
	});
});

b.forEach((val, index) => {
	let found = results.find(function (ele) {
		return ele.id == val.id;
	});

let aEle = a.find(function (ele) {
	return ele.id == val.id;
});

if (!aEle) {
	aEle = {name: null};
}

if (!found) {
	results.push({
		'id': val.id || aEle.id,
		'name': val.name || aEle.name,
		'position': val.position
	})
}
})
;

return results;

}

console.log(dothework());
