//const form = document.querySelector('form');
//const taskInput = document.getElementById('task');
//const heading =  document.querySelector('h5');

//13 we added a select list in the html file, we cannot see this on the project because it's out of materilaze, for seeing it we have to comment the materialize library
//const select = document.querySelector('select');

//3 clear input, if you have already some placeholder
//taskInput.value = " ";


//1 we can crate a click on the form
//form.addEventListener('submit', runEvent);

//5 keydown is when you press down your keybord
//taskInput.addEventListener('keydown', runEvent);

//6 keyup is when you release your keybord
//taskInput.addEventListener('keyup', runEvent);

//7 keypress is when you press your keybord
//taskInput.addEventListener('keypress', runEvent);

//8 focus is when you press with your keybord into an input
//taskInput.addEventListener('focus', runEvent);

//9 blur is when you press with your keybord into an input and after you clikc somewhere else, is the inverse of focus
//taskInput.addEventListener('blur', runEvent);

//10 cut is when you delete the copy you typing and the event will fire when you press cut
//taskInput.addEventListener('cut', runEvent);

//11 paste is when you copy  your text  and the event will fire when you press paste
//taskInput.addEventListener('paste', runEvent);

//12 inputis when you use actually the input if you cut or paste it will fire the input anyway
//taskInput.addEventListener('input', runEvent);

//13 change it can work just with select not input
//select.addEventListener('change', runEvent);




//2 don't forget to put the e in the function for the click 
//function runEvent(e){
//    console.log(`EVENT TYPE: ${e.type}`);
//    
    //6 remember target is the element that we are use for the click, in this case is the input
//    console.log(e.target.value);
//    heading.innerText = e.target.value;
    //4 get the value 
//    console.log(taskIpnput.value);
//    e.preventDefault();
//}