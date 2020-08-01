var myAtoi = function(str) {
  let num = 0;
  let i = 0, sign = 1;
  while (str[i] == ' ')
      i++;
  if (str[i] == '-' || str[i] == '+')
  {
      if (str[i] == '-')
          sign = -1;
      i++;
  }
  while (str[i] >= '0' && str[i] <= '9')
{
  num = num * 10 + (str[i].charCodeAt() - '0'.charCodeAt());
      if (num > 2147483648 && sign == -1)
          return (-2147483648);
      else if (num > 2147483647 && sign == 1)
          return (2147483647);
  i++;
}
  return (num * sign);
};
