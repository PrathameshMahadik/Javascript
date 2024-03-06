//1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
function add(a, b) {
  console.log(a + b);
  console.log("--------------------------------");
}

function sub(a, b) {
  console.log(a - b);
  console.log("--------------------------------");
}

function mul(a, b) {
  console.log(a * b);
  console.log("--------------------------------");
}

function div(a, b) {
  console.log(a / b);
  console.log("--------------------------------");
}

let choice;
do {
  choice = parseInt(
    prompt(
      "Enter 1 For Addition\nEnter 2 For Substraction\nEnter 3 For Multiplication\nEnter 4 For Division\nEnter 5 For Exit\n"
    )
  );
  let num1 = parseInt(prompt("Enter First No. :"));
  let num2 = parseInt(prompt("Enter Second No. :"));
  switch (choice) {
    case 1:
      add(num1, num2);
      break;
    case 2:
      sub(num1, num2);
      break;
    case 3:
      mul(num1, num2);
      break;
    case 4:
      div(num1, num2);
      break;
    case 5:
      exit(0);
      break;
    default:
      break;
  }
} while (choice != 5);
