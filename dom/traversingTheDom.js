//traversing == moving up and down

//let val;
//
//const list = document.querySelector('ul.collection');
//const listItem = document.querySelector('li.collection:first-child');
//
//val = list;
//val = listItem;


//get child nodes
//1 childnodes will count also the </li> as space, it return us a nodelist
//val = list.childNodes;
//2 we are going to have the first one
//val = list.childNodes[0].nodeName;
//val = list.childNodes[3].nodeType;


///2 you can check the list and put the number and check what you are looking for in the list, for example
//1 - element
//2 attribute(deprecated)
//3 text node
//8 comment
//9 document itself
//10 doctype


//get children element nodes it will return a n html list
//val = list.children;
//val = list.children[0];
//
//list.children[1].textContent = 'Hello';

//children of children
//list.children[3].children[0].id = 'test-link';
//val = list.children[3].children[0];

///3 it will give us the first of the list with nodes
//val = list.firstChild;

///4first element child will give us just the first item of the list without node
//val =  list.firstElementChild;

///5 as we have first, we have last
//val = list.lastChild;
//val = list.lastElementChild;

///6 count the child elements
//val =list.childElementCount;

//get parent nodes
//val = listItem.parentNode;
//val = listItem.parentElement;

//get next siblings
//val = listItem.nextSibling;
//val = listItem.nextElementSibling.nextElementSibling;

//get prev siblings
//val = listItem.prevSibling;
//val = listItem.prevElementSibling.prevElementSibling;


//console.log(val);