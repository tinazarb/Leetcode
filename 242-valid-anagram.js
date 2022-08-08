// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let object = {};
  for (i of s) {
    if (!object[i]) {
      object[i] = 1;
    } else {
      object[i] += 1;
    }
  }
  for (y of t) {
    if (!object[y]) {
      return false;
    } else {
      object[y] -= 1;
    }
  }
  return true;
};

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
    ? true
    : false;
};
