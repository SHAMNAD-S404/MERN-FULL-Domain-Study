//? remove multiples of 3 & 5 from an array of integers

const arr = [];

for(let i=1;i<=20;i++){
    arr.push(i)
}

const freshArray = arr.filter((value)=> value % 3 !==0 && value % 5 !==0)

console.log(freshArray);
