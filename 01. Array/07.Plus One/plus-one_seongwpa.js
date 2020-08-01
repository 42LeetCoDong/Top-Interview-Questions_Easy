var plusOne = function(digits) {
  let carry = digits[digits.length - 1] == 9 ? 1 : 0;
  if (!carry)
  {
      digits[digits.length - 1] += 1;
      return (digits);
  }
  else
  {
      for (let i = digits.length - 1; i >= 0; i--)
      {
          if (digits[i] + carry == 10)
          {
              digits[i] = 0;
              carry = 1;
              if (!i)
                  digits.unshift(1);
          }
          else
          {
              digits[i] += 1;
              carry = 0;
              break;
          }
      }
      return (digits);
  }
};
