
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

getPuzzle('3').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCountryDetails('NA').then((country) => {
    console.log(`Country Name: ${country.name}`)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getLocation().then((data) => {
    return getCountryDetails(data.country)
}).then((country) => {
    console.log(country.name)
})