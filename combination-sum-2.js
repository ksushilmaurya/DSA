/*
40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

*/

let candidates = [10, 1, 2, 7, 6, 1, 5];
//[1,1,2,5,6,7,10]
let target = 8;
candidates.sort((a, b) => a - b);
const result = [];

function solve(i, sum, arr) {
    if(sum == 0) result.push([...arr]);
    if(sum<0) return
    if (i >= candidates.length) return
    for (let j = i; j < candidates.length; j++) {
        if (j > i && candidates[j] == candidates[j - 1]) continue;
        arr.push(candidates[j]);
        solve(j + 1, sum - candidates[j], arr);
        arr.pop();
    }

}

solve(0, target, []);
console.log(result)