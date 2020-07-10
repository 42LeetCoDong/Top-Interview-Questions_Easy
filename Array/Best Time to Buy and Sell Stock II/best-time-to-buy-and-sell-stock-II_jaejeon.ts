function maxProfit(prices: number[]): number {
    let     profit:     number = 0;
    let     prevPrice:  number = 0;
    let     nextPrice:  number = 0;
    const   n:          number = prices.length;
    
    for (let [i, price] of prices.entries()){
        if (i == 0 || prevPrice > price)
        {
            prevPrice = price;
            continue;
        }
        if (i < n)
        {
            nextPrice = prices[i+1];
        }
        if (price > nextPrice || nextPrice === undefined)
        {
            profit += price - prevPrice;
            prevPrice = price;
        }
        
    }
    return profit;
};
