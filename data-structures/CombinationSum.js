/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum(candidates,target) {
    const result = [];
    candidates.sort((a,b)=> a-b );
    
    function backtrack(remaining,combo,start){
        //base case
        if(remaining === 0 ){
            result.push([...combo]);
            return;
        }
        if (remaining < 0) {
            return;
        }
        for (let i=start; i < candidates.length; i++) {
            const current = candidates[i];
            
            combo.push(current);
            // exclude case
            backtrack(remaining - current, combo, i);

            // include case.
            combo.pop();
        }
    }


    backtrack(target, [], 0);
    return result;
}

var combinationSum1 = function(candidates, target) {
    const result = [];

    // sort can help prune early
    candidates.sort((a, b) => a - b);

    function backtrack(remaining, combo, start) {
        debugger;
        if (remaining === 0) {
            // found valid combo
            result.push([...combo]);
            return;
        }
        if (remaining < 0) {
            // if we exceed the target, stop
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            let current = candidates[i];

            // choose current
            combo.push(current);
            // since we can reuse same number, pass i (not i + 1)
            backtrack(remaining - current, combo, i);

            // backtrack — remove last
            combo.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
};


const candidates = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(candidates,target))