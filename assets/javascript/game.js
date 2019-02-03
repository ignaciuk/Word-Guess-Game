    $(document).ready(function() {
        var wordBank = 
        [
            "calvin", 
            "hobbes", 
            "susie", 
            "rosalyn", 
            "wormwood", 
            "moe", 
            "spacemanspiff", 
            "watterson", 
            "transmogrifier", 
            "eleventeen", 
            "calvinball",
        ];
        var blankSpaces = [];
        var spaces;
        var userGuess;
        var wordChosen;
        var remaininLetters;
        var wrongGuess = [];

        function wordChoice() {
            var wordChosen = wordBank[Math.floor(Math.random() * wordBank.length)];
            console.log(wordChosen);
            for (var i = 0; i < wordChosen.length; i++) {
                blankSpaces[i] = "_";
            }
            // blankSpaces.split("");
            var guessesRemaining = wordChosen.length + 8;
            remainingLetters = wordChosen.length;
           
            document.getElementById("currentWord").innerHTML = blankSpaces.join(" ");
           
            document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
           
            document.onkeyup = function(event) {
                guessesRemaining--;

                // Determines which key was pressed.
                var userGuess = event.key;
            
            for (var j = 0; j < wordChosen.length; j++) {
                if (wordChosen[j] === userGuess) {
                blankSpaces[j] = userGuess;
                remainingLetters--;
                } else if (wordChosen[j] !== userGuess) {
                    wrongGuess = userGuess;
                    // wrongGuess.unshift();
                    document.getElementById("guessedLetters").innerHTML = wrongGuess;
                }
                }
                
            document.getElementById("currentWord").innerHTML = blankSpaces.join(" ");
            document.getElementById("remainingGuesses").innerHTML = guessesRemaining;

            }

        }

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

