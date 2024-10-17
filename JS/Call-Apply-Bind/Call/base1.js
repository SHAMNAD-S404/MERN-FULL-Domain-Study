//? Borrow a Method from Another Object

const person = {
    firstName : "Naja",
    lastName  : "aboobaker",
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {

    firstName : "anvar",
    lastName : "Bava"
}

console.log(person.getFullName.call(person2))

console.log(person.getFullName.call("anvar","alex"));
