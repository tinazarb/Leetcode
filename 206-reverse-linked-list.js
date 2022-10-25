// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// Iterative:
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// Time = 0(n)
// Space = O(1)

// Recursive:
var reverseList = function (head) {
  if (!head) {
    return null;
  }
  let newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
  }
  return newHead;
};

// Time = 0(n)
// Space = O(n)
// Memory on iterative is better
