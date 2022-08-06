// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (s.length === null || s.length === 1) return true;
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
};

// Time complexity: O(n)
// Space complexity: O(1)
