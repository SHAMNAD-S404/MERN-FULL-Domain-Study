 
 const fs = require('fs')
 const zlib = require("zlib")

// Create a readable stream from a file
 const readableStream = fs.createReadStream('Node/Streams/foo.txt');

 //create a transform stream for compression
 const gzip  = zlib.createGzip();

 // Create a writable stream to a compressed file
 const writableStream = fs.createWriteStream('Node/Streams/foo.txt.gz')

 // Pipe the readable stream to the transform stream (gzip), then to the writable stream
 readableStream.pipe(gzip).pipe(writableStream)

