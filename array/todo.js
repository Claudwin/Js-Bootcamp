const todos = [{
    text: 'change oil',
    completed: false
},{
    text: 'Study',
    completed: true
}, {
    text: 'feed baby',
    completed: true
}, {
    text: 'have dinner',
    completed: false
}];

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'have dinner')
console.log(todos)