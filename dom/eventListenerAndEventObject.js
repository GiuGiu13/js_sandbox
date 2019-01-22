////document.querySelector('.clear-tasks').addEventListener('click', function(e){
////    console.log('Hello World');
////    
////    //to stop the weird behavior of the event (e) on click or you add
////    // e.preventDefault(); 
////    // or you add to your link href="#" the ashtag
////})
//
//document.querySelector('.clear-tasks').addEventListener('click', onClick);
////when we are going to click on 'clear-tasks it will look for a function called onClick
//function onClick(e){
////    console.log('clicked');
//    
//    let val;
//    val = e;
//    
//    
//    //event target element
//    val = e.target; // you can see that the target is the button
//    val = e.target.id; //it will be empty brcause it doesn't have id
//    val =  e.target.className; //it will give us the class name of the button
//    val = e.target.classList; //it will give us the collection of classes of the btn
//    
//    e.target.innerText = 'hello';//it will change the text in the btn
//    
//    //you can do wherever you want with he target
//
//    //event type
//    val = e.type; //which tipe of event is happening , in this cse is click, it cna be also mouse over or others
//    
//    //timestamp
//    val = e.timeStamp;
//    
//    //cordinates event relative to the window
//    val = e.clientY;
//    val = e.clientX;
//    
//    //cordinates event relative to the element
//    val = e.offsetY;
//    val = e.offsetX;
//    
//    
//    console.log(val);
//}