function missingNumber(nums: number[]): number {
	let sum: number = (nums.length) * (nums.length + 1) / 2;

	nums.forEach(num => sum -= num);
	return (sum);
};

