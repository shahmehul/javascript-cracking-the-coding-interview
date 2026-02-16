/**
 * Created by mehulshah on 1/8/17.
 */
// rotate an array with K order
//1. Divide the array two parts: 1,2,3,4 and 5, 6
//2. Reverse first part: 4,3,2,1,5,6
//3. Reverse second part: 4,3,2,1,6,5
//4. Reverse the whole array: 5,6,1,2,3,4
'use strict'
var arr = [1,2,3,4,5,6];

function rotate(order) {
    order = order % arr.length;

    if (arr == null || order < 0) {
        return;
    }

    //length of first part
    var a = arr.length - order;

    reverse(0, a-1);
    reverse(a, arr.length-1);
    reverse(0, arr.length-1);

}

function reverse(left,right){
    if(arr == null || arr.length == 1)
        return;

    while(left < right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}


function rotateAnArraySecondMethod(array,k){
    for(let i = 1 ; i <= k ; i ++){
        let tmp = array.pop();
        array.unshift(tmp);
    }
    return array;
}

console.log(rotateAnArraySecondMethod(arr,4));
//console.log(array);

//rotate(4);
//console.log(arr);
