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

    var blankSpaces = []; //shows spaces for word being guessed
    // var lettersLeft = wordChosen.length; //tracks progress toward end of game
    // var guessesLeft = wordChosen.length + 5; //number of guesses remaining
    var wins = 0;
    var wordChosen;
    var showWord;

    function wordChoice() {
        var wordChosen = wordBank[Math.floor(Math.random() * wordBank.length)];
        // typeof(wordChosen) === "string";
        // document.getElementById("#currentWord").wordChosen;
        document.write(wordChosen);
        console.log(wordChosen);
        wordChosen = document.getElementById("currentWord");
    }

    wordChoice();

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
});

