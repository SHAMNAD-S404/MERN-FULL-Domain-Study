//? Find Maximum Number in an Array 
//? example for apply

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1,arr2);

console.log(arr1);
