function isPrime(i: number): boolean {
	for (let j = 2; j <= Math.sqrt(i); j++)
		if (i % j === 0)
			return (false);
	return (true);
}

function countPrimes(n: number): number {
	let cnt: number = 0;

	for (let i = 2; i < n; i++)
		if (isPrime(i))cnt++;
	return (cnt);
};
