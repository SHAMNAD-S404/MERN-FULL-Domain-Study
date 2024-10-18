

 const fetchData = new Promise((resolve,reject) => {

    setTimeout(()=> {
        resolve("1st")
    },1000)
 })

 const fetchData2 = new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve("2nd")
    }, 2000);
 })

 const fetchData3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("3rd One")
    }, 3000);
 })

 Promise.all([fetchData,fetchData2,fetchData3])
 .then((data) => console.log(data)

  )