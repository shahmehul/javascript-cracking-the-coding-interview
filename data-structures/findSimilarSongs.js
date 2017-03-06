/**
 * Created by mshah on 3/5/17.
 */
"use strict";
var songA = {
	rating: 2.0,
	similarities: [songB, songC, songD]
};

var songB = {
	rating: 3.0,
	similarities: [songA, songC, songD]
}

var songC = {
	rating: 4.0,
	similarities: [songA, songB, songD]
}

var songD = {
	rating: 4.0,
	similarities: [songA, songB, songC]
};

 var visited = []

function getTopRecommendation(song){
	if(!song){return;}
	visited.push(song);
	return findSimilarSongs(song);
}

function findSimilarSongs(song){
	let top = song;
	 song.similarities.forEach((val,index)=>{
		 if (visited.indexOf(val) !== -1) {
			 visited.push(val);
			 let result = findSimilarSongs(val);
			 if (result.rating > top.rating) {
				 top = result;
			 }
		 }
	 });
	return top;
}

console.log(getTopRecommendation(songA));

