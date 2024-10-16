 
  //? Question: Create a Map that stores a person's name as the key and their age as the value. Add three entries: 
  //"Alice" -> 25, "Bob" -> 30, and "Charlie" -> 35. Then retrieve the age of "Bob" and check if "Charlie" exists in the Map.
  
  const person = new Map()
   
  person.set('Labeeb',55)
  person.set("khaiz",22)
  person.set("faheem",88)

  console.log( person.get( "khaiz" ));
  console.log(person.has( 'Labeeb' ));
  

  