//i++  i =  i + 1

//FOR LOOP

//1 we can just use let in the loop, because it will change, never const
//2 the first expression is the default it will be always start from 0
//3 i it will grow until the second expression is true, in this case until 10
//for (let i = 0; i < 10;  i++){
    //4 if you want break the loop and you want put somenthing in the loop
    
//    if(i === 3){
//        console.log('3 is my favourite number');
        //5 continue will break the loop without fire the same number two times, go to the next interation
//        continue;
//    }
//    
//    if (i === 6){
//        console.log('stop the loop');
//        break;
        //6 this will break the loop and stop it, remember that 0 in counted as 1
//    }
//    console.log('Number ' + i);
//}


// YOU USE THE FOR LOOP WHEN YOU DONT KNOW HOW MANY TIMES WILL BE RUNNED, YOU USE WHILE LOOP WHEN YOU KNOW EXACTLY HOW MANY TIMES IT WILL PASS

//WHILE LOOP

//let i = 0;

//8 inside the while loop you just put the second expression, the value that you want 
//while(i < 10){
//    console.log('Number ' + i);
//    i++;
//}


//DO WHILE different from while loop because it will run once no matter what

//let i = 100;
//9 if we change the value to 100 it will run once anyway also if in the while the max value is 10
//do {
//    console.log('Number ' + i);
//    i++;
//}
//
//while(i < 10);

//LOOP THOUGHT ARRAY

//const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

//for (let i= 0; i < cars.length; i++){
    //10 it will show us the number of cars, we ask length
    //console.log(i);
    //11 if we want show the name of th cars
//    console.log(cars[i]);
//}

//FOR EACH LOOP best option if you have to loop an array

//cars.forEach(function(car){
//   console.log(car); 
//});

//12 this is the four each index, it's like a list with number
//cars.forEach(function(car, index){
//   console.log(`${index} : ${car}`); 
//});

//13 you can pass also the entire array
//cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`); 
//   console.log(array);
//});


//MAP is returning a different array

//const users = [
//    {id:1, name:'John'},
//    {id:2, name:'Ella'},
//    {id:3, name:'Rob'},
//    {id:4, name:'Enza'},
//];

//14 we want to take just the id from the object of users
//const ids = users.map(function(user){
//    return user.id;
//});
//console.log(ids);

//FOR IN LOOP always used for object

//const user = {
    //15 firstname is the key and john is the value
//    firstName: 'John',
//    lastName: 'Ciao',
//    age: 90
//}
//
//for (let x in user){
    //16 x will give use just the key (x)
//    console.log(x);
    //17 if we want also the value 
//    console.log(`${x} : ${user[x]}`);
//}
















































