alert (`Welcome to the Psychic Game!

You have 9 guesses to guess the letter I'm thinking of.
You can guess any letter in the alphabet.
You cannot guess the same letter twice.
If you guess correctly, you win!
If don't guess within 9 tries, you lose...

Good Luck.`)

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [""];
var lettersArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ranNum = Math.floor(Math.random()*lettersArr.length);
var letterToGuess = lettersArr[ranNum];

document.onkeyup = function(){
    if (letterToGuess.includes(event.key)){
        wins++;
        document.querySelector('#wins').innerText = "Wins: " + wins;
    } else {
        guessesLeft--;
        document.querySelector('#tries').innerText = "Guesses Left: " + guessesLeft;
    }
}
