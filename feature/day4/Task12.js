// 12. Write a program to display intersection of two array
let arr1 = [10, 20, 110, 80, 70];
let arr2 = [90, 10, 70, 60, 70, 100];
let result = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
    }
  }
}
result = [...new Set(result)];
console.log(result);
