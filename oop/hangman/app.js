
const game1 = new Hangman('Cat', 2)

const puzzleEl = document.querySelector('#puzzle')
puzzleEl.textContent = game1.getPuzzle()

const guessEl = document.querySelector('#guess')
guessEl.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessEl.textContent = game1.getStatusMessage()
    
})