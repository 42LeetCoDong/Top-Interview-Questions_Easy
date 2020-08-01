function countAndSay(n: number): string {
	let start: string = "1"

	while (--n > 0) {
		let count: number = 1
		let result: number[] = []
		let i: number = 0
		while (start.length - i > 0) {
			if (start[i] == start[i + 1]) {
				count++;
			} else {
				result.push(count)
				result.push(parseInt(start[i]))
				count = 1;
			}
			i++;
		}
		start = result.join("")
	}
	return start
};

console.log(countAndSay(1))

// 1	1
// 2	11
// 3	21
// 4	1211
// 5	111221
// 6	312211
// 7	13112221
// 8	1113213211
// 9	31131211131221
// 10	13211311123113112211