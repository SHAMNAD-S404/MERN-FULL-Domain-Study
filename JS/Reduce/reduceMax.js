const numbers = [10, 45, 2, 99, 23];

const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

console.log(maxNumber); // Output: 99
