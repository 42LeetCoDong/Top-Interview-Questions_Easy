/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	let reversed = 0;

	for (let i = 0; i < 32; i++) {
			reversed += (n & 1) * (2 ** (31 - i));
			n >>= 1;
	}
	return (reversed);
};
