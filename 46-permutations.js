// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

let permute = function (nums) {
  let tempa = [];
  let final = [];
  function backtrack(tempa, nums) {
    if (nums.length === 0) {
      final.push(tempa.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      tempa.push(nums[i]);
      nums.splice(i, 1);
      backtrack(tempa, nums, final);
      nums.splice(i, 0, tempa.pop());
    }
  }
  backtrack(tempa, nums, final);
  return final;
};
