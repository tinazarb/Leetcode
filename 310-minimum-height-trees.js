// 310. Minimum Height Trees

// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:
// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Example 2:
// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

/*
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findMinHeightTrees = function (n, edges) {
  if (!n || n === 0 || n - 1 !== edges.length) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  let hash = {};
  for (let i = 0; i < n; i++) {
    hash[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    hash[edge[0]].push(edge[1]);
    hash[edge[1]].push(edge[0]);
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (hash[i].length === 1) {
      leaves.push(i);
    }
  }

  let remainingNodes = n;
  while (remainingNodes > 2) {
    let size = leaves.length;
    remainingNodes -= size;
    let newLeaves = [];
    for (let i = 0; i < size; i++) {
      let node = leaves.shift();
      let nextNodes = hash[node];
      for (let j = 0; j < nextNodes.length; j++) {
        let nextNode = nextNodes[j];
        let index = hash[nextNode].indexOf(node);
        hash[nextNode].splice(index, 1);
        if (hash[nextNode].length === 1) {
          newLeaves.push(nextNode);
        }
      }
    }
    leaves = newLeaves;
  }
  return leaves;
};
