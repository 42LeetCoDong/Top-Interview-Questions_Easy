var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++)
    {
        if (nums.filter(num => num == i)[0] == null)
            return i;
    }
};
