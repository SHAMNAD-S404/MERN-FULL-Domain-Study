// this are some majot way to define object

//******************************************************************************************************************** */
//? Object Literal Notation:

const person = {
    name: "Alice",
    age: 25,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

//******************************************************************************************************************** */
//?Using the new Object() Constructor

const person2 = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function() {
    return `Hello, I'm ${this.name}`;
};


//******************************************************************************************************************** */
//? Using a Constructor Function:

function Person3(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

const person11 = new Person("Charlie", 40);
const person22 = new Person("Dana", 35);


//******************************************************************************************************************** */
//? Using ES6 Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const person = new Person("Eve", 28);



//******************************************************************************************************************** */
//?  Using Object.create()

const protoPerson = {
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

const person = Object.create(protoPerson);
person.name = "Frank";
person.age = 33;

//******************************************************************************************************************** */