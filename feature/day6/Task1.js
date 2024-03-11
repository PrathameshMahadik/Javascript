// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`A/c No.: ${accountNumber}`);
    console.log(`Opening Balance: ${balance} rs.`);
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount} rs.`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount} rs.`);
    } else {
      console.log(`Want to withdrawn: ${amount} rs.`);
      console.log("Insufficient balance");
    }
  }
  displayBalance() {
    console.log(`Account Balance: ${this.balance} rs.`);
  }
}
const account = new BankAccount("65789", 1500);
account.deposit(500);
account.withdraw(400);
account.displayBalance();
account.withdraw(1800);
account.displayBalance();
