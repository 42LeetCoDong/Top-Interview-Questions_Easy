/**
 Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < i; j++)
        {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < parseInt(matrix.length / 2); j++)
        {
            let tmp = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }
};
