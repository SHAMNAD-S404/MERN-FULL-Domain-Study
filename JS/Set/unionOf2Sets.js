
 //? Question: Given two sets, setA = new Set([1, 2, 3]) and setB = new Set([3, 4, 5]), find the union of the two sets (i.e., a set that contains all elements from both sets).

 const mySet1 = new Set([1,2,3]);
 const mySet2 = new Set([3,4,5]);

 const unionSet = new Set([...mySet1, ...mySet2])

 console.log(unionSet);
 

 