var maxProfit = function(prices) {
    let maxp = 0;
    let len = prices.length;
    for (let i = 0; i < len - 1; i++)
    {
        for (let j = i + 1; j < len; j++)
        {
            if (( prices[j] - prices[i] ) > maxp )
                maxp = prices[j] - prices[i];
        }
    }
    return maxp;
};
