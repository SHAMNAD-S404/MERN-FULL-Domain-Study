

// create a partial application using currying

 function add(val1){
    return function(val2){
        return val1*val2;
    }
 }

 const partialAdd = add(10);

 console.log(partialAdd(50));
 console.log(partialAdd(20));
 
 