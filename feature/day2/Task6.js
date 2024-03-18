//6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.
let num = parseInt(prompt("Enter A Number : "));
function checkEvenOdd(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEvenOdd(num));
const checkOddEven = (a) => {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log("Check Even/Odd using Arrow Function : ", checkOddEven(num));
