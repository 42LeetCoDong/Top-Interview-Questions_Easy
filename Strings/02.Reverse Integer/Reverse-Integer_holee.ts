function reverse(x: number): number {
  let sign: number = x >= 0 ? 1 : -1;
  let result: number = sign * parseInt(x.toString().split("").reverse().join(""));
  return Math.pow(-2, 31) <= result && result <= Math.pow(2, 31) - 1 ? result : 0
}

console.log(reverse(120))
console.log(reverse(-123))
console.log(reverse(0))