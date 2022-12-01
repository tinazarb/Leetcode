// 230. Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Iterative:
var kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let curr = root;
  while (curr || stack) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    n++;
    if (n === k) {
      return curr.val;
    }
    curr = curr.right;
  }
};

// Recursive:
var kthSmallest = function (root, k) {
  let array = [];
  dfs(root);
  return array[k - 1];

  function dfs(root) {
    if (!root) return;

    if (array.length == k) return;

    dfs(root.left);
    array.push(root.val);
    dfs(root.right);
  }
};
