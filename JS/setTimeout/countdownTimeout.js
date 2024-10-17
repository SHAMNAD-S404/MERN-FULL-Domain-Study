

 function coutdown(num){
    for(let i=0;i<num;i++){
        setTimeout(()=> {
            console.log(num - i)
        },i*1000)
    }
 }


 coutdown(5)


 //using recursion
 let count = 5;

 function countRr(){

    if(count >= 0){
        console.log(count);
        count--;
        setTimeout(countRr,1000)
    }
 }

 countRr()


 function final(count){

    for(let i=0;i<count;i++){
       
        setTimeout(()=> {
            console.log(count-i);
        },1000 * i)
        
    }
 }

 final(6)