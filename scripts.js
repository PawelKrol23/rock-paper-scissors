let player_score = 0
let computer_score = 0
let result_text = "Choose Your weapon to start the game!"
let game_ended = false
const arrayOfChoices = ["Rock", "Paper", "Scissors"]

const player_score_div = document.querySelector("#player-score-card .score-display")
const computer_score_div = document.querySelector("#computer-score-card .score-display")
const result_div = document.querySelector(".results")

player_score_div.innerText = player_score
computer_score_div.innerText = computer_score
result_div.innerText = result_text

function randChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(computer_choice, player_choice) {
    if(game_ended) {
        return;
    }

    const computer_choice_text = arrayOfChoices[computer_choice]
    const player_choice_text = arrayOfChoices[player_choice]
    
    if(computer_choice === player_choice) {
        result_text = `Your Choice: ${player_choice_text}\n Computer Choice: ${computer_choice_text}\nTie!`
    }

    if(computer_choice === (player_choice + 3 - 1)%3) {
        result_text = `Your Choice: ${player_choice_text}\n Computer Choice: ${computer_choice_text}\nYou won!`
        player_score += 1;
    }

    if(computer_choice === (player_choice + 3 + 1)%3) {
        result_text = `Your Choice: ${player_choice_text}\n Computer Choice: ${computer_choice_text}\nYou Lost!`
        computer_score += 1;
    }

    if(computer_score === 5 || player_score === 5) {
        if(player_score === 5) {
            result_text = `You won the game!`
            document.querySelector(".results").style.color = "green"
        }

        if(computer_score === 5) {
            result_text = `You lost the game!`
            document.querySelector(".results").style.color = "red"
        }
        game_ended = true;
    }

    player_score_div.innerText = player_score
    computer_score_div.innerText = computer_score
    result_div.innerText = result_text
}

document.querySelector("#rock").addEventListener("click", function(){playRound(randChoice(), 0)}, false)
document.querySelector("#paper").addEventListener("click", function(){playRound(randChoice(), 1)}, false)
document.querySelector("#scissors").addEventListener("click", function(){playRound(randChoice(), 2)}, false)

function restartGame() {
    player_score = 0
    computer_score = 0
    result_text = "Choose Your weapon to start the game!"
    game_ended = false

    player_score_div.innerText = player_score
    computer_score_div.innerText = computer_score
    result_div.innerText = result_text

    document.querySelector(".results").style.color = "black"
}

document.querySelector("#restart").addEventListener("click", restartGame, false)