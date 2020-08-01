var twoSum = function(nums, target) {
  let res = [];
  let check = false;

  for (let i = 0; i < nums.length; i++)
  {
      if (!check)
          for (let j = i + 1; j < nums.length; j++)
          {
              if (!check && nums[i] + nums[j] == target)
              {
                  check = true;
                  res[0] = i;
                  res[1] = j;
              }
          }
  }
  return (res);
};
