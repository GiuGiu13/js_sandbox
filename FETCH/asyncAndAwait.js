// //if you put async on your function will give you a promise not a console log

// async function myFunc(){
//     // return 'Hello';

//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(()=> resolve('hello'), 1000);
//     });

//     let error = true;

//     if(!error){
//         return res;
//     }else{
//         await Promise.reject(new Error('Somenthing went wrong'));
//     }

//     // let res = await promise; //wait until promise is resolved
//     // return res;
// }

// // console.log(myFunc());

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


async function getUsers(){

    //await response on the fetch caal
    let response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once its resolved

    let data = await response.json();
    
    //only proceed once second promise resolved
    return data;
}

getUsers().then(users=> console.log(users));