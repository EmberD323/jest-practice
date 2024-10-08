const caesarCipher = require('./caesarCipher');

test('shift by one', () => {
    expect(caesarCipher("onion",1)).toBe("pojpo");
});

test('shift by two', () => {
    expect(caesarCipher("turnip",2)).toBe("vwtpkr");
});

test('wrap the alphapet after z', () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
});

test('cases preserved', () => {
    expect(caesarCipher("MeLoN",4)).toBe("QiPsR");
});

test('puctuation unchanged', () => {
    expect(caesarCipher("turnip!",2)).toBe("vwtpkr!");
});

test('spaces unchanged', () => {
    expect(caesarCipher("turnip and onion",2)).toBe("vwtpkr cpf qpkqp");
});