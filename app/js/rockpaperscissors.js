////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return var playerMove;
    playerMove = playerMove || 'getInput()';

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return var computerMove;
    computerMove = computerMove || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playermove === 'rock' || computerMove === 'scissors') {
        winner = 'player';
    } else if (playermove === 'scissors' || computerMove === 'paper') {
        winner = 'player';
    } else if (playerMove === 'paper' || computerMove === 'rock') {
        winner = 'player';
    } else if (computerMove === 'rock' || playermove === 'scissors') {
        winner = 'computer';
    } else if (computerMove === 'scissors' || playermove === 'paper') {
        winner = 'computer';
    } else if (computerMove === 'paper' || playermove === 'rock') {
        winner = 'computer';
    } else {
        winner = 'invalid input';
    }
}
    return winner;

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        var roundWinner = getWinner(getPlayerMove,getComputerMove);
            if (roundWinner === 'player') {
                playerWins ++;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log('Player wins');
            } 
            else if (roundWinner === 'computer') {
                computerWins ++;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log('Computer wins');
            } 
            else (roundWinner === 'tie') {
                playerWins++;
                computerWins++;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log("It's a tie");
            } 
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }    
return [playerWins, computerWins];
}



