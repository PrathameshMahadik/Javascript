// 5. Write a function expression that takes in two numbers and returns their sum.

let num1 = parseInt(prompt("Enter First Number : "));
let num2 = parseInt(prompt("Enter Second Number : "));

function sum(a,b){
    return a + b; 
}

console.log(sum(num1 , num2));

const sum1 = (a , b) => a + b ;
console.log("Sum using Arrow Functions :" , sum1);
