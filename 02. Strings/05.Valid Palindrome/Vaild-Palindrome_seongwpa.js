function isalnum(c) {
  if ((c >= 'a') && (c <= 'z') || (c >= '0') && (c <= '9'))
      return (c);
  else if ((c >= 'A') && (c <= 'Z'))
      return (c.toLowerCase());
  else
      return false;
}

var isPalindrome = function(s) {
  let tmp = [];
  for (let i = 0; i < s.length; i++)
  {
      if (isalnum(s[i]))
          tmp.push(isalnum(s[i]));
  }
  for (let i = 0; i < parseInt(tmp.length / 2); i++)
  {
      if (tmp[i] != tmp[tmp.length - 1 - i])
          return false;
  }
  return true;
};
