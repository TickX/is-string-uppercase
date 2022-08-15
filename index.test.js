const isUpperCase = require('.');

describe('isUpperCase Tests', () => {
  it('Testing for c', () => {
    expect(isUpperCase('c')).toBeFalsy();
  });

  it('Testing for hello I AM DONALD', () => {
    expect(isUpperCase('hello I AM DONALD')).toBeFalsy();
  });

  it('Testing for HELLO I AM DONALD', () => {
    expect(isUpperCase('HELLO I AM DONALD')).toBeTruthy();
  });

  it('Testing for ACSKLDFJSgSKLDFJSKLDFJ', () => {
    expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toBeFalsy();
  });

  it('Testing for ACSKLDFJSGSKLDFJSKLDFJ', () => {
    expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toBeTruthy();
  });
});
