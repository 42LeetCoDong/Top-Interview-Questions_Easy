function countAndSay(n: number): string {
  let result: string = "1";
  console.log(n);
  while (n > 1) {
    let count = 1;
    let current = "";
    for (let i = 0; i < result.length; i++) {
      if (result[i] === result[i + 1]) {
        count++;
      } else {
        current += `${count}${result[i]}`;
        count = 1;
      }
    }
    n--;
    console.log(n);
    result = current;
  }
  return result;
}

// test code

console.log(countAndSay(1)); // 1
console.log(countAndSay(4)); // 1211
