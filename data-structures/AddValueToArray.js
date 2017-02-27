/**
 * Created by mshah on 1/8/17.
 Given an array a contains all digits 0-9 a= [1, 4, 2, 1] # which represents 1421
 Add one to the number and return the array return
 a = [1, 4, 2, 2] # which represents 1422
 a= [9,9,9,9] should become [1,0,0,0]
 **/
function doTheWork(arr) {
    var newArr = [];
    while (arr.length) {
        var item = arr.pop();
        item++;
        if (item == 10) {
            item = 0;
            newArr.unshift(item);
        } else {
            newArr.unshift(item);
            break;
        }
    }
    if (arr.length) {
        while (arr.length) {
            newArr.unshift(arr.pop());
        }
    } else if (newArr.indexOf(0) === 0) {
        newArr.unshift(1);
    }
    return newArr;
}

console.log(doTheWork([9,9,9,9]));