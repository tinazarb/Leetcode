// 8. String to Integer (atoi)

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

//     Read in and ignore any leading whitespace.
//     Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
//     Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
//     Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
//     If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
//     Return the integer as the final result.

// Note:

//     Only the space character ' ' is considered a whitespace character.
//     Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.

/*
 * @param {string} s
 * @return {number}
 */

//1 solution - One liner
var myAtoi = function (s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
};

//2 solution
function isNumeric(c) {
  return !isNaN(c) && !isNaN(parseFloat(c));
}

var myAtoi = function (s) {
  if (!s.length) return 0;

  let numString = '';
  let isNegative = false;

  let i = 0;
  while (i < s.length && s[i] === ' ') i++;

  if (s[i] === '+') i++;
  else if (s[i] === '-') {
    i++;
    isNegative = true;
  }

  for (i; i < s.length; i++) {
    if (!isNumeric(s[i])) break;
    if (numString.length === 0 && parseInt(s[i]) === 0) continue;
    numString += s[i];
  }
  if (numString.length === 0) return 0;

  let res = isNegative ? -1 * parseInt(numString) : parseInt(numString);

  if (res < -1 * 2 ** 31) res = -1 * 2 ** 31;
  else if (res > 2 ** 31 - 1) res = 2 ** 31 - 1;

  return res;
};
