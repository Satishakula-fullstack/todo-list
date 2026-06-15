const todos = [];

function addTodo(text) {
  todos.push(text);
  renderTodos();
}

function renderTodos() {
  console.log(todos);
}
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
function clearTodos() {
  todos.length = 0;
  renderTodos();
}
