/*
GAME FUNCTION
-player must guess a number between a min and a max
-player gets a certain amount of guesses
-notify player of guesser remaining
-notifu the player of the correct answe if loose
-let player choose to play again
*/


//game value
let min =1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
}
});


//listen for guess
guessBtn.addEventListener('click', function(){
    //parseInt will change the value that now is a string(in console log you can see is black) in a proper number because w eneed for the calculation
    let guess = parseInt(guessInput.value);
    
    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    
    //check if won
    if (guess === winningNum){
        // gane over - won 
        
//        //disable input
//        guessInput.disabled = true;
//        //change border color
//        guessInput.style.borderColor = 'green';
//        //set message
//        setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
        
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    }else{
        //wrong number
        guessesLeft -= 1;
        //it's the same to say guessesLeft = guessesLeft -1
        if(guessesLeft === 0){
            //game over  - lost
            
//             //disable input
//            guessInput.disabled = true;
//            //change border color
//            guessInput.style.borderColor = 'red';
//            //set message
//            setMessage(`Game Over, YOU LOST! The correct number was ${winningNum}` , 'red');
            gameOver(false, `Game Over, YOU LOST! The correct number was ${winningNum}`);
            
           
        }else{
            //game continues -  answer wrong
            
             //change border color
             guessInput.style.borderColor = 'red';
            
            //clear input
            guessInput.value = '';
            
            //tell use its the wrong answer
             setMessage(`${guess} is not correct, ${guessesLeft} guesses left` , 'red');
        }
        
    }
    
});

//game over 
function gameOver(won, msg){
    let color;
    
    won ===  true ? color = 'green' : color = 'red';
    // if won is true color green oterwhise color red
    
       //disable input
        guessInput.disabled = true;
    
        //set text color
        message.style.color = color;
        //change border color
        guessInput.style.borderColor = color;
        
        //set message
        setMessage(msg);
    
    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//ger winning number
function getRandomNum(min, max){
   return Math.floor(Math.random()*(max - min + 1)+ min); 
}

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

