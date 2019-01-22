//this will not used very often but good to know

//string

const name1 = 'jeff';
const name2 = new String('jeff');

//name2.foo = 'bar

//console.log(name2);

//1 so if you console log the name1 you can see just the name, if you log the name2 you'll see a string so if you had in the string attrib as on the foo you can see in the log

//console.log(typeof name2);

if(name1 === 'Jeff'){
//    console.log('yes');
} else{
//     console.log('no');
}

//2 if you put name2 in will say no, because the type of in not a string, if you replace === with == it will say yes because it check just the value inside not the type


//number
const num1 =5;
const num2 = new Number(5);

//boolean
const bool1 = true;
const bool2 = new Boolean(true);

//function
const getSum1 = function(x,y){
    return x + y;
}

const getSum2 = new Function ('x' , 'y', 'return 1 + 1');
//console.log(getSum1(1,1));
//console.log(getSum2(1,1));


///object
const john1 = {name : 'john'};
const john2 =  new Object({name:'john'});
//console.log(john2);

//arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
//console.log(arr2);

//regular expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

//console.log(re1);

//with this things are getting the project too slow so better don't use a lot














