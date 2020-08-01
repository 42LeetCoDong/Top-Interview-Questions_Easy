function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    let temp: string = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }
};
