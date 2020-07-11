/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n: number = nums.length;
    for (let i = 0; i < k; i++)
    {
        let tail = nums.slice(0, n-1);
        nums[0] = nums[n-1];
        nums.splice(1, n-1, ...tail);
    }
};
