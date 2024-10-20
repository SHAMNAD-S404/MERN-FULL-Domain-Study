

 const http = require("http")

 http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type" : "Text/plain"});
    res.end("helo world gusss");
 }).listen(3000,()=> {
    console.log("server is running .........");
    
 })