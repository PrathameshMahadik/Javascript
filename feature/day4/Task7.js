// 7. Write a program to find index of duplicate elements in an array
let arr = [10, 20, 30, 10, 30, 40, 50, 60, 10, 60];
let hashMap = new Map();
for (let i = 0; i < arr.length; i++) {
  if (!hashMap.has(arr[i])) {
    hashMap.set(arr[i], 1);
  } else {
    hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
    console.log(i);
  }
}
