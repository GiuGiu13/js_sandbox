//init github
let github = new GitHub;
//init UI
let ui = new UI;


// Search input
let searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) =>{
    //get input text
    let userTest = e.target.value;

    if(userTest !== " "){
     //make http call
     github.getUser(userTest)
        .then(data =>{

            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not find', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            // console.log(data);
        })
    }else{
        //clear the profile
        ui.clearProfile();

    }
})