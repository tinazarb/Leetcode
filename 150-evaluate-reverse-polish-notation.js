// 150. Evaluate Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      stack.push(tokens[i]);
    } else {
      a = Number(stack.pop());
      b = Number(stack.pop());

      switch (tokens[i]) {
        case '+':
          stack.push(b + a);
          break;
        case '-':
          stack.push(b - a);
          break;
        case '*':
          stack.push(b * a);
          break;
        case '/':
          stack.push(parseInt(b / a));
          break;
      }
    }
  }
  return stack[0];
};
