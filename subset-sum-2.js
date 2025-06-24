/*

90. Subsets II
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

*/

let nums = [1, 2, 2];
nums.sort((a, b) => a - b);
let result = []

function solve(i, arr) {
    if (i >= nums.length) {    
        return
    }

    for (let j = i; j < nums.length; j++) {
        if (j > i && nums[j] == nums[j - 1]) continue;
        arr.push(nums[j]);
        result.push([...arr]);
        solve(j + 1, arr);
        arr.pop();
    }
}

solve(0, [])
console.log(result);