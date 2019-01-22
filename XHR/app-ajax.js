document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //create an xhr object
    let xhr = new XMLHttpRequest();

    //open
    xhr.open('GET' , 'data.txt' , true);

    // console.log('READYSTATE', xhr.readyState);

//optional - used for spinners/loaders
xhr.onprogress = function () {
    // console.log('READYSTATE', xhr.readyState);
}    


//on load is new before we use to use --> see example 2
    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);
        if(this.status === 200 ){
            document.getElementById('output').innerHTML = `<h1>${this.responseText} </h1>`;
            // console.log(this.responseText);
        }
    }

//example 2 -older sintax
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('request error....');
    }
    xhr.send();
}

//ready state values
//0 request not initialized
//1 server connection established
//2 request received
//3 processing request
//4 request finished and response is ready

// HTTP STATUSES
// 200: ok
// 403 forbidden
// 404 not found