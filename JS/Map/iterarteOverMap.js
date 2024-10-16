
const countryMap = new Map([
    ["USA", 331],
    ["India", 1391],
    ["China", 1441]
  ]);

  countryMap.forEach((value,key) => {
    console.log(`${key}  pop: ${value}`);
    
  })

  console.table(countryMap);
  