// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

var exist = function (board, word) {
  const neighbors = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  const find = (idx, x, y) => {
    if (idx === word.length) {
      return true;
    }
    if (!board[x] || word[idx] !== board[x][y]) {
      return false;
    }
    board[x][y] = '*';
    for (const [a, b] of neighbors) {
      if (find(idx + 1, x + a, y + b)) {
        return true;
      }
    }
    board[x][y] = word[idx];
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (find(0, i, j)) {
        return true;
      }
    }
  }
  return false;
};
