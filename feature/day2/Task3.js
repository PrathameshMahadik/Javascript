// 3. Write a function expression that takes in another function as an argument

let num1 = parseInt(prompt("Enter First Number : "));
let num2 = parseInt(prompt("Enter Second Number : "));


const sub1 = function sub(a,b){
    return a - b; 
};
console.log("Substraction : " , sub1(num1, num2));