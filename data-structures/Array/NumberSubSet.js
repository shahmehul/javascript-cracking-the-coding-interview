function subsets(nums) {
    let result = [];
    function helper(index, current) {
        // when we reach the end, store the subset
        if (index === nums.length) {
            result.push([...current]);
            return;
        }

        // 1️⃣ Don't take nums[index]
        helper(index + 1, current);

        // 2️⃣ Take nums[index]
        current.push(nums[index]);
        helper(index + 1, current);

        // backtrack (remove last element)
        current.pop();
    }

    helper(0, []);
    return result;
};


console.log(subsets([1,2,3]));