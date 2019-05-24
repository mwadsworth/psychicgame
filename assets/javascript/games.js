//VARIABLES
//==========================================

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chosenLetters = [];
var letter = null;
var wins = 0;
var losses = 0;
var guesses = 8;
var userChoice;

//FUNCTIONS
//======================================

guesses = 8;
randLetter();

//document.getElementById("guessesLeft").innerHTML = guesses;

function randLetter() {

    letter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("RANDOM LETTER: " + letter);
}

function reset() {
    guesses = 8;
    chosenLetters = [];
    randLetter();
}
function updateChosenLetters() {
    var lettersGuessed = document.getElementById("lettersGuessed");
    lettersGuessed.innerHTML = lettersGuessed.innerHTML + " " + userChoice;
}

// update html function
//reset function / if statement
//MAIN PROCESS
//===================================

document.onkeyup = function (event) {
    userChoice = event.key.toLowerCase();
    //alert(userChoice);
    chosenLetters.push(userChoice)
    console.log("CHOSEN LETTER: " + chosenLetters);

    updateChosenLetters()
    guesses = guesses - 1;
    var guessesLeft = document.getElementById("guessesLeft");
    guessesLeft.innerHTML = guesses;

    if (userChoice === letter) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        reset();
    }
    else if (userChoice != letter) {
        if (guesses <= 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            reset();
        }
    }
}
