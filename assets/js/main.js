const roundsChoice = document.getElementById("roundsChoice")
const custom = document.getElementById("custom")
const roundCustom = document.getElementById("roundCustom")
const rounds = document.getElementById("rounds")
const inputNumber = document.getElementById("inputNumber")
const result = document.getElementById("result")
let randamNum = Math.ceil(Math.random() * 100)
let maxRound = 0
let count = 1
let end = false

function roundsView() {
    if (custom.checked) {
        roundCustom.style.display = "block"
    } else {
        roundCustom.style.display = "none"
    }
}

function guess() {
    if (inputNumber.value == "" || end == true) {
        return
    }
    if (roundsChoice.style.display != "none") {
        roundsChoice.style.display = "none"
        if (roundsChoice.round.value == "custom") {
            if (roundCustom.value == "") {
                maxRound = Math.ceil(Math.random() * 30) + 4
            } else {
                maxRound = roundCustom.value
            }
        } else {
            maxRound = roundsChoice.round.value
        }
    }
    if (count > maxRound) {
        return
    }
    rounds.innerHTML = `${count} / ${maxRound}`
    if (inputNumber.value == randamNum) {
        result.innerHTML += `${count}- <span class="gameClear">Yes!! You got me in ${count} guesses. I'm ${randamNum}! You win!!</span><br><a onclick="window.location.reload();"><u>Play again</u></a><br>`
        end = true
        return
    } else if (inputNumber.value < randamNum) {
        result.innerHTML += `${count}- You need to guess higher than ${inputNumber.value}, try again..<br>`
    } else {
        result.innerHTML += `${count}- You need to guess lower than ${inputNumber.value}, try again..<br>`
    }
    if (count == maxRound) {
        result.innerHTML += `<span class="gameOver">game over! I'm ${randamNum}!!</span><br><a onclick="window.location.reload();"><u>Play again</u></a>`
    }
    count++
}
