/**
 * Created by mshah on 4/22/17.
 */
"use strict";
var app = angular.module('myApp', []);
app.controller('StockController',['$scope','$http', function($scope,$http) {
	let self = this;
	self.$scope = $scope;
	self.$scope.stockArr = [111.00,110.20,99,55,88,111,150,220,44,33,111.12,101.11,100,99,222,444,555,1111,20];

	setInterval(function(){
		$http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
			let random = Math.floor(Math.random()*(self.$scope.stockArr.length-1));
			self.$scope.stockVal = {currentPrice:$scope.stockArr[random],oldPrice:110,stockSymbl:'AAPL'};
		});
	},1000*6);

}]);
