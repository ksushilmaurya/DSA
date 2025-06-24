/*

46. Permutations
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]

*/

let nums = [1, 2, 3];
let result = [];
function solve(arr, freq) {
    if (arr.length == nums.length) {
        result.push([...arr]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!freq[i]) {
            arr.push(nums[i]);
            freq[i] = 1;
            solve(arr, freq)

            arr.pop()
            freq[i] = 0
        }

    }
}

function swap(i,j,arr) {
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function solve2(i,nums) {
    if(i==nums.length) {
        result.push([...nums]);
        return;
    }
    for(let j=i; j<nums.length; j++) {
        swap(i,j,nums);
        solve2(i+1,nums);
        swap(i,j,nums)
    }

}
//let freq = Array(nums.length).fill(0);
//solve([], freq);
solve2(0,nums)
console.log(result);