// 994. Rotting Oranges

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

var orangesRotting = function (grid) {
  let min = 0;
  let fresh = 0;
  let rotten = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      }
      if (grid[i][j] === 2) {
        rotten.push([i, j]);
      }
    }
  }

  //BFS
  while (rotten.length > 0 && fresh > 0) {
    let rQueLen = rotten.length;
    for (let r = 0; r < rQueLen; r++) {
      let [i, j] = rotten.shift();
      let indices = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (let index of indices) {
        let [a, b] = index;
        if (
          i + a >= 0 &&
          i + a < grid.length &&
          j + b >= 0 &&
          j + b < grid[0].length &&
          grid[i + a][j + b] === 1
        ) {
          grid[i + a][j + b] = 2;
          rotten.push([i + a, j + b]);
          fresh--;
        }
      }
    }
    min++;
  }
  return fresh > 0 ? -1 : min;
};
