
//******************************************************************************************************************* */
//* model 1

const sendData = (callBack) => {
    setTimeout(()=> {

        const data = "successfully done"
        callBack(data)
    },2000)
}

const displayData = (data) => {
    console.log('response :', data);
    
}

//here we passsing function as callback function to another function is called callback function
//its used to handle the asynchronus operation in javasript
sendData(displayData) ;

//******************************************************************************************************************* */


//* model 2

const fetchData = (callBackFunction,anotherCallBack) => {

    setTimeout(() =>{

        const data = {message:"form submitted",name:"itachi xx"};
        callBackFunction(anotherCallBack,data)
    },2000)
}


const processData = (anotherCallback,data) => {

    setTimeout(()=>{
        console.log('processing your application');
        anotherCallback(data)
    },1000)
}

const response = (data) => {
    console.log('successfully validated',data);
    
}

fetchData(processData,response)

//******************************************************************************************************************* */