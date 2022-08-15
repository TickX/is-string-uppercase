const isUpperCase = require('.');

describe('isUpperCase Tests', () => {
  it('Testing for c', () => {
    expect(isUpperCase('c')).toBe(false);
  });

  it('Testing for hello I AM DONALD', () => {
    expect(isUpperCase('hello I AM DONALD')).toBe(false);
  });

  it('Testing for HELLO I AM DONALD', () => {
    expect(isUpperCase('HELLO I AM DONALD')).toBe(true);
  });

  it('Testing for ACSKLDFJSgSKLDFJSKLDFJ', () => {
    expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toBe(false);
  });

  it('Testing for ACSKLDFJSGSKLDFJSKLDFJ', () => {
    expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toBe(true);
  });
});
