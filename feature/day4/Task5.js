// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
const input = "hello john doe";
let output = "";
let arrInput = input.split(" ");
output += arrInput[0].toString();
for (let i = 1; i < arrInput.length; i++) {
  let str = arrInput[i].toString();
  let ch = str.charAt(0);
  ch = ch.toUpperCase();
  str = str.replace(str.charAt(0), ch);
  output += str;
}
console.log(output);
