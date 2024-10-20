

  const fs = require('fs')
  fs.unlink('Node/fs/dummy1.txt',(err) => {
    if (err) {
        console.log(err);
        
    } else {
        console.log('deleted successfully');
        
    }
  })