// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;
  if (nums.length === 2) return nums[0] === nums[1];
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashmap[nums[i]]) hashmap[nums[i]] = 1;
    else {
      hashmap[nums[i]]++;
      if (hashmap[nums[i]] === 2) return true;
    }
  }

  return false;
};

// Time complexity: O(n)
// Space complexity: O(n)
