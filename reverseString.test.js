const reverseString = require('./reverseString');


test('take a sing word and return reversed', () => {
    expect(reverseString("onion")).toBe("noino");
});

test('multiword reversal', () => {
    expect(reverseString("onion and turnip")).toBe("pinrut dna noino");
});

test('letters and numbers', () => {
    expect(reverseString("I am 28 years old")).toBe("dlo sraey 82 ma I");
});
