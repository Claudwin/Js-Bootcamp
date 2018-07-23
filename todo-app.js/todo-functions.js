//Read excisiting notes from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}
//Remove Todo

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todos.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Toggle Todos true or false 
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
        if (todo !== undefined) {
            todo.completed = !todo.completed
        }
    }

//Generate the DOM structure for a todo
const generateTodoDom = function (todo) {
    const todoDiv = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoEl = document.createElement('span')
    const button = document.createElement('button')
    button.addEventListener('click' , function () {
        removeTodo(todos.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    checkbox.addEventListener('change' , function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    //Setup checkbox Element
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoDiv.appendChild(checkbox)

    if (todo.text.length > 0) {
        todoEl.textContent = todo.text
    } else {
        todoEl.textContent = 'untitled todo'
    }
    
    todoDiv.appendChild(todoEl)
     //Setup Remove todo button
     button.textContent = 'remove'
     todoDiv.appendChild(button)
        return todoDiv
        
}

//Render Application Todo
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = '' 
        document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        const p = generateTodoDom(todo)
    document.querySelector('#todos').appendChild(p)
    })
}

//Save todo to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}