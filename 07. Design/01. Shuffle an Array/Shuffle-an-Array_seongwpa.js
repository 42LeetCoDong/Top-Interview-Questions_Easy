var Solution = function(nums) {
    this.origin = nums;
};

Solution.prototype.reset = function() {
    return this.origin;
};

Solution.prototype.shuffle = function() {
    let arr = this.origin.slice(0);
    for (let i = 0; i < arr.length; i++)
    {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
};
