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
//Solution 1
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

//Solution 2
var minWindow = function (s, t) {
  if (t == '') return '';

  let countT = {},
    window = {};

  for (let i = 0; i < t.length; i++) {
    if (!countT[t[i]]) {
      countT[t[i]] = 1;
    } else {
      countT[t[i]]++;
    }
  }

  let have = 0;
  let need = Object.keys(countT).length;
  let res = [-1, -1];
  let resLen = Infinity;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let c = s[r];
    if (!window[c]) {
      window[c] = 1;
    } else {
      window[c]++;
    }

    if (c in countT && window[c] == countT[c]) {
      have += 1;
    }

    while (have == need) {
      // update our result
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      //pop from the left of our window - minimize it
      window[s[l]] -= 1;
      if (countT[s[l]] != undefined && window[s[l]] < countT[s[l]]) {
        have -= 1;
      }
      l += 1;
    }
  }
  [l, r] = res;

  if (resLen != Infinity) {
    return s.slice(l, r + 1);
  } else {
    return '';
  }
};
