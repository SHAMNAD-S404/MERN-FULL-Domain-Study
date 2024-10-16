const original = { name: "John", address: { city: "NYC" } };

const deepCopy = JSON.parse(JSON.stringify(original))

console.table(deepCopy)

deepCopy.address.city = "kakkanchery"

console.table(original)
console.table(deepCopy);
