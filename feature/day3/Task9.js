// 9. Write a program to print fibonaaci series
let firstNo = 0;
let secondNo = 1;
console.log(firstNo);
console.log(secondNo);
for (let i = 1; i <= 10; i++) {
  let sum = firstNo + secondNo;
  console.log(sum);
  firstNo = secondNo;
  secondNo = sum;
}
