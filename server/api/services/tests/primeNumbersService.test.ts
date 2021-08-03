import { expect } from 'chai';
import { isPrimeNumber, getPrimeNumbersService } from '../primeNumbersService';

describe('Prime numbers service - isPrimeNumber()', () => {
  it('It should return that the number is prime', () => {
    expect(isPrimeNumber(11)).to.true;
  });
  it('It should return that the number is not prime', () => {
    expect(isPrimeNumber(4)).to.false;
  });
});

describe('Prime numbers service - getPrimeNumbersService()', () => {
  it('It should return an array with prime numbers from 10 to 2', () => {
    const result = getPrimeNumbersService(10);
    expect(result.length).to.equal(4);
    expect(result.includes(2)).to.true;
    expect(result.includes(3)).to.true;
    expect(result.includes(5)).to.true;
    expect(result.includes(7)).to.true;
  });
  it('It should return an empty array for numbers less than 2', () => {
    expect(getPrimeNumbersService(1).length).to.equal(0);
    expect(getPrimeNumbersService(0).length).to.equal(0);
    expect(getPrimeNumbersService(-1).length).to.equal(0);
  });
});
