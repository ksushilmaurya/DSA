/*

Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. This problem is a variation of 2Sum problem.

Examples: 

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.

*/

function solve(arr, target) {
    const map = new Map();
    for(let i=0; i<arr.length; i++) {
        if(map.has(target-arr[i])) return true;
        map.set(arr[i],1);
    }
    return false;
}

console.log(solve([0, -1, 2, -3, 1], 10))