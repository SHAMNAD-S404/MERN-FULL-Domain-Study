//? Borrow a Method to Print Details


const teacher = {
    printDetails: function(subject, years) {
      return `${this.name} teaches ${subject} for ${years} years.`;
    }
  };

 
const teacherList = {
    name: "SethuLekshmi"
}

console.log(teacher.printDetails.apply(teacherList,["Biology",8]));
