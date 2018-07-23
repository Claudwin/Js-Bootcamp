let min = 1
let max = 5

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

let makeGuess = function (guess) {
    return guess === randomNum
}
console.log(makeGuess(3))