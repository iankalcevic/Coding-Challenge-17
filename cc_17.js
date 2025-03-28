// Task 1- Create a customer class

class Customer {
    constructor(name, email) {
        this.name = name; //Define name
        this.email = email; //Define email
        this.purchaseHistory = []; //Define purchase history
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount); //Add purchase amount to history
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }; //Return total amount spent
};

//Log new customer creations
const customer1 = new Customer("Alice", "alice@example.com");
customer1.addPurchase(100);
customer1.addPurchase(200);
console.log("Total Amount Spent:", customer1.getTotalSpent());
