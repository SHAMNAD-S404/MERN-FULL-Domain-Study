const users = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 15 },
    { name: "Jack", age: 20 }
];

const adults = users.filter(user => user.age > 18);

console.log(adults); 
// Output: [{ name: "Jane", age: 22 }, { name: "Jack", age: 20 }]
