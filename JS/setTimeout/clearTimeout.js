
 const timeOutId = setTimeout(()=>{

    console.log("this never gonna show because it will be cleared in 2 sec")

 },5000)


 setTimeout(()=>{
    clearTimeout(timeOutId)
    console.log('this will clear the timeout');
    
 },2000)