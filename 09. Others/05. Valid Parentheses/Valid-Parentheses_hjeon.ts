function isValid(s: string): boolean {
	let stack: string[] = [];

	for (let c of s) {
		if (/\(|\[|\{/.test(c)) stack.push(c);
		else {
			let earlierOne: number = (stack.pop() || '').charCodeAt(0);
			let cCode: number = c.charCodeAt(0);

			if (c === ')') cCode -= 1;
			else cCode -= 2;
			if (earlierOne !== cCode) return (false);
		}
	}
	if (stack.length) return (false);
	else return (true);
};


console.log(isValid('({})'));
