

 function* arrayGenerator(arr){

    for(const word of arr){
        yield word;
    }
 }

 const arr = ["apple" , "oragne" , "apple"] 

 const gen = arrayGenerator(arr)

 console.log(gen.next());
 console.log(gen.next());
 
 