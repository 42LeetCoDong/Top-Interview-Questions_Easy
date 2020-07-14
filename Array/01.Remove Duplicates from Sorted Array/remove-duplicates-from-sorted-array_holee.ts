function removeDuplicates(nums: number[]): number {
    const len = nums.filter((x, i)=>nums.indexOf(x) === i).map((x, i)=>{
        nums[i] = x
    }).length
    nums.splice(len)
    return len
};

// let nums: Array<number> = [1,1,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6]
// console.log(removeDuplicates(nums))
// console.log(nums)