
//******************************************************************************************************************** */
//?  Accessing JavaScript Properties

// objectName.property
let age = person.age;
or

//objectName["property"]
let ages = person["age"];
or

//objectName[expression]
let age1 = person[x];

//******************************************************************************************************************** */

//? Adding New Properties

person.nationality = "English";


//******************************************************************************************************************** */

//? Deleting Properties

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person.age;
  //OR
  delete person["age"];


//******************************************************************************************************************** */

//?  Nested Objects

myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

//? accession nested obj properties

myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];

//******************************************************************************************************************** */

//? Object Methods

const person44 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

//? accessing its method

objectName.methodName()

//? Adding a Method to an Object

person.name = function () {
    return this.firstName + " " + this.lastName;
  };

//******************************************************************************************************************** */

 //? *****************     Displaying Object Properties *************************

 //Displaying Object Properties

 const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
 console.log(person.name)

//Displaying Properties in a Loop

for (let x in person) {
    console.log(x);
    
  };

//Using Object.values()

  // Create an Array
const myArray = Object.values(person);


//Using Object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500};
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
  }


// Stringify Object
let myString = JSON.stringify(person);


//******************************************************************************************************************** */
//******************************************************************************************************************** */