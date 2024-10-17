
//? Sum of Array Elements

const calculator = {
    sum : function (a,b,c){
        return a+b+c;
    }
}

const num = [5,10,15]

console.log(calculator.sum.apply(null,num));
