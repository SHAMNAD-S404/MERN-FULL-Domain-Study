
 function* generatorFun(num){
    for(let i =1; i<=num; i++){
        yield i;
    }
 }

 const gen = generatorFun(5)

 console.log(gen.next());
 console.log(gen.next());

 for(let i=1; i<= 5; i++){
    console.log(gen.next());
    
 }
 
 