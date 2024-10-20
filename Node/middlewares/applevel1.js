
//? This middleware logs every incoming request's HTTP method and URL. It applies to all routes.

const express = require('express')
const app = express()


app.use((req,res,next) => {
    console.log(`used method == ${req.method} and urls is = ${req.url}`);
    next()
    
})

app.get('/home',(req,res) => {

    res.json({msg:"helo"})
})

app.get('/about',(req,res) => {

    res.json({msg:"about"})
})

app.listen(3000,() => {
    console.log('running...........');
    
})
