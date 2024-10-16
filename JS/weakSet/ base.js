  
  const obj1 = {name : "naja abo"};
  const obj2 = {name : "ameen"}

  const names = "faheem"

  const weakSet = new WeakSet()

  weakSet.add(obj1)
  weakSet.add(obj2)

  console.log( weakSet.has(obj1));

  //******************************************************* */

  //? Question: Add an object {id: 1} to a WeakSet. Then, after deleting the reference to the object, check if the WeakSet still contains the object.

  let obj3 = {id:1010}

  const weakset = new WeakSet()

  weakset.add(obj3)

  console.log(weakset.has(obj3));

   obj3 = null

  console.log(weakset.has(obj3))
  
  
  