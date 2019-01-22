//the window of the browser is the envirement

//if you write in the console window you can se everything about it


//WINDOW METHODS / OBJECTS / PROPERTIES

//ALERT
//window.alert('hello world');
//1 you are not use to see this bit without window written
//alert('hello world');

//PROMPT
//const input = prompt();
//alert(prompt);

//CONFIRM, WHEN YOU DELETE SOMENTHING, ARE YOU SURE?
//if (confirm('are you sure')){
//    console.log('yes');
//}else{
//    console.log('no');
//}
let resp;
//outer height and width

resp = window.outerHeight;
resp = window.outerWidth;

//inner height and width
//2 if there are scroll bar better inner
resp = window.innerHeight;
resp = window.innerWidth;

//scroll point 
//you 'll know where you are on scroll

resp = window.scrollX;
resp = window.scrollY;

//location object
resp = window.location;
//3 this will show us for instance the domain name
resp = window.location.hostname;
//4 this will show us the port
resp = window.location.port;
resp = window.location.href;

//5 you can look for path and search
resp = window.location.search;

//redirect
//window.location.href = 'http://google.com'

//reload
//6 it will reload always the page
//window.location.reload();

//history object
//7 you go back on the cronology of you navigate it
///window.history.go(-1);

//8 you can check the history length
//resp = window.history.length;

//navigator object
//it depend of the brower you choose
resp = window.navigator;
resp = window.navigator.appName;
resp = window.navigator.appVersion;
resp = window.navigator.userAgent;
resp = window.navigator.platform;
resp = window.navigator.vendor;
resp = window.navigator.language;

//console.log(resp);

 