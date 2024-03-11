// 4. Write a function expression that takes in a number and returns its square.

let number = parseInt(prompt("Enter a Number : "));

function square(number){
    return number*number;
}

console.log(square(number));

// Using Arrow Function
const square1 = (number) => number*number;
console.log('Square Using Arrow Function : ' , square1(number));

