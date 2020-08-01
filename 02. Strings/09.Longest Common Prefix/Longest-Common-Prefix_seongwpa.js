var longestCommonPrefix = function(strs) {
    let res = [];
    if (strs.length == 0)
        return ("");
    if (strs.length == 1)
        return strs[0];
    for (let j = 0; ((j < strs[0].length) && (j < strs[1].length)); j++)
    {
        if (strs[0][j] != strs[1][j])
            break;
        else
            res.push(strs[0][j]);
    }
    for (let i = 2; i < strs.length; i++)
    {
        for (let j = 0; j < res.length; j++)
        {
            if (res[j] != strs[i][j])
            {
                res = res.slice(0, j);
            }
        }
    }
    res = res.join('');
    return (res);
};
