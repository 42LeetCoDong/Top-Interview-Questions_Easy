var isPowerOfThree = function(n) {
    if (n == 1) return true;
    while (n > 3 && n % 3 == 0)
        n = parseInt(n / 3);
    return n == 3;
};
