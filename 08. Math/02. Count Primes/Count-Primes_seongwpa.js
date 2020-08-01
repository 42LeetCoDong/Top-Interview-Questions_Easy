var countPrimes = function(n) {
    let res = [];
    let flag;
    n--;
    while (n >= 2)
    {
        flag = 0;
        for (let i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
            {
                flag = 1;
                break;
            }
        }
        if(flag == 0)
            res.push(n);
        n--;
    }
    return res.length;
};
