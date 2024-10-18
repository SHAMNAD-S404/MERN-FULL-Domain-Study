const arrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = arrays.reduce((acc, current) => acc.concat(current), []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
