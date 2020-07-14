const checkBeforeIndex = (nums: number[], index: number): boolean => {
    for (let i: number = 0; i < index; ++i) {
        if (nums[index] === nums[i]) {
            return (true);
        }
    }
    return (false);
}

const checkAfterIndex = (nums: number[], index: number): boolean => {
    for (let i: number = index + 1; i < nums.length; ++i) {
        if (nums[index] == nums[i]) {
            return (true);
        }
    }
    return (false);
}

const singleNumber = (nums: number[]): number => {
    let returnValue: number = -1;
    nums.forEach((value:number, index:number, array:number[]) => {
        if (!checkAfterIndex(array, index)
            && !checkBeforeIndex(array, index)) {
            returnValue = value;
        }
    })
    return (returnValue);
};
