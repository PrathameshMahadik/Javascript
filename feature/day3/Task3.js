// 3. Write a program to display Diamond Pattern
let col = 9;
let num = 5;
let num1 = 5;
for (let i = 0; i < 9; i++) {
  let str = "";
  for (let j = 0; j < col; j++) {
    if (j >= num - 1 && j < num1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  if (i < 4) {
    num--;
    num1++;
  } else {
    num++;
    num1--;
  }
  console.log(str);
}
