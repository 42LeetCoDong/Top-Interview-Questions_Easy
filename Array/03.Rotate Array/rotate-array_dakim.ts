/**
 Do not return anything, modify nums in-place instead.
 */

const rotate = (nums: number[], k: number): void => {
    for (let i: number = 1; i <= k; ++i) {
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
    }
};
