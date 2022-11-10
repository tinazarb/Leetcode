// 289. Game of Life

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Example 1:
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

var gameOfLife = function (board) {
  let newBoard = new Array(board.length);
  for (let i = 0; i < newBoard.length; i++) {
    newBoard[i] = new Array(board[0].length).fill(0);
  }

  const drs = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let liveCells = 0;

      for (let dir of drs) {
        const newRow = row + dir[0];
        const newCol = col + dir[1];

        if (newRow < 0 || newRow >= board.length) continue;
        if (newCol < 0 || newCol >= board[0].length) continue;

        if (board[newRow][newCol] === 1) {
          liveCells++;
        }
      }
      if (board[row][col] === 0 && liveCells === 3) {
        newBoard[row][col] = 1;
      } else if (
        (board[row][col] === 1 && liveCells === 2) ||
        liveCells === 3
      ) {
        newBoard[row][col] = 1;
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      board[row][col] = newBoard[row][col];
    }
  }
};
