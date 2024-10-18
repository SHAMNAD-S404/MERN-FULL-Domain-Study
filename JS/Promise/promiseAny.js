

//  Takes an iterable of promises and returns a single promise that resolves as soon as any of the promises in the iterable resolves.
//  If all the promises reject, it rejects with an AggregateError containing all rejection reasons




const api1 = new Promise((resolve,reject) => setTimeout(()=> reject('api call 1'),1000))
const api2 = new Promise((resolve,reject) => setTimeout(()=> resolve('api call 2'),2000))
const api3 = new Promise((resolve,reject) => setTimeout(()=> resolve('api call 3'),3000))
const api4 = new Promise((resolve,reject) => setTimeout(()=> reject('api call 4'),4000))


Promise.any([api1,api2,api3,api4])
    .then((data)=>{
        console.log(data);
        
    })
    .catch((err)=> console.log(err)
    )