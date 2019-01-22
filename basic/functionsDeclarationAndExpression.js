//FUNCTION DECLARATION

//function greet(){
//    console.log('hello');
//}
//
//greet();

//if we want to return a function and show the function in the console
//firstName is the argument

//4 now for js 6 there is a different way below, default argument declared in the function
function greet(hisName = 'John', bestName = 'Doe'){

//function greet(hisName, bestName){
    //2 (this is a bit old)
//    if(typeof hisName === 'undefined'){hisName = 'John'}
//    if(typeof bestName === 'undefined'){bestName = 'John'}
    
    return 'hello' + hisName +  '' + bestName;
}

//console.log(greet('John', 'Doe'));

//3 so now without define any argument we will have default values
//console.log(greet());


//1 if we dont pass any argument in the console it will give us undefine, so we have to specify -->2


//FUNCTIONS EXPRESSIONS

const square = function(x = 3){
    return x*x;
};
//5 the dafalt value is defined
//console.log(square(8));

//IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//6 are the function that are declared and run at same time

//(function(){
//    console.log('IIFE Ran...')
//})();
//7 if we don't put (); at the end it will not work

//8 you can put parameter in
//(function(name){
//    console.log('Hello ' + name)
//})('Giusy');

//PROPERTY METHOD
//when a function is putted in a object is called method

//
//const todo ={
//    add: function(){
//        console.log('add todo...');
//    },
//    edit: function(id){
//      console.log(`edit todo ${id}`);
//    }
//}
//9 you can define function outside the object
//todo.delete = function(){
//     console.log('Delete todo...');
//}
//
//todo.add();
//todo.edit(22);
//todo.delete();














