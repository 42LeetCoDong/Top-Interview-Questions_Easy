function rob(nums: number[]): number {
  let maxProfitList: number[] = new Array(nums.length);
  maxProfitList[0] = 10;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) maxProfitList[0] = nums[0];
    else if (i === 1) maxProfitList[1] = Math.max(nums[0], nums[1]);
    else maxProfitList[i] = maxProfitList[i - 2] + nums[i] < maxProfitList[i - 1] ? maxProfitList[i - 2] + nums[i] : maxProfitList[i - 1];
  }
  return (maxProfitList[nums.length - 1]);
}

console.log(rob([1, 2, 3, 1]))