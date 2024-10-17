//? Convert Arguments to an Array
// You want to create a function that can take any number of arguments and find their sum. Use apply()
// to convert the arguments object into an array and pass it to Array.prototype.reduce().


function sumAll(...args){

    return args.reduce((acc,curr)=> acc+curr,0)
}


console.log(sumAll(1,2,3,45,5,6,64,5));

