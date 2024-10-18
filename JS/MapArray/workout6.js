const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
];

const updatedProducts = products.map(product => ({
    ...product,
    inStock: true
}));

console.log(updatedProducts);
// Output: 
// [
//     { id: 1, name: "Laptop", inStock: true },
//     { id: 2, name: "Phone", inStock: true },
//     { id: 3, name: "Tablet", inStock: true }
// ]
