const isIncrease: Function = (prices: number[], index: number): boolean => {
	if (index < prices.length) {
		if (prices[index] < prices[index + 1]) {
			return (true);
		}
	}
	return (false);
}

const maxProfit: Function = (prices: number[]) => {
	let profit: number = 0;
	for (let i: number = 0; i < prices.length; ++i) {
		if (isIncrease(prices, i)) {
			profit += prices[i + 1] - prices[i];
		}
	}
	return (profit);
}
