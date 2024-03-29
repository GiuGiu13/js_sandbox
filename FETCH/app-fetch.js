document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

//get local text file
function getText(){
    fetch('text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;

    })
    .catch(function(err){
        console.log(err);
    });
}

//function get text with arrow function 
function getText(){
    fetch('text.txt')
    .then(res => res.text())
    .then(data =>{
        console.log(data);
        document.getElementById('output').innerHTML = data;

    })
    .catch(err => console.log(err));
}
//get local JSON data
function getJson(){
    fetch('posts.json').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        // console.log(err);
    });
}

//get from external API
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        // console.log(err);
    });
}

