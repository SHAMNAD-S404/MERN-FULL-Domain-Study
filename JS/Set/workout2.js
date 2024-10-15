 
 //? Question: Given two sets, setA = new Set([1, 2, 3]) and setB = new Set([2, 3, 4]), find the intersection (i.e., a set that contains only the elements that exist in both sets).

 const setA = new Set([1, 2, 3]);
 const setB = new Set([2, 3, 4]);

 const interSection = new Set([...setA].filter((x) => setB.has(x) ) );

 console.log(interSection);
 