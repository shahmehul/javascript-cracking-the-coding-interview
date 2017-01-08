/**
 * Created by mshah on 1/8/17.
 */

var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniqueNames = [];
names.forEach(function(el,i){
    if(uniqueNames.indexOf(el) === -1) uniqueNames.push(el);
});
console.log(uniqueNames);
