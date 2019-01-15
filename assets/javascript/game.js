alert (`Welcome to the Psychic Game!

I'm guessing a letter in alphabet...
Can you guess what it is?

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
var playAgain;
var newNum;

document.onkeyup = function(){
    if (letterToGuess == event.key){
        wins++;
        document.querySelector('#wins').innerText = "Wins: " + wins;
        guessesLeft = 9;
        document.querySelector('#tries').innerText = "Guesses Left: " + guessesLeft;
        lettersGuessed = [""];
        document.querySelector('#letters').innerText = "Letters Guessed: ";
        playAgain = prompt("You win! The letter was " + letterToGuess + ". Do you want to play again? Enter y for yes! Otherwise, exit the window.")
        if (playAgain = "y"){
            newNum = Math.floor(Math.random()*lettersArr.length);
            letterToGuess = lettersArr[newNum];
        }        
    } else {
        lettersGuessed.push(event.key);
        document.querySelector('#letters').innerText = "Letters Guessed: " + lettersGuessed.toString().substr(1);
        guessesLeft--;
        document.querySelector('#tries').innerText = "Guesses Left: " + guessesLeft;
        if (guessesLeft < 1){
            losses++;
            document.querySelector('#losses').innerText = "Losses: " + losses;
            guessesLeft = 9;
            document.querySelector('#tries').innerText = "Guesses Left: " + guessesLeft;
            lettersGuessed = [""];
            document.querySelector('#letters').innerText = "Letters Guessed: ";
            playAgain = prompt('The letter was ' + letterToGuess + '! You lose! Do you want to play again? Enter y for yes. Otherwise, exit the window.');
            if (playAgain = "y"){
                newNum = Math.floor(Math.random()*lettersArr.length);
                letterToGuess = lettersArr[newNum];
            }
        }
    }
}
