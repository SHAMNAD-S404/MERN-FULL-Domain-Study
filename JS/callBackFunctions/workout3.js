
 function first(callback){

    setTimeout(()=>{
        console.log("first operaion is done");
        callback()
    },1000)
 }

 function second(callback) {
    setTimeout(()=>{
        console.log("second operation is done");
        callback()
    },1000)
 }

 function third(callback){
    setTimeout(()=> {
        console.log("third operation is done");
        callback()
    },1000)
 }

 first(()=>{
    second(()=> {
        third(()=>{
            console.log("finished data");
            
        })
    })
 })

