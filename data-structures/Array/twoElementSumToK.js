/**
 * Created by mshah on 2/24/17.
 */

'use strict';
function findElements(arr, target) {
	let i = 0, j = arr.length - 1;
	while (i < j) {
		if (arr[i] + arr[j] > target) {
			j--;
		} else if (arr[i] + arr[j] < target){
			i++;
		} else {
			return {'value1': arr[i], 'value2': arr[j]};
		}
	}
	return 'not found';
}

console.log(findElements([2, 7, 11, 15],18));

