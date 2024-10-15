//? SPREAD ARRAY WITHOUT MUTATING ORIGINAL ARRAY

//* method 1 using spread operator

const numbers = [3, 1, 4, 1, 5];
const sort1 = [...numbers].sort();

//* method 2 using toSorted method
const sort2 = numbers.toSorted();


console.log(sort2)

console.log(sort1);
console.log(numbers);

