// 542. 01 Matrix

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

/*
 * @param {number[][]} mat
 * @return {number[][]}
 */

var updateMatrix = function (matrix) {
  let res = new Array(matrix.length);
  for (let i = 0; i < res.length; i++)
    res[i] = new Array(matrix[i].length).fill(Infinity);

  let que = new Array();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        que.push({ i: i, j: j, dist: 0 });
      }
    }
  }

  while (que.length > 0) {
    let temp = que.shift();
    if (
      temp.i < 0 ||
      temp.j < 0 ||
      temp.i >= matrix.length ||
      temp.j >= matrix[temp.i].length ||
      res[temp.i][temp.j] <= temp.dist ||
      (matrix[temp.i][temp.j] == 0 && temp.dist > 0)
    ) {
      continue;
    }

    res[temp.i][temp.j] = temp.dist;

    que.push({ i: temp.i - 1, j: temp.j, dist: temp.dist + 1 });
    que.push({ i: temp.i + 1, j: temp.j, dist: temp.dist + 1 });
    que.push({ i: temp.i, j: temp.j - 1, dist: temp.dist + 1 });
    que.push({ i: temp.i, j: temp.j + 1, dist: temp.dist + 1 });
  }
  return res;
};
