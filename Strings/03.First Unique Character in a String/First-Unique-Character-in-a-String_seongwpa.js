var firstUniqChar = function(s) {
    let check = [];
    for (let i = 0; i < 28; i++)
        check[i] = 0;
    for (let i = 0; i < s.length; i++)
        check[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    for (let i = 0; i < s.length; i++)
        if (check[s[i].charCodeAt() - 'a'.charCodeAt()] == 1)
            return(i);
    return -1;
};
