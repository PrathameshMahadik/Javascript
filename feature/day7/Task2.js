// 2. Give an example of using multiple callback functions in a single function in JavaScript
function square(number) {
  return number ** 2;
}
function sum(number1, number2) {
  return number1 + number2;
}
function callback(square1, sum1, num1, num2) {
  return square1(sum1(num1, num2));
}
console.log(callback(square, sum, 2, 3));
