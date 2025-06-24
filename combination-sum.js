/*

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []

*/


let candidates = [2, 3, 6, 7];
let target = 7;
let result = []

function solve(i, arr, sum) {
    if (i >= candidates.length || sum < 0) {
        if (sum == 0) {
            result.push([...arr]);
        }
        return;
    }
    arr.push(candidates[i]);
    solve(i, arr, sum - candidates[i])

    arr.pop();
    solve(i + 1, arr, sum);
}

solve(0, [], target)
console.log(result);