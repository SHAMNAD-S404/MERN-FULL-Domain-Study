

  const fs = require('fs')

  fs.readFile('Node/Streams/sudo.txt','utf-8',(err,data) => {

    if (err) {
        console.log(err);
        return
    } else {
        console.log(data);
        
    }
  })