
 const net = require('net')

 const server = net.createServer((socket) => {

    socket.on('data',(data)=> {
        console.log(`Recieeeeeeeeeeeeeeeeeeeeeeved   : ${data}`);
        socket.write("message recieved sucessfully")
    })
 })


 server.listen(4000,()=> {
    console.log(`server is running on http://localhost:4000`);
    
 })

