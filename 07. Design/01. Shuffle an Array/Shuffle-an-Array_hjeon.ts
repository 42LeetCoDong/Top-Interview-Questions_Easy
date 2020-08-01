class Solution {
	arr: number[] = [];
	origin: number[] = [];

    constructor(nums: number[]) {
		this.arr = [...nums];
		this.origin = [...nums];
		// this.shuffle.bind(this);
		// this.reset.bind(this);
    }

    reset(): number[] {
		return (this.origin);
    }

    shuffle(): number[] {
		const newArr: number[] = [];
		let ranNum: number;

		while (this.arr.length) {
			ranNum = Math.floor(Math.random() * this.arr.length);
			newArr.push(this.arr[ranNum]);
			this.arr.splice(ranNum, 1);
		}
		this.arr = [...this.origin];
		return (newArr);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
let numbs: number[] = [1, 2, 3];
 var obj = new Solution(numbs)
 var param_1 = obj.reset()
 var param_2 = obj.shuffle()
console.log(param_1)
console.log(param_2)
