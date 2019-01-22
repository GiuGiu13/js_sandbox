//class are called syntantic sugar , what is changing is the way we write not the way this class work
//class People {
//    constructor(firstName, lastName, dob){
//        this.firstName = firstName;
//        this.lastName =  lastName;
//        this.birthday =  new Date(dob);
//    }
//    greeting(){
//        return `Hello there  ${this.firstName} ${this.lastName}`;
//    }
//    calculateAge(){
//        const diff = Date.now() - this.birthday.getTime();
//        const ageDate = new Date(diff);
//        return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }
//    
//    getsMarried(newLastName){
//        this.lastName = newLastName;
//    }
//    
//    //static method (it's not a function)
//    static addNumbers(x,y){
//        return x + y;
//    }
//    
//    
//}
//const lory = new People('lory', 'williams', '11-13-1980');
//
//lory.getsMarried('Thompson')
//console.log(lory);

//console.log(lory.addNumbers(1,2));
//this will give us an error because static is not a function, so we have to pass people
//console.log(People.addNumbers(1,2));