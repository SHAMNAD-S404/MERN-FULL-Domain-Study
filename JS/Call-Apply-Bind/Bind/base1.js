//? Borrow a Method with Predefined this
// You have an object car with a method getDetails. Use bind() to create a new function where this is always bound to the car object
// and call that function later.

const car = {
    brand : "Toyota",
    model : "supra",
    getDeatails : function (){
        return this.brand + " " + this.model
    }
}

const carDetail = car.getDeatails.bind(car)

console.log(carDetail());
