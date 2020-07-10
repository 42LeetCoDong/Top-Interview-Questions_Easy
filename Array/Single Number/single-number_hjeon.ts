function singleNumber(nums: number[]): number {
	nums.sort();
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			nums.splice(i - 1, 2);
			i -= 2;
		}
	}
	return (nums[0]);
};

