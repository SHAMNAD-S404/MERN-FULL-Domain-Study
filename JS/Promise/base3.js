
 function getData () {

    return new Promise((resolve) => {
        setTimeout(()=> resolve("data received"),1000);
    })
 }

 function processData(data){
    return new Promise((resolve)=> {
        setTimeout(()=> resolve(`got the data is : ${data}`))
    })
 }

 getData()
    .then((data) => {
        console.log(data);
       return  processData(data)
    })
    .then(processData => {
        console.log(processData);
        
    })
    .catch(error => {
        console.log(error);
        
    })