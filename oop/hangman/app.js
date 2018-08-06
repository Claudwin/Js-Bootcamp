
const game1 = new Hangman('LeBron James', 3)

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






getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


getCountryDetails('NA', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country Name: ${country.name}`)
    }
})
