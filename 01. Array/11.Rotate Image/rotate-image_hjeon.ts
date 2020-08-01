function rotateClockwise(matrix:number[][], depth: number) {
    let temp: number;
    let temp2: number;
    for (let i = depth; i < matrix.length - depth - 1; i++) {
        temp = matrix[i][matrix.length - depth - 1];
        matrix[i][matrix.length - depth - 1] = matrix[depth][i];
        temp2 = matrix[matrix.length - depth - 1][matrix.length - i - 1];
        matrix[matrix.length - depth - 1][matrix.length - i - 1] = temp;
        temp = matrix[matrix.length - 1 - i][depth];
        matrix[matrix.length - 1 - i][depth] = temp2;
        matrix[depth][i] = temp;
    }
}

function rotate(matrix: number[][]): void {
    for (let i = 0; i < Math.floor(matrix[0].length / 2); i++)
        rotateClockwise(matrix, i);
};
