const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

const { fromDollarToYen } = require('./app.js');

test("1.00 dollar should be equivalent to yen", function(){
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

const { fromYenToPound } = require('./app.js');

test("156.5 yen should be equivalent to 1 British pound", function() {
    const pounds = fromYenToPound(156.5); 
    const expected = 1; 
    expect(pounds).toBeCloseTo(expected);
});