export function isValidCardNumber(number) {
  if (!number || /[^0-9\s-]/.test(number)) {
    return false;
  }

  const digits = number.replace(/\D/g, '').split('').reverse().map(Number);

  if (digits.length === 0) {
    return false;
  }
  
  const sum = digits.reduce((acc, digit, idx) => {
    if (idx % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return acc + digit;
  }, 0);
  return sum % 10 === 0;
}