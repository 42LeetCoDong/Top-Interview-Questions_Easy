/**
 Do not return anything, modify nums in-place instead.
 */

const rotate = (nums: number[], k: number): void => {
    for (let i: number = 1; i <= k; ++i) {
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
        console.log(nums);
    }
};

const array = [1,2,3,4,5,6,7];
rotate(array, 3);
console.log(array);
