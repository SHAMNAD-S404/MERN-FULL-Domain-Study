

function findPrime(num){

    if(num <2) return false;

    for(let i=2;i<Math.sqrt(num);i++){

        if(num % i === 0) return false;
    }

    return true;

}



console.log(findPrime(5))


//* using recursion 


function findPrime2(num,divisor){

    if(num < 2 ) return false

    if(num === divisor) return true

    if(num % divisor === 0) return false;

    return findPrime2(num,divisor+1)
}


console.log( findPrime2(6,2) );
