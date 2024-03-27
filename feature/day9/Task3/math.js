/* create a new folder named 'math' and create a file math.js. In math.js, define two functions:
a. add(a, b): takes two numbers as arguments and returns their sum.
b. subtract(a, b): takes two numbers as arguments and returns their difference.
create a new file index.js and just export those functions and then use those function in any of the file */
const _ = require("lodash");
function add(num1, num2) {
  return _.add(num1, num2);
}
function subtract(num1, num2) {
  return _.subtract(num1, num2);
}
module.exports = { add, subtract };
