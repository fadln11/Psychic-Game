
// Possible letters
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var userLetters = [];

// Psychic Game
document.onkeyup = function (event) {

  var playerGuess = event.key;
  var computerGuess = letterOptions[Math.floor(
    Math.random() * letterOptions.length)];

    // Play game if player guess is in letterOptions
    if (letterOptions.indexOf(playerGuess) > -1) {
      // Win condition
      if ((playerGuess === computerGuess) && (numGuesses > 0)) {
        wins++;
        numGuesses = 9;
        userLetters = [];
        }
      // Wrong guess
      else if ((playerGuess != computerGuess) && (numGuesses > 0)) {
        numGuesses--;
        userLetters.push(playerGuess);
        }

      // Lose condition
      if (numGuesses === 0) {
        losses++;
        numGuesses = 9;
        userLetters = [];
        }

      var html =
              "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses Left: " + numGuesses + "</p>" +
              "<p>Your Guesses so far: " + userLetters.join(", ") + "</p>";

      document.querySelector("#game").innerHTML = html;
    }
    else {
      alert("Please select only letter from a to z.")
    }
};
