import { isValidCardNumber } from '../validator';

describe('isValidCardNumber', () => {
  test('should return true for a valid card number', () => {
    // Example of a valid Visa card number
    expect(isValidCardNumber('4111111111111111')).toBe(true);
  });

  test('should return false for an invalid card number', () => {
    expect(isValidCardNumber('4111111111111112')).toBe(false);
  });

  test('should return false for a card number with non-digit characters', () => {
    expect(isValidCardNumber('4111-1111-1111-1111a')).toBe(false);
  });

  test('should return true for a valid card number with spaces', () => {
    expect(isValidCardNumber('4111 1111 1111 1111')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isValidCardNumber('')).toBe(false);
  });
}); 