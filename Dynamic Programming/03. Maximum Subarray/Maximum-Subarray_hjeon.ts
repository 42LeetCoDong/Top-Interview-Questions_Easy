function maxSubArray(nums: number[]): number {
  let contiguous: number[];
  let largestSum: number = nums[0] || 0;

  for (let i = 0; i < nums.length; i++) {
    contiguous = [];
    let tempSum: number = 0;
    for (let j = i; j < nums.length; j++) {
      contiguous.push(nums[j]);
      tempSum += nums[j]
      if (tempSum > largestSum) largestSum = tempSum
    }
  }
  return (largestSum);
};