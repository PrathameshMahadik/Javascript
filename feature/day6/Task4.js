/* 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` 
that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects 
and returns the average age of all the people in the array.*/
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    console.log(`Full Name: ${this.firstName} ${this.lastName}`);
  }
  averageAge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].age;
    }
    return sum / arr.length;
  }
}
const obj = new Person("Prathamesh", "Mahadik", 24);
const obj1 = new Person("Tuhin", "Paul", 22);
const obj2 = new Person("Ayush", "Soni", 23);
const obj3 = new Person("Ashish", "Sangar", 25);
const arr = [obj, obj1, obj2, obj3];
arr.forEach((e) => {
  e.fullName();
});
const avg = obj.averageAge(arr);
console.log("Average age:", avg);
