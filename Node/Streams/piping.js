

 const fs = require('fs')

 const readableStream = fs.createReadStream('Node/Streams/sudo.txt')
 const writableStream = fs.createWriteStream('Node/Streams/newOut.txt')

 //pipe the readable stream into the writable stream

 readableStream.pipe(writableStream)