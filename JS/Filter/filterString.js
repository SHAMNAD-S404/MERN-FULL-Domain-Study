


const mixedArray = [42, "apple", true, { name: "John", age: 30 }, [1, 2, 3], null, undefined, "banana", false, 100];

const stringArray = mixedArray.filter((element) => typeof element === "string")

console.log(stringArray);


