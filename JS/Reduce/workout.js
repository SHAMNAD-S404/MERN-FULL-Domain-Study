



const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitcount = fruits.reduce((acc,fruit) => {

    acc[fruit] = (acc[fruit] || 0)+1
    return acc;
},{})

console.log(fruitcount);
