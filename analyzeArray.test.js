const analyzeArray = require('./analyzeArray');
test('average', () => {
    expect(analyzeArray([1,2,3])).toEqual({average:2, min:1, max:3, length:3});
});

test('and min', () => {
    expect(analyzeArray([4,5,6,7])).toEqual({average:5.5, min:4, max:7,length:4});
});

test('and max', () => {
    expect(analyzeArray([12,20,1,500,50])).toEqual({average:116.6, min:1, max:500,length:5});
});

test('and length', () => {
    expect(analyzeArray([72,2,250,900042,47])).toEqual({average:180082.6,min:2,max:900042,length:5});
});