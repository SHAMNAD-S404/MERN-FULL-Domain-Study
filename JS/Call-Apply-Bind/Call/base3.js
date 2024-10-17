//? Manipulating Arrays Using Array Methods

//* You have an object with a list of numbers, and you want to use JavaScript’s Math.max method to find 
//* the maximum value from that list. However, the method should apply to an object’s array property using call().

  const numbers = {
    data: [1, 5, 7, 3, 9]
  }

  console.log(Math.max.call(null,...numbers.data));
  