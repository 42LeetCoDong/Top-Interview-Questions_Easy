var rotate = function(nums, k) {
  let rot = nums.length - k % nums.length;
  let res = nums.splice(0, rot);
  for (let i = 0; i < res.length; i++)
      nums[nums.length] = res[i];
  return (nums);
};
