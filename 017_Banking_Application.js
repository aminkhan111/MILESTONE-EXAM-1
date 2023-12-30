// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

let customer1 = {
    name: "Amin Khan",
     balance: 100000000
};
let customer2 = {
    name: "Aiysha Khan",
     balance: 100000000
};
 
// function for Deposit 
function deposit(customer, amount){
    if(amount > 0){
        customer.balance += amount;
        console.log(`${customer.name}
        deposited$ ${amount}.New balance :$${customer.balance}
        `);
    }else {
        console.log("Invalid deposit amount. Please enter a positive value.");
      }

}


//function for withdrow Balance 

function withdraw(customer,amount){
    if (amount > 0 && amount <= customer.balance){
        customer.balance -=amount;
        console.log(`${customer.name} withdrew $${amount}. New balance: $${customer.balance}`);
    } else if (amount > customer.balance) {
      console.log("Insufficient funds. Withdrawal denied.");
    } else {
      console.log("Invalid withdrawal amount. Please enter a positive value.");
    }
}
//   Example usage
deposit(customer1, 2000); // John Doe deposited $200. New balance: $1200
withdraw(customer2, 1000); // Jane Smith withdrew $100. New balance: $400
withdraw(customer1, 1500); // Insufficient funds. Withdrawal denied.
deposit(customer2, -500); // Invalid deposit amount. Please enter a positive value