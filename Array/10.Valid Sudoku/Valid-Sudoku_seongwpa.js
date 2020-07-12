function rowvalid(board) {
    for (let i = 0; i < 9; i++)
    {
        let tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 9; j++)
        {
            if (board[i][j] != '.')
            {
                tmp[board[i][j] - '0']++;
                if (tmp[board[i][j] - '0'] > 1)
                    return false;
            }
        }
    }
    return true;
};

function colvalid(board) {
    for (let i = 0; i < 9; i++)
    {
        let tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 9; j++)
        {
            if (board[j][i] != '.')
            {
                tmp[board[j][i] - '0']++;
                if (tmp[board[j][i] - '0'] > 1)
                    return false;
            }
        }
    }
    return true;
};

function squarevalid(board) {
    for (let sqr = 0; sqr < 9; sqr++)
    {
        let tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                let sqrcol = parseInt(sqr / 3) * 3 + i;
                let sqrrow = sqr % 3 * 3 + j;
                if (board[sqrcol][sqrrow] != '.')
                {
                    tmp[board[sqrcol][sqrrow] - '0']++;
                    if (tmp[board[sqrcol][sqrrow] - '0'] > 1)
                        return false;
				}
				console.log(board[sqrcol][sqrrow]);
            }
        }
		console.log(tmp);
    }
    return true;
};

var isValidSudoku = function(board) {
    return (rowvalid(board) && colvalid(board) && squarevalid(board));
};
/*
    [[".",".",".",".","5",".",".","1","."],
     [".","4",".","3",".",".",".",".","."],
     [".",".",".",".",".","3",".",".","1"],
     ["8",".",".",".",".",".",".","2","."],
     [".",".","2",".","7",".",".",".","."],
     [".","1","5",".",".",".",".",".","."],
     [".",".",".",".",".","2",".",".","."],
     [".","2",".","9",".",".",".",".","."],
     [".",".","4",".",".",".",".",".","."]]
*/
console.log(squarevalid([[".",".",".",".","5",".",".","1","."],
[".","4",".","3",".",".",".",".","."],
[".",".",".",".",".","3",".",".","1"],
["8",".",".",".",".",".",".","2","."],
[".",".","2",".","7",".",".",".","."],
[".","1","5",".",".",".",".",".","."],
[".",".",".",".",".","2",".",".","."],
[".","2",".","9",".",".",".",".","."],
[".",".","4",".",".",".",".",".","."]]));
