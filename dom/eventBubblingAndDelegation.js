//EVENT BUBBLING

//document.querySelector('.card-title').addEventListener('click', function(){
//    console.log('card-title');
//});

//1 now we are going from the element up in the chain to the parents

//document.querySelector('.card-content').addEventListener('click', function(){
//    console.log('card-content');
//});
//
//document.querySelector('.card').addEventListener('click', function(){
//    console.log('card');
//});
//
//document.querySelector('.col').addEventListener('click', function(){
//    console.log('col');
//});

//2 click on the event you can see that it will show us all the click tag that we create also if we are not touching in particular that elements

///EVENT DELGATION

//const delItem = document.querySelector('.delete-item');
//
//delItem.addEventListener('click', deleteItem);
//
//function deleteItem(){
//    console.log('delete item');
//}

//3 if you click on the icon yellow it will fire the function, but if you refresh it will not work anymore, in this time we need delgation  if you dynamic somenthing int o the dom thro javascript


//document.body.addEventListener('click', deleteItem);
//4 selectiong the body it means that wherever we will click we are going to fire the function
//function deleteItem(e){
//    console.log('delete item');
//    if (e.target.parentElement.className === 'delete-item secondary-content'){
        //6 we added parent element because we don't want just the icon we want thwe a tag
        //7 because the parent, the a tag have more then one class className will not work if we don;t specify all the entire class name
        //5 with e.target we will find the element that we specifcly are looking for
//        console.log('delete item');
//    }
//}
//8 because is possible that in future we are going to add classes to the elemnt, it will not work anymore, so in this case instead of className is better use classList, it will try to find in the list the class just the one that we are looking for
//function deleteItem(e){
//9 don't forget to add the metod contains and take out the ===
//    if (e.target.parentElement.classList.contains('delete-item')){
//        console.log('delete item');
        //10 now let's add the functionality, that when we click on the icon the parent, all the click tag will be deleted
//        e.target.parentElement.parentElement.remove();
//    }
//}








