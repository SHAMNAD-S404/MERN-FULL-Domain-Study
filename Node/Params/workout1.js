//? multiple parms
  
 const express  = require('express')
 const app = express()

 app.get('/users/:userId/orders/:orderId',(req,res) => {

    const userID = req.params.userId;
    const orderID = req.params.orderId;

    res.send(`user id === ${userID} and orderId is === ${orderID}`);
    
 })


 app.listen(4000,()=>{
    console.log(`server is running on http://localhost:4000`);
    
 })
