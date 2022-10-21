// 224. Basic Calculator

// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:
// Input: s = "1 + 1"
// Output: 2

// Example 2:
// Input: s = " 2-1 + 2 "
// Output: 3

// Example 3:
// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

var calculate = function (s) {
  if (s.length === 0) return 0;

  let stack = [];
  let result = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (!isNaN(parseInt(currentChar))) {
      let currentInt = parseInt(currentChar);

      while (i + 1 < s.length && !isNaN(parseInt(s[i + 1]))) {
        currentInt = currentInt * 10 + parseInt(s[i + 1]);
        i++;
      }

      result += currentInt * sign;
    } else if (currentChar === '-') {
      sign = -1;
    } else if (currentChar === '+') {
      sign = 1;
    } else if (currentChar === '(') {
      stack.push(result);
      result = 0;
      stack.push(sign);
      sign = 1;
    } else if (currentChar === ')') {
      result = result * stack.pop() + stack.pop();
    }
  }

  return result;
};
