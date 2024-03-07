// 6. Write a program to display prime numbers from 1 to 50
function isPrime(num) {
  let status = true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      status = false;
      break;
    }
  }
  return status;
}

for (let i = 2; i <= 50; i++) {
  let status = isPrime(i);
  if (status) {
    console.log(i);
  }
}
