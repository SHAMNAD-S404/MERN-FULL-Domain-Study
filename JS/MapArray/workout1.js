    //? create a function that returns an array of multiples of a given number



    function multiples(...num){
        
        const multiple = num.map((value)=> value*value);
        return multiple;
    }

    console.log(multiples(5))