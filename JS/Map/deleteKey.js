

const foodMap = new Map();
foodMap.set("apple", "fruit");
foodMap.set("carrot", "vegetable");
foodMap.set("chicken", "meat");

foodMap.delete("carrot")

console.table(foodMap);

console.log(foodMap.size);

console.log(foodMap.has("carrot"));

console.log(foodMap);

function hasPhoneNumber(person){
    return foodMap.has(person)
}

console.log(hasPhoneNumber("chicken"));
