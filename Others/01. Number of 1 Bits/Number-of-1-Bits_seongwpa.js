var hammingWeight = function(n) {
    let cnt = 0;
    while (n > 0)
    {
        if (n % 2 == 1)
            cnt++;
        n = parseInt(n / 2);
    }
    return cnt;
};
