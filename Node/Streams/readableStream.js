

 const fs = require('fs')

 //create  a readable stream from a file
 const readableStream = fs.createReadStream('Node/Streams/sudo.txt','utf-8');

 //listen for 'data' event to get chunks of data
 readableStream.on('data',(chunk)=>{
    console.log(`Recieved chunk : ${chunk}`);
    
 })

 readableStream.on('end',() => {
    console.log('NO more data to read !!');
    
 })