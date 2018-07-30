class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        const completed = this.word.every((letter) => this.guessedLetters.includes(letter))
    
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (completed) {
            this.status = 'completed'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses Left: ${game1.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `You failed the word your is "${this.word.join('')}".`
        } else {
            return `Great work you solved the word`
        }
    }
    getPuzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
                
            }
        })
    
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (this.status !== 'playing') {
            return
        } 
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.getStatus()
    }
}
