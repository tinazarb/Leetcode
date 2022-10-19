// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/*
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let mapT = {};
  for (let char of t) {
    mapT[char] ? (mapT[char] += 1) : (mapT[char] = 1);
  }
  let count = 0;
  let l = 0;
  let r = 0;
  let mapS = {};
  let result = '';
  while (r < s.length) {
    if (mapT[s[r]] > 0) {
      mapS[s[r]] ? (mapS[s[r]] += 1) : (mapS[s[r]] = 1);
      if (mapT[s[r]] >= mapS[s[r]]) {
        count++;
      }
    }
    if (count === t.length) {
      while (mapT[s[l]] < mapS[s[l]] || !mapT[s[l]]) {
        if (mapT[s[l]] < mapS[s[l]]) {
          mapS[s[l]] -= 1;
        }
        l++;
      }
      if (result === '' || result.length > r - l + 1) {
        result = s.slice(l, r + 1);
      }
    }
    r++;
  }
  return result;
};
