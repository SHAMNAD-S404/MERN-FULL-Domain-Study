
const myMap = new Map([
    ["name", "Bob"],
    ["age", 30],
    ["city", "Los Angeles"]
  ]);

  const obj = Object.fromEntries(myMap)

  console.table(obj)