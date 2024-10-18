
const p1 = new Promise((resolve,reject) => setTimeout(() => resolve('data from api 1'),1000));
const p2 = new Promise((resolve,reject) => setTimeout(() => reject("data api2 failed"),2000))
const p3 = new Promise((resolve,reject) => setTimeout(() => resolve('sucess from api3'),3000))

Promise.all([p1,p2,p3])
    .then((data) => {
        console.log(data);
        
    })
    .catch(err => {
        console.log(err);
        
    })
    .finally(()=> {
        console.log("completed");
        
    })
