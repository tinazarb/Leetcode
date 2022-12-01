var levelOrder = function(root) {
  const arr = [];
  createHashMap(root, 0);
  
  function createHashMap(node, level) {
    if (node == null) return;

    arr[level] = arr[level] || [];
    arr[level].push(node.val);
    createHashMap(node.left, level+1);
    createHashMap(node.right, level+1);
  }
  return arr;
};

