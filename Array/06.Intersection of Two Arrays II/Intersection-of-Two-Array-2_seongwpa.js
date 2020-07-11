var intersect = function(nums1, nums2) {
  let nums = [];
  for (let i = 0; i < nums1.length; i++)
  {
      for (let j = 0; j < nums2.length; j++)
      {
          if (nums1[i] == nums2[j] && nums1[i] != null)
          {
              nums.push(nums1[i]);
              nums1[i] = null;
              nums2[j] = null;
          }
      }
  }
  return nums;
};
