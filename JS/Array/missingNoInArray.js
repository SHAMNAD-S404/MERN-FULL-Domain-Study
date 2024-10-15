//? find the missing number from the array 

function findMissingNumber(arr) {

    const n = arr[arr.length-1];

    for(let i=1;i<=n;i++){
        if(!arr.includes(i)){
            return i
        }
    }
    return 'no value is missing'
}


const arr = [1, 2, 4, 5]

console.log(findMissingNumber(arr));
