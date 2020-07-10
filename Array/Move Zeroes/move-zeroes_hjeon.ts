function moveZeroes(nums: number[]): void {
	let len_origin: number = nums.length;

	for (let i = 0; i < len_origin; i++) {
		if (nums[i] === 0) {
			nums.splice(i--, 1);
			nums.push(0);
			len_origin--;
		}
	}
};
