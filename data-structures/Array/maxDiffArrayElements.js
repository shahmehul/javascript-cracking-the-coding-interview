/**
 * Created by mehulshah on 1/8/17.
 Given an array, find the maximum difference between two array elements given the second element comes after
 the first.
 For example. array = [1,2,3,4,5,6,7]
 We can take the difference between 2 and 1 (2-1), but not the different between 1 and 2 (1-2).*/

function maxDiff(arr)
{
    var max_diff = arr[1] - arr[0];
    var arr_size = arr.length;
    var min_element = arr[0];
    var i;
    for(i = 1; i < arr_size; i++)
    {
        if(arr[i] - min_element > max_diff)
            max_diff = arr[i] - min_element;
        if(arr[i] < min_element)
            min_element = arr[i];
    }
    return max_diff;
}

console.log(maxDiff([1,2,6,4,5,6,19]));