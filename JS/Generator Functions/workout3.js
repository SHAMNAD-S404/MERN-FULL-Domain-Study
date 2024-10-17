

    function* evenGenerator(num){

        for(let i=num; i>=2; i-=2){
            yield i;
        }
    }




    const gen = evenGenerator(100)

    for(const num of gen){
        console.log(num);
        
    }

