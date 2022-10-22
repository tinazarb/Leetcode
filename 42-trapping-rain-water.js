// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

var trap = function (height) {
  let result = 0;
  let leftMax = [];
  let rightMax = [];

  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return result;
};
