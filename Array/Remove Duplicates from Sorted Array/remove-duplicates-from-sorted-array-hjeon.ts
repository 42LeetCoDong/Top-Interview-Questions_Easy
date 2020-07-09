function removeDuplicates(nums: number[]): number {
	for (let i = 0; i < nums.length; i++){
		if (0 < i && nums[i - 1] === nums[i])
			nums.splice(i--, 1);
	}
	return (nums.length);
};
