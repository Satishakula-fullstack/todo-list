
const todos = [];

function addTodo(text) {
    todos.push(text);
    renderTodos();
}

function renderTodos() {
    console.log(todos);
}
