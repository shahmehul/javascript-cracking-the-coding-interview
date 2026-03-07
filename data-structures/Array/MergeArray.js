
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

// mergeArrayWithoutSpace();


function mergeSortedArray(arr1,arr2){
    let i = 0;
    let j = 0;
    let results = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]){
            results.push(arr1[i])
            i++;
        }else {
            results.push(arr2[j])
            j++;
        }
    }


    while (i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

//follow up question:  What if array size is big but the elements are from a small group?

function mergeArrayPrepareFrequencyMap(arr1, arr2){
    const frequencyMap = new Map();
    const results = [];
    for(let i =0; i < arr1.length;i ++){
        if(!frequencyMap.get(arr1[i])) {
            frequencyMap.set(arr1[i], 0);
        }
        frequencyMap.set(arr1[i], frequencyMap.get(arr1[i])+1);
    }

    for (let j =0; j < arr2.length; j++){
        if (!frequencyMap.get(arr2[j])){
            frequencyMap.set(arr2[j], 0)
        }
        frequencyMap.set(arr2[j], frequencyMap.get(arr2[j])+1);
    }

    const sortedKeys = [...frequencyMap.keys()].sort((a,b)=> a -b);
    for (const key of sortedKeys){
        let freuency = frequencyMap.get(key);
        while (freuency > 0){
            results.push(key)
            freuency--;
        }
    }
    return results;
}



// console.log(mergeSortedArray([1,3,5],[2,4,6]))
console.log(mergeArrayPrepareFrequencyMap([1,1,2,3],[1,2,2,3]));



//console.log(myArray3);