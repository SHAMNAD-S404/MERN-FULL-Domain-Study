

function reverse(arr){

    const newArr = []

    for(const word of arr){

       const char = word.toString().split('').reverse().join('');

       
       newArr.push(char)
    }

    return newArr

}


const arr = ['abc','def']

console.log(reverse(arr));
