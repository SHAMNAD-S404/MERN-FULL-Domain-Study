//? Question: Given a Map with city names as keys and population values, remove all entries where the population is less than 1 million.


function highPopCity(map){

    for(const [key,value] of map){

        if(value < 1){
            map.delete(key)
        }
    }

    return map
}



const cityMap = new Map([
    ["New York", 8.4],
    ["Los Angeles", 3.9],
    ["San Francisco", 0.87]
  ]);

 console.table(highPopCity(cityMap))

 