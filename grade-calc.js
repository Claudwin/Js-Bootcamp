let studentGrade = function (score, totalPossible) {
let grade = score / totalPossible * 100
letterGrade = ''
if (grade >= 90 && grade <= 100) {
    letterGrade = 'A'
} else if (grade >= 80 && grade <= 89) {
    letterGrade = 'B'
} else if (grade >= 70 && grade <= 79) {
    letterGrade = 'C'
} else if (grade >= 60 && grade <= 69) {
    letterGrade = 'D'
} else if (grade >= 0 && grade <= 59) {
    letterGrade = 'F'
}
return `you got a ${letterGrade} (${grade}%)!`
}

let printGrade = studentGrade(5, 20)
console.log(printGrade)