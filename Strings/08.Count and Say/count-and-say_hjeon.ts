function countAndSay(n: number): string {
	let result: string = '1';

	while (--n) {
		let temp: string = '';
		for (let i = 0; i < result.length; i++) {
			let curChar: string = result[i];
			let cnt: number = 1;
			for (let j = i + 1; j < result.length && curChar === result[j]; j++) {
				cnt++;
				i = j;
			}
			temp += (cnt.toString() + curChar);
		}
		result = temp;
	}
	return (result);
};
