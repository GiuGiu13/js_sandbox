//better use const but in this case for avoid conflict we use let
let http = new easyHTTP;

//Get posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }    
// });

//Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }    
// });

//Create Data
let data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }    
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, post) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }    
// });


//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }    
});