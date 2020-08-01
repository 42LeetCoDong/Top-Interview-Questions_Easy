const countZeros = (nums: number[]): number => {
    let returnValue: number = 0;
    nums.forEach((value: number) => {
        if (value === 0) {
            ++returnValue;
        }
    });
    return (returnValue);
}

const deleteZeros = (nums: number[]): void => {
    let i: number = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
        } else {
            ++i;
        }
    }
}

const pushZeros = (nums: number[], index: number): void => {
    let i: number = 0;
    while (i < index) {
        nums.push(0);
        ++i;
    }
}

const moveZeroes = (nums: number[]): void => {
    const zeroCount = countZeros(nums);
    deleteZeros(nums);
    pushZeros(nums, zeroCount);
};

const array: number[] = [1,2,2,2,0,0,1,1];
moveZeroes(array);
console.log(array);
