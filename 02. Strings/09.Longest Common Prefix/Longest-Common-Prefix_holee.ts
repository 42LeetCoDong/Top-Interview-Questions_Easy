function longestCommonPrefix(strs: string[]): string {
    let i: number = 0
    let prefix: string = ''

    if (strs.length === 0 ) 
        return prefix;
    strs.map((x, i)=>{
        let j: number = 0
        if (i === 0)
            prefix = x
        else {
            x.split('').map((v, i2)=>{
                if (v === prefix[i2] && j === i2)
                    j++
            })
            prefix = prefix.slice(0, j)
        } 
    })
    return prefix
};

// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["aa", "a"]))
// console.log(longestCommonPrefix(["aca", "cba"]))