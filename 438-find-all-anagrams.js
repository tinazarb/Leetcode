// 438. Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

var findAnagrams = function (s, p) {
  let hashMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (hashMap.has(p[i])) {
      hashMap.set(p[i], hashMap.get(p[i]) + 1);
    } else {
      hashMap.set(p[i], 1);
    }
  }

  let res = [];
  let start = 0,
    end = 0;
  while (end < s.length) {
    if (hashMap.get(s[end]) > 0) {
      hashMap.set(s[end], hashMap.get(s[end]) - 1);
      end++;
      if (end - start == p.length) {
        res.push(start);
      }
    } else if (start == end) {
      start++;
      end++;
    } else {
      hashMap.set(s[start], hashMap.get(s[start]) + 1);
      start++;
    }
  }
  return res;
};

// Time: O(n)
// Space: O(n)
