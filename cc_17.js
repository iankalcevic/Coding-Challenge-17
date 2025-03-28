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

// Task 2 - Create a sales rep class

class SalesRep {
    constructor(name) {
        this.name = name; //Get customer name
        this.clients = []; //Array of customer objects
    }
    addClient(customer) {
        this.clients.push(customer); //Add a customer to list 
    }
    getClientTotal(name) {
        const client = this.clients.find(c => c.name === name);
        return client ? client.getTotalSpent() : 0;
    }; //Find client by name
};

//Log sales rep clients
const rep1 = new SalesRep("Bob");
rep1.addClient(customer1);
console.log("Sales Rep Clients:", rep1.clients);
console.log("Client Total:", rep1.getClientTotal("Alice"));

// Task 3 - Create a VIPcustomer class

class VIPCustomer extends Customer {
    constructor(name, email,vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel; //VIP Level
    }
    getTotalSpent() {
        const baseTotal = super.getTotalSpent();
        return baseTotal * 1.10; //10% loyalty bonus 
    };
};

// Task 4 - Build a client report system

const customers = [
    customer1,
    vip1,
    new Customer("Jake", "Jake@email.com"),
    new VIPCustomer("Jack", "jack@vip.com", Platinum)
]; //Store customers

const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500); //Find customers that spend over 500
const customerSummary = customers.map(customer => ({
    name: customer.name,
    total: customer.getTotalSpent()
})); //Create an array of customer names and total spent

//Log revenue and customers
console.log("Total revenue:", totalRevenue);
console.log("High spenders:", highSpenders);
console.log("Customer Summary:", customerSummary);
//Log VIP total spent with bonus
const vip1 = new VIPCustomer("Charlie", "charlie@vip.com", "Gold");
vip1.addPurchase(500);
console.log("VIP Total with bonus:", vip1.getTotalSpent());
