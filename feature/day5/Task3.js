// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
let employees = [
  {
    firstName: "Tuhin",
    lastName: "Paul",
    id: 1264,
    age: 22,
    joinedDate: "February 26, 2024",
  },
  {
    firstName: "Prathamesh",
    lastName: "Mahadik",
    id: 1267,
    age: 24,
    joinedDate: "February 26, 2024",
  },
  {
    firstName: "Ayush",
    lastName: "Soni",
    id: 1255,
    age: 23,
    joinedDate: "February 26, 2024",
  },
];
employees.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.id} ${e.age}`);
  delete e.id;
});
console.log("-----------------------------------");
employees.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});
