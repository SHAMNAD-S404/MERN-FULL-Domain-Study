const prices = [19.99, 9.5, 100, 4.75];

const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);

console.log(formattedPrices); // Output: ['$19.99', '$9.50', '$100.00', '$4.75']
