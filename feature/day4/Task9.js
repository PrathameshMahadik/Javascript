// 9. Write a program to find the last duplicate index in an array
let arr = [10, 20, 30, 10, 30, 40, 50, 60, 10, 60];
let index = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      index.push(j);
    }
  }
}
console.log(index[index.length - 1]);
