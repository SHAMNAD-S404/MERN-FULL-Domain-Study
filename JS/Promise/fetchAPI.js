
function fetchData (url) {
    return new Promise((resolve,reject) => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


 //example url
 const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

 fetchData(apiUrl)
        .then((data) => {
            console.table(data);            
        })
        .catch((err) => {
            console.log(err);
            
        })
        .finally(()=>{
            console.log('fetch process completed')
        })