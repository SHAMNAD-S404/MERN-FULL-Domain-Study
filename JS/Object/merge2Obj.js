

const person1 = {
    name : "shamnad",
    age : 24
}

const department = {
    post : "senior software developer",
    gender : "male"
}

//first approch using object.Assign method = {target,object,......objectLast}

const mergeObj1 = Object.assign({},person1,department)
console.log(mergeObj1);

//using spread operator

const mergeObj2 = {...person1,...department}
console.table(mergeObj2)
