/**
 * Created by mehulshah on 1/8/17.
 * Given an array of positive integers and a target integer
 find if there is a consecutive subarray that sums to the target.
 E.g, given {5,6,4,12}, findsum(10)=true, findsum(13)=false.
 */

function contiguousSubSequenceWithSum(a,sum) {
    'use strict'
    for (let i = 0; i < a.length; i++) {
        let sumSoFar = a[i];
        if (sumSoFar == sum) return true;
        if (sumSoFar > sum) continue;
        for (let j = i + 1; j < a.length; j++) {
            sumSoFar += a[j];
            if (sumSoFar == sum) return true;
            else if (sumSoFar > sum) break;
        }
    }
    return false;
}


function FindPairSum2Zero(){
    var array = [-6, -10, 1, 4, 8, 10, 45];
    var i = 0 , r = array.length - 1 ;
    while(r > i) {
        if(array[r-1] < 0 && array[i+1] < 0){
            r = array.length - 1;
            i ++;
        }
        if(array[i+1] > 0 && array[r+ 1 ] < 0)
        var sum = array[i] + array[r];
        if (sum > 0) {
            r--;
        } else if (sum < 0) {
        i++
        } else if (sum == 0){
            return [array[i], array[r]];
            break;
        }
    }
    return 'no match found';
}


function countAllSubSequenceForZeroSum(array,sum) {
    var count = 0;
    var encounteredSum = {};
    var prev = array[0];
    if(prev == 0) {
        count++;
        console.log("Found at index: "+0);
    }
    for (var i = 1; i < array.length; i++) {
        prev += array[i];
        if(encounteredSum[prev]) {
            count++;
        } else {
            encounteredSum[prev] = i;
        }
    }
    if(encounteredSum[sum]){
        printSequenceForZeroSum(array, encounteredSum[sum]);
    }
}

function printSequenceForZeroSum(array, endIndex) {
    console.log(array.slice(0,endIndex+1));
}

// Execute 3 different approch
//console.log(contiguousSubSequenceWithSum([5,6,4,12],13));
//console.log(FindPairSum2Zero());
console.log(countAllSubSequenceForZeroSum([1, 2, -3,10,1,1,1, 1],0));


