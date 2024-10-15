 //? Question: Given two sets, setA = new Set([1, 2, 3, 4]) and setB = new Set([3, 4, 5]), find the difference of setA relative to setB (i.e., elements in setA that are not in setB).

 const setA = new Set([1, 2, 3, 4]);
 const setB = new Set([3, 4, 5]);

 const difference = new Set([...setA].filter((x) => !setB.has(x)))
 console.log(difference);
 