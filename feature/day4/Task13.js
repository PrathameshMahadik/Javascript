// 13. Write a program to return inverse of an array
let arr = [10, 20, 30, 40, 50, 60];
let inverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  inverse.push(arr[i]);
}
console.log(inverse);
