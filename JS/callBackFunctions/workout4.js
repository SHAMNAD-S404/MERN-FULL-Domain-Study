function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 completed');
        callback();  // Call the next task
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 completed');
        callback();  // Call the next task
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 completed');
        callback();  // No more tasks, so just finish
    }, 1000);
}

task1( ()=>{
    task2(()=>{
        task3(()=>{
            console.log('all finished');
            
        })
    })
})

//? **************************************************/////////////////////////////////////////////////////////////////////////// */


function task11() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve();
        }, 1000);
    });
}

function task22() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 2 completed');
            resolve();
        }, 1000);
    });
}

function task33() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 3 completed');
            resolve();
        }, 1000);
    });
}

// Execute tasks sequentially using Promises
task11()
    .then(task22)
    .then(task33)
    .then(() => {
        console.log('All tasks completed');
    });
