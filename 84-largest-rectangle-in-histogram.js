// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];
  heights = [0].concat(heights).concat([0]);
  for (let i = 0; i < heights.length; i++) {
    while (stack && heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop();
      maxArea = Math.max(
        (i - stack[stack.length - 1] - 1) * heights[j],
        maxArea
      );
    }
    stack.push(i);
  }
  return maxArea;
};

var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length != 0 && stack[stack.length - 1][1] > heights[i]) {
      let [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, heights[i]]);
  }
  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
  }
  return maxArea;
};
