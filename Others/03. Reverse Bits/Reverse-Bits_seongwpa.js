var reverseBits = function(n) {
    let revn = 0;
    for (let i = 0; i < 32; i++)
    {
        revn = revn * 2;
        if (n % 2 == 1)
            revn = revn + 1;
        n = parseInt(n / 2);
    }
    return revn;
};
