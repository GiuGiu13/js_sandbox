//set local storage item
//localStorage.setItem('name', 'John');
//localStorage.setItem('age', '30');


//set session storage item
//sessionStorage.setItem('name', 'Beth');

//1 if you close the browser the localstorage will stay, the session storage will not be there


//remove from storage
//localStorage.removeItem('name');

//get from storage
//const name =  localStorage.getItem('name');
//const age =  localStorage.getItem('age');

//clear local storage
//1 for clear you have comment the line 2 and 3
//localStorage.clear();
//console.log(name, age);

//2 if I want to add a value in the storage from the form
//document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').value;
//   console.log(task);
    
    //4 it will storage just a task, the task it overwrite the task already create so we need to create an array to storage multiple task
    
//    let tasks;
    //5 it means if the tasks in plural becaus it will be an array is emty, the tasks it will be empty
//    if(localStorage.getItem('tasks') === null){
//        tasks = [];
//    }else{
        //6 usually you save a jason OBJECT
//        tasks = JSON.parse(localStorage.getItem('tasks'));
//    }
    //7 now we push the value in the variable above, it will not add anyting to the local storage, we need to update the local storage wilt the value that we created
//    tasks.pusk(task);
    
    //8 sowe change the local storage at line 46, it has to store a sting so we need to wrap it in the JSON object
//    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    
    //3 to set the item in the local storage
//      localStorage.setItem('task',task);
//    alert('tasked saved');
//    e.preventDefault();
//});
//
//const tasks = JSON.parse(localStorage.getItem('tasks'));
//
//tasks.forEach(function(task){
//   console.log(task);
//});
















