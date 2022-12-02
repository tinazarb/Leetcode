var maxPathSum = function (root) {
  let max = -Infinity;

  function sums(node) {
    if (!node) return 0;

    let left = Math.max(sums(node.left), 0);
    let right = Math.max(sums(node.right), 0);

    max = Math.max(max, left + right + node.val);

    return Math.max(left, right) + node.val;
  }
  sums(root);
  return max;
};
