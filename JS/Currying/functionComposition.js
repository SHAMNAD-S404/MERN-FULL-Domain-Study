

 function add(x){
    return function(y){
        return x+y;
    }
 }

 function multiply(x){
    return function(y){
        return x*y;
    }
 }

 function addAndMultiply(x,y){

    return multiply(2)(add(x)(y))
 }

 console.log(addAndMultiply(3,5))