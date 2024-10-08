const calculator = require('./calculator');


test('add two numbers', () => {
    expect( calculator.add(1,2)).toBe(3);
});

test('add two numbers', () => {
    expect(calculator.add(100,2000)).toBe(2100);
});

test('subtract two numbers', () => {
    expect(calculator.subtract(5,1)).toBe(4);
});

test('subtract two numbers', () => {
    expect(calculator.subtract(1,5)).toBe(-4);
});

test('divide two numbers', () => {
    expect(calculator.subtract(4,2)).toBe(2);
});

test('cant divide by 0', () => {
    expect(calculator.divide(4,0)).toBe("cannot divide by 0");
});

test('cant divide 0', () => {
    expect(calculator.divide(0,4)).toBe("cannot divide 0");
});

test('multiply two numbers', () => {
    expect(calculator.multiply(4,2)).toBe(8);
});


