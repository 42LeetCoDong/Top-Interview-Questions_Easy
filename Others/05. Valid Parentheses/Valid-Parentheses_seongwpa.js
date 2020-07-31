var isValid = function(s) {
    let valstack = [];
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] == ')')
        {
            if (valstack.pop() != '(')
                return false;
        }
        else if (s[i] == '}')
        {
            if (valstack.pop() != '{')
                return false;
        }
        else if (s[i] == ']')
        {
            if (valstack.pop() != '[')
                return false;
        }
        else
            valstack.push(s[i]);
    }
    if (valstack[0])
        return false;
    return true;
};
