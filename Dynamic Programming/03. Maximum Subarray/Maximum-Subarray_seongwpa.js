var maxSubArray = function(nums) {
    let currsum = 0;
    let maxsum = 0;
    let flag = 0;
    for (let i = 0; i < nums.length; i++)
    {

        //all elements of nums : negative? then flag = 0
        if (nums[i] >= 0)
            flag = 1;

        currsum = Math.max((currsum + nums[i]), 0);
        maxsum = Math.max(currsum, maxsum);
    }
    // if all elements of nums : negative
    if (flag == 0)
    {
        maxsum = nums[0];
        for (let i = 1; i < nums.length; i++)
            maxsum = nums[i] > maxsum ? nums[i] : maxsum;
    }
    // biggest element of nums is answer.

    return maxsum;
};
