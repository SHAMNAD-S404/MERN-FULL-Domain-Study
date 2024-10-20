

    const express = require('express')
    const app = express()

    app.get('/sum',(req,res)=> {

        const {v1,v2} = req.query;

        const sum = Number( Number(v1) + Number(v2) )
        return res.status(200).json({message:"sucess",result:sum})
    
    })

    app.listen(5000,()=>{
        console.log(`server is listen on http://localhost:5000`);
        
    })