// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
let input = "Hello World";
let result = "";
result = (str) => [...new Set(str)].join("");
console.log(result(input));
