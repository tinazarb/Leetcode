// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function (strs) {
  let result = {};
  for (let str of strs) {
    const keys = new Array(26).fill(0);
    for (let char of str) {
      keys[char.charCodeAt(0) - 97] += 1;
    }
    if (!result[keys]) result[keys] = [];
    result[keys].push(str);
  }
  return Object.values(result);
};

//Time: O(n)
//Space: O(n)
