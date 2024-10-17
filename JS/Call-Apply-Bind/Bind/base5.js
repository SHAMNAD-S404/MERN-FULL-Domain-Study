

 function greeting(greet , name){

    return greet + " " + name;
 }

 const sayHello  = greeting.bind(null,"Hello")

console.log( sayHello("shamnad"));
