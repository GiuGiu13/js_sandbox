// let sayHello = function(){
//     console.log('hello');
// }

// let sayHello = () => {
//     console.log('hello');
// }

//one line function does not need braces
// let sayHello = () => console.log('hello');

//one line returns
// let sayHello  = () => 'Hello';

///it is the same of
// let sayHello = function(){
//     return 'Hello';
// }

//return object
// let sayHello  = () => ({msg: 'Hello'});

//single param does not need parenthesis
// let sayHello =  name => console.log(`Hello ${name}`);

//multiple params need parenthesis
// let sayHello =  (firstname, lastName) => console.log(`Hello ${firstname} ${lastName}`);
// sayHello('Giusy', 'C');

let users = ['Lory' , 'Giusy' , 'Mark'];

// let nameLenghts =  users.map(function(name){
//     return name.length;
// });
//shorter
// let nameLenghts =  users.map((name) => {
//     return name.length;
// });

//shortest
let nameLenghts = users.map(name => name.length);

// console.log(nameLenghts);