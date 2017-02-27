/**
 * Created by mshah on 1/8/17.
 */

//Method 1
'use strict';
var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniqueNames = [];
names.forEach(function(el,i){
    if(uniqueNames.indexOf(el) === -1) uniqueNames.push(el);
});
// console.log(uniqueNames);


// Method 2
function withOutNewArr(a) {
    var n = a.length;
    var i, k;
    k = 0;
    for (i = 1; i < n; i++) {
        if (a[k] != a[i]) {
            a[k + 1] = a[i];
            k++;
        }
    }
    return a.slice(0, k + 1);
}


console.log(withOutNewArr([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));

