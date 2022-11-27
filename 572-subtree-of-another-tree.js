var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  if (sameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function sameTree(tree, subtree) {
  if (!tree && !subtree) return true;
  if (tree && subtree && tree.val === subtree.val) {
    return (
      sameTree(tree.left, subtree.left) && sameTree(tree.right, subtree.right)
    );
  }
  return false;
}

//Alternate:
var isSubtree = function (r, subroot) {
  const traverse = (r) => {
    let isValid;
    if (r.val === subroot.val) {
      isValid = comparison(r, subroot);
      if (isValid) return true;
    }
    let isLeftValid = false,
      isRightValid = false;
    if (r.left) isLeftValid = traverse(r.left);
    if (r.right) isRightValid = traverse(r.right);
    return isLeftValid || isRightValid;
  };

  return traverse(r);
};

function comparison(p, q) {
  if (p == null && q == null) return true;
  if (!p || !q || q.val !== p.val) return false;

  return comparison(p.left, q.left) && comparison(p.right, q.right);
}
