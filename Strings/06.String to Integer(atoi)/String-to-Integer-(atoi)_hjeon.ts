//걍 parseInt가 atoi임
function myAtoi(str: string): number {
	let result: number = 0;
	let isMinus: boolean = false;

	str = str.trimLeft();
	if (str[0] === '-' || str[0] === '+') {
		if (str[0] === '-') isMinus = true;
		str = str.slice(1);
	}
	for (let i = 0; str[i] && str[i].match(/[0-9]/); i++) {
		result *= 10;
		result += parseInt(str[i]);
	}
	result = (isMinus) ? -result : result;
	if (result < -(2 ** 31)) result = -(2 ** 31);
	if ((2 ** 31) - 1 < result) result = (2 ** 31) - 1;
	return (result);
};
