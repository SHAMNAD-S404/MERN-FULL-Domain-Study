
//? Task: Given an array of objects representing products, return a new array containing only the products that are in stock.


const products = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true }
];

const availableProducts = products.filter(product => product.inStock);

console.log(availableProducts); 
// Output: 
// [
//     { id: 1, name: "Laptop", inStock: true },
//     { id: 3, name: "Tablet", inStock: true }
// ]
