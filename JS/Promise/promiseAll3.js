
const p1 = new Promise((resolve,reject) => setTimeout(()=> resolve("aftr 3sec"),3000));
const p2 = new Promise((resolve,reject) => setTimeout(()=> resolve("aftr 1sec"),1000));

console.time('time start')

Promise.all([p1,p2])
    .then((data) => {
        console.log(data);
        console.timeEnd("time start");
        
    })
    .catch(err => console.log(err)
    )