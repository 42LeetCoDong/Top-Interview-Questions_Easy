function romanToInt(s: string): number {
	let int: number = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'I') {
			if (s[i + 1] === 'V' || s[i + 1] === 'X') {
				if (s[i + 1] === 'V') int += 4;
				else if (s[i + 1] === 'X') int += 9;
				i++;
			} else {
				int += 1;
			}
		}
		else if (s[i] === 'V') int += 5;
		else if (s[i] === 'X') {
			if (s[i + 1] === 'L' || s[i + 1] === 'C') {
				if (s[i + 1] === 'L') int += 40;
				else if (s[i + 1] === 'C') int += 90;
				i++;
			} else {
				int += 10;
			}
		}
		else if (s[i] === 'L') int += 50;
		else if (s[i] === 'C') {
			if (s[i + 1] === 'V' || s[i + 1] === 'X') {
				if (s[i + 1] === 'V') int += 400;
				else if (s[i + 1] === 'X') int += 900;
				i++;
			} else {
				int += 100;
			}
		}
		else if (s[i] === 'D') int += 500;
		else if (s[i] === 'M') int += 1000;
		else return (-1);
	}
	return (int);
};
