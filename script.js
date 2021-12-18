const body = document.querySelector("body")
let XorO = true

function createTitle() {
    const title = document.createElement("h1")
    title.classList.add("title")
    title.innerText = "JOGO DA VELHA"
    body.appendChild(title)
}

function player() {
    const player = document.createElement("h2")
    player.classList.add("player")
    player.innerText = "Agora é a vez do jogador X"
    body.appendChild(player)
}

function repeat() {
    const divRepeat = document.createElement("div")
    divRepeat.classList.add("divRepeat")
    const repeat = document.createElement("h4")
    repeat.classList.add("repeat")
    divRepeat.appendChild(repeat)
    body.appendChild(divRepeat)
}

function winnerDeclaration() {
    const divWinner = document.createElement("div")
    divWinner.classList.add("divWinner")
    const winner = document.createElement("h3")
    winner.classList.add("winner")
    divWinner.appendChild(winner)
    body.appendChild(divWinner)
}

function createSquares() {
    const squaresSection = document.createElement("section")
    squaresSection.classList.add("squaresSection")
    const squares = []
    for (let index = 0; index < 9; index++) {
        squares.push(document.createElement("div"))
        squares[index].classList.add("squares")
        squaresSection.appendChild(squares[index])
    }
    body.appendChild(squaresSection)
}

function createResetButton(params) {
    const resetButton = document.createElement("button")
    resetButton.classList.add("resetButton")
    resetButton.innerText = "RESET GAME"
    body.appendChild(resetButton)
}

function createElements() {
    createTitle()
    player()
    repeat()
    createSquares()
    winnerDeclaration()
    createResetButton()
}

function clickGame() {
    const player = document.getElementsByClassName("player")[0]
    const repeat = document.getElementsByClassName("repeat")[0]
    const winner = document.getElementsByClassName("winner")[0]
    const squares = document.getElementsByClassName("squares")
    for (let index = 0; index < squares.length; index++) {
        squares[index].addEventListener("click", function () {
            if(!winnerVerification(squares)){
                if (verificationVazio(squares[index])) {
                    if (XorO === true) {
                        squares[index].innerText = "X"
                        XorO = false
                        player.innerText = "Agora é a vez do jogador O"
                    } else {
                        squares[index].innerText = "O"
                        XorO = true
                        player.innerText = "Agora é a vez do jogador X"
                    }
                    repeat.innerText = ""
                    if(winnerVerification(squares)){
                        !XorO ? winner.innerText = "O vencedor é X" : winner.innerText = "O vencedor é O"
                    }
                } else {
                    repeat.innerText = "Ja foi"
                }
            }
        })
    }
}

function verificationVazio(square) {
    if (square.textContent == "") {
        return true
    } else {
        return false
    }
}

function winnerVerification(squares) {
    let turn = "X"
    for (let index = 1; index <= 2; index++) {
        if (index == 2) {
            turn = "O"
        }
        if (
            (squares[0].textContent == turn && squares[3].textContent == turn && squares[6].textContent == turn) ||
            (squares[1].textContent == turn && squares[4].textContent == turn && squares[7].textContent == turn) ||
            (squares[2].textContent == turn && squares[5].textContent == turn && squares[8].textContent == turn) ||
            (squares[0].textContent == turn && squares[1].textContent == turn && squares[2].textContent == turn) ||
            (squares[3].textContent == turn && squares[4].textContent == turn && squares[5].textContent == turn) ||
            (squares[6].textContent == turn && squares[7].textContent == turn && squares[8].textContent == turn) ||
            (squares[0].textContent == turn && squares[4].textContent == turn && squares[8].textContent == turn) ||
            (squares[2].textContent == turn && squares[4].textContent == turn && squares[6].textContent == turn)            
        ) {
            return true
        }
    }
    return false
}

function reset() {
    const resetButton = document.querySelector("button")
    const player = document.getElementsByClassName("player")[0]
    const repeat = document.getElementsByClassName("repeat")[0]
    const winner = document.getElementsByClassName("winner")[0]
    const squares = document.getElementsByClassName("squares")
    resetButton.addEventListener("click", function () {
        player.innerText = "Agora é a vez do jogador X"
        winner.innerText = ""
        repeat.innerText = ""
        for (let index = 0; index < squares.length; index++) {
            squares[index].innerText = ""
        }
    })
}


createElements()
clickGame()
reset()
