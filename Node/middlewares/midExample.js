

const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log('middleware 1');
    next();
})

app.use((req,res,next) => {
    console.log('middleware 2');
    next();
})

app.get('/home',(req,res) => {
    res.status(200).json({msg:"welcome guys"})
})

app.listen(3000,() => {
    console.log('server is running');
    
})

//* OUTPUT

// server is running
// middleware 1
// middleware 2
// middleware 1
// middleware 2