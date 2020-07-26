function maxProfit(prices: number[]): number {
  let maxProfit: number = 0;
  let minPrice: number = prices[0] || 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice)
      minPrice = prices[i];
    else if (prices[i] > minPrice && (prices[i] - minPrice) > maxProfit)
      maxProfit = (prices[i] - minPrice);
  }
  return (maxProfit);
};