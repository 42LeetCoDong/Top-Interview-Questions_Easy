var moveZeroes = function(nums) {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++)
  {
      if (nums[i] != 0)
          nums[cnt++] = nums[i];
  }
  while (cnt < nums.length)
      nums[cnt++] = 0;
  return (nums);
};
