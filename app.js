let getTip = function (total, percent = .2) {
let tipPercent = percent * 100
let tip = total * percent
return `A ${tipPercent}% tip on $${total} would be $${tip} `
}

let tip = getTip(30)
console.log(tip)