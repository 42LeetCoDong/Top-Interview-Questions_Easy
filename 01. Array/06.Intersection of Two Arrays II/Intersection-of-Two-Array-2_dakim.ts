const checkArrayValue = (array: number[], inputValue: number): number => {
    let returnValue: number = -1;
    array.forEach((value: number, index: number): void => {
        if (value === inputValue) {
            returnValue = index;
        }
    });
    return (returnValue);
}

const intersect = (nums1: number[], nums2: number[]): number[] => {
    const returnArray: number[] = [];
    let index: number = 0;
    nums1.forEach((value: number): void => {
        if (checkArrayValue(nums2, value) !== -1) {
            returnArray.push(value);
            nums2.splice(checkArrayValue(nums2, value), 1);
        }
    });
    return (returnArray);
};
