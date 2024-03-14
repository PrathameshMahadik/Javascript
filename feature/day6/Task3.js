/* 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns
a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.*/
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    return `Welcome ${this.name} of age ${this.age} having interest in ${this.interests}`;
  }
  farewell() {
    return `Goodbye ${this.name}`;
  }
}
const person1 = new Person("Prathamesh", 24, "Male", "Playing Chess");
console.log(person1.greeting());
console.log(person1.farewell());
console.log("-------------------------------------------");
/*3.2 Create a class Student that inherits from the Person class and has a property studies. 
Override the greeting() method to include information about what the student is studying.*/
class Student extends Person {
  constructor(name, age, gender, interests, subject) {
    super(name, age, gender, interests);
    this.name = name;
    this.subject = subject;
  }
  farewell() {
    return `${this.name} studies ${this.subject}`;
  }
}
const student1 = new Student(
  "Prathamesh",
  24,
  "Male",
  "Playing Chess",
  "Javascript"
);
console.log(student1.farewell());
console.log("----------------------------------------------");
/*3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
Override the farewell() method to include information about what the teacher teaches.*/
class Teacher extends Person {
  constructor(name, age, gender, interests, subject) {
    super(name, age, gender, interests);
    this.name = name;
    this.subject = subject;
  }
  farewell() {
    return `${this.name} taught ${this.subject}`;
  }
}
const teacher1 = new Teacher(
  "Prathamesh",
  24,
  "Male",
  "Playing Chess",
  "Javascript"
);
console.log(teacher1.farewell());
