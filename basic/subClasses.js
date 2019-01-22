//class Persons{
//    constructor(firstName, lastName){
//        this.firstName = firstName;
//        this.lastName = lastName;
//    }
//    
//    greeting(){
//        return `Hello there ${this.firstName} ${this.lastName}`;
//    }
//}
//
//
////we attacch the class customers to persons with extend
//class Customers extends Persons{
//    constructor(firstName, lastName, phone, membership){
//        //this function call the parent class constructor
//        super(firstName, lastName);
//        //now everything we have to pass from the second class
//        this.phone = phone;
//        this.membership = membership;
//    }
//    //static method
//    static getMembershipCost(){
//        return 500;
//    }
//}
//
//const jenny = new Customers ('jerry', 'doe', '0842 38434 8383', 'Standard');
//
//console.log(jenny.greeting());
////we can use costumers and call the static function but we cannot do the way round we canno use person. it's just one way
//console.log(Customers.getMembershipCost());