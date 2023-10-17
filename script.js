const choices = ["rock", "paper", "scissors"];

document.getElementById("game").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        playGame(e.target.id);
    }
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getWinner(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
}

function getWinner(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You chose ${player}. Computer chose ${computer}.<br>${result}`;
}