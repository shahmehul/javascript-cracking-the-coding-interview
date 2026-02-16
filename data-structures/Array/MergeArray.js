/**
 * Created by mehulshah on 1/8/17.
 * Merge two sort array into one and remove duplicates.
 */

var arr1 = [3, 7, 12, 15, 22, 45, 56];
var arr2 = [1, 2, 5, 7, 17, 20];
var myArray3 = arr1.concat(arr2);
myArray3 = removeDuplicates(myArray3);

function removeDuplicates(inputArray) {
    var outputArray=new Array();
    if(inputArray.length>0){
        inputArray.forEach(function(value,index) {
            if(outputArray.indexOf(value) == -1){
                outputArray.push(value);
            }
        });
    }
    return outputArray;
}


// merge array without using any extra space.

function mergeArrayWithoutSpace() {
    var a = [0,1,3,6,7,null,null,null,null];
    var b = [1,2,2,3,4];
    var bIndex = 0;
    a.forEach(function (val, index) {
        if (a[index] === null) {
            a[index] = b[bIndex];
            bIndex++;
        }
    });
    a.sort();
    console.log(a);
}

mergeArrayWithoutSpace();


//console.log(myArray3);