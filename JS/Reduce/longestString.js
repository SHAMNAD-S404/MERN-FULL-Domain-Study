const arr = ["apple", "banana", "cherry", "watermelon", "grapefruit"];

const longestString = arr.reduce((longest,current) => {
    return current.length > longest.length ? current:current
},"")

console.log(longestString);
