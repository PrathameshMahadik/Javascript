// 8. Write a program to remove dupliacte elements from an array
let arr = [10, 20, 30, 10, 30, 40, 50, 60, 10, 60];
arr = [...new Set(arr)];
console.log(arr);
