    $(document).ready(function() {
        //list of words that will be randomly selected from
        var wordBank = 
        [
            "circumference", 
            "proportionality", 
            "diameter", 
            "equation", 
            "expression", 
            "variable", 
            "ratio", 
            "probability", 
            "statistics", 
            "eleventeen", 
            "formula",
        ];

        //declares variable blankSpaces as array
        var blankSpaces = [];
        var remainingLetters;
        var guessesRemaining;
        var winTotal = 0;

        //defines function for choosing word
        function wordChoice() {
            userGuess = [];
            var checkIfGuessed = [];
            var showWrongGuesses = [];
            //randomly selects word from wordBank array
            var wordChosen = wordBank[Math.floor(Math.random() * wordBank.length)];
            //shows randomly selected word in console
            console.log(wordChosen);
            //draws blank spaces according to length of rnadomly selected word
            for (var i = 0; i < wordChosen.length; i++) {
                blankSpaces[i] = "_";
            }
            //stores a value for how many guesses user has left
            guessesRemaining = wordChosen.length + 6;
            //stores a value for how many letters use has left to guess
            remainingLetters = wordChosen.length;  
            //shows blank spaces on page
            document.getElementById("currentWord").innerHTML = blankSpaces.join(" ");
            //shows number of remaining guesses on page
            document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
            document.getElementById("totalWins").innerHTML = winTotal;
            //defines function for what happens when user presses a key
            document.onkeyup = function(event) {
                //reduces guesses by one each time a key is pressed
                guessesRemaining--;
                //determines which key was pressed
                var userGuess = event.key;
                //writes guessed letters on page
                showWrongGuesses.unshift(" " + userGuess);
                // showWrongGuesses.join(" ");
                if (checkIfGuessed.includes(userGuess)) {
                    alert("You've guessed that letter already.")
                } else {
                //loops through the word as an array to check if user guess matches, then updates the blank spaces with user guess at that index number
        //    while (remainingLetters > 0) {
                for (var j = 0; j < wordChosen.length; j++) {
                if (wordChosen[j] === userGuess) {
                blankSpaces[j] = userGuess;
                remainingLetters--;
                // break;
                } else {
                    // alert("letter is not in word");
                // break;
                }
                }
                checkIfGuessed.push(userGuess);

                if (remainingLetters === 0 && guessesRemaining >= 0) {
                    winTotal += 1;
                    alert("Nice Work! Your word was: " + wordChosen);
                    checkIfGuessed = [];
                    showWrongGuesses = [];
                    blankSpaces = [];
                    wordChoice();
                } else if (guessesRemaining === 0 && remainingLetters > 0) {
                    alert("Sorry, you've lost. Your word was: " + wordChosen);
                    checkIfGuessed = [];
                    showWrongGuesses = [];
                    blankSpaces = [];
                    wordChoice();
                }
            }
            // }
            //shows updated blank spaces, filled in with correctly guessed letters
            document.getElementById("currentWord").innerHTML = blankSpaces.join(" ");
            //updates number of remaining guesses
            document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
            //shows number of remaining guesses in console
            document.getElementById("guessedLetters").innerHTML = showWrongGuesses;
            document.getElementById("totalWins").innerHTML = winTotal;
            console.log(remainingLetters);
            console.log("Gueses Remaining:" + guessesRemaining);
            console.log("Check if guessed:" + checkIfGuessed);
            console.log("total wins:" + winTotal);
            };

        };
        //calls function wordChoice
        wordChoice();

    
    });





// $(
// //     function drawBlankSpaces() {
// //         for (var i = 0; i < wordChosen.length; i++) {
// //             document.write("_ ");
// //         }
// //         var spaces = wordChosen.split("");
// //         document.getElementById("demo").innerHTML = spaces;
// //     }

// //     for (var i = 0; i < wordChosen.length; i++) {
// //         blankSpaces[i] = "_";
// //         }    
        
// //     while (lettersLeft > 0) {
// //         document.onkeyup = function(event) {
// //             var guess = event.key;
        
// //         if (guess === null) {
// //             break;
// //         } else if (guess.length !==1) {
// //             alert("Please enter only 1 letter at a time.")
// //         } else {
// //             for (var j = 0; j < wordChosen.length; j++) {
// //                 if (wordChosen[j] === guess) {
// //                     blankSpaces[j] = guess;
// //                     lettersLeft--;
// //                 }
// //             }

// //         }
// //     }};

// //     console.log(wordChosen);
// //     console.log(blankSpaces);

// //     wordChoice();
// //     blankSpaces.join();
// //     drawBlankSpaces();
// // 
// });

