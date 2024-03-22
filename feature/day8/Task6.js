/*6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
var getPersonDetails = person.getDetails;
getPersonDetails();*/
const person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};
person.getDetails();
