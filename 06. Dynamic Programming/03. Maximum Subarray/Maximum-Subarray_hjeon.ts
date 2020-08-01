function maxSubArray(nums: number[]): number {
  let largestSum: number = nums[0] || 0;

  for (let i = 0; i < nums.length; i++) {
    let tempSum: number = 0;
    for (let j = i; j < nums.length; j++) {
      tempSum += nums[j]
      if (tempSum > largestSum) largestSum = tempSum
    }
  }
  return (largestSum);
};
