

 function fetchurl(url){

    return new Promise((resolve,reject) => {
        setTimeout(()=> {

            resolve({data:"data feched from"+ url})

        },1000)
    })
 }

 fetchurl('www.google.com')
    .then((response) => {
        console.log(response);
        return response.data.length;
    })
    .then((length)=>{
        console.log(length);
        return length*2;
        
    })
    .then(result => console.log(result)
    )
    .catch(err => console.log(err)
    )
    .finally(()=> console.log("finished")
    )