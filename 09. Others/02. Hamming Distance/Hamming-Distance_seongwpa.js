var hammingDistance = function(x, y) {
    let dist = (x | y) - (x & y);
    let cnt = 0;
    while (dist > 0)
    {
        if (dist % 2 == 1)
            cnt++;
        dist = parseInt(dist / 2);
    }
    return cnt;
};
