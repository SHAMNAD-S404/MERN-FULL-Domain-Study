
//? Pre-set Arguments with bind()\
// Create a function multiply that multiplies two numbers. Use bind() to create a new function that always multiplies a number by 2, 
// then call the new function with different arguments.

 function multiply(a,b) {
    return a*b
 }

 const multi = multiply.bind(null,2)

 console.log(multi(10));
 