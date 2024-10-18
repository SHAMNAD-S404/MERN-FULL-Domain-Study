const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" }
];

const usernames = users.map(user => user.name);

console.log(usernames); // Output: ['John', 'Jane', 'Jim']
