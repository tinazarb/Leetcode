// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function (nums, k) {
  const map = {};
  for (let char of nums) {
    if (!map[char]) map[char] = 0;
    map[char]++;
  }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((ele) => +ele[0]);
};
