

  function fetchUser (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("user data fetched from data base")
        }, 1000);
    })
  }


  function fetchOrders(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("order are fully fetched")
        },2000)
    })
  }

  function fetchAddress(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("user address are fetched")
        }, 3000);
    })
  }

  fetchUser()
    .then((data)=> {
        console.log(data)
        return fetchOrders()
    
    })    
    .then((data) => {
        console.log(data);
        return fetchAddress()
        
    })
    .then((data)=> {
        console.log(data);
        
    })
    .catch((err) => console.log(err))