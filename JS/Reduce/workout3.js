//? Task: Given an array of objects, return an object where the keys are values of a specified property, 
//? and the values are arrays of objects that have that property value.



const users = [
    { id: 1, name: "John", role: "admin" },
    { id: 2, name: "Jane", role: "user" },
    { id: 3, name: "Jim", role: "admin" },
    { id: 4, name: "Jake", role: "user" }
];

const groupedByRole = users.reduce((acc, user) => {
    const { role } = user;
    acc[role] = acc[role] || [];
    acc[role].push(user);
    return acc;
}, {});

console.log(groupedByRole);
// Output: 
// {
//     admin: [
//         { id: 1, name: "John", role: "admin" },
//         { id: 3, name: "Jim", role: "admin" }
//     ],
//     user: [
//         { id: 2, name: "Jane", role: "user" },
//         { id: 4, name: "Jake", role: "user" }
//     ]
// }
