// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

//Recursive DFS
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//BFS
var maxDepth = function (root) {
  let q = [root];
  let count = 0;
  while (q.length) {
    const next = [];
    for (const n of q) {
      if (!n) continue;
      next.push(n.left);
      next.push(n.right);
    }
    if (next.length) count++;
    q = next;
  }
  return count;
};

//Iterative DFS
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]];
  let maxDepth = 0;
  while (stack.length) {
    const [currentNode, level] = stack.pop();
    if (currentNode.right) stack.push([currentNode.right, level + 1]);
    if (currentNode.left) stack.push([currentNode.left, level + 1]);
    maxDepth = Math.max(maxDepth, level);
  }
  return maxDepth;
};

// Time: O(n)
// Space: O(n)
