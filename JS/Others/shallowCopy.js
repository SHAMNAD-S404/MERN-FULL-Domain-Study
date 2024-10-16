
const original = { name: "John", address: { city: "NYC" } };
const shallowCopy = { ...original };

shallowCopy.address.city = "LA";

console.log(original.address.city); // Output: "LA"

shallowCopy.name = "naja aboobaker" ;

console.table(original)

console.table(shallowCopy)