

 function* fibnocci(n){

    let a=0 , b=1;
    while(a <=n) {
        yield a;
        [a, b] = [b, a+b];
    }
 }

 const gen = fibnocci(10)

for(const val of gen){
    console.log(val);
    
}