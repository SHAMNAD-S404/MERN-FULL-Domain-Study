
//? Create a constructor function for Person that defines firstName and lastName. 
//? Then, use the call() method to create a new object with these properties but without using the new keyword.

 //here creating function as constructor function

 function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName  = lastName; 
 }

 const obj = {};

 Person.call(obj,"Adil","P")

 console.table(obj)