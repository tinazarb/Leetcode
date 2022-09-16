// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = preorder[0];
  let mid = inorder.indexOf(root);
  let tree = new TreeNode(root);
  tree.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  tree.right = buildTree(preorder.slice(1 + mid), inorder.slice(1 + mid));
  return tree;
};
