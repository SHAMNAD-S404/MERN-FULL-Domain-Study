
//?  Write a function that groups objects in 
// an array by a specific property   .


 function groupBy( arr , property) {

    return arr.reduce((acc,obj) => {

        const key = obj[property]

        if(! acc[key]){
            acc[key] = []
        }

        acc[key].push(obj);

        return acc;


    },{})
 }




 


 const data = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 25},
  ];


   const output =  groupBy(data, 'age')

   console.log(output);
   
