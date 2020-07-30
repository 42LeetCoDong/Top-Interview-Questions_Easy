let pascal;
function pascaldp(res, n, i = 0)
{
    if (pascal[i])
        res.push(pascal);
    if (!pascal[i])
    {
        let tmp = [1];
        for (let j = 1; j < i; j++)
        {
            tmp.push(pascal[j - 1] + pascal[j]);
        }
        tmp.push(1)
        pascal = tmp;
        res.push(pascal);
    }
    if (n == i + 1)
        return;
    else
        pascaldp(res, n, i + 1);
};

var generate = function(numRows) {
    if (numRows == 0) return [];
    let res = [];
    pascal = [1];
    pascaldp(res, numRows, 0);
    return res;
};
