const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.like= likes
}

Person.prototype.getBio = function() {
    bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => { 
        bio += ` ${this.firstName} likes ${like}`
    });
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = name[0]
    this.lastName = name[1] 
}
const me = new Person('Andrew', 'Mead', 27, [workngout, coding])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())