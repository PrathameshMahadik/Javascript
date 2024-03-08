// 9. Write a program to find the last duplicate index in an array
let arr = [10, 20, 30, 10, 30, 40, 50, 60, 10, 60];
let index = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      index.push(j);
    }
  }
}
function removeDuplicates(index) {
  let result = [];
  for (i = 0; i < index.length; i++) {
      if (result.indexOf(index[i]) === -1) {
          result.push(index[i]);
      }
  }
  return result;
}let a = removeDuplicates(index)
console.log(a[a.length-1]);
