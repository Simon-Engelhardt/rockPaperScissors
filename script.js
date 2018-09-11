function computerSelection() {
    let random = Math.floor(Math.random() * Math.floor(3));
    switch (random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissor";
            break;
        case 2:
            return "paper";
            break;
    }
}

function playerSelection() {
    let input = window.prompt("Scissor, Paper, or Rock");
    input = input.toLowerCase()
    if (input == "scissor" || input == "paper" || input == "rock") {
        return input
    } else {
        playerSelection();
    }
}

function game() {
    let score = 0;
    let counter = 0;
    let win;

    function playRound(playerSelection, computerSelection) {
        //if tie
        if (playerSelection == computerSelection) {
            win = 0;
            return `Tie, computer chose ${computerSelection}`;
        }
        //if Player chooses Rock and no tie
        else if (playerSelection == "rock" && computerSelection == "scissor") {
            win = 1;
            return "You Win! Rock beats Scissor";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            win = 0;
            return "You Lose! Paper beats Rock";
        }
        //if Player chooses Scissor and no tie
        else if (playerSelection == "scissor" && computerSelection == "rock") {
            win = 0;
            return "You Lose! Rock beats Scissor";
        } else if (playerSelection == "scissor" && computerSelection == "paper") {
            win = 1;
            return "You Win! Scissor beats Paper";
        }
        //if Player chooses Paper and no tie
        else if (playerSelection == "paper" && computerSelection == "rock") {
            win = 1;
            return "You Win! Paper beats Rock";
        } else if (playerSelection == "paper" && computerSelection == "scissor") {
            win = 0;
            return "You Lose! Scissor beats Paper";
        } else {
            console.log("Please enter valid data");
            playRound(playerSelection(), computerSelection());
        }
    }
    while (true) {
        let oneRound = playRound(playerSelection(), computerSelection())
        console.log(oneRound);
        if (win == 1) {
            score = score + 1;
        }
        counter++;
        if (counter > 4) {
            break;
        }
    }
    console.log(`You scored ${score} points.`);
}