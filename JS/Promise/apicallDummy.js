

function apiCall(){
    return new Promise((resolve,reject) => {

        const success = Math.random() > 0.5;

        setTimeout(()=> {
            if (success) {
                resolve("api call success")
            } else {
                reject("api call rejected by server")
            }
        },3000)
    })
}

apiCall()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))