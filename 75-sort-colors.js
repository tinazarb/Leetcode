// 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (nums) {
  if (nums.length === 1) return;
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let start = 0,
    end = nums.length - 1,
    i = 0;
  while (i <= end) {
    if (nums[i] == 0) {
      swap(i, start);
      start++;
      i++;
    } else if (nums[i] == 2) {
      swap(i, end);
      end--;
    } else {
      i++;
    }
  }
};

// Time complexity: O(n)
// Space complexity: O(1)
