
 //? Create a Set with the numbers 1 to 5. Add the number 6 to the Set and then delete the number 3. Finally, check if the number 4 is in the Set.

  const mySet = new Set([1,2,3,4,5])

  mySet.add(6)
  mySet.delete(3)
   
  console.log(mySet.has(4))

  console.log( mySet.size )

  console.log(mySet);

  mySet.forEach((val) => console.log(val));
  
  console.log("***********************************");
  

  for(const val of mySet){
    console.log(val);
    
  }
  