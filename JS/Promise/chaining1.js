

const add = (a,b) => {
    return new Promise((resolve,reject) => {

        setTimeout(()=> resolve(a+b),1000)
    })
}


add(10,20) 
    .then((data) => {
        console.log(data);
        return add(data,30)
    })
    .then((data)=> {
        console.log(data);
        return add(data,40)
    })
    .then((data) => {
        console.log(data);
        
    })
    .catch((err) => console.log(err)
    )
    .finally(()=> console.log('finished')
    )