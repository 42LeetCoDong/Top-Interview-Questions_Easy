let dp = [1, 1, 2, 3, 5, 8];

var climbStairs = function(n) {
    if (dp[n]) return dp[n];
    else
    {
        dp.push(climbStairs(n - 1) + climbStairs(n - 2));
        return dp[n];
    }
};
