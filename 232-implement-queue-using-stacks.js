// 232. Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.

// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/*
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/*
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.popStack.length) {
    //is this popStack empty? If it isn't:
    while (this.pushStack.length) {
      //while pushStack has elements
      this.popStack.push(this.pushStack.pop());
      //lets remove elements from pushStack into popStack
    }
  }
  return this.popStack.pop(); //once we break out of while loop, we know our     pushStack is empty and the elements are in the correct order, so we can grab the last element of the popStack
};

/*
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack[this.popStack.length - 1]; //returning last element of popStack
};

/*
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.pushStack.length && !this.popStack.length;
};

//Time Complexity: O(1) amortized time
//Space Complexity: O(n)
