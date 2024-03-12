// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object.
//The function should handle nested objects and arrays.
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
let clone = [...employees];
console.log(clone);
