(function () {
    let randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)
let userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
let userGuess = document.querySelector('.all-guesses')
let userGuessArr = []
const submit = document.querySelector('.submit-btn')
const startGame = document.querySelector('.start-game')
let guess = document.querySelector('.remainingGuess')
let value = 10
guess.innerHTML = `You have ${value} attempts left`

form.addEventListener('submit', function(e){
    e.preventDefault()
    let userInputValue = parseInt(userInput.value)
    if (userInputValue < randomNumber){
        result.innerHTML = 'Too low!'
    }
    else if (userInputValue > randomNumber){
        result.innerHTML = 'Too High!'
    }
    else {
        result.innerHTML = 'Congratulations! You have won the game.'
        startGame.disabled = false
        submit.disabled = true

    }
    userGuessArr.push(userInputValue)
    userGuess.innerHTML = "Your guesses are:" + userGuessArr.join(', ')


    if (value > 0){
        value = value - 1
        guess.innerHTML = `You have ${value} attempts left`
    }else{
        submit.disabled = true
        startGame.disabled = false 
    }
    if (userInputValue === randomNumber){
        guess.innerHTML = ''
    }
    
   form.reset()

})

startGame.addEventListener('click', function(){
    result.innerHTML = ''
    userGuess.innerHTML = ''
    submit.disabled = false 
    startGame.disabled = true
    randomNumber = Math.round(Math.random() * 100)
    userGuessArr = []
    value = 10

})
}) ()