//? What are Promises in JavaScript?
//* Promises are objects that represent the eventual success or failure of an
//* asynchronous operation. They were introduced alongside ES6 JavaScript
//* additions. You can use the Promise instance's then and catch methods to call a function when a promise is resolved or rejected


//? ***********************************************************************************************************
//* example 1

    const fetchData = ()=> {

        return new Promise((resolve,reject) => {
            //asynchronus operation will happen here
            setTimeout(() => {
                //promise is resolved here
                resolve("Data fetched sucessfully")
            }, 2000);
        })
    };


    //using the promise
    fetchData()
        .then(data => {
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);            
        })

//? ***********************************************************************************************************
