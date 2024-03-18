// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)
const min = 1;
const max = 10;
const num = Math.floor(Math.random() * (max - min + 1) + min);
console.log(num);
