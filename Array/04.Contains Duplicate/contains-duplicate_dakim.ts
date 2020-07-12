const compareArray = (firstArray: number[], secondArray: number[]): boolean => {
    for (let i: number = 0; i < firstArray.length; ++i) {
        if (secondArray.includes(firstArray[i])) {
            return (true);
        }
    }
    return (false);
}

const containsDuplicate = (nums: number[]): boolean => {
    if (1 < nums.length) {
        const firstArray = nums.slice(0, nums.length / 2);
        const secondArray = nums.slice(nums.length / 2, nums.length);
        if (compareArray(nums.slice(0, nums.length / 2),
                nums.slice(nums.length / 2, nums.length))) {
        return (true);
        }
        if (containsDuplicate(firstArray)) {
            return (true);
        }
        if (containsDuplicate(secondArray)) {
            return (true);
        }
    }
    return (false);
};
