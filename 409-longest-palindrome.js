// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else hash[s[i]]++;
  }

  let arr = Object.values(hash);
  let result = 0;

  let oddFound = false;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      result += arr[j];
    } else {
      oddFound = true;
      result += arr[j] - 1;
    }
  }
  return oddFound ? result + 1 : result;
};
