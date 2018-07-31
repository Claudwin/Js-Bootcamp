
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



const countryCode = 'CA'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.status === 200 && e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
        } else if (e.target.readyState === 4) {
                    console.log('An error has occured')
                }
     
})
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


