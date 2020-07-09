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

let nums = [1,1,2,3,4,4,4,5,6,6,6,6,7,8,8,8,9,9,9,9,9,13,13,13,13,13,17,17,17,17];
console.log(removeDuplicates(nums));
console.log(nums);
