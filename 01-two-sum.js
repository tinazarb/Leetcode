// 1. Two-Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//Brute Force:
// Time: O(n^2) - quatratic runtime
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//  Hashmap:
//Time: O(2n) => O(n) | Space: O(n)
var twoSum2 = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap[complement] && hashMap[complement] !== i) {
      return [i, hashMap[complement]];
    }
  }
};

//  Hashmap Optimized:
//Time: O(n)
var twoSum3 = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in hashMap) {
      return [i, hashMap[complement]];
    }
    hashMap[nums[i]] = i;
  }
};
