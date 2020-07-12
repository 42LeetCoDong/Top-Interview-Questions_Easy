function singleNumber(nums: number[]): number {
    for (let [idx, elm] of nums.entries()){
        if (nums.slice(idx + 1).concat(nums.slice(0, idx)).indexOf(elm) === -1){
            return elm;
        }
    }
    return 0;
};
