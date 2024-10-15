

//find the factorial of num

const factorial = (num) => {

    if(num <0) return null

    let result = 1;
    for(let i=1;i<=num;i++){
        result *= i;
    }

    return result;
}

console.log(factorial(5));

//* using recursion

function fact(num){

    if(num < 0 ) return null
    if(num === 0) return 1

    return num*fact(num-1)
}

console.log(fact(5));
