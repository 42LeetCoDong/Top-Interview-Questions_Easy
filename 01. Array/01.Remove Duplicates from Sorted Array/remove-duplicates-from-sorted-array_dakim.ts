const checkOverlap: Function = (array: number[], index: number): boolean => {
	for (let i: number = 0; i < index; ++i) {
		if (array[i] === array[index]) {
			return (true);
		}
	}
	return (false);
}

const removeDuplicates: Function = (nums: number[]): number => {
	let index: number = 0;
	while (index < nums.length) {
		if (checkOverlap(nums, index)) {
			nums.splice(index, 1);
		} else {
			++index;
		}
	}
    return (nums.length);
};
