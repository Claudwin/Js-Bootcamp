
const game1 = new Hangman('Cat', 2)

const puzzleEl = document.querySelector('#puzzle')
puzzleEl.textContent = game1.puzzle

const guessEl = document.querySelector('#guess')
guessEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
    
})