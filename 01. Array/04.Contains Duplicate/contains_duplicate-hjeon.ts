function containsDuplicate(nums: number[]): boolean {
	nums.sort();
	for (let idx = 1; idx < nums.length; idx++)
		if (nums[idx - 1] === nums[idx])
				return (true);
	return (false);
};

