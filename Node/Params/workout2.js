

    const express = require('express')
    const app = express()

    app.get('/add/:v1/value2/:v2',(req,res) => {
        const value = Number(req.params.v1);
        const value2 = Number(req.params.v2);

        const result = value+value2


        res.status(200).json({message:"success",sum:result})
    })

    app.listen(4004,()=>{
        console.log(`server running on http://localhost:4004`);
        
    })