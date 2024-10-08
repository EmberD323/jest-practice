const capitalize = require('./capitalize');

test('when nothing is capitalized,capitalize the first letter', () => {
  expect(capitalize("onion")).toBe("Onion");
});

test('when all letters capitalized,capitalize only the first letter', () => {
    expect(capitalize("TURNIP")).toBe("Turnip");
});

test('multiword, only one capital', () => {
    expect(capitalize("turnip and onions")).toBe("Turnip and onions");
});

test('accepts only strings', () => {
    expect(capitalize(123)).toThrow(Error);
});

test('needs an input', () => {
    expect(capitalize()).toThrow(Error);
});