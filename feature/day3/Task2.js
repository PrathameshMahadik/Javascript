//2. Write a program to display following output as shown in figure
console.log("Pattern :1");
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let num = 1;
for (let i = 1; i <= 4; i++) {
  let count = 1;
  let str = "";
  for (let j = 1; j <= i; j++) {
    if (count <= i) {
      str += num;
      num++;
      count++;
    }
  }
  console.log(str);
}
console.log("------------------------------");
console.log("Pattern : 2");
// 1
// 2 2
// 3 3 3
// 4 4 4 4
for (let i = 1; i <= 4; i++) {
  let count = 1;
  let str = "";
  for (let j = 1; j <= i; j++) {
    if (count <= i) {
      str += i;
      count++;
    }
  }
  console.log(str);
}
console.log("------------------------------");
console.log("Pattern : 3");
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let col = 5;
for (let i = 1; i <= 9; i++) {
  let str = "";
  for (let j = 1; j <= col; j++) {
    if (j <= col) {
      str += j;
    }
  }
  if (i < 5) {
    col--;
  } else {
    col++;
  }
  console.log(str);
}
