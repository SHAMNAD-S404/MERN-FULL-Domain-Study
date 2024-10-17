

const mixedArray = [3, -4, 7, -2, 5, -9, 6, -1];

const sum = mixedArray.reduce((acc,curr) => {

    if (curr < 0) {
       return acc+curr;
    }
    return acc;
},0)

console.log(sum);
