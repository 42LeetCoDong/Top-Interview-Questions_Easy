var reverse = function(x) {
  var tmp = x < 0 ? -1 * x : x;
  var rev_x = 0;
  var sign = x < 0 ? 1 : 0;
  while (tmp > 0)
  {
      rev_x = rev_x * 10 + tmp % 10;
      tmp = parseInt(tmp / 10);
  }
  if (rev_x > 2147483647 || rev_x < -2147483648)
      return (0);
  else
      return sign == 1 ? rev_x * -1 : rev_x;
};
