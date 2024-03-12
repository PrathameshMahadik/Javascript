// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})
let employees = [
  {
    firstName : "Tuhin",
    lastName : "Paul",
    id : 1264,
    age : 22,
    joinedDate : "February 26, 2024",
  },
  {
    firstName : "Prathamesh",
    lastName : "Mahadik",
    id : 1267,
    age : 24,
    joinedDate : "February 26, 2024",
  },
  {
    firstName : "Ayush",
    lastName : "Soni",
    id : 1255,
    age : 23,
    joinedDate : "February 26, 2024",
  },
];
employees.sort((a, b) => a.age - b.age);
employees.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});
