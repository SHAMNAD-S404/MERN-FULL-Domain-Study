
const fs = require('fs')
const path = "mytextfile.txt"

const currentDate = new Date().toLocaleString();

fs.writeFile(path,`The current date and time is : ${currentDate}`,(err) => {

    if (err) {
        console.error(err);
        
    } else {
        console.log('successfully created');
        
    }
})