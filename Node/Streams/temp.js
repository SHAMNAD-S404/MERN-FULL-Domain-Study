

 const fs = require('fs')

 const readableStream = fs.createReadStream('Node/Streams/sudo.txt','utf-8');

 readableStream.on('data',(chunk) => {
    console.log(`Recieved chunks of data is : ${chunk}`);
    
 })

 readableStream.on('end',()=> {
    console.log('ended');
    
 })
