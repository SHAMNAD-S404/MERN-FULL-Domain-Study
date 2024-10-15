//? What are closures in JavaScript?
//* A closure is a function that can access its own scope, the outer function's scope,
//* and the global scope. Closures are also related to lexical scoping in JavaScript.
//* Lexical scoping describes how variables and functions are scoped at runtime. 


//? ***********************************************************************************************************

//* example 1

let makeSize = (size) =>

    ()=>{
        //* here this inner function accession its outer function value
        console.log(`fontsize = ${size}`);
        
    };


 const call1 = makeSize(12)
 call1();


//? ***********************************************************************************************************

