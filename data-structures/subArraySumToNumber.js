/**
 * Created by mehulshah on 1/8/17.
 * Given an array of positive integers and a target integer
 find if there is a consecutive subarray that sums to the target.
 E.g, given {5,6,4,12}, findsum(10)=true, findsum(13)=false.
 */

function contiguousSubSequenceWithSum(a,sum) {
    for (let i = 0; i < a.length; i++) {
        let sumSoFar = a[i];
        if (sumSoFar == sum) return true;
        if (sumSoFar > sum) continue;
        for (let j = i + 1; j < a.length; j++) {
            sumSoFar += a[j];
            if (sumSoFar == sum) return true;
            else if (sumSoFar > sum) break;
        }
    }
    return false;
}
console.log(contiguousSubSequenceWithSum([5,6,4,12],13));