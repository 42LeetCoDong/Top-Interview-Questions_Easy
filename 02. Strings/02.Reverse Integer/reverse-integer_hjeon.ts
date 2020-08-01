function reverseStr(s: string[]): string {
  for (let i = 0; i < s.length / 2; i++) {
    let temp: string = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }
  return (s.join(''));
};

function reverse(x: number): number {
  let isMinus: number = x < 0 ? -1 : 1;
  x = isMinus === -1 ? -1 * x : x;
  let result: number = parseInt(reverseStr(x.toString().split(''))) * isMinus;
  if (-(2 ** 31) > result || 2 ** 31 -1 < result)
    result = 0;
  return (result);
};

