//https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=problem-list-v2&envId=prefix-sum&
// prefix array solution O(Nlog(N)). Log N for binary search. O(N) to prepare prefix sum array. 
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    debugger;
    // Build prefix sum
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let minLen = Infinity;

    // For each start index i
    for (let i = 0; i < n; i++) {
        const required = prefix[i] + target;

        // Binary search for smallest j where prefix[j] >= required
        let left = i + 1;
        let right = n;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid] >= required) {
                minLen = Math.min(minLen, mid - i);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return minLen === Infinity ? 0 : minLen;
};


/// O(N) variable length two pointer solution.
var minSubArrayLenSlidingWindow = function(target, nums) {
    let left = 0;
    let right =0;
    let sum = 0;

    let minLen = Infinity;

    while (right < nums.length) {
        sum += nums[right];
        
        
        // Shrink window while sum >= target
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    
    // If minLen was never updated, return 0
    return minLen === Infinity ? 0 : minLen;
};




console.log(minSubArrayLenSlidingWindow(7, [2,3,1,2,4,3])); 
// Expected: 2  → [4,3]
