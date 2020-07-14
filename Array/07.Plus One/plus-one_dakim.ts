const plusOneRecursion = (digits: number[], index: number): number[] => {
	if (index < 0) {
		digits.unshift(1);
		return (digits);
	}
	if (digits[index] === 9) {
		digits.splice(index, 1, 0);
		return (plusOneRecursion(digits, index - 1));
	} else {
		digits.splice(index, 1, digits[index] + 1);
		return (digits);
	}
}

const plusOne = (digits: number[]): number[] => {
	return (plusOneRecursion(digits, digits.length - 1));
};
