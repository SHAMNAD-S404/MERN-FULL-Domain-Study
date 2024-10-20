

  const fs = require('fs')

  fs.appendFile('Node/fs/dummy.txt',"I am new appended data \n" , (err) => {
    if (err) {
        console.log(err);
        
    } else {
        console.log('data updated');
        
    }
  })