/*You are given an array of integers and want to make it balanced. The arrey is balanced if the largest number is at most twice the smallest number. You are allowed to do the following: • Remove any number of elements from the array. • Change et most one element to any positive integer you choose. Find the minimum number of elements that must be removed so that the array becomes balanced, Example 1 Input: err = 17, 4, 2, 3, 12, 91 Output: 2, Explanation: An optimal sequence of operations is: • Change the second element from 4 to 8. • Remove the third and fourth elements, 2 and 3. o The modified array is 17, 8, 12, 91 o 12 is less than or equal to 2 x 7. Example 2 Input: arr = (4, 6, 2, 9, 8, 7, 3] Output: 2 Explanation: "An optimal sequence of operations is: • Change the third element from 2 to 1l • Remove the first and seventh elements, 4 and 3. • The modified array is [6, 11, 9, 8, 71 • 11 is less than or equal to 2 * 6. Constraints • 2s size of arr ≤2 * 105 1s arril s 109 */

function minRemovalsToBalance(arr) {
    arr.sort((a, b) => a - b);
  
    let n = arr.length;
    let l = 0;
    let maxKeep = 0;
    let violations = 0;
  
    for (let r = 0; r < n; r++) {
      // expand window and count violations
      if (arr[r] > 2 * arr[l]) violations++;
  
      // shrink until at most one violation
      while (violations > 1) {
        if (arr[l + 1] <= 2 * arr[l] && arr[r] > 2 * arr[l]) {
          violations--;
        }
        l++;
        // recompute violation relative to new l
        violations = 0;
        for (let i = l; i <= r; i++) {
          if (arr[i] > 2 * arr[l]) violations++;
        }
      }
  
      maxKeep = Math.max(maxKeep, r - l + 1);
    }
  
    return n - maxKeep;
  }

  console.log(minRemovalsToBalance([8 ,3 ,9 ,5 ,7 ,4 ,8 ,6 ,9]))