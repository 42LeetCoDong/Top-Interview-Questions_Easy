var rob = function(nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    let maxsum = [];
    maxsum[0] = nums[0];
    maxsum[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++)
    {
        if (maxsum[i - 2] + nums[i] > maxsum[i - 1])
            maxsum[i] = maxsum[i - 2] + nums[i];
        else
            maxsum[i] = maxsum[i - 1];
    }
    return maxsum.pop();
};
