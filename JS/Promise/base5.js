

 const fetchData = new Promise((resolve,reject) => {

    const dataFound = false;
    if (dataFound) {
        resolve("resolved")
    } else {
        reject("rejected")
    }
 })

 fetchData
    .then((data)=> console.log(data))
    .catch((err) => console.log(err))