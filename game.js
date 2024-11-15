// Initial Scores
let userScore = 0;
let computerScore = 0;

// Function to generate computer's move
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "🤝 It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return `🎉 You win! ${userChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `💔 You lose! ${computerChoice} beats ${userChoice}`;
    }
}

// Function to play a round of the game
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);

    // Display result
    document.getElementById('result-message').textContent = resultMessage;
    document.getElementById('score').textContent = `Your Score: ${userScore} | Computer's Score: ${computerScore}`;

    // Hide choice buttons and show restart button if score reaches 5
    if (userScore >= 5 || computerScore >= 5) {
        document.getElementById('user-choice').style.display = 'none';
        document.getElementById('restart-btn').style.display = 'inline-block';

        const finalMessage =
            userScore >= 5 ? "🏆 Congratulations! You are the champion!" : "💻 The computer wins this time!";
        document.getElementById('result-message').textContent = finalMessage;
    }
}

// Function to restart the game
function restartGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById('user-choice').style.display = 'flex';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('result-message').textContent = '';
    document.getElementById('score').textContent = `Your Score: 0 | Computer's Score: 0`;
}
