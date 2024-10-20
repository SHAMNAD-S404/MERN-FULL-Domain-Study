const fs = require('fs')

fs.rename('Node/fs/dummy2.txt','Node/fs/puthiyaMukham.txt',(err) => {

    if (err) {
        console.log(err);
        
    } else {
        console.log('renamed successfully');
        
    }
})