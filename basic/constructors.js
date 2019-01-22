//person constructor

//function Person(){
//    this.name = 'Giusy';
//}

//1 so you can create a lot of name 
//const brad = new Person();
//const john = new Person();

//console.log(john);

//2 best practice instead is crate a function 

function Person(name, dob){
    this.name = name;
//    this.age = age;
    
    //3 so if you check it inside the function si refered to the function, if you do on gobal scope you'll have the window object
    //console.log(this);
    
//    this.birthday = new Date(dob);
    //let s calculate the age with a function
//    this.calculateAge = function(){
//        const diff = Date.now() - this.birthday.getTime();
//        const ageDate = new Date(diff);
//        return Math.abs(ageDate.getUTCFullYear() - 1970);
//        
//        //4 this is the formula for calculate age in the universal time
//    }
    
}
//const brad = new Person('Brad', 30);
//const john = new Person('John', 35);
//console.log(john.age);

const brad = new Person('Brad', '9-10-1980');
//console.log(brad);
//console.log(brad.calculateAge());