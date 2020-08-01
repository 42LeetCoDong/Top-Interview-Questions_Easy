function longestCommonPrefix(strs: string[]): string {
    let result: string = '';
    if (strs.length === 0) return ('');
    let str0 = strs[0];
    for (let i = 0; str0[i]; i++) {
        let commonChar: string = strs[0][i];
        let isCommon: boolean = true;
        for (let str of strs) 
            if (str[i] !== commonChar) isCommon = false;
        if (!isCommon)
            return (result);
        result += commonChar;
    }
    return (result);
};

console.log(longestCommonPrefix([]));