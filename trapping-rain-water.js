/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

*/
function solve(heights) {
    let prefixMax = [heights[0]];
    let suffixMax = Array(heights.length - 1).fill(0);
    suffixMax[heights.length - 1] = heights[heights.length - 1]
    for (let i = 1; i < heights.length; i++) {
        prefixMax.push(Math.max(prefixMax[prefixMax.length - 1], heights[i]));
    }
    for (let i = heights.length - 2; i >= 0; i--) {
        suffixMax[i] = (Math.max(suffixMax[i + 1], heights[i]));
    }

    let sum = 0;
    for (let i = 1; i < heights.length - 1; i++) {
        sum = sum + Math.min(suffixMax[i], prefixMax[i]) - heights[i];
    }
    return sum;

}
function solve2(heights) {
    let n = heights.length;
    let leftPtr = 1;
    let rightPtr = n - 2;
    let leftMax = heights[0];
    let rightMax = heights[n - 1];
    let sum = 0;
    while (leftPtr <= rightPtr) {
        if (leftMax < rightMax) {
            leftMax = Math.max(leftMax, heights[leftPtr]);
            sum = sum + leftMax - heights[leftPtr];
            leftPtr++;
        } else {
            rightMax = Math.max(rightMax, heights[rightPtr]);
            sum = sum + rightMax - heights[rightPtr];
            rightPtr--;
        }
        
    }
    return sum;
}
console.log(solve([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(solve2([0,1,0,2,1,0,1,3,2,1,2,1]))