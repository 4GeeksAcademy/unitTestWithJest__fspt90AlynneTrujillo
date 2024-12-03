const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let conversionRate = 156.5;
    let pounds = valueInYen / conversionRate;
    return pounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
