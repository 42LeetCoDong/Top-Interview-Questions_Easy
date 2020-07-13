function checkHorizontal(board: string[][], x: number, y: number, square: string): boolean {
  let result: boolean = true;
  for (let i = 1; 0 <= x - i; i++)
    if (board[y][x - i] === square) result = (false);
  for (let i = 1; x + i < board[0].length; i++)
    if (board[y][x + i] === square) result = (false);
  return (result);
}

function checkVertical(board: string[][], x: number, y: number, square: string): boolean {
  let result: boolean = true;
  for (let i = 1; 0 <= y - i; i++)
    if (board[y - i][x] === square) result = (false);
  for (let i = 1; y + i < board.length; i++)
    if (board[y + i][x] === square) result = (false);
  return (result);
}

function checkBox(board: string[][], x: number, y: number, square: string): boolean {
  let phaseX: number = Math.floor(x / 3);
  let phaseY: number = Math.floor(y / 3);
  for (let i = phaseX * 3; i < (phaseX + 1) * 3; i++)
    for (let j = phaseY * 3; j < (phaseY + 1) * 3; j++)
      if (x !== i && y !== j && board[j][i] === square)
        return (false);
  return (true);
}

function isValidSudoku(board: string[][]): boolean {
  let result: boolean = true;
  board.forEach((line, y) => {
    line.forEach((square, x) => {
      if (square !== '.') {
        if (!checkVertical(board, x, y, square) ||
            !checkHorizontal(board, x, y, square) ||
            !checkBox(board, x, y, square))
          result = false
      }
    })
  })
  return (result);
};