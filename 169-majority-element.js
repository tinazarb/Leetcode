// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Method 1

const majorityElement = function (nums) {
  let maxCount = 0;
  let maxNum = nums[0];

  const myNums = new Set(nums);

  for (let num of myNums) {
    let testCount = nums.filter((x) => x === num).length;

    if (testCount > maxCount) {
      maxCount = testCount;
      maxNum = num;
    }
  }
  return maxNum;
};

// Method 2
// Boyer-Moore Voting Algorithm: O(n), O(1) constant space complexity

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    //3
    if (count == 0) {
      candidate = num; //candidate = 3, num = 3
    }
    if (num == candidate) {
      count += 1; // count = 1
    } else {
      count -= 1; //count =
    }
    console.log(count);
  }

  return candidate;
};

// Method 3
//hashmap time O(n)
var majorityElement = function (nums) {
  let map = {};
  let mid = Math.floor(nums.length / 2);

  for (let num of nums) {
    if (!map[num]) map[num] = 1;
    else {
      map[num] += 1;
    }

    if (map[num] > mid) {
      return num;
    }
  }
};
// Method 4

return nums[Math.floor(nums.sort().length / 2)];
