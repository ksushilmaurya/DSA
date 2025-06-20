/*

Given two arrays, arr[] and dep[], that represent the arrival and departure times of trains respectively, the task is to find the minimum number of platforms required so that no train waits.

Examples: 

Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
Output: 3 
Explanation: There are three trains during the time 9:40 to 12:00. So we need a minimum of 3 platforms.

Input: arr[] = [1,  5], dep[] = [3, 7] 
Output: 1 
Explanation:  All train times are mutually exclusive. So we need only one platform

*/

function solve(arr, dep) {
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let platform = 1;
    let ptr1 = 1;
    let ptr2 = 0;

    while (ptr1 < arr.length && ptr2 < dep.length) {
        if(arr[ptr1]<dep[ptr2]) {
            platform ++;
            ptr1++
        } else {
            ptr1++
            ptr2++
        }
    }
    return platform;
}

let arr= [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000]
console.log(solve(arr,dep))