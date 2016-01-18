////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
    if (move === true) {
        return move;
    }
        return getInput();
}
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    

function getComputerMove(move) {
    
    if (move === true) {
        return move;
    }
        return getComputerMove();
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (computerMove===playerMove) {
        winner="tie";
    } 

    else if (computerMove==="rock" && playerMove==="scissors") {
        winner="computer";    
    } 

    else if (computerMove==="paper" && playerMove==="rock") {
        winner="computer";      
    } 

    else if (computerMove==="scissors" && playerMove==="paper") {
        winner="computer";     
    }

    else if (playerMove==="rock" && computerMove==="scissors") {
        winner="player";     
    }

    else if (playerMove==="paper" && computerMove==="rock") {
        winner="player";   
    }

    else if (playerMove==="scissors" && computerMove==="paper") {
        winner="player";   
    }

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    else {
      return winner;
    }  
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (computerWins < 5 && playerWins < 5) {
        var winner = getWinner(getPlayerMove(), getComputerMove());
        var message = "The game is in play...";

    if (winner === "computer") {
        message = "The COMPUTER won!";
        computerWins +=1;
    } else if (winner=== "player") {
        message = "YOU won!";
        playerWins +=1;
    } else
       message = "That was a tie. Better luck next tie-m";
    }

    console.log("The score so far is, Computer: ") + computerWins + "and you: " + playerWins;


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
}

playToFive();

