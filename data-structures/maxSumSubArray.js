/**
 * Created by mshah on 1/30/17.
 * Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.
 */

function maxSubArraySum(a)
{
	'use strict';
	let size = a.length;
	let max_so_far = 0, max_ending_here = 0;
	for (let i = 0; i < size; i++)
	{
		max_ending_here = max_ending_here + a[i];
		if (max_ending_here < 0)
			max_ending_here = 0;

		/* Do not compare for all elements. Compare only
		 when  max_ending_here > 0 */
		else if (max_so_far < max_ending_here)
			max_so_far = max_ending_here;
	}
	return max_so_far;
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));
