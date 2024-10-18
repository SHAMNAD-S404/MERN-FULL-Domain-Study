

 const fetchData = new Promise((resolve,reject) => {

    setTimeout(()=> resolve("1st resolved"),1000)
 } );

 const fetchData2 = new Promise((resolve,reject) => {

    setTimeout(() => resolve("2nd resolved"),2000)
 })

 fetchData
        .then((data) => {
            console.log(data);
            return fetchData2
            
        } )
        .then((data) => {
            console.log(data);
            
        })
        .catch((err) => console.log(err))
        