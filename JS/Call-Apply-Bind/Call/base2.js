//? Sum of Numbers with Different Objects

const calculator = {
    add : function(a,b){
        return a+b;
    }
}

const values = {
    num1 : 100,
    num2 : 200
}

console.log(calculator.add.call(values,values.num1,values.num2))