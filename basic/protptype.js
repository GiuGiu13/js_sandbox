//object.prototype
//person.prototype


function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
//    this.calculateAge = function(){
//        const diff = Date.now() - this.birthday.getTime();
//        const ageDate = new Date(diff);
//        return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }
}





//1in the console you can see the __proto__, we cannot have access to this for instance in a loop and it represent the person.prototype. We can see in it all we pot in the person prototype. Inside there is another __proto__ , it's the object proptotype and this have all the property

//2  now the first name and the last name will always different because each one will have its own, insted the birthday will be always the same function that will calculate the same way the age so it's best practice to use a prototype for it

//Person.prototype.calculateAge = function(){
//        const diff = Date.now() - this.birthday.getTime();
//        const ageDate = new Date(diff);
//        return Math.abs(ageDate.getUTCFullYear() - 1970);
//}
//get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//3 from this point we can use our prototype to just having data and we can modify the data
//get married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}


const john =  new Person('John', 'Doe', '18-12-90');
const mary =  new Person('mary', 'Johnson', 'March 20 1978');

//console.log(mary);
//console.log(john.calculateAge());
//console.log(mary.getFullName());
mary.getsMarried('Smith');
//console.log(mary.getFullName());

//4 instead for the object prototype we can easly access to his function
//console.log(mary.hasOwnProperty('firstName'));
//5 this will give us false because is in the prototype not direct in the object
//console.log(mary.hasOwnProperty('getFullName'));

