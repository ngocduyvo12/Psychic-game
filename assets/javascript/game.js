// Letters array
var randomLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Global variables
var wins = 0;
var loses = 0;
var guessesLeft = 10; //Remaining tries
var yourGuesses = document.getElementById("yourguesses");
var guessesLeftText = document.getElementById("guessesleft");
var winText = document.getElementById("wins");
var loseText = document.getElementById("loses");

//get random letter from array:
var computerGuess = randomLetters[Math.floor(Math.random() * randomLetters.length)];

document.onkeyup = function (event) {

    //Determine which key was pressed
    var userGuess = event.key;
    //console.log(userGuess); //debug
    //display user guessed letters
    var guessedLetter = document.createElement("span")
    guessedLetter.textContent = " " + userGuess;
    yourGuesses.appendChild(guessedLetter);

    //Compare userguess and computerguess to determine the outcome:
    // win condition. Make sure all letter cases are accepted.
    if (userGuess.toUpperCase() === computerGuess) {
        //update win count:
        wins++;
        //clear guessed letter:
        $("#yourguesses").empty();
        //update win counts to html:
        winText.textContent = wins;
        //reset guessesleft counts:
        guessesLeft = 10;
        //randomize letter:
        computerGuess = randomLetters[Math.floor(Math.random() * randomLetters.length)];
    }

    // lose condition:
    else {
        //reduce guesses remaining:
        guessesLeft--;
        // update guesses remaining to html
        guessesLeftText.textContent = guessesLeft;
    }

    // updating lose count:
    if (guessesLeft === 0) {
        //update lose count:
        loses++;
        //clear guessed letters;
        $("#yourguesses").empty();
        //update lose count to html:
        loseText.textContent = loses;
        //reset guesses left counts:
        guessesLeft = 10;
        //randomize letter:
        computerGuess = randomLetters[Math.floor(Math.random() * randomLetters.length)];
    }


}