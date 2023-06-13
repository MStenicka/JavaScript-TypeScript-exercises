import { addNum, divide, isPrime } from './math';

describe('addNum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(addNum(1, 2)).toBe(3);
  });

  test('should add two numbers correctly', () => {
    expect(addNum(2, 3)).toEqual(5);
    expect(addNum(10, -5)).toEqual(5);
    expect(addNum(0, 0)).toEqual(0);
  });
});

describe('divide', () => {
  test('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(-8, 4)).toEqual(-2);
    expect(divide(0, 5)).toEqual(0);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Unable to divide by 0');
  });
});

describe('isPrime', () => {
  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });
});
