function hammingDistance(x: number, y: number): number {
	let cnt: number = 0;

	while (x || y) {
		if ((x & 1) ^ (y & 1)) cnt++
		x >>= 1;
		y >>= 1;
	}
	return (cnt);
};
