
 function fetchData() {

    return new Promise((resolve,reject) => {

        setTimeout(()=> {

            const success = true;

            if (success) {
                resolve("data fetched")
            } else {
                reject("data failed")
            }

        },2000)
    })
 }

 fetchData()
    .then( (data) => console.log(data))
    .catch( (err) => console.log(err))
    .finally( ()  => console.log("funcion finished"));