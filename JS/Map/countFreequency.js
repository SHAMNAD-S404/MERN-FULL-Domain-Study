//? Question: Write a function that takes an array of words and returns a Map with each word as a key and the number of times it occurs as the value.


function showCount(arr){

    const map = new Map()

    for (const word of arr) {
        if( !map.has(word) ){
            map.set(word,1)
        }else{
            const currentCount = map.get(word)
            map.set(word,currentCount+1)
        }
    }

    return map;
}




const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.table(showCount(words));


