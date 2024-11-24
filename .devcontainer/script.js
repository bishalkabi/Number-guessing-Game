let randomNo = Math.floor(Math.random()*1000+1);
console.log(randomNo)
let submitBtn = document.querySelector('#submit')
let userInput = document.querySelector('#guessField')
let numGuess = 1
let remaining = document.querySelector('.lastResult')
let lowOrHigh = document.querySelector('.lowOrHigh')
let canPlay = true;
let newGameBtn = document.querySelector('.hide')

if(canPlay){
submitBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    const guess = userInput.value
    validate(guess)
})
}

function validate(guess){
    if(isNaN(guess)) alert("Enter a valid Number")
    else if(guess < 1) alert("Please Enter a Number Greater than 0")
    else if(guess > 1000) alert("Please Enter a Number Less than 1000")
    else{
       if(numGuess === 10){
         displayGuess(guess)
         checkGuess(guess)
         displayMessage(`Game Over. Random number was ${randomNo}`)
         endGame()
       }
       else{
        displayGuess(guess)
        checkGuess(guess)
       }
    }
}

function checkGuess(guess){
    if(guess == randomNo){
        displayMessage(`Hurrah!!! You guessed it Right...`)
        endGame()
    }
    else if(guess < randomNo){
        displayMessage(`Number is Too low`)
    }
    else if(guess > randomNo){
        displayMessage(`Number is Too High`)
    }
}


function displayGuess(guess){ 
    remaining.innerHTML = `${10-numGuess}`
    numGuess++;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''; // Clear the input field
    remaining.innerHTML = `0`
    userInput.setAttribute('disabled', ''); // Disable the input field
    submitBtn.setAttribute('disabled', ''); // Disable the submit button
    newGameBtn.classList.remove('hide'); // Show the "New Game" button
    canPlay = false; // Prevent further gameplay
    newGame(); 
}

function newGame(){
   newGameBtn.addEventListener('click' , ()=>{
    randomNo = Math.floor(Math.random() * 1000 + 1); // Generate a new random number
    numGuess = 1; // Reset guess count
    canPlay = true; // Allow gameplay

    // Reset UI elements
    userInput.removeAttribute('disabled'); // Re-enable input
    submitBtn.removeAttribute('disabled'); // Re-enable submit button
    lowOrHigh.innerHTML = ''; // Clear feedback message
    remaining.innerHTML = `${10 - numGuess}`; // Reset remaining guesses

    // Hide the "New Game" button
    newGameBtn.classList.add('hide');
   })
}


