//?  Write a function that capitalizes the first letter of every word in a given string.

const capitalizeWords = (str) => {

    return str.split(' ').map( (word)=> word.charAt(0).toUpperCase() + word.slice(1) ).join(' ')
}







const word = "hello world"
console.log(capitalizeWords(word));
