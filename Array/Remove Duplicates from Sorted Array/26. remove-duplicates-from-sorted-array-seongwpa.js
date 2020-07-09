var removeDuplicates = function(nums) {
	let Dup = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[Dup] != nums[i])
		{
			Dup++;
			nums[Dup] = nums[i];
		}
	}
	nums = nums.slice(0, Dup + 1);
	return nums.length;
};
