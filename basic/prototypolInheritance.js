//person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

//console.log(person1.greeting());

function Customer(firstName, lastName, phone, memebership){
    Person.call(this, firstName, lastName);
    
    this.phone= phone;
    this.membership = memebership;
}
//1 call is a function that allow to call a function somewhere else in the current contex

//inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return customer()
Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('Tom', 'Smith', '07456840', 'standard');

//console.log(customer1);

//customer greeting
Customer.prototype.greeting = function(){
     return `Hello there ${this.firstName} ${this.lastName} welcome to our company!`;
}

//console.log(customer1.greeting());












