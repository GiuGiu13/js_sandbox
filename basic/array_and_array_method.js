//create some arrays

const numbers = [45, 56, 67, 34,22];
const numbers2 = new Array(34, 78, 55, 90, 23);
const fruits = ['Apple', 'Banana', 'Orange' , 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//get array length
val= numbers.length;
//check if is an array
val = Array.isArray(numbers);
//get singlevalue
val = numbers[3];
val = numbers[0];

//insert into array
numbers[3] = 200;
//findex index of value
va = numbers.indexOf(36);


//MUTATING ARRAYS
//add on to end
//numbers.push(350);
////add on the front
//numbers.unshift(120);
////take off from the end
//numbers.pop();
////take off from front
//numbers.shift();
////splice values
//numbers.splice(1,1);
////reverse array
//numbers.reverse();
//concatenate
//val = numbers.concat(numbers2);

//sorting arrays
//val=fruits.sort();
//val = numbers.sort();
//
////use the 'compare function'
//val = numbers.sort(function(x,y){
//    return x - y;
//});
////sometimes used a and b in stead of x and y
//
////reverse sort
//val = numbers.sort(function(x,y){
//    return y - x;
//});

//find
function under50(num){
    return num < 50;
}

//console.log(numbers);
//console.log(val);