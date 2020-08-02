function generate(numRows: number): number[][] {
	const result: number[][] = [[1], [1,1]];

	if (numRows < 1) return ([]);
	if (numRows === 1) return ([[1]]);
	for (let i = 1; i < numRows; i++) {
		result[i] = [1];
		for (let j = 0; j < result[i - 1].length - 1; j++)
			result[i].push(result[i - 1][j] + result[i - 1][j + 1])
		result[i].push(1);
	}
	return (result);
};

console.log(generate(5));
