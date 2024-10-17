

const greeter = {
    greet: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };

const customer = {
    name : "Tessa",
    age : 21
}

console.log(greeter.greet.call(customer));
