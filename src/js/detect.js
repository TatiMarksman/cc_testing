export function detectCardType(number) {
  const patterns = {
    mir: /^220[0-4]/,
    visa: /^4/,
    mastercard: /^(5[1-5]|2[2-7])/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
    jcb: /^35/,
    diners: /^3(?:0[0-5]|[68])/,
  };
  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(number)) return type;
  }
  return null;
}