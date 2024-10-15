
 const fetchData = async () => {

    let promise = new Promise(async(resolve,reject) =>  {

        setTimeout(() => {
            resolve("data fetched successfully")
        }, 2000);

        let result = await promise;
        console.log(result);
        
    })
 }

 fetchData()
    .catch(error => console.log(error) )