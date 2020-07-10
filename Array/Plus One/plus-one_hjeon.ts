function plusOne(digits: number[]): number[] {
  let is_rounding: boolean = false;

  for (let i = digits.length - 1; 0 <= i; i--) {
    if (++digits[i] === 10) {
      is_rounding = true;
      digits[i] = 0;
    }
    else {
      is_rounding = false;
      break ;
    }
  }
  if (is_rounding)
    digits.unshift(1);
  return (digits);
};


