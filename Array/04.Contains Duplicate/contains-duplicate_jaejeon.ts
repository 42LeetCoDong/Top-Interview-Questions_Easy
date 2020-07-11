function containsDuplicate(nums: number[]): boolean {
    let checks: Map<number, boolean> = new Map();
    for (let num of nums){
        if (checks.has(num))
            return true;
        checks.set(num, true);
    }
    return false;
};
