"use strict";

const correctNumber = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const currentScore = document.querySelector(".score");
const currentHighScore = document.querySelector(".highscore");

const btnCheck = document.querySelector(".btn.check");
const againCheck = document.querySelector(".btn.again");

let secretNumber = Math.trunc((Math.random()*20)+1);
let score = 20;
let highScore = 0;


btnCheck.addEventListener("click" , function(){

    let guessValue = Number(guessInput.value);


    // when guess value is less than 0 , greater than 20 and equal to 0.
    if(!guessValue || guessValue < 0 || guessValue > 20){
        message.textContent = "⛔Input value must be between 1-20!"



    // when the guess value and secret number is equal to each other
    } else if(guessValue === secretNumber){

        message.textContent = "🏆 Correct Number!";
        correctNumber.textContent = guessValue;

        document.querySelector('body').style.backgroundColor = "#60b347";
        correctNumber.style.width = "30rem";

        highScore = score > highScore? score : highScore;
        currentHighScore.textContent = `${highScore}`;

    // When guess value is greater than secretNumber

    }else if(guessValue > secretNumber){
        if(score > 1){
        message.textContent = "🤷 Too High!";
        score--;
        currentScore.textContent = `${score}`;
        }else{
             message.textContent = "You lost the game.";
             currentScore.textContent = 0;
        }

    
    // when guess value is less than secretNumber

    }else if(guessValue < secretNumber){
        if(score > 1){
        message.textContent = "🤷 Too Low!";
        score--;
        currentScore.textContent = `${score}`;
        }else{
            message.textContent = "You lost the game.";
            currentScore.textContent = 0;
        }
    }
})

againCheck.addEventListener("click", function(){

    score = 20; 
    secretNumber = Math.trunc((Math.random()*20)+1);

    correctNumber.textContent = "?";
    message.textContent = "Start guessing...";
    currentScore.textContent = `${score}`;
    guessInput.value = '';

    document.querySelector('body').style.backgroundColor = "#222";
    correctNumber.style.width = "15rem";

})