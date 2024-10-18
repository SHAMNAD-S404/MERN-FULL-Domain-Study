
 const fetchData1 = new Promise ((resolve,reject) => {
    setTimeout(()=>{
        resolve('data from api 1')
    },1000)
 })

 const fetchData2  = new Promise ((resolve,reject) => {
    setTimeout(()=> {
        resolve('data from api 2')
    },2000)
 })

 const fetchData3 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve('data from api3')
    })
 })


 Promise.all([fetchData1,fetchData2,fetchData3])
    .then((data)=> {
        console.log(data);
        
    })
    .catch((err)=> {
        console.error(err);
        
    })
    .finally(()=> console.log('process completed'))