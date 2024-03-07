// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
const input = "abcabcdabbcc";
let result = "";
let arrInput = input.split("").sort();
let count = 1;
for (let i = 1; i <= arrInput.length; i++) {
  if (arrInput[i] === arrInput[i - 1]) {
    count++;
  } else {
    result += arrInput[i - 1];
    result += count;
    count = 1;
  }
}
console.log(result);
