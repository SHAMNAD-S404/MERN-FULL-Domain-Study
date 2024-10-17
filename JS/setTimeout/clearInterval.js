

const intervalID = setInterval(()=>{

    console.log("im annoying interval")
},1000)

setTimeout(()=> {
    clearInterval(intervalID)
    console.log("i  eleminated the annoying fucker !!")
},5000)


