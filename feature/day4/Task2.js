// 2.Write a program to reverse a string ("Hello John" => "nhoJ olleH")
const input = "Hello John";
let result = "";
for (let i = input.length; i >= 0; i--) {
  let char = input.charAt(i);
  result += char;
}
console.log(result);
