/**
 * Created by mshah on 1/8/17.
 Given an array a contains all digits 0-9 a= [1, 4, 2, 1] # which represents 1421
 Add one to the number and return the array return
 a = [1, 4, 2, 2] # which represents 1422
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
    if (!arr.length) {
        newArr.unshift(1);
    } else {
        while (arr.length) {
            newArr.unshift(arr.pop());
        }
    }
    return newArr;
}

console.log(doTheWork([9,9,9,9]));