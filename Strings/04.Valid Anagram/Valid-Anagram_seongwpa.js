var isAnagram = function(s, t) {
  if (s.length != t.length)
      return false;
  let check = [];
  for (let i = 0; i < 28; i++)
      check[i] = 0;
  for (let i = 0; i < s.length; i++)
      check[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  for (let i = 0; i < t.length; i++)
  {
      if (check[t[i].charCodeAt() - 'a'.charCodeAt()] == 0)
          return false;
      check[t[i].charCodeAt() - 'a'.charCodeAt()]--;
  }
  return true;
};
