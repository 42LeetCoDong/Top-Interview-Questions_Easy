function removeDuplicates(nums: number[]): number {
    let curElm: number;
    let nextIdx: number;
    let n: number;

    n = nums.length;
    curElm = nums[0];
    nextIdx = 1;
    for  (let num of nums.slice(1))  {
        if (curElm === num){
            continue;
        }
        curElm = num;
        nums[nextIdx] = curElm;
        nextIdx++;
    }
    nums = nums.slice(0, nextIdx);
    
    return nums.length;
};
