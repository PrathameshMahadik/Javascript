// 9. Write a program to find the last duplicate index in an array
let arr = [10, 20, 30, 10, 30, 40, 50, 60, 10, 60];
let index = [];
var count = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      count++;
      index.push(j);
    }
  }
}
index = [...new Set(index)];
let a = index[index.length-1]
console.log(a);
