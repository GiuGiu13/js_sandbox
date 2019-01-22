////REPLACE ELEMENT
////create an element
//const newHeading = document.createElement('h2');
//
////add id
//newHeading.id = 'task-title';
////new text node
//newHeading.appendChild(document.createTextNode('Task List'));
////get the old heading
//const oldHeading =document.getElementById('task-title');
////parent
//const cardAction = document.querySelector('.card-action');
//
////replace
//cardAction.replaceChild(newHeading, oldHeading);
//
//
////REMOVE ELEMENT
//const lis = document.querySelectorAll('li');
//const list = document.querySelector('ul');
//
////remove list item
//lis[0].remove();
//
////remove child
//list.removeChild(lis[3]);
//
//
////CLASSES AND ATTR
////we want to take theyellow x in the li tag
//const firstLi = document.querySelector('li:first-child');
//const link = firstLi.children[0];
//
//let val;
//
/////CLASSES
////it will show us the class of the first link (the yellow x class name)
//val = link.className;
//val = link.classList;
//val = link.classList[0];
//
////we can add class with classlist
//link.classList.add('test');
//val =  link;
////and remove class with classlist
//link.classList.remove('test');
//
////ATTRIBUTES
//val = link.getAttribute('href');
//val = link.setAttribute('href', 'http://google.com');
////for checking if it have attribute
//val = link.hasAttribute('href');
////if we want to add an attribute
//link.setAttribute('title', 'Google');
////if we want to remove an attribute
//link.removeAttribute('title');
//
//val = link;
//
//console.log(val);