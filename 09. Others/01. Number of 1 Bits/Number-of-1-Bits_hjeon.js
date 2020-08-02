/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	let cnt = 0;

	while (n) {
		if (n & 1 === 1) cnt++;
		n >>= 1;
	}
	return (cnt);
};

console.log(hammingWeight(11111111111111111111111111111101))
