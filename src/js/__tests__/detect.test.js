import { detectCardType } from '../detect';

describe('detectCardType', () => {
  test('should detect Visa', () => {
    expect(detectCardType('4111111111111111')).toBe('visa');
  });

  test('should detect Mastercard', () => {
    expect(detectCardType('5100000000000000')).toBe('mastercard');
    expect(detectCardType('2221000000000000')).toBe('mastercard');
  });

  test('should detect American Express', () => {
    expect(detectCardType('340000000000000')).toBe('amex');
    expect(detectCardType('370000000000000')).toBe('amex');
  });

  test('should detect Discover', () => {
    expect(detectCardType('6011000000000000')).toBe('discover');
  });

  test('should detect JCB', () => {
    expect(detectCardType('3530000000000000')).toBe('jcb');
  });

  test('should detect Diners Club', () => {
    expect(detectCardType('30000000000000')).toBe('diners');
  });

  test('should detect Mir', () => {
    expect(detectCardType('2200000000000000')).toBe('mir');
  });

  test('should return null for an unknown card type', () => {
    expect(detectCardType('9999999999999999')).toBeNull();
  });
}); 