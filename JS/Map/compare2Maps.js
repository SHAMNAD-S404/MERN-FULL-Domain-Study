

 function areMapsEqual(map1,map2) {

    if (map1.size !== map2.size) return false;

    for(const [key,value] of map1){

        if(map2.get(key) !== value) return false
    }
    return true;
 }
 

 const map1 = new Map([["a", 1], ["b", 2]]);
 const map2 = new Map([["a", 1], ["b", 2]]);
 const map3 = new Map([["a", 1], ["c", 3]]);
 
 console.log(areMapsEqual(map1, map2)); // Expected: true
 console.log(areMapsEqual(map1, map3)); // Expected: false
 
for(const [key,value] of map1){
    console.log(`key:${key} , value: ${value}`);
    
}

map1.forEach((value,key) => console.log(`k : ${key} , v::${value}`))