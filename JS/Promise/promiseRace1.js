
 const api1 = new Promise((resolve)=> setTimeout(()=> resolve("api with 5sec"),5000))
 const api2 = new Promise((resolve)=> setTimeout(()=> resolve("api with 3sec"),3000))
 const api3 = new Promise((resolve)=> setTimeout(()=> resolve("api with 1sec"),1000))

 Promise.race([api1,api2,api3])
    .then((data) => {
        console.log(data)
        
    })
    .catch(err => console.log(err)
    )
    .finally(() => console.log("finished")
    )