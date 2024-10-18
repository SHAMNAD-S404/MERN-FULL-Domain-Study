

 function fetchData (callback){

    console.log("fetching data .........");
    setTimeout(() => {
        const data = {name:"chotta Bheem" , bestie : "chutki" }
        callback(data)
    },2000)
    
 }

 function displayData (data){
    console.table(data) 
 }


 fetchData(displayData)







