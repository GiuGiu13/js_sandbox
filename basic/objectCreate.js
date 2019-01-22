const personPrototypes = {
    greeting : function(){
        return `hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const laura = Object.create(personPrototypes);
laura.firstName = 'mary';
laura.lastName  = 'Williams';
laura.age = 30;

laura.getsMarried('bastard')

//console.log(laura.greeting());

//there is another way to create object with Object.create
const mark =  Object.create(personPrototypes,{
    firstName: {value:'mark'},
    lastName: {value:'traversty'},
    age:{value:36}
});

//console.log(mark);
//console.log(mark.greeting());