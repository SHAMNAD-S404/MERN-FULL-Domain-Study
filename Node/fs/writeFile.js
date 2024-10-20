
  const fs = require('fs')

  fs.writeFile('Node/fs/dummy2.txt' , 'Im going to crack this \n',(err) => {
    if (err) {
        console.error(err);
        
    } else {
        console.log("file created successfully");
        
    }
  })