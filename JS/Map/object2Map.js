

const obj = {
    name: "Alice",
    age: 25,
    city: "New York"
  };

  const objToMap = new Map(Object.entries(obj))

  console.table(objToMap)

  