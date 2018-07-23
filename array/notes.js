const notes = [{},{
    title: 'My nest trip',
    body: 'I want to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating better'
}, {
    title: 'Office modification',
    body: 'new chair'
}];

const findNote = function(notes, noteTitle) {
    return notes.find(function (notes, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

const note = findNote(notes, 'office modification')
console.log(note)