
const fs = require('fs')

// Create a writable stream to write data to a file
 const writableStream = fs.createWriteStream('Node/Streams/output.txt')

 writableStream.write('helo guyss \n')
 writableStream.write("Node.js  streams are cool \n");

 writableStream.end()