//? This middleware checks if the user is authenticated before allowing access to certain routes, like a dashboard.

 const express = require('express')
 const app = express()

 app.use('/dashboard',(req,res,next) => {

    const isAuth = false;
    if (isAuth) {
        next()
    } else {
        res.status(401).json({error:"invalid cred"})
    }
 })

 app.get('/home' , (req,res) => {
    res.json({msg:"home"})
 })

 app.get('/dashboard',(req,res) => {
    res.json({msg:"welcome to dashboard"})
 })

 app.listen(3000,() => {
    console.log('running ...........');
    
 })