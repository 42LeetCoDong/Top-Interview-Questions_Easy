/**
 Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let tmp, len = s.length;
  for (let i = 0; i < parseInt(len / 2); i++)
  {
      tmp = s[len - 1 - i];
      s[len - 1 - i] = s[i];
      s[i] = tmp;
  }
};
