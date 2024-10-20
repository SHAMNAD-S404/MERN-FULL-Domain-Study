

 const express = require('express')
 const app  = express()

 app.get('/home',(req,res) => {
    res.status(200).json({message:"helooo world  tooooooooooooooo"})
 })

 app.listen(3000,()=> {
    console.log("server is running ............");
    
 })